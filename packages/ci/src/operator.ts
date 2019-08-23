import {IEcecuteContext, IUseCase} from '../typings';
import {
  openIntercepRequest,
  sleep,
  log,
  screenshot,
  waitElementVisiable,
} from './util';

/**
 * @desc
 *  操纵者;
 * @使用场景
 *
 * @Date    2019/8/22
 **/
export default class Operator {
  useCase: IUseCase;
  context: IEcecuteContext;
  cancelFunc = null;
  util = null;

  constructor(context, useCase: IUseCase) {
    this.context = context;
    this.useCase = useCase;
  }

  private async init() {
    if (this.useCase.neworkMock) {
      this.cancelFunc = await openIntercepRequest(
        this.context.page,
        this.useCase.neworkMock,
      );
    }

    this.util = {
      sleep,
      log,
      screenshot:async (name:string)=>{
       await screenshot(this.context.page,name,{dir:this.context.dir});
      },
      waitElementVisiable:async(selector:string)=>{
        await waitElementVisiable(this.context.page,selector);
      },
    };
  }

  async run() {
    await this.init();
    await this.useCase.exec(
      {
        page: this.context.page,
      },
      this.util,
    );

    await this.clean();
  }

  private async clean() {
    if (this.cancelFunc) {
      await this.cancelFunc();
    }
  }
}
