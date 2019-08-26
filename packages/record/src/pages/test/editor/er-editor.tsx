/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/8/15
 **/
import  * as React from 'react';
import ErEntry, {IBBox} from './node/er-entry';
import G6 from '@antv/g6';

interface IErEditorP{
  data:any;
  //TODO 这个方式 不合适, 要看业务场景来宝
  mode?:"default"|"addNode"|"addEdge"
  [name:string]:any;
}

interface IErEditorS{
  [name:string]:any;
}

export default class ErEditor extends React.Component<IErEditorP,IErEditorS> {
  static defaultProps = {
    
  };
  graph = null;


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.mode !=this.props.mode) {
      this.graph.setMode(nextProps.mode);
    }
  }

  componentDidMount() {
    this.graph = new G6.Graph({
      container: 'mountNode',
      width: 800,
      height: 1000,
      modes: {
        default: [
          'drag-canvas',
          'drag-node',
          'click-select',
          'activate-relations',
          {
            type: 'brush-select',
            onSelect(nodes) { console.log('selected:', nodes); },
            onDeselect(nodes) { console.log('deselect', nodes); }
          }
        ],
        changeSize:['change-table-size'],
        addNode: ['click-add-node', 'click-select'],
        addEdge: ['click-add-edge', 'click-select'],
      },
    });

    this.graph.on('mousedown', ev => {
      const shape = ev.target;
      const item = ev.item;
      console.log('mousedown',ev,this.graph.getPointByCanvas(ev.x,ev.y));
      if(ev.target._attrs.optType==='changeSizeBtn') {
        ev.stopPropagation();
        console.log('进入放大缩小模式');
        let bbox:IBBox = item.getBBox();

        this.graph.set('tableResize:tableInfo',bbox);
        // this.graph.set('lastModal',this.graph.getCurrentMode());
        setTimeout(() => {
          this.graph.setMode("changeSize");
        },0);//TODO 这里还要追踪下, 如果不加,会导致cpu100%
      }
      if (item) {
        const type = item.getType();
      }
    });
    this.graph.data(this.props.data);
    this.graph.render();
  }

  componentWillUnmount() {
    this.graph.destroy();
  }
  
  render() {
    return (
      <div id={'mountNode'} />
    );
  }
}


import tableResize from './behavior/tabel-resize';
import clickAddEdge from './behavior/click-add-edge';
import clickAddNode from './behavior/click-add-node';
/**
 * 改变表格大小modal.
 */
G6.registerBehavior('change-table-size', tableResize);

// 封装点击添加边的交互
G6.registerBehavior('click-add-edge', clickAddEdge);
//点击添加节点
G6.registerBehavior('click-add-node', clickAddNode);

G6.registerNode('erEntry', ErEntry);


 