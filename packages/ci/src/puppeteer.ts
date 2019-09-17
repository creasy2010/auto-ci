import { join, dirname } from "path";
import * as puppeteer from "puppeteer";
import { createScreen } from "./factory";

import { existsSync, readdir, promises as fsPromise } from "fs";
import { getProjectConfig } from "./project-config";
import { Browser } from "puppeteer";
import { Page } from "puppeteer";
/**
 * @desc
 *
 * @使用场景
 *
 * @Date    2019/7/27
 **/
import * as useCaseManager from "./use-case-manager";
import { ISceneConfig } from "../typings";

const initConfig = {};

const ProjectPath = join(__dirname, "../../projects");
(async () => {
  const browser = await puppeteer.launch({
    timeout: 10000,
    ignoreHTTPSErrors: true,
    dumpio: true,
    devtools: false,
    headless: false,
    args: ["--start-maximized"]
  });

  const [page] = await browser.pages();

  await setPage(page);

  await page.goto("http://seller.s2btest.kstore.shop/",{
    timeout:100000,
  });

  let projects = await listDirFiles(ProjectPath);

  for (let project of projects) {
    let scenes = await listDirFiles(join(ProjectPath, project, "scene"));
    console.log(`项目[${project}]场景列表:${scenes}`);

    let projectConfig = await getProjectConfig(project);

    for (let scene of scenes) {
      let sceneConfig: ISceneConfig = initConfig;

      let basePah = join(ProjectPath, project, "scene", scene);
      if (existsSync(join(basePah, "config/config.js"))) {
        sceneConfig = require(join(basePah, "config/config.js"));
      }else{
        console.warn('配置文件不存在',basePah);
      }

      let useCases = (await listDirFiles(basePah)).filter(useCaseId =>
        useCaseId.endsWith(".js")
      );


      if(sceneConfig.filter){
        useCases= sceneConfig.filter(useCases);
      }
      if(useCases.length === 0){
        continue;
      }

      let screen = createScreen(
        {
          sceneConfig,
          browserManager: getBrowserManager(browser),
          page,
          dir: join(__dirname, scene),
          projectConfig
        },
        useCases.map(item =>
          useCaseManager.loadUseCase(join(project, "scene", scene, item))
        )
      );
      try {
        await screen.run();
      } catch (err) {
        console.error("场景执行异常", err);
      }
      useCases.map(item => {
        useCaseManager.unloadUseCase(join(basePah, item));
      });
    }
  }

  await browser.close();
})();

function getBrowserManager(browser: Browser) {
  return {
    getNewPage: async (): Promise<Page> => {
      let page = await browser.newPage();
      await setPage(page);
      return page;
    }
  };
}

async function setPage(page: Page) {
  await page.setViewport({ width: 0, height: 0 });
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
