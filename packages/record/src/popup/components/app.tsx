/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/

import * as React from 'react';
import RecordingTab from './recording-tab';
import ResultsTab from './results-tab';
import CodeGenerator from '../../code-generator/CodeGenerator';
import actions from '../../models/extension-ui-actions';
import './app.less';
import GitRepoUtil from "../../util/git-repo-util";
import pptrActions from "../../code-generator/pptr-actions";

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
  git:{
    projects:string[],
    scene?:string[],
  }
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
        project:"",
        scene:"",
        name:"uc-",
      },
      isCopying: false,
      bus: null,
      version: '0.0.1',
      git:{
        projects:[],
        scene:[],
      }
    };
  }
  gitRepoUtil = new GitRepoUtil("creasy2010","auto-ci",'ccbdecca73518a21b5b6ad111111111208fe3ddc7a3e801d'.replace('11111111',''))

  async componentDidMount() {
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

    let result = await this.gitRepoUtil.getContent("packages/projects");
    console.log("库返回值::",result);
    this.setState({
      git:{
        ...this.state.git,
        projects:result.filter(item=>item.type==='dir').map(item=>item.name),
      }
    },async ()=>{
      if(this.state.userCaseInfo.project) {
        await this._loadGitScene();
      }
    });
  }

  componentWillUnmount(){
    this.storeState();
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

    let projectOptions = this.state.git.projects.map(item=><option value={item}>{item}</option>);
    let sceneOptions = this.state.git.scene.map(item=><option value={item}>{item}</option>);

    return <div>
      <div>
        项目名称:
        <select data-path="project" value={this.state.userCaseInfo.project} onChange={this._changeChoose}>
          <option value={""}>请选择项目</option>
          {projectOptions}
        </select>
        {/*<input data-path="project" value={this.state.userCaseInfo.project} onChange={this._changeInfo}/>*/}
      </div>
      <div>
        场景名称:
      <select  data-path="scene" value={this.state.userCaseInfo.scene}  onChange={this._changeChoose}>
        <option  value={""}>请选择场景</option>
        {
          sceneOptions
        }
      </select>
      {/*<input data-path="scene"  value={this.state.userCaseInfo.scene}  onChange={this._changeInfo}/>*/}
      </div>
      <div>
        用例名称:<input data-path="name"  value={this.state.userCaseInfo.name}  onChange={this._changeInfo}/>
      </div>
    </div>
  }

  _changeChoose=async (e)=>{
    let path   = e.target.dataset.path;
    let value = e.target.value;
    if(value) {
      if(path === 'project') {
        await this._loadGitScene(value);
      }
    }

    this.setState({
      userCaseInfo:{
        ...this.state.userCaseInfo,
        [path]:value
      }
    },()=>{
      this.storeState()
    })
  }

  _loadGitScene= async (project:string = this.state.userCaseInfo.project)=>{

    let result = await this.gitRepoUtil.getContent(`packages/projects/${project}/scene`);
    console.log("库返回值::",result);
    this.setState({
      git:{
        ...this.state.git,
        scene:result.filter(item=>item.type==='dir').map(item=>item.name)
      }
    });

  }

  _changeInfo=(e)=>{
    let path   = e.target.dataset.path;
   this.setState({
      userCaseInfo:{
        ...this.state.userCaseInfo,
        [path]:e.target.value
      }
    },()=>{
     this.storeState();
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
        {!this.state.isRecording && this.state.code &&
        <>
          <button onClick={this.reset}>重置</button>
          <button onClick={this._upload}>上传</button>
          </>
        }
        {this.state.isRecording
          ? <>
              <button
                className="btn btn-sm btn-primary btn-outline-primary"
                onClick={this.togglePause}
              >
                {this.state.isPaused ? '继续' : '暂停'}
              </button>
            <button onClick={this._sendScreenshotCodeRecord}>
              截屏
            </button>
            <button onClick={this._sendSleepCodeRecord}>
              休眠1秒
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

  _sendScreenshotCodeRecord=()=>{
    this.$chrome.runtime.sendMessage({
      action:pptrActions.SCREENSHOT,
    })
  }


  _sendSleepCodeRecord=()=>{
    this.$chrome.runtime.sendMessage({
      action:pptrActions.SlEEP,
      value:1
    })
  }

  _toggleShowResult = () => {
    this.setState({showResultsTab: !this.state.showResultsTab});
  };

  /**
   * 将代码上传至服务端. ;
   * @private
   */
  _upload =async  ():Promise<void> => {
    let {project,scene,name}=this.state.userCaseInfo;
   let fileName =name+(Math.random().toString().substr(2,5))+".js";

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
     //@ts-ignore
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
      ['controls', 'code', 'options','userCaseInfo'],
      ({controls, code, options,userCaseInfo}) => {
        console.log(
          '加载状态信息:',
          controls,
          code,
          options,
          userCaseInfo,
          new Date().toLocaleString(),
        );

        let oldState = {};
        if (controls) {
          oldState = {
            ...oldState,
            isRecording: controls.isRecording,
            isPaused: controls.isPaused,
          };
        }

        if(userCaseInfo) {
          oldState = {
            ...oldState,
            userCaseInfo
          };
        }

        if (code) {
          oldState = {
            ...oldState,
            code,
          };
        }

        if (options) {
          oldState = {
            ...oldState,
            options,
          };
        }
        this.setState(oldState);
        cb();
      },
    );
  };

  /**
   * 把状态持久化起来
   */
  storeState = () => {
    this.$chrome.storage.local.set(
      {
        code: this.state.code,
        userCaseInfo:this.state.userCaseInfo,
        controls: {
          isRecording: this.state.isRecording,
          isPaused: this.state.isPaused,
        },
      },
      () => {
        console.log('state 保存成功');
      },
    );
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
