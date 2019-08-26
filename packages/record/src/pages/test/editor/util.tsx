/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/8/15
 **/
import {IBBox} from 'src/pages/test/editor/node/er-entry';
import {IPoint} from 'typings/index';

/**
 * 根据点击点 获取所点击点对折线点的点坐标
 *
 * @param {IBBox} bbox
 * @param hitPoint
 * @returns {{x: number; y: number}}
 */
export function getBasePoint(bbox: IBBox, hitPoint) {
  let x = Math.abs(bbox.maxX - hitPoint.x) > Math.abs(bbox.minX - hitPoint.x)
    ? bbox.maxX
    : bbox.minX;
  let y = Math.abs(bbox.maxY - hitPoint.y) > Math.abs(bbox.minY - hitPoint.y)
    ? bbox.maxY
    : bbox.minY;
  return {x, y};
}

/**
 * 根据四个点坐标获取,矩形配置.  左上角点, 宽高;
 */
export function getRectConfig(
  {x, y}: IPoint,
  {x: baseX, y: baseY}: IPoint,
): {
  x: number;
  y: number;
  width: number;
  height: number;
  size: number[];
} {
  //左上角的点
  // let leftPointx = x > baseX ? baseX : x;
  // let leftPointy = y > baseY ? baseY : y;

  //中心点;
  let result = {
    x: getMiddle(x, baseX),
    y: getMiddle(y, baseY),
    // label: 'rect',
    shape: 'rect',
    size: [Math.abs(baseX - x), Math.abs(baseY - y)],
    style: {
      fill: {},
      fillOpacity: 0,
      stroke: '#cc0f0e',
    },
    width: Math.abs(baseX - x),
    height: Math.abs(baseY - y),
  };

  console.log(
    `'根据四个点坐标获取,矩形配置.  左上角点, 宽高; base[${baseX}-${baseY}] current:[${x}-${y}]',结果:`,
    result,
  );

  return result;
}

/**
 *  min+
 * @param d1
 * @param d2
 */
export function getMiddle(d1, d2) {
  let min, max;

  if (d1 - d2 >= 0) {
    max = d1;
    min = d2;
  } else {
    max = d2;
    min = d1;
  }

  return min + (max - min) / 2;
}
