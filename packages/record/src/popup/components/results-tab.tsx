/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/26
 **/

import * as React from 'react';
import './results-tab.less';

interface IResultsTabP {
  code: string;
  [name: string]: any;
}

interface IResultsTabS {
  [name: string]: any;
}

export default class ResultsTab extends React.Component<
  IResultsTabP,
  IResultsTabS
> {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="tab results-tab">
        <div className="content">
          <div className="generated-code">

            <pre>
              {this.props.code
                ? <code className="javascript" />
                : <code>No code yet...</code>}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
