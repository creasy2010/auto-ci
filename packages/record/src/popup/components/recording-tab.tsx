/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/
import * as React from 'react';

interface IRecordingTabP {
  isRecording: boolean;
  liveEvents: any[];
  [name: string]: any;
}

interface IRecordingTabS {
  [name: string]: any;
}

export default class RecordingTab extends React.Component<
  IRecordingTabP,
  IRecordingTabS
> {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="tab recording-tab">
        <div className="content">
          {this.props.isRecording
            ? <div className="events" v-show="isRecording">
                <p
                  className="text-muted text-center loading"
                  v-show="liveEvents.length === 0"
                >
                  Waiting for events
                </p>
                <ul className="event-list">

                  {this.props.liveEvents.map((event, index) =>
                    <li className="event-list-item">
                      <div className="event-label">
                        {index + 1}
                      </div>
                      <div className="event-description">
                        <div className="event-action">{event.action}</div>
                        <div className="event-props text-muted">
                          {event.selector || this.parseEventValue(event)} :{event.value}{' '}
                        </div>
                      </div>
                    </li>,
                  )}
                </ul>
              </div>
            : <div className="empty">
                <img src="/images/Desert.svg" alt="desert" width="78px" />
                <h3>No recorded events yet</h3>
                <p className="text-muted">Click record to begin</p>
                <div className="nag-cta">
                  <a
                    href="https://surveys.hotjar.com/s?siteId=717179&surveyId=137462"
                    target="_blank"
                  >
                    ⚡️ Puppeteer Recorder Pro is coming →
                  </a>
                </div>
              </div>}
        </div>
      </div>
    );
  }
  parseEventValue = event => {
    if (event.action === 'viewport*')
      return `width: ${event.value.width}, height: ${event.value.height}`;
    if (event.action === 'goto*') return event.href;
    if (event.action === 'navigation*') return '';
  };
}
