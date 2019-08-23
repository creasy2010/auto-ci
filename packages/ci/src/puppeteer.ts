import {VoidFunc} from '../typings/index';
import {join} from 'path';
import {
  compScreen,
  log,
  openIntercepRequest,
  screenshot,
  sleep,
  waitElementVisiable,
} from './util';
import * as puppeteer from 'puppeteer';
import {createScreen} from './factory';

/**
 * @desc
 *
 * @使用场景
 *
 * @Date    2019/7/27
 **/
(async () => {
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    dumpio: true,
    devtools: false,
    headless: false,
    args: ['--start-maximized'],
  });

  const [page] = await browser.pages();

  await page.setViewport({width: 0, height: 0});

  await page.goto('http://127.0.0.1:3001/');

  let userCases = [
    '../../projects/supplier/scene/use-case/login',
    '../../projects/supplier/scene/use-case/form',
  ];

  let screen = createScreen(
    page,
    userCases.map(item => require(item)),
    join(__dirname, '测试'),
  );
  await screen.run();

  await sleep(5);

  userCases.map(item => {
    delete require.cache[require.resolve(item)];
  });
  await browser.close();
})();
