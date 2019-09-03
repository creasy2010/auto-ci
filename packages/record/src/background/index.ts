import pptrActions from '../code-generator/pptr-actions';
import ctrl from '../models/extension-control-messages';
import actions from '../models/extension-ui-actions';

//@ts-ignore
let $chrome = chrome;

class RecordingController {
  _recording = [];
  _network = {};
  _badgeState = '';
  _isPaused = false;
  _tabId = null;
  _requestRel;


  // Some events are sent double on page navigations to simplify the event recorder.
  // We keep some simple state to disregard events if needed.
  _hasGoto = false;
  _hasViewPort = false;

  _menuId = 'PUPPETEER_RECORDER_CONTEXT_MENU';
  _menuOptions = {
    SCREENSHOT: 'SCREENSHOT',
    SCREENSHOT_CLIPPED: 'SCREENSHOT_CLIPPED',
  };

  constructor() {}

  boot() {
    this.cleanUp();
    $chrome.extension.onConnect.addListener(port => {
      console.log('boot sucessfully,listeners connected');
      port.onMessage.addListener(msg => {
        console.log('backgroud: receive message: ', msg);
        if(this._tabId) {
          $chrome.tabs.sendMessage(this._tabId,msg);//事件转发一次. 到contentscript;
        }
        if (msg.action && msg.action === actions.START) {
          $chrome.browserAction.setIcon({path: './images/icon-green.png'});
          $chrome.browserAction.setBadgeText({text: this._badgeState});
          $chrome.browserAction.setBadgeBackgroundColor({color: '#FF0000'});

          let isHit = false;
          $chrome.history.onVisited.addListener(historyItem => {
            if (isHit) {
              return;
            }
            isHit = true;
            this.start();
          });
        }
        if (msg.action && msg.action === actions.STOP) this.stop();
        if (msg.action && msg.action === actions.CLEAN_UP) this.cleanUp();
        if (msg.action && msg.action === actions.PAUSE) this.pause();
        if (msg.action && msg.action === actions.UN_PAUSE) this.unPause();
      });
    });
  }

  start() {
    console.debug('start recording');
    this.cleanUp(async () => {
      this._badgeState = 'rec';

      this._hasGoto = false;
      this._hasViewPort = false;

      await this.injectScript();


      $chrome.runtime.onMessage.addListener(this.handleMessage);
      $chrome.webNavigation.onCompleted.addListener(
        this.handleNavigation,
      );
      $chrome.webNavigation.onBeforeNavigate.addListener(
        this.handleWait
      );

      // $chrome.browserAction.setIcon({ path: './images/icon-green.png' })
      // $chrome.browserAction.setBadgeText({ text: this._badgeState })
      // $chrome.browserAction.setBadgeBackgroundColor({ color: '#FF0000' })

      $chrome.tabs.query({active: true, currentWindow: true}, tab => {
        this._tabId = tab[0].id;

        this._requestRel = {};
        $chrome.debugger.attach({tabId: this._tabId}, '1.0', result => {
          $chrome.debugger.onEvent.addListener(this.handleNetwork);

          $chrome.debugger.sendCommand(
            {
              tabId: this._tabId,
            },
            'Network.enable',
          );

          // $chrome.webRequest.onCompleted.addListener( this.handleNetwork,
          //     {urls: [ "<all_urls>" ],tabId:this._tabId},['extraHeaders']
          // );
        });
      });
      // 记录请求:
      // $chrome.webRequest.onBeforeRequest.addListener(
      //     (details)=>{
      //         console.log(details);
      //     },
      //     {urls: [ "<all_urls>" ]},['blocking']
      //     );

      /**
       * Right click menu setup
       */

      $chrome.contextMenus.removeAll();

      // add the parent and its children

      $chrome.contextMenus.create({
        id: this._menuId,
        title: 'Puppeteer Recorder',
        contexts: ['all'],
      });

      $chrome.contextMenus.create({
        id: this._menuId + this._menuOptions.SCREENSHOT,
        title: 'Take Screenshot (Ctrl+Shift+A)',
        parentId: this._menuId,
        contexts: ['all'],
      });

      $chrome.contextMenus.create({
        id: this._menuId + this._menuOptions.SCREENSHOT_CLIPPED,
        title: 'Take Screenshot Clipped (Ctrl+Shift+S)',
        parentId: this._menuId,
        contexts: ['all'],
      });
      // add the handlers
      $chrome.contextMenus.onClicked.addListener(this.handleMenuInteraction);
      $chrome.commands.onCommand.addListener(this.handleKeyCommands);
    });
  }

