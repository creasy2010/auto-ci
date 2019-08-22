import {IContext, IUtil} from "../../../../ci/typings";

/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/22
 **/

export async function exec({
  page, }:IContext,{
  sleep,log,screenshot,waitElementVisiable
}:IUtil) {

  await page.evaluate(
    `window.__testContext__.goto('/rechargeable-card-add')`,
  );
  await sleep(2);

  // await page.setViewport({ width: 2133, height: 1105 })

  log(`[clicking] `);
  await waitElementVisiable(
    page,
    '.ant-row #recharge-form_rechargeableCardName',
  );
  await page.click('.ant-row #recharge-form_rechargeableCardName');
  await sleep(1 );

  await screenshot(page, '0');

  await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
  await page.type('.ant-row #recharge-form_rechargeableCardName', '1');

  await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
  await page.type('.ant-row #recharge-form_rechargeableCardName', '2');

  await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
  await page.type('.ant-row #recharge-form_rechargeableCardName', '3');

  await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
  await page.type('.ant-row #recharge-form_rechargeableCardName', '3');

  await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
  await page.type('.ant-row #recharge-form_rechargeableCardName', '2');

  await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
  await page.type('.ant-row #recharge-form_rechargeableCardName', '4');

  await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
  await page.type('.ant-row #recharge-form_rechargeableCardName', '2');

  log(`[clicking] `);
  await waitElementVisiable(
    page,
    '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
  );
  await page.click(
    '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
  );
  await sleep(1 );

  await screenshot(page, '1');

  await page.waitForSelector(
    '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
  );
  await page.type(
    '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    '1',
  );

  await page.waitForSelector(
    '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
  );
  await page.type(
    '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    '0',
  );

  await screenshot(page, '2');

  log(`[clicking] `);
  await waitElementVisiable(
    page,
    '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
  );
  await page.click(
    '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
  );
  await sleep(1 );

  await page.waitForSelector(
    '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
  );
  await page.type(
    '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    '1',
  );

  await page.waitForSelector(
    '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
  );
  await page.type(
    '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    '0',
  );

  log(`[clicking] `);
  await waitElementVisiable(
    page,
    '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper:nth-child(2) > .ant-radio > .ant-radio-input',
  );
  await page.click(
    '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper:nth-child(2) > .ant-radio > .ant-radio-input',
  );
  await sleep(1 );

  await screenshot(page, '3');

  await page.waitForSelector(
    '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input',
  );
  await page.type(
    '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input',
    'undefined',
  );

  log(`[clicking] `);
  await waitElementVisiable(
    page,
    '.ant-radio-wrapper #recharge-form_validityDays',
  );
  await page.click('.ant-radio-wrapper #recharge-form_validityDays');
  await sleep(1 );

  await screenshot(page, '4');

  await page.waitForSelector(
    '.ant-radio-wrapper #recharge-form_validityDays',
  );
  await page.type('.ant-radio-wrapper #recharge-form_validityDays', '1');

  await page.waitForSelector(
    '.ant-radio-wrapper #recharge-form_validityDays',
  );
  await page.type('.ant-radio-wrapper #recharge-form_validityDays', '0');

  await screenshot(page, '5');

  log(`[clicking]永久有效 `);
  await waitElementVisiable(
    page,
    '.ant-form-item-control > .ant-form-item-children > .ant-radio-group > .ant-radio-wrapper:nth-child(1) > span:nth-child(2)',
  );
  await page.click(
    '.ant-form-item-control > .ant-form-item-children > .ant-radio-group > .ant-radio-wrapper:nth-child(1) > span:nth-child(2)',
  );
  await sleep(1 );

  await page.waitForSelector(
    '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input',
  );
  await page.type(
    '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input',
    'undefined',
  );

  log(`[clicking]永久有效 `);
  await waitElementVisiable(
    page,
    '.ant-form-item-control > .ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > span:nth-child(2)',
  );
  await page.click(
    '.ant-form-item-control > .ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > span:nth-child(2)',
  );
  await sleep(1 );

  await screenshot(page, '6');

  log(`[clicking] `);
  await waitElementVisiable(
    page,
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
  );
  await page.click(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
  );
  await sleep(1 );

  await page.waitForSelector(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
  );
  await page.type(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    '1',
  );

  await page.waitForSelector(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
  );
  await page.type(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    '0',
  );

  await page.waitForSelector(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
  );
  await page.type(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    '0',
  );

  await page.waitForSelector(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
  );
  await page.type(
    '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    '0',
  );

  log(`[clicking]门店收银 `);
  await waitElementVisiable(
    page,
    '.ant-form-item-control > .ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(1) > span:nth-child(2)',
  );
  await page.click(
    '.ant-form-item-control > .ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(1) > span:nth-child(2)',
  );
  await sleep(1 );

  await screenshot(page, '7');

  await page.waitForSelector(
    '.ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input',
  );
  await page.type(
    '.ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input',
    'undefined',
  );

  log(`[clicking]小程序商城 `);
  await waitElementVisiable(
    page,
    '.ant-form-item-control > .ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(2) > span:nth-child(2)',
  );
  await page.click(
    '.ant-form-item-control > .ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(2) > span:nth-child(2)',
  );
  await sleep(1 );

  await screenshot(page, '8');

  await page.waitForSelector(
    '.ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(2) > .ant-checkbox > .ant-checkbox-input',
  );
  await page.type(
    '.ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(2) > .ant-checkbox > .ant-checkbox-input',
    'undefined',
  );

  log(`[clicking]保 存 `);
  await waitElementVisiable(
    page,
    '.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col:nth-child(2) > .ant-btn',
  );
  await page.click(
    '.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col:nth-child(2) > .ant-btn',
  );
  await sleep(1 );

  await screenshot(page, '9');

  log(`[clicking]上 架 `);
  await waitElementVisiable(
    page,
    '.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn-background-ghost',
  );
  await page.click(
    '.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn-background-ghost',
  );
  await sleep(1 );

  await screenshot(page, '10');
}


