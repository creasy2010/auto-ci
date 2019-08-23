import {Page} from 'puppeteer';
import {IEcecuteContext, IUseCase} from '../typings';
import {createOperator} from './factory';
import {sleep} from "./util";

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

  constructor(page, userCases: IUseCase[],dir:string) {
    this.userCases = userCases;
    this.context = {
      dir,
      page,
    }
  }

  private init() {}

  async run() {
    await this.init();

    for (let i = 0, iLen = this.userCases.length; i < iLen; i++) {
      let userCase = this.userCases[i];
      let operator = createOperator(this.context, userCase);
      await operator.run();
      await sleep(5);
    }

    await this.clean();
  }

  private clean() {}
}