  stop() {
    console.debug('stop recording');
    this._badgeState = this._recording.length > 0 ? '1' : '';

    $chrome.debugger.detach({tabId: this._tabId});

    $chrome.runtime.onMessage.removeListener(this.handleMessage);
    $chrome.webNavigation.onCompleted.removeListener(
      this.handleNavigation
    );
    $chrome.webNavigation.onBeforeNavigate.removeListener(
      this.handleWait
    );
    $chrome.contextMenus.onClicked.removeListener(this.handleMenuInteraction);
    $chrome.debugger.onEvent.removeListener(this.handleNetwork);
    $chrome.browserAction.setIcon({path: './images/icon-black.png'});
    $chrome.browserAction.setBadgeText({text: this._badgeState});
    $chrome.browserAction.setBadgeBackgroundColor({color: '#45C8F1'});
    this.saveRecords();
  }

  pause() {
    console.debug('pause');
    this._badgeState = '❚❚';
    $chrome.browserAction.setBadgeText({text: this._badgeState});
    this._isPaused = true;
  }

  unPause() {
    console.debug('unpause');
    this._badgeState = 'rec';
    $chrome.browserAction.setBadgeText({text: this._badgeState});
    this._isPaused = false;
  }

  cleanUp(cb?) {
    console.debug('cleanup');
    this._recording = [];
    this._network = {};
    $chrome.browserAction.setBadgeText({text: ''});
    $chrome.storage.local.remove(['recording', 'network'], () => {
      console.debug('stored recording cleared');
      if (cb) cb();
    });
  }

  recordCurrentUrl(href) {
    if (!this._hasGoto) {
      console.debug('recording goto* for:', href);
      this.handleMessage({
        selector: undefined,
        value: undefined,
        action: pptrActions.GOTO,
        href,
      });
      this._hasGoto = true;
    }
  }

  recordCurrentViewportSize(value) {
    if (!this._hasViewPort) {
      this.handleMessage({
        selector: undefined,
        value,
        action: pptrActions.VIEWPORT,
      });
      this._hasViewPort = true;
    }
  }

  recordNavigation() {
    this.handleMessage({
      selector: undefined,
      value: undefined,
      action: pptrActions.NAVIGATION,
    });
  }

  recordScreenshot(value) {
    this.handleMessage({
      selector: undefined,
      value,
      action: pptrActions.SCREENSHOT,
    });
  }

  handleNetwork = (source, method, params) => {
    if (this._isPaused) {
      return;
    }

    if (method === 'Network.requestWillBeSent') {
      let {requestId, request, type} = params;
      const IgnoreRequestTypes = ['Other', 'Image', 'Script', 'Font', 'Other'];

      if (request.method === 'OPTIONS' || IgnoreRequestTypes.includes(type)) {
        return;
      }

      if (this._requestRel[requestId]) {
        console.warn('同一个requestid发送多次:', source, method, params);
        //解决重复的问题;
        return;
      }

      let key = `${request.url}:[${request.method}]`;
      if (!this._network[key]) {
        this._network[key] = [];
      }
      let reqInfo = {
        requestId,
        request: {
          method: request.method,
          url: request.url,
        },
        response: null,
      };
      console.log('this._network[key].push', key, requestId);
      this._network[key].push(reqInfo);
      this._requestRel[requestId] = reqInfo;
    } else if (method === 'Network.responseReceived') {
      let {requestId, response: {headers, status, mimeType}} = params;

      if (this._requestRel[requestId]) {
        this._requestRel[requestId].response = {headers, status, mimeType};
      }
    } else if (method === 'Network.loadingFinished') {
      let {requestId} = params;
      if (this._requestRel[requestId]) {
        let requestInfo = this._requestRel[requestId];
        // delete this._requestRel[requestId];
        $chrome.debugger.sendCommand(
          {
            tabId: this._tabId,
          },
          'Network.getResponseBody',
          {
            requestId: requestId,
          },
          responseBody => {
            console.log(
              'Network.getResponseBody:::>',
              requestId,
              requestInfo.request.url,
              requestInfo.request.method,
              responseBody,
            );
            requestInfo.response.base64Encoded = responseBody.base64Encoded;
            requestInfo.response.body = responseBody.body;
            this.saveRecords();
          },
        );
      }
    }
  };

