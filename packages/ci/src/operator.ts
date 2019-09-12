import {IEcecuteContext, IUseCase} from '../typings';
import {
  openIntercepRequest,
  sleep,
  log,
  screenshot,
  waitElementVisiable, compScreen,
} from './util';
import {join} from 'path';
import {ensureDirSync} from "fs-extra";

/**
 * @desc
 *  操纵者;
 * @使用场景
 *
 * @Date    2019/8/22
 **/
export default class Operator {
  useCase: IUseCase;
  //当前用例可操作的目录;
  dir: string;
  context: IEcecuteContext;
  cancelFunc = null;
  util = null;

  constructor(context: IEcecuteContext, useCase: IUseCase) {
    this.context = context;
    this.useCase = useCase;
    this.dir = join(context.dir, useCase.id);
  }

  private async init() {
    if (this.useCase.neworkMock) {
      this.cancelFunc = await openIntercepRequest(
        this.context.page,
        this.useCase.neworkMock,
      );
    }

    ensureDirSync(this.dir);
    ensureDirSync(join(this.dir,"screenshot"));

    this.util = {
      sleep,
      log,
      screenshot: async (name: string) => {
        await screenshot(this.context.page, name, {dir: this.dir});
      },
      waitElementVisiable: async (selector: string) => {
        await waitElementVisiable(this.context.page, selector);
      },
    };
  }

  async run() {
    try{
      await this.init();
      await sleep(2);
      await this.useCase.exec({
          page: this.context.page,
        },
        this.util,
      );
      await this.check();
    } catch(err) {
      // console.warn('当前处理失败;;');
      throw err;
    } finally {
      await this.clean();
    }
  }

  private async check() {
    // let result  =   await compScreen(join(this.dir, 'screenshot-base'),join(this.dir, 'screenshot'));
    // console.log(`用例对比结果:${result}`);s
  }

  private async clean() {
    if (this.cancelFunc) {
      await this.cancelFunc();
    }
  }
}
