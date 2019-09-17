/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/8/15
 **/


export interface AsyncResult<T> {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context: T;
  /**
   * 消息内容
   */
  message: string;
}

export interface IPageReq{
  pageNum?:number;
  pageSize?:number;
}

export interface IEsRes<T>{
  total:number;
  root:T[];
}


/** redux beg **/

export interface Action<T=any> {
  type: string;
  payload?: T;
}

export interface Dispatch {
  (action:Action) : void;
}

/** redux end **/