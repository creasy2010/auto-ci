/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/7
 **/

import {Dispatch} from 'typings';

interface IActionMiddleWare{
  methodName:string;
  target:any;//
  arguments:any;//
  response?:any;
}

let loadingM  = async ({methodName,target}:IActionMiddleWare,next)=>{
  if(methodName === 'query' && target.commonChange) {
    //设置loading状态;
    //TODO main要改变.
    target.commonChange(['main','isLoading'],true);
   let result = await next();

    target.commonChange(['main','isLoading'],false);
    return result;
  } else {
   return next();
  }
}

let middleWares = [
  loadingM,
];

let compose=(middleWares) => {
  let allLen = middleWares.length;

  return async (context:IActionMiddleWare,next) => {
    return await _dispatch(0,context,next);
  }

  async function _dispatch(i:number,context:IActionMiddleWare,next) {
    let nextIndex= i+1;

    let _next =_dispatch.bind(null,nextIndex,context,next);
    if((nextIndex) === allLen) {
      _next = async function () {
       let res =  await next();
       return res;
      };
    }

    return middleWares[i]( context,_next);
  }
}
//TODO 为什么这样不行. 要尝试下呢.
// export function getActionProxy (action):(typeof action) {
export function getActionProxy <T> (action):T {
  let methodProxy:{[methodName:string]:Function}={};

  let handelEnhance = compose(middleWares);


  return ( (dispatch: Dispatch) => {
    let realAction = action(dispatch);

    var proxyAction = new Proxy(realAction, {
      get: function (target, key, receiver) {
        //返回的都是方法...
        let keyStr = String(key);
          if(!methodProxy[keyStr] && typeof realAction[key]==='function') {

            //TODO 这里把所有方法都变为异步的了.
            methodProxy[keyStr] =async (...param) => {
              let _arguments =param;
              console.log('开始调用代理方法,',_arguments);

              let result  = await handelEnhance({methodName:keyStr,arguments:_arguments,target:proxyAction},(next)=>{
                return realAction[key].apply(proxyAction,_arguments);
              });
              return result;
            }
          }

          //方法返回代理
          if(methodProxy[keyStr]){
            return methodProxy[keyStr];
          }
        return Reflect.get(target, key, receiver);
      },
      set: function (target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver);
      },
      apply (target, ctx, args) {
        //@ts-ignore
        return Reflect.apply(...arguments);
      }
    });
    return proxyAction;
  } ) as any ;
}