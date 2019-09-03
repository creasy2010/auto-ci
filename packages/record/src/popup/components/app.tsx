/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/

import * as React from 'react';
import { Base64 } from 'js-base64';
import HelpTab from './help-tab';
import RecordingTab from './recording-tab';
import ResultsTab from './results-tab';
import CodeGenerator from '../../code-generator/CodeGenerator';
import actions from '../../models/extension-ui-actions';
import './app.less';
import GitRepoUtil from "../../util/git-repo-util";

interface IAppP {
  [name: string]: any;
}

interface IAppS {
  code: string;
  options: any;
  //是否显示结果页;
  showResultsTab: boolean;
  showHelp: boolean;
  liveEvents: any[];
  recording: any[];
  isRecording: boolean;
  isPaused: boolean;
  isCopying: boolean;
  bus: any;
  version: string;
  userCaseInfo?:{
    project:string;
    scene:string;
    name?:string;
  };
  [name: string]: any;
}



export default class App extends React.Component<IAppP, IAppS> {
  static defaultProps = {};

  bus: any;
  //@ts-ignore
  $chrome: any = window.chrome;
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      options: {},
      showResultsTab: false,
      showHelp: false,
      liveEvents: [],
      recording: [],
      isRecording: false,
      isPaused: false,
      userCaseInfo:{
        project:"supplier",
        scene:"use-case",
        name:"xxxx",
      },
      isCopying: false,
      bus: null,
      version: '0.0.1',
    };
  }
  gitRepoUtil = new GitRepoUtil("creasy2010","auto-ci",'ccbdecca73518a21b111111115b6ad1208fe3ddc7a3e801d='.replace('11111111',''))

  componentDidMount() {
    this.loadState(() => {
      this.trackPageView();
      if (this.state.isRecording) {
        console.debug('opened in recording state, fetching recording events');
        this.$chrome.storage.local.get(
          ['recording', 'options'],
          ({recording}) => {
            console.debug('loaded recording', recording);
            this.setState({
              liveEvents: recording || [],
            });
          },
        );
      }
    });

    this.bus = this.$chrome.extension.connect({name: 'recordControls'});

    (async()=>{
      let result = this.gitRepoUtil.getContent("packages/projects");
      console.log("库返回值::",result);
    })();
  }

  render() {
    return (
      <div id="puppeteer-recorder" className="recorder">
        <div className="header">
          <div className="left">
            {this.state.isRecording
              ? <div className="recording-badge" v-show="isRecording">
                  <span className="red-dot" />
                  {this.state.isPaused ? 'paused' : 'recording'}
                </div>
              : null}
            <a href="#" onClick={this.toggleShowHelp} className="header-button">
              <img src="/images/help.svg" alt="help" width="18px" />
            </a>
            <a href="#" onClick={this.openOptions} className="header-button">
              <img src="/images/settings.svg" alt="settings" width="18px" />
            </a>
          </div>
        </div>

        <div className="main">
          <div className="tabs">
            {this.state.isRecording
              ? <RecordingTab
                  isRecording={this.state.isRecording}
                  liveEvents={this.state.liveEvents}
                />
              : this._usecaseInfo()}
            {this.state.showResultsTab
              ? <ResultsTab code={this.state.code} />
              : null}
            {this._getControlBtns()}
          </div>
        </div>
      </div>
    );
  }

  _usecaseInfo=()=>{
    return <div>
      <div>
        项目名称:<input data-path="project" value={this.state.userCaseInfo.project} onChange={this._changeInfo}/>
      </div> <div>
        场景名称:<input data-path="scene"  value={this.state.userCaseInfo.scene}  onChange={this._changeInfo}/>
      </div> <div>
        用例名称:<input data-path="name"  value={this.state.userCaseInfo.name}  onChange={this._changeInfo}/>
      </div>
    </div>
  }

  _changeInfo=(e)=>{
    let path   = e.target.dataset.path;
   this.setState({
      userCaseInfo:{
        ...this.state.userCaseInfo,
        [path]:e.target.value
      }
    })
  }

  /**
   * 获取控制按钮;
   * @returns {any}
   * @private
   */
  _getControlBtns = () => {
    return (
      <div className="recording-footer">
        <button
          className={
            'btn btn-sm ' +
            (this.state.isRecording ? 'btn-danger' : 'btn-primary')
          }
          onClick={this.toggleRecord}
        >
          {this.state.isRecording ? '停止' : '录制'}
        </button>
        <button onClick={this.reset}>重置</button>
        <button onClick={this._upload}>上传</button>
        {this.state.isRecording
          ? <>
              <button
                className="btn btn-sm btn-primary btn-outline-primary"
                onClick={this.togglePause}
              >
                {this.state.isPaused ? '继续' : '暂停'}
              </button>
            <button>
              截屏
            </button>
            <button>
              休眠2秒
            </button>
            </>
          : null}
        {this.state.code
          ? <a href="#" onClick={this._toggleShowResult}>
              {this.state.showResultsTab ? '隐藏代码' : '显示代码'}
            </a>
          : null}
      </div>
    );
  };

  _toggleShowResult = () => {
    this.setState({showResultsTab: !this.state.showResultsTab});
  };

  /**
   * 将代码上传至服务端. ;
   * @private
   */
  _upload =async  ():Promise<void> => {
    let {project,scene,name}=this.state.userCaseInfo;
   let fileName =name+(Math.random().toString().substr(2,5))

    try{
      let response = await this.gitRepoUtil.createFile(`packages/projects/${project}/scene/${scene}/${fileName}`,
        {
          "message": "添加一个用例测试project:${project}下scene[${scene}]fileName${fileName}",
          "committer": {
            "name": "杨晓东",
            "email": "coder.yang2010@gmail.com"
          },
          "content":this.state.code
        });
      console.log(response);
      this.reset();
    }catch (e) {
     console.warn(e);
     window.alert("上传文件发生错误"+e.toString());
    }
  };

  toggleRecord = () => {
    if (this.state.isRecording) {
      this.stop();
    } else {
      this.start();
    }

    this.setState(
      {
        isRecording: !this.state.isRecording,
      },
      () => {
        this.storeState();
      },
    );
  };

  togglePause = () => {
    let _pauseStatus = true;
    if (this.state.isPaused) {
      this.bus.postMessage({action: actions.UN_PAUSE});
      _pauseStatus = false;
    } else {
      this.bus.postMessage({action: actions.PAUSE});
      _pauseStatus = true;
    }

    this.setState(
      {
        isPaused: _pauseStatus,
      },
      () => {
        this.storeState();
      },
    );
  };

  start = () => {
    // this.trackEvent('Start');
    this.cleanUp();
    console.debug('start recorder');
    this.bus.postMessage({action: actions.START});
  };

  stop = () => {
    // this.trackEvent('Stop');
    console.debug('stop recorder');
    this.bus.postMessage({action: actions.STOP});

    this.$chrome.storage.local.get(
      ['recording', 'code', 'options', 'network'],
      ({recording, options, network}) => {
        console.debug('loaded recording', recording);
        console.debug('loaded options', options);

        //TODO 这里只读即可了..
        const codeOptions = options ? options.code : {};
        const codeGen = new CodeGenerator(codeOptions);
        let code = codeGen.generate(recording, network);
        this.setState({
          isPaused: false,
          isRecording: false,

          recording,
          code,
          showResultsTab: true,
        });
        this.storeState();
      },
    );
  };

  reset = () => {
    console.log('reset');
    this.cleanUp();
    this.bus.postMessage({action: actions.CLEAN_UP});
  };

  cleanUp = () => {
    this.setState({
      recording: [],
      liveEvents: [],
      code: '',
      showResultsTab: false,
      isRecording: false,
      isPaused: false,
    });
    this.storeState();
  };

  openOptions = () => {
    // this.trackEvent('Options');
    if (this.$chrome.runtime.openOptionsPage) {
      this.$chrome.runtime.openOptionsPage();
    }
  };

  loadState = cb => {
    this.$chrome.storage.local.get(
      ['controls', 'code', 'options'],
      ({controls, code, options}) => {
        console.log(
          '加载状态信息:',
          controls,
          code,
          options,
          new Date().toLocaleString(),
        );

        let result = {};
        if (controls) {
          result = {
            ...result,
            isRecording: controls.isRecording,
            isPaused: controls.isPaused,
          };
        }

        if (code) {
          result = {
            ...result,
            code,
          };
        }

        if (options) {
          result = {
            ...result,
            options,
          };
        }
        this.setState(result);
        cb();
      },
    );
  };

  storeState = () => {
    this.$chrome.storage.local.set(
      {
        code: this.state.code,
        controls: {
          isRecording: this.state.isRecording,
          isPaused: this.state.isPaused,
        },
      },
      () => {
        console.log('state 保存成功');
        this.$chrome.storage.local.get(
          ['controls', 'code', 'options'],
          ({controls, code, options}) => {
            console.log(
              'save之后加载状态信息:',
              controls,
              code,
              options,
              new Date().toLocaleString(),
            );
          },
        );
      },
    );
  };

  setCopying = () => {
    // this.trackEvent('Copy');
    this.setState({
      isCopying: true,
    });
    setTimeout(() => {
      this.setState({
        isCopying: false,
      });
    }, 1500);
  };

  goHome = () => {
    this.setState({
      showResultsTab: false,
      showHelp: false,
    });
  };

  toggleShowHelp = () => {
    // this.trackEvent('Help');
    this.setState({
      showHelp: this.state.showHelp,
    });
  };

  trackEvent = event => {
    // if (
    //   this.state.options &&
    //   this.state.options.extension &&
    //   this.state.options.extension.telemetry
    // ) {
    //   if (window._gaq) window._gaq.push(['_trackEvent', event, 'clicked']);
    // }
  };

  trackPageView = () => {
    // if (
    //   this.options &&
    //   this.options.extension &&
    //   this.options.extension.telemetry
    // ) {
    //   if (window._gaq) window._gaq.push(['_trackPageview']);
    // }
  };
}
