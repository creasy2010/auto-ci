/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/8/15
 **/

import G6 from '@antv/g6';

export default {
  getEvents() {
    return {
      'canvas:click': 'onClick',
    };
  },
  onClick(ev) {
    const graph = this.graph;
    console.log('添加点击时点击事件:', ev);
    const node = graph.addItem('node', {
      id: G6.Util.uniqueId(),
      x: ev.x,
      y: ev.y,
      shape: 'erEntry',
    });
  },
};