export const  neworkMock = {
  'http://localhost:3001/__get-internal-source?fileName=webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fwhatwg-fetch%2Ffetch.js:[GET]': [
    {
      request: {
        method: 'GET',
        url:
          'http://localhost:3001/__get-internal-source?fileName=webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fwhatwg-fetch%2Ffetch.js',
      },
      requestId: '1000026303.663',
      response: {
        base64Encoded: false,
        body:
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>TypeError: module.originalSource is not a function<br> &nbsp; &nbsp;at getSourceById (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/react-dev-utils/evalSourceMapMiddleware.js:18:17)<br> &nbsp; &nbsp;at handleWebpackInternalMiddleware (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/react-dev-utils/evalSourceMapMiddleware.js:37:22)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at compression (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/compression/index.js:220:5)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:127:14)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:131:14)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:131:14)</pre>\n</body>\n</html>\n',
        headers: {
          Connection: 'keep-alive',
          'Content-Encoding': 'gzip',
          'Content-Security-Policy': "default-src 'self'",
          'Content-Type': 'text/html; charset=utf-8',
          Date: 'Fri, 02 Aug 2019 07:43:24 GMT',
          'Transfer-Encoding': 'chunked',
          Vary: 'Accept-Encoding',
          'X-Content-Type-Options': 'nosniff',
          'X-Powered-By': 'Express',
        },
        mimeType: 'text/html',
        status: 500,
      },
    },
    {
      request: {
        method: 'GET',
        url:
          'http://localhost:3001/__get-internal-source?fileName=webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fwhatwg-fetch%2Ffetch.js',
      },
      requestId: '1000026303.666',
      response: {
        base64Encoded: false,
        body:
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>TypeError: module.originalSource is not a function<br> &nbsp; &nbsp;at getSourceById (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/react-dev-utils/evalSourceMapMiddleware.js:18:17)<br> &nbsp; &nbsp;at handleWebpackInternalMiddleware (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/react-dev-utils/evalSourceMapMiddleware.js:37:22)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at compression (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/compression/index.js:220:5)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:127:14)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:131:14)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:131:14)</pre>\n</body>\n</html>\n',
        headers: {
          Connection: 'keep-alive',
          'Content-Encoding': 'gzip',
          'Content-Security-Policy': "default-src 'self'",
          'Content-Type': 'text/html; charset=utf-8',
          Date: 'Fri, 02 Aug 2019 07:43:43 GMT',
          'Transfer-Encoding': 'chunked',
          Vary: 'Accept-Encoding',
          'X-Content-Type-Options': 'nosniff',
          'X-Powered-By': 'Express',
        },
        mimeType: 'text/html',
        status: 500,
      },
    },
    {
      request: {
        method: 'GET',
        url:
          'http://localhost:3001/__get-internal-source?fileName=webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fwhatwg-fetch%2Ffetch.js',
      },
      requestId: '1000026303.668',
      response: {
        base64Encoded: false,
        body:
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>TypeError: module.originalSource is not a function<br> &nbsp; &nbsp;at getSourceById (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/react-dev-utils/evalSourceMapMiddleware.js:18:17)<br> &nbsp; &nbsp;at handleWebpackInternalMiddleware (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/react-dev-utils/evalSourceMapMiddleware.js:37:22)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at compression (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/compression/index.js:220:5)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:127:14)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:131:14)<br> &nbsp; &nbsp;at next (/Users/dong/wanmi/sbc/sbc-supplier/node_modules/express/lib/router/route.js:131:14)</pre>\n</body>\n</html>\n',
        headers: {
          Connection: 'keep-alive',
          'Content-Encoding': 'gzip',
          'Content-Security-Policy': "default-src 'self'",
          'Content-Type': 'text/html; charset=utf-8',
          Date: 'Fri, 02 Aug 2019 07:43:48 GMT',
          'Transfer-Encoding': 'chunked',
          Vary: 'Accept-Encoding',
          'X-Content-Type-Options': 'nosniff',
          'X-Powered-By': 'Express',
        },
        mimeType: 'text/html',
        status: 500,
      },
    },
  ],
  'https://sellerbff.s2btest.kstore.shop/marketing/rechargeable-card:[POST]': [
    {
      request: {
        method: 'POST',
        url:
          'https://sellerbff.s2btest.kstore.shop/marketing/rechargeable-card',
      },
      requestId: '1000026303.665',
      response: {headers: {}, mimeType: 'application/json', status: 200},
    },
    {
      request: {
        method: 'POST',
        url:
          'https://sellerbff.s2btest.kstore.shop/marketing/rechargeable-card',
      },
      requestId: '1000026303.667',
      response: {headers: {}, mimeType: 'application/json', status: 200},
    },
  ],
}
