/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/8/15
 **/

export default {
  getEvents() {
    return {
      'node:click': 'onClick',
      mousemove: 'onMousemove',
      'edge:click': 'onEdgeClick', // 点击空白处，取消边
    };
  },
  onClick(ev) {
    const node = ev.item;
    const graph = this.graph;
    const point = {x: ev.x, y: ev.y};
    const model = node.getModel();
    if (this.addingEdge && this.edge) {
      graph.updateItem(this.edge, {
        target: model.id,
      });

      this.edge = null;
      this.addingEdge = false;
    } else {
      this.edge = graph.addItem('edge', {
        source: model.id,
        target: point,
      });
      this.addingEdge = true;
    }
  },
  onMousemove(ev) {
    const point = {x: ev.x, y: ev.y};
    if (this.addingEdge && this.edge) {
      this.graph.updateItem(this.edge, {
        target: point,
      });
    }
  },

  onEdgeClick(ev) {
    const currentEdge = ev.item;
    // 拖拽过程中，点击会点击到新增的边上
    if (this.addingEdge && this.edge == currentEdge) {
      this.graph.removeItem(this.edge);
      this.edge = null;
      this.addingEdge = false;
    }
  },
};
