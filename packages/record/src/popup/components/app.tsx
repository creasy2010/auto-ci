/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/

import * as React from 'react';
import HelpTab from './help-tab';
import RecordingTab from './recording-tab';
import ResultsTab from './results-tab';
import CodeGenerator from '../../code-generator/CodeGenerator';
import actions from '../../models/extension-ui-actions';
import './app.less';

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
      isCopying: false,
      bus: null,
      version: '0.0.1',
    };
  }

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
              liveEvents: recording||[],
            });
          },
        );
      }

      if (!this.state.isRecording && this.state.code) {
        this.setState({
          showResultsTab: true,
        });
      }
    });
    this.bus = this.$chrome.extension.connect({name: 'recordControls'});
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
            <a
              href="#"
              onClick={this.toggleShowHelp}
              className="header-button"
            >
              <img src="/images/help.svg" alt="help" width="18px" />
            </a>
            <a href="#" onClick={this.openOptions} className="header-button">
              <img src="/images/settings.svg" alt="settings" width="18px" />
            </a>
          </div>
        </div>

        <div className="main">
          <div className="tabs">
            <RecordingTab
              isRecording={this.state.isRecording}
              liveEvents={this.state.liveEvents}
            />
            <div className="recording-footer" v-show="!showResultsTab">
              <button
                className={
                  'btn btn-sm ' +
                  (this.state.isRecording ? 'btn-danger' : 'btn-primary')
                }
                onClick={this.toggleRecord}
              >
                {this.state.isRecording ? 'Stop' : 'Record'}
              </button>
              {this.state.isRecording
                ? <button
                    className="btn btn-sm btn-primary btn-outline-primary"
                    onClick={this.togglePause}
                  >
                    {this.state.isPaused ? 'Resume' : 'Pause'}
                  </button>
                : null}
              <a
                href="#"
                onClick={this._showResult}
              >
                view code
              </a>
            </div>
            <ResultsTab code={this.state.code} />
          </div>
        </div>
      </div>
    );
  }

  _showResult = () => {
    this.setState({showResultsTab: true});
  };

  toggleRecord = () => {
    if (this.state.isRecording) {
      this.stop();
    } else {
      this.start();
    }

    this.setState({
      isRecording: !this.state.isRecording,
    },()=>{
      this.storeState();
    });
  };

  togglePause = () => {

    let _pauseStatus=true;
    if (this.state.isPaused) {
      this.bus.postMessage({action: actions.UN_PAUSE});
      _pauseStatus =false;
    } else {
      this.bus.postMessage({action: actions.PAUSE});
      _pauseStatus=true;
    }

    this.setState({
      isPaused: _pauseStatus,
    },()=>{
      this.storeState();
    });
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
      ['recording', 'options', 'network'],
      ({recording, options, network}) => {
        console.debug('loaded recording', recording);
        console.debug('loaded options', options);
        debugger;
        this.setState({
          recording,
        });
        const codeOptions = options ? options.code : {};

        const codeGen = new CodeGenerator(codeOptions);
        this.setState({
          code: codeGen.generate(this.state.recording, network),
          showResultsTab: true,
        });
        this.storeState();
      },
    );
  };

  restart = () => {
    console.log('restart');
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
        console.log('加载状态信息:',controls, code, options,new Date().toLocaleString());

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
    this.$chrome.storage.local.set({
      code: this.state.code,
      controls: {
        isRecording: this.state.isRecording,
        isPaused: this.state.isPaused,
      },
    }, () => {
      console.log('state 保存成功');
      this.$chrome.storage.local.get(
        ['controls', 'code', 'options'],
        ({controls, code, options}) => {
          console.log('save之后加载状态信息:',controls, code, options,new Date().toLocaleString());

        },
      )

    });
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
