/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/

import * as React from 'react';
import {defaults as codeConfig} from '../code-generator/CodeGenerator';
import * as ReactDOM from 'react-dom';

interface IOptionsPageP {
  [name: string]: any;
}

interface IOptionsPageS {
  loading: boolean;
  saving: boolean;
  options: {
    code: {
      wrapAsync: boolean;
      headless: boolean;
      waitForNavigation: boolean;
      waitForSelectorOnClick: boolean;
      blankLinesBetweenBlocks: boolean;
      dataAttribute: string;
    };
    extension: {
      telemetry: boolean;
    };
  };
  [name: string]: any;
}

export default class OptionsPage extends React.Component<
  IOptionsPageP,
  IOptionsPageS
> {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      saving: false,
      options: {
        code: codeConfig,
        extension: {
          telemetry: true,
        },
      },
    };
  }

  componentDidMount() {
    this.load();
  }

  _changeCodeConfig = e => {
    console.log(e.target.dataset.key, e.target.value);
  };

  _changeExtension = e => {
    console.log(e.target.dataset.key, e.target.value);
  };

  render() {
    return (
      <div className="options">
        <div className="container">
          <div className="header">
            Puppeteer Recorder Options
            <small className="saving-badge text-muted" v-show="saving">
              Saving...
            </small>
          </div>
          {!this.state.loading
            ? <div className="content" v-if="!loading">
                <div className="settings-block">
                  <h4 className="settings-block-title">
                    Code Recorder settings
                  </h4>
                  <div className="settings-block-main">
                    <div className="settings-group">
                      <label className="settings-label">
                        custom data attribute
                      </label>
                      <input
                        id="options-code-dataAttribute"
                        type="text"
                        value={this.state.options.code.dataAttribute}
                        data-key="dataAttribute"
                        onChange={this._changeCodeConfig}
                        placeholder="your custom data-* attribute"
                      />
                      <small>
                        Define a <code>data-*</code> attribute that we'll
                        attempt to use when selecting the elements.
                        This is handy
                        when React or Vue based apps generate random class
                        names.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="settings-block">
                  <h4 className="settings-block-title">
                    Code Generator settings
                  </h4>
                  <div className="settings-block-main">
                    <div className="settings-group">
                      <label>
                        <input
                          id="options-code-wrapAsync"
                          type="checkbox"
                          value={this.state.options.code.wrapAsync + ''}
                          data-key="wrapAsync"
                          onChange={this._changeCodeConfig}
                        />
                        wrap code in async function
                      </label>
                    </div>
                    <div className="settings-group">
                      <label>
                        <input
                          id="options-code-headless"
                          type="checkbox"
                          value={this.state.options.code.headless + ''}
                          data-key="headless"
                          onChange={this._changeCodeConfig}
                        />
                        set <code>headless</code> in puppeteer launch options
                      </label>
                    </div>
                    <div className="settings-group">
                      <label>
                        <input
                          id="options-code-waitForNavigation"
                          type="checkbox"
                          value={this.state.options.code.waitForNavigation + ''}
                          data-key="waitForNavigation"
                          onChange={this._changeCodeConfig}
                        />
                        add <code>waitForNavigation</code> lines on navigation
                      </label>
                    </div>
                    <div className="settings-group">
                      <label>
                        <input
                          id="options-code-waitForSelectorOnClick"
                          type="checkbox"
                          value={
                            this.state.options.code.waitForSelectorOnClick + ''
                          }
                          data-key="waitForSelectorOnClick"
                          onChange={this._changeCodeConfig}
                        />
                        add <code>waitForSelector</code> lines before every{' '}
                        <code>page.click()</code>
                      </label>
                    </div>
                    <div className="settings-group">
                      <label>
                        <input
                          id="options-code-blankLinesBetweenBlocks"
                          type="checkbox"
                          value={
                            this.state.options.code.blankLinesBetweenBlocks + ''
                          }
                          data-key="blankLinesBetweenBlocks"
                          onChange={this._changeCodeConfig}
                        />
                        add blank lines between code blocks
                      </label>
                    </div>
                  </div>
                </div>
                <div className="settings-block">
                  <h4 className="settings-block-title">
                    Extension settings
                  </h4>
                  <div className="settings-block-main">
                    <div className="settings-group">
                      <label>
                        <input
                          id="options-telemetry"
                          type="checkbox"
                          value={this.state.options.extension.telemetry + ''}
                          onChange={this._changeExtension}
                        />
                        Allow recording of usage telemetry
                      </label>
                      <br />
                      <small>
                        We only record clicks for basic product development, no
                        website content or input data. Data
                        is never, ever shared with 3rd parties.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            : null}
          <div className="footer">
            sponsored by
            <a href="https://checklyhq.com" target="_blank">
              <img src="/images/text_racoon_logo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  save(e) {
    // this.setState({
    //   saving:true
    // },()=>{
    //   //@ts-ignore
    //   chrome.storage.local
    //     .set({ options: this.state.options }, () => {
    //     console.debug('saved options');
    //     // 为什么这里要超时呢.
    //     setTimeout(() => {
    //       this.setState({
    //         saving:false
    //       });
    //     }, 500)
    //   })
    // })
  }

  load() {
    //@ts-ignore
    // chrome.storage
    //   .local.get('options', ({ options }) => {
    //   if (options) {
    //     console.debug('loaded options', JSON.stringify(options))
    //     this.setState({
    //       loading:false,
    //       options
    //     })
    //   }
    // })
  }
}

//@ts-ignore
ReactDOM.render(<OptionsPage />, document.getElementById('root'));
