/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/27
 **/

import $script from 'scriptjs';


export function loadJS(jsPahts:string|string[]):Promise<void>{
  return new Promise((resolve,reject)=>{
    $script(jsPahts,resolve,reject)
  })
}


/**
 * 加载css link 资源
 *
 * TODO 删除的逻辑 呢.
 */
export function loadCss(url:string) {

  return new Promise((resolve,reject)=>{
    var node = document.createElement('link');
    node.rel = 'stylesheet';
    node.type = 'text/css';
    node.href = url;
    node.onload =resolve;
    node.onerror = reject;
    document.getElementsByTagName('head')[0].appendChild(node);
  });
}