import {getBasePoint, getRectConfig} from '../util';
import {IBBox} from '../node/er-entry';
import G6 from '@antv/g6';

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
      mousemove: 'onMousemove',
      mouseup: 'onMouseup',
    };
  },
  onMouseup(ev) {
    console.log('退出 改变表格大小进行中,mousemove==>', ev);

    let tableResizeInfo: TItableResizeInfo = this.graph.get('tableResize:Info');

    if (tableResizeInfo && tableResizeInfo.rectId) {
      this.graph.remove(this.graph.findById(tableResizeInfo.rectId));
      this.graph.set('tableResize:Info', null);

      let pointXY = this.graph.getPointByCanvas(ev.x, ev.y);
      let rectConfig = getRectConfig(pointXY, tableResizeInfo.basePoint);

      this.graph.update(tableResizeInfo.erEntryItem, {
        x: rectConfig.x,
        y: rectConfig.y,
        size: rectConfig.size,
      });
      //TODO 通知外部更新数据;
    }

    this.graph.setMode('default');
  },

  onMousemove(ev) {
    // 移动鼠标进入中
    console.log('改变表格大小进行中,mousemove==>', ev);
    //找到对角坐标;
    let tableResizeInfo: TItableResizeInfo = this.graph.get('tableResize:Info');

    //要计算出来
    let pointXY = this.graph.getPointByCanvas(ev.x, ev.y);

    if (tableResizeInfo && tableResizeInfo.rectId) {
      // 当前坐标及 基点. 确定矩形
      let {x, y} = this.graph.getPointByCanvas(ev.x, ev.y);

      let rectItem = this.graph.findById(tableResizeInfo.rectId);

      let rectConfig = getRectConfig(pointXY, tableResizeInfo.basePoint);
      this.graph.updateItem(rectItem, {
        ...rectConfig,
      });
    } else {
      let bbox: IBBox = this.graph.get('tableResize:tableInfo');
      let basePoint = getBasePoint(bbox, pointXY);

      let rectId = G6.Util.uniqueId();
      let rectConfig = getRectConfig(pointXY, basePoint);

      this.graph.addItem('node', {
        id: rectId,
        ...rectConfig,
      });

      this.graph.set('tableResize:Info', {
        rectId,
        erEntryItem: ev.item,
        basePoint,
      });
    }
  },
};

export interface TItableResizeInfo {
  rectId: string;
  erEntryItem: any;
  basePoint: {
    x: number;
    y: number;
  };
}
