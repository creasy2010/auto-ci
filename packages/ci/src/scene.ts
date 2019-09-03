import {Page} from 'puppeteer';
import {IEcecuteContext, IUseCase} from '../typings';
import {createOperator} from './factory';
import {sleep} from "./util";
import {ensureDirSync} from  'fs-extra';

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

  private init() {
    ensureDirSync(this.context.dir);
  }

  /**
   * 前置用例执行;
   */
  private async  pre() {
    let userCase = this.userCases[0];
    let operator = createOperator(this.context, userCase);
    await operator.run();
  }

  /**
   * 后置用例执行
   */
  private post(){
  }


  async run() {
    await this.init();

    for (let i = 0, iLen = this.userCases.length; i < iLen; i++) {
      let userCase = this.userCases[i];
      let operator = createOperator(this.context, userCase);
  
      
      try {
        await operator.run();
      } catch (err) {
        //TODO 拍照保住现场;
        console.warn('发生异常,reload页面,继续下一用例;',err);

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
      console.log(`userCase:${userCase.id+userCase.desc} end`)
    }

    await this.clean();
  }

  private clean() {}
}
