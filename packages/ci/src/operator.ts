import {Page} from 'puppeteer';
import {IUseCase} from '../typings';
import {
  openIntercepRequest,
  sleep,
  log,
  screenshot,
  waitElementVisiable,
} from './util';

let ConstUtil = {sleep, log, screenshot, waitElementVisiable};

/**
 * @desc
 *  操纵者;
 * @使用场景
 *
 * @Date    2019/8/22
 **/
export default class Operator {
  page: Page;
  useCase: IUseCase;

  cancelFunc = null;

  constructor(page, useCase: IUseCase) {
    this.page = page;
    this.useCase = useCase;
  }

  private async init() {
    if (this.useCase.neworkMock) {
      this.cancelFunc = await openIntercepRequest(
        this.page,
        this.useCase.neworkMock,
      );
    }
  }

  async run() {
    await this.init();
    await this.useCase.exec(
      {
        page: this.page,
      },
      ConstUtil,
    );

    await this.clean();
  }

  private clean() {}
}
