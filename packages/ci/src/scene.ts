import {IEcecuteContext, IUseCase} from '../typings';
import {createOperator} from './factory';
import { sleep } from "./util";
import {ensureDirSync} from  'fs-extra';
import {loadUseCase} from "./use-case-manager";
/**
 * @desc
 *  操纵者;
 * @使用场景
 *
 * @Date    2019/8/22
 **/

export default class Scene {

 private context:IEcecuteContext;

 private userCases: IUseCase[];

 constructor(context:IEcecuteContext, userCases: IUseCase[]) {
    this.userCases = userCases;
    this.context = context
 }

 private async init() {
    ensureDirSync(this.context.dir);

   let {before}  = this.context.sceneConfig;
   if(before) {
     await before(this.context);
   }
 }

  /**
   * 前置用例执行;
   */
  private async  pre() {
    let {beforeUseCases} =  this.context.sceneConfig;
    if(beforeUseCases) {
      for (let i = 0, iLen = beforeUseCases.length; i < iLen; i++) {
        let useCaseItem = beforeUseCases[i];
        let useCase  = await loadUseCase(useCaseItem);
        let operator = createOperator(this.context, useCase);
        await operator.run();
      }
    }
  }

  /**
   * 后置用例执行
   */
  private async post(){
    let {afterUseCases} =  this.context.sceneConfig;
    if(afterUseCases) {
      for (let i = 0, iLen = afterUseCases.length; i < iLen; i++) {
        let useCaseItem = afterUseCases[i];
        let useCase  = await loadUseCase(useCaseItem);
        let operator = createOperator(this.context, useCase);
        await operator.run();
      }
    }
  }

  async run() {
    await this.init();
    await this.pre();

    for (let i = 0, iLen = this.userCases.length; i < iLen; i++) {
      let userCase = this.userCases[i];
      console.log(`###useCase begin:userCase[${userCase.id+userCase.desc}]`);
      let operator = createOperator(this.context, userCase);

      try {
        await operator.run();
      } catch (err) {
        //TODO 拍照保住现场;
        console.warn(`[${userCase.id+userCase.desc}]`,'发生异常,reload页面,继续下一用例;',err);
        console.log('sleep 100 秒,定位问题.');
        await sleep(100);
        try {
          let newPage = await this.context.browserManager.getNewPage();
          await Promise.all([this.context.page.close(),newPage.goto(this.context.projectConfig.webSite)]);
          this.context.page = newPage;
          await this.pre();
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
      await sleep(3);
      console.log(`###userCase end:${userCase.id+userCase.desc} `);
      console.log('###############################################');
    }

    await this.post();
    await this.clean();
  }

  private async clean() {
    let {after}  = this.context.sceneConfig;
    if(after){
      await after(this.context);
    }
  }
}
