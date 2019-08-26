/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/28
 **/
import * as React from 'react';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Select} from 'antd';
import ErEditor from './editor/er-editor';
import './main.less';

interface IMainPageP {
  [name: string]: any;
}

interface IMainPageS {
  modal?: "default"|"addNode"|"addEdge";

  [name: string]: any;
}

const data = {
  nodes: [
    {
      id: 'node1',
      x: 100,
      y: 200,
      shape: 'erEntry',
      anchorPoints: [
        [0, 0.5, {type: 'circle', style: {stroke: 'red', fill: 'white'}}],
        [1, 0.5, {type: 'rect', style: {stroke: 'blue', fill: 'white'}}],
      ],
    },
    {
      id: 'node2',
      x: 300,
      shape: 'erEntry',
      y: 200,
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};

export default class MainPage extends React.Component<IMainPageP, IMainPageS> {
  static defaultProps = {};

  graph = null;

  constructor(props) {
    super(props);
    this.state = {
      modal:"default",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="main">
        <div>
          <Select
            value={this.state.modal || 'default'}
            style={{width: 120}}
            onChange={this._handleModalChange}
          >
            <Select.Option value="default">默认</Select.Option>
            <Select.Option value="addNode">添加节点</Select.Option>
            <Select.Option value="addEdge">添加边</Select.Option>
          </Select>
        </div>
        <div className={'editorContainer'}>
          <ErEditor data={data} mode={this.state.modal} />
        </div>
      </div>
    );
  }

  _handleModalChange = value => {
    this.setState({modal: value});
  };
}
