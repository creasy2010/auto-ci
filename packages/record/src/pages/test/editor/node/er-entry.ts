export default {
  /**
   * 绘制节点/边，包含文本
   * @param  {Object} cfg 节点的配置项
   * @param  {G.Group} group 节点的容器
   * @return {G.Shape} 绘制的图形，通过node.get('keyShape') 可以获取到
   */
  draw(cfg, group) {
    const size = cfg.size || [100, 100]; // 如果没有 size 时的默认大小
    const width = size[0];
    const height = size[1];

    let orginX = -width / 2,
      orginY = -height / 2;

    group.addShape('rect', {
      attrs: {
        x: orginX,
        y: orginY,
        width: width,
        fill: '#080522',
        height: height,
        stroke: 'blue',
      },
    });
    group.addShape('line', {
      attrs: {
        x1: orginX,
        y1: orginY + 24,
        x2: orginX + width,
        y2: orginY + 24,
        // lineDash: [10,10],
        stroke: '#cc2a2c',
      },
    });

    //字条如何计算居中 ? TODO 英文字段添加的问题 .
    let text = '表名';
    let length = text.length / 2;

    group.addShape('text', {
      attrs: {
        x: orginX + width / 2 - length,
        y: orginY + 20,
        fill: '#cc2a2c',
        text: text,
        textAlign: 'center',
      },
    });

    //TODO 添加列车字段;
    return group;
  },

  /**
   * 设置节点的状态，主要是交互状态，业务状态请在 draw 方法中实现
   * 单图形的节点仅考虑 selected、active 状态，有其他状态需求的用户自己复写这个方法
   * @param  {String} name 状态名称 selected
   * @param  {Object} value 状态值
   * @param  {Node} node 节点
   */
  setState(name, value, node) {
    //事件会多次触发 , 可以限制调用一次;
    const group = node.getContainer();
    if (name === 'selected') {
      if (value) {
        //选中状态

        //编制可以放大缩小的四个角
        let result: IBBox = group.get('children')[0].getBBox();
        addRect(group, [
          [result.minX, result.minY],
          [result.maxX, result.maxY],
          [result.minX, result.maxY],
          [result.maxX, result.minY],
        ]);
        //激活 // 可以扩大的点
      } else {
        node.update();
      }
    } else if (name === 'active') {
      //鼠标放在其上的情况
      if (value) {
      } else {
      }
      //状态修改后如何还原?
    }
    // console.log('节点状态变更::', name, value, node);
  },
};

function addRect(group, xys, length = 7) {
  xys.forEach(([x, y]) => {
    group.addShape('rect', {
      attrs: {
        optType: 'changeSizeBtn',
        x: x - length / 2,
        y: y - length / 2,
        width: length,
        height: length,
        fill: 'white',
        stroke: 'black',
      },
    });
  });
}

export interface IBBox {
  height: number;
  maxX: number;
  maxY: number;
  minX: number;
  minY: number;
  width: number;
  x: number;
  y: number;
}
