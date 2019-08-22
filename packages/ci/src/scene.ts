import {Page} from 'puppeteer';
import {IUseCase} from '../typings';
import {createOperator} from './factory';

/**
 * @desc
 *  操纵者;
 * @使用场景
 *
 * @Date    2019/8/22
 **/

export default class Scene {
 private page: Page;

 private userCases: IUseCase[];

  constructor(page, userCases: IUseCase[]) {
    this.page = page;
    this.userCases = userCases;
  }

  private init() {}

  async run() {
    await this.init();

    for (let i = 0, iLen = this.userCases.length; i < iLen; i++) {
      let userCase = this.userCases[i];
      let operator = createOperator(this.page, userCase);
      await operator.run();
    }

    await this.clean();
  }

  private clean() {}
}
