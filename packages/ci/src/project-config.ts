/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/9/3
 **/

import {IProjectConfig} from "../typings";

/**
 *
 * @param {string} project
 */
export async  function getProjectConfig(project:string):Promise<IProjectConfig>{

  return {
    webSite:"http://127.0.0.1:3001/"
  }
}