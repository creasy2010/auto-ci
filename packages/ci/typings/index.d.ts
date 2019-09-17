import {Page} from 'puppeteer';

/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/8/22
 **/
export interface VoidFunc {
  (): void;
}

export interface PromiseVoidFunc {
  (context:IContext,util:IUtil): Promise<void>;
}

export interface PromiseWithContextVoidFunc {
  (context:IContext): Promise<void>;
}

export interface UnListenFunc {
  (): void;
}

export interface IMatchResultItem {
  fileName: string;
  score: number;
  img: string;
}

export interface IContext {
  page: Page;
}

export interface IProjectConfig{
  webSite:string;//"http://127.0.0.1:3001/"
}

export type UseCaseId=string;


export interface UseCaseFilter {
  (files:string[]): string[];
}
export interface ISceneConfig{
  before?:PromiseWithContextVoidFunc;
  after?:PromiseWithContextVoidFunc;
  filter?:UseCaseFilter;
  afterUseCases?:UseCaseId[];
  beforeUseCases?:UseCaseId[];
}

export interface IEcecuteContext {
  page: Page;
  browserManager:any;
  sceneConfig?:ISceneConfig;
  //执行目录   dfdfdfsfdsd
  projectConfig:IProjectConfig;
  dir:string;
}

export interface IUtil {
  sleep: any;
  log: any;
  waitElementVisiable: any;
  screenshot: any;
}

export interface INetworkItem {
  request?: {
    url:string;
    method: string;
  };
  requestId?: string;
  response: {
    base64Encoded?: boolean;
    body?: string;
    headers?: {
      Connection?: string;
      'Content-Encoding'?: string;
      'Content-Security-Policy'?: string;
      'Content-Type'?: string;
      Date?: string;
      Vary?: string;
      'X-Powered-By'?: string;
    };
    mimeType: string;
    status: number;
  };
}

export interface IUseCase {
  desc?: string;
  id?: string;
  exec: PromiseVoidFunc;
  neworkMock?: {
    [url: string]: INetworkItem[];
  };
}
