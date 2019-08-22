/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/22
 **/


import Operator from  './operator'
import {IContext, IUseCase} from "../typings";
import Scene from "./scene";


export function createOperator(page,useCase:IUseCase):Operator{

  return new Operator(page,useCase);
}

export function createScreen(page,useCases:IUseCase[]):Scene{
  return new Scene(page,useCases);
}