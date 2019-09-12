import {join} from 'path';
import * as puppeteer from 'puppeteer';
import {createScreen} from './factory';

import {readdir, promises as fsPromise} from 'fs';
import {getProjectConfig} from './project-config';
import {Browser} from "puppeteer";
import {Page} from "puppeteer";
/**
 * @desc
 *
 * @使用场景
 *
 * @Date    2019/7/27
 **/

(async () => {
  const browser = await puppeteer.launch({
    timeout:10000,
    ignoreHTTPSErrors: true,
    dumpio: true,
    devtools: true,
    headless: false,
    args: ['--start-maximized'],
  });

  const [page] = await browser.pages();


  await setPage(page);

  await page.goto('http://seller.s2btest.kstore.shop/');

  let projects = await listDirFiles(join(__dirname, '../../projects'));

  for (let project of projects) {
    let scenes = await listDirFiles(
      join(__dirname, '../../projects', project, 'scene'),
    );
    console.log(`项目[${project}]场景列表:${scenes}`);

    let projectConfig = await getProjectConfig(project);

    for (let scene of scenes) {
      let basePah = join(__dirname, '../../projects', project, 'scene', scene);
      let useCases = await listDirFiles(basePah);

      //删除排序输入法;TODO
      let screen = createScreen(
        {
          browserManager:getBrowserManager(browser),
          page,
          dir: join(__dirname, scene),
          projectConfig,
        },
        useCases.map(item => {
          let useCase= require(join(basePah, item));
          useCase.id =item;
          return useCase;
        }),
      );
      try {
        await screen.run();
      } catch (err) {
        console.error('场景执行异常', err);
      }
      useCases.map(item => {
        delete require.cache[require.resolve(join(basePah, item))];
      });
    }
  }

  await browser.close();
})();

function  getBrowserManager(browser:Browser){

  return {
    getNewPage:async ():Promise<Page>=>{
      let page = await browser.newPage();
      await setPage(page);
        return page;
    }
  }
}

async function setPage(page:Page){
  await page.setViewport({width: 0, height: 0});
  // page.setDefaultNavigationTimeout(5000);
  page.setDefaultTimeout(100000);
}




async function listDirFiles(dir: string): Promise<string[]> {
  try {
    await fsPromise.access(dir);
    return await fsPromise.readdir(dir);
  } catch (err) {
    console.warn(err);
    return [];
  }
}
