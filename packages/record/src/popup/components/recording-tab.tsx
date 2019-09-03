/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/
import * as React from 'react';
import './recording-tab.less';

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
    let liveEvents  =this.props.liveEvents || [];
    return (
      <div className="tab recording-tab">
        <div className="content">
          {this.props.isRecording
            ? <div className="events">
                {liveEvents.length === 0
                  ? <p
                      className="text-muted text-center loading"
                    >
                      Waiting for events
                    </p>
                  : <ul className="event-list">
                      {liveEvents.map((event, index) =>
                        <li key={index+""} className="event-list-item">
                          <div className="event-label">
                            {index + 1}
                          </div>
                          <div className="event-description">
                            <div className="event-action">{event.action}</div>
                            <div className="event-props text-muted">
                              {event.selector || this.parseEventValue(event)} :{JSON.stringify(event.value)+' '}
                            </div>
                          </div>
                        </li>,
                      )}
                    </ul>}
              </div>
            : <div className="empty">
                <img src="/images/Desert.svg" alt="desert" width="78px" />
                <h3>No recorded events yet</h3>
                <p className="text-muted">Click record to begin</p>
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
