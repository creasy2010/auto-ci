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
import {createScreen} from "./factory";
import from from '../../projects/supplier/scene/use-case/form'
import login from '../../projects/supplier/scene/use-case/login'

/**
 * @desc
 *
 * @使用场景
 *
 * @Date    2019/7/27
 **/
// const puppeteer = require('puppeteer');

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

  let screen = createScreen(page,[login,from]);
  await screen.run();

  await sleep(5);

  // await compScreen();

  await browser.close();
})();
