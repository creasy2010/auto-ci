/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/22
 **/


import Operator from  './operator'
import {IContext} from "../typings";


export function createOperator(context:IContext):Operator{

  return new Operator();
}