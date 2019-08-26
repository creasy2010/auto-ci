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

interface IAppP {
  [name: string]: any;
}

interface IAppS {
  code: string;
  options: any;
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
  $chrome: any;
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
              liveEvents: recording,
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
              //          @click="toggleShowHelp"
              className="header-button"
            >
              <img src="/images/help.svg" alt="help" width="18px" />
            </a>
            <a
              href="#"
              //          @click="openOptions"
              className="header-button"
            >
              <img src="/images/settings.svg" alt="settings" width="18px" />
            </a>
          </div>
        </div>

        <div className="main">
          {this.state.showHelp
            ? <HelpTab v-show="showHelp" />
            : <div className="tabs" v-show="!showHelp">
                <RecordingTab
                //            :code="code" :is-recording="isRecording"
                //            :live-events="liveEvents" v-show="!showResultsTab"
                />
                <div className="recording-footer" v-show="!showResultsTab">
                  <button className="btn btn-sm">
                  //              @click="toggleRecord"
                  //              :className="isRecording ? 'btn-danger' : 'btn-primary'"
                    {this.state.isRecording ? 'Stop' : 'Record'}
                  </button>
                  <button className="btn btn-sm btn-primary btn-outline-primary">
                  //              @click="togglePause" v-show="isRecording"
                    {this.state.isPaused ? 'Resume' : 'Pause'}
                  </button>
                  <a href="#">
                  //      @click="showResultsTab = true" v-show="code"
                    view code
                  </a>
                </div>
                <ResultsTab />
              </div>}
        </div>
      </div>
    );
  }

  toggleRecord = () => {
    if (this.state.isRecording) {
      this.stop();
    } else {
      this.start();
    }

    this.setState({
      isRecording: !this.state.isRecording,
    });
    this.storeState();
  };
  togglePause = () => {
    if (this.state.isPaused) {
      this.bus.postMessage({action: actions.UN_PAUSE});
      this.setState({
        isPaused: false,
      });
    } else {
      this.bus.postMessage({action: actions.PAUSE});
      this.setState({
        isPaused: true,
      });
    }
    this.storeState();
  };
  start = () => {
    this.trackEvent('Start');
    this.cleanUp();
    console.debug('start recorder');
    this.bus.postMessage({action: actions.START});
  };
  stop = () => {
    this.trackEvent('Stop');
    console.debug('stop recorder');
    this.bus.postMessage({action: actions.STOP});

    this.$chrome.storage.local.get(
      ['recording', 'options', 'network'],
      ({recording, options, network}) => {
        console.debug('loaded recording', recording);
        console.debug('loaded options', options);

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
    this.trackEvent('Options');
    if (this.$chrome.runtime.openOptionsPage) {
      this.$chrome.runtime.openOptionsPage();
    }
  };
  loadState = cb => {
    this.$chrome.storage.local.get(
      ['controls', 'code', 'options'],
      ({controls, code, options}) => {
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
    });
  };
  setCopying = () => {
    this.trackEvent('Copy');
    this.setState({
      isCopying : true
    });
    setTimeout(() => {
      this.setState({
        isCopying : false
      });
    }, 1500);
  };
  goHome = () => {
    this.setState({
      showResultsTab : false,
      showHelp : false
    });
  };

  toggleShowHelp = () => {
    this.trackEvent('Help');
    this.setState({
      showHelp : this.state.showHelp
    });
  }
  trackEvent = event => {
    // if (
    //   this.state.options &&
    //   this.state.options.extension &&
    //   this.state.options.extension.telemetry
    // ) {
    //   if (window._gaq) window._gaq.push(['_trackEvent', event, 'clicked']);
    // }
  }
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
