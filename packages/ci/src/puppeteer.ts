import {join} from 'path';
import * as puppeteer from 'puppeteer';
import {createScreen} from './factory';

import {readdir,promises as fsPromise} from  'fs';
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

  let projects  = await listDirFiles(join(__dirname,"../../projects"));

  for (let project of projects) {
    let scenes = await listDirFiles(join(__dirname,"../../projects",project,'scene'));
    console.log(`项目[${project}]场景列表:${scenes}`);
    for (let scene of scenes) {
      let basePah = join(__dirname,"../../projects",project,'scene',scene);
      let useCases = await listDirFiles(basePah);

      //删除排序输入法;TODO
      let screen = createScreen(
        page,
        useCases.map(item => require(join(basePah,item))),
        join(__dirname, '场景测试'),
      );
      await screen.run();
      useCases.map(item => {
        delete require.cache[require.resolve(item)];
      });

    }



  }

  await browser.close();
})();

async function listDirFiles(dir:string):Promise<string[]>{

  try {
    await fsPromise.access(dir);
    return await  fsPromise.readdir(dir);
  } catch (err) {
    console.warn(err);
    return [];
  }

}