  handleMessage=(msg, sender?) =>{
    console.log('接收到消息:',msg,sender);
    if (msg.control) return this.handleControlMessage(msg, sender);

    // to account for clicks etc. we need to record the frameId and url to later target the frame in playback
    msg.frameId = sender ? sender.frameId : null;
    msg.frameUrl = sender ? sender.url : null;

    if (!this._isPaused) {
      this._recording.push(msg);
      this.saveRecords();
    }
  }

  _timeout = null;

  saveRecords = () => {
    if (this._timeout) {
      //如果timeout存在则
      this._timeout = clearTimeout(this._timeout);
      this.saveRecords();
    }

    this._timeout = setTimeout(() => {
      this._timeout = null;
      $chrome.storage.local.set(
        {recording: this._recording, network: this._network},
        () => {
          console.debug('stored recording updated');
        },
      );
    }, 2000);
  };

  handleControlMessage(msg, sender) {
    if (msg.control === ctrl.EVENT_RECORDER_STARTED)
      $chrome.browserAction.setBadgeText({text: this._badgeState});
    if (msg.control === ctrl.GET_VIEWPORT_SIZE)
      this.recordCurrentViewportSize(msg.coordinates);
    if (msg.control === ctrl.GET_CURRENT_URL) this.recordCurrentUrl(msg.href);
    if (msg.control === ctrl.GET_SCREENSHOT) this.recordScreenshot(msg.value);
  }

  handleNavigation=({frameId})=> {
    console.debug('frameId is:', frameId);
    this.injectScript();
    if (frameId === 0) {
      this.recordNavigation();
    }
  }

  handleMenuInteraction=(info, tab)=> {
    console.debug('context menu clicked');
    switch (info.menuItemId) {
      case this._menuId + this._menuOptions.SCREENSHOT:
        this.toggleScreenShotMode(actions.TOGGLE_SCREENSHOT_MODE);
        break;
      case this._menuId + this._menuOptions.SCREENSHOT_CLIPPED:
        this.toggleScreenShotMode(actions.TOGGLE_SCREENSHOT_CLIPPED_MODE);
        break;
    }
  }

  handleKeyCommands=(command)=> {
    switch (command) {
      case actions.TOGGLE_SCREENSHOT_MODE:
        this.toggleScreenShotMode(actions.TOGGLE_SCREENSHOT_MODE);
        break;
      case actions.TOGGLE_SCREENSHOT_CLIPPED_MODE:
        this.toggleScreenShotMode(actions.TOGGLE_SCREENSHOT_CLIPPED_MODE);
        break;
    }
  }

  toggleScreenShotMode(action) {
    console.debug('toggling screenshot mode');
    $chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      $chrome.tabs.sendMessage(tabs[0].id, {action});
    });
  }

  handleWait=()=> {
    $chrome.browserAction.setBadgeText({text: 'wait'});
  }

  async injectScript() {
    console.log('向tab页注入script代码::beg');
    await loadScript('javascript/dll/vendor.dll.js');
    await loadScript('static/js/content-bundle.js');
  }
}

console.debug('booting recording controller');

//@ts-ignore
window.recordingController = new RecordingController();

//@ts-ignore
window.recordingController.boot();


async function loadScriptsAsync(scripts:string[]):Promise<Array<Array<any>>>{

  return new Promise(async (resolve,reject)=>{

  })
}

async function loadScript(scriptPath):Promise<Array<any>>{
  return new Promise((resolve,reject)=>{
    $chrome.tabs.executeScript(
      {
        file: scriptPath,
        allFrames: true,
        runAt: 'document_end',
      },
      results => {
        resolve(results);
        console.log('加载',scriptPath,'script inject 执行结果: ', results);
      },
    );
  });
}