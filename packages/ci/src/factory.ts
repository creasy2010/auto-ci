/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/22
 **/


import Operator from  './operator'
import {IContext, IEcecuteContext, IUseCase} from "../typings";
import Scene from "./scene";


export function createOperator(context:IEcecuteContext,useCase:IUseCase):Operator{
  return new Operator(context,useCase);
}

export function createScreen(context:IEcecuteContext,useCases:IUseCase[]):Scene{
  return new Scene(context,useCases);
}