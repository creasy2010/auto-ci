/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/8/22
 **/

import {UnListenFunc} from "./typings";

/**
 * 设置页面网络请求拦截处理
 * @param page
 * @param mockDataFunc
 * @returns {Promise<UnListenFunc>} 取消请求拦截设置;
 */
export async function openIntercepRequest(page, mockDataFunc): Promise<UnListenFunc> {
  await page.setRequestInterception(true);

  let interceptFunc = async interceptedRequest => {
    let mockData = await mockDataFunc();
    let method = interceptedRequest.method();
    let url = interceptedRequest.url();
    let key = `${url}:[${method}]`;

    if (mockData[key]) {
      let requestInfo = mockData[key].shift();
      if (requestInfo) {
        interceptedRequest.respond({
          status: requestInfo.response.status,
          headers: requestInfo.response.headers,
          contentType:
          requestInfo.response.headers['Content-Type'] || 'text/plain',
          body: requestInfo.response.body,
        });
        console.log('拦截后返回值: ', url);
      } else {
        console.warn('mock数据已用尽,访问真正接口 ', url, requestInfo.response.body);
        interceptedRequest.continue();
      }
    } else {
      interceptedRequest.continue();
    }
  };

  page.on('request', interceptFunc);

  return async () => {
    await page.setRequestInterception(true);
    await page.off('request', interceptFunc);
  };
}

/**
 * 等待元素, 判断是否唯一等信息;
 */
export async function waitElementVisiable(page, selector) {
  await page.waitForSelector(selector);
  let result = await page.$$(selector);

  if (result.length > 1) {
    throw new Error(`selector:${selector},会对应多个对象`);
  }
}

