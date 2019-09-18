module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/project-cate-list')`)
      await sleep(2);
      
  
  log(`[clicking]新建分类 `);
        await waitElementVisiable('.goodsServiceCate > .container > .search > .clearfix > .ant-btn');
  await page.click('.goodsServiceCate > .container > .search > .clearfix > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]分类名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #list_projectCateName');
  await page.click('.ant-row #list_projectCateName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','d')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','da')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','da x')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','大型')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','g')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','go')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','gou')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','gou g')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','狗狗')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','x')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','xi')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','xi z')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','洗澡')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  log(`[clicking]分类名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #list_projectCateName');
  await page.click('.ant-row #list_projectCateName'); 
      await sleep(1)
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','x')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','xi')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','xiu')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','xiu m')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','秀美')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','j')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','ji')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','jia')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','jian')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','jian m')
  
  await waitElementVisiable('.ant-row #list_projectCateName')
  await page.type('.ant-row #list_projectCateName','剪毛')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
 
  },
  neworkMock :{"https://seller.s2btest.kstore.shop/__get-internal-source?fileName=webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fregenerator-runtime%2Fruntime.js:[GET]":[{"request":{"method":"GET","url":"https://seller.s2btest.kstore.shop/__get-internal-source?fileName=webpack-internal%3A%2F%2F%2F.%2Fnode_modules%2Fregenerator-runtime%2Fruntime.js"},"requestId":"1000086032.1358","response":{"base64Encoded":false,"body":"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link id=\"icoLink\" rel=\"shortcut icon\" href=\"\" type=\"image/x-icon\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\n    />\n\n    <script\n      type=\"text/javascript\"\n      src=\"/javascript/dll/vendor.dll.js\"\n    ></script>\n    <title>宠掌柜商家后台</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id=\"root\"></div>\n  <script src=\"/static/js/bundle.js?t=1568710293027\"></script><script src=\"/static/js/40.chunk.js?t=1568710293028\"></script><script src=\"/static/js/main.chunk.js?t=1568710293028\"></script></body>\n</html>\n","headers":{"Accept-Ranges":"bytes","Connection":"keep-alive","Content-Length":"715","Content-Security-Policy":"upgrade-insecure-requests","Content-Type":"text/html; charset=utf-8","Date":"Wed, 18 Sep 2019 01:43:07 GMT","ETag":"\"5d80a026-2cb\"","Last-Modified":"Tue, 17 Sep 2019 08:58:14 GMT","Server":"nginx/1.10.3"},"mimeType":"text/html","status":200}}],"https://seller.s2btest.kstore.shop/__get-internal-source?fileName=webpack-internal%3A%2F%2F%2F.%2Fweb_modules%2Fapi%2Ffetch.ts:[GET]":[{"request":{"method":"GET","url":"https://seller.s2btest.kstore.shop/__get-internal-source?fileName=webpack-internal%3A%2F%2F%2F.%2Fweb_modules%2Fapi%2Ffetch.ts"},"requestId":"1000086032.1357","response":{"base64Encoded":false,"body":"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link id=\"icoLink\" rel=\"shortcut icon\" href=\"\" type=\"image/x-icon\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\n    />\n\n    <script\n      type=\"text/javascript\"\n      src=\"/javascript/dll/vendor.dll.js\"\n    ></script>\n    <title>宠掌柜商家后台</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id=\"root\"></div>\n  <script src=\"/static/js/bundle.js?t=1568710293027\"></script><script src=\"/static/js/40.chunk.js?t=1568710293028\"></script><script src=\"/static/js/main.chunk.js?t=1568710293028\"></script></body>\n</html>\n","headers":{"Connection":"keep-alive","Content-Security-Policy":"upgrade-insecure-requests","Date":"Wed, 18 Sep 2019 01:43:07 GMT","ETag":"\"5d80a026-2cb\"","Last-Modified":"Tue, 17 Sep 2019 08:58:14 GMT","Server":"nginx/1.10.3"},"mimeType":"text/html","status":304}}],"https://seller.s2btest.kstore.shop/babel/runtime/helpers/esm/asyncToGenerator.js:[GET]":[{"request":{"method":"GET","url":"https://seller.s2btest.kstore.shop/babel/runtime/helpers/esm/asyncToGenerator.js"},"requestId":"1000086032.1359","response":{"base64Encoded":false,"body":"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link id=\"icoLink\" rel=\"shortcut icon\" href=\"\" type=\"image/x-icon\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\n    />\n\n    <script\n      type=\"text/javascript\"\n      src=\"/javascript/dll/vendor.dll.js\"\n    ></script>\n    <title>宠掌柜商家后台</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id=\"root\"></div>\n  <script src=\"/static/js/bundle.js?t=1568710293027\"></script><script src=\"/static/js/40.chunk.js?t=1568710293028\"></script><script src=\"/static/js/main.chunk.js?t=1568710293028\"></script></body>\n</html>\n","headers":{"Accept-Ranges":"bytes","Connection":"keep-alive","Content-Length":"715","Content-Security-Policy":"upgrade-insecure-requests","Content-Type":"text/html; charset=utf-8","Date":"Wed, 18 Sep 2019 01:43:07 GMT","ETag":"\"5d80a026-2cb\"","Last-Modified":"Tue, 17 Sep 2019 08:58:14 GMT","Server":"nginx/1.10.3"},"mimeType":"text/html","status":200}}],"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/page:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/page"},"requestId":"1000086032.1354","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"projectCatePage\":{\"number\":0,\"size\":100,\"total\":12,\"content\":[{\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectCateName\":\"猫咪寄养\",\"petTypes\":[1,2],\"itemCount\":3,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016bf32385353728bfa55274928f\",\"projectCateName\":\"猫咪洗澡\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016c27630be93d88ec70305d4a3e\",\"projectCateName\":\"中小型狗狗寄养\",\"petTypes\":[1,2],\"itemCount\":3,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016c0e1ce9465c0921813dc6d02b\",\"projectCateName\":\"大型狗狗洗澡\",\"petTypes\":[1,2],\"itemCount\":3,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016c0e1cffe627e7f4fc1e3dd291\",\"projectCateName\":\"中小型狗狗洗澡\",\"petTypes\":[1,2],\"itemCount\":8,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"1\",\"projectCateName\":\"寄养\",\"petTypes\":[1,2],\"itemCount\":4,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016bf323f32f3ef28b5d466f384b\",\"projectCateName\":\"宠物游泳\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016bf33fe91b1fdc95a69c81ef71\",\"projectCateName\":\"宠物行为纠正课程\",\"petTypes\":[1,2],\"itemCount\":7,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8ad0328d6a6c0917016a6c1845f50001\",\"projectCateName\":\"宠物一般体检\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdef5630001\",\"projectCateName\":\"宠物生化体检\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdf13ca0002\",\"projectCateName\":\"宠物牙齿健康护理\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdf41560003\",\"projectCateName\":\"宠物脚掌脚趾关节护理计划\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true}],\"last\":true,\"totalElements\":12,\"totalPages\":1,\"numberOfElements\":12,\"first\":true,\"sort\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 01:42:52 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/page"},"requestId":"1000086032.1361","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"projectCatePage\":{\"number\":0,\"size\":100,\"total\":13,\"content\":[{\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectCateName\":\"猫咪寄养\",\"petTypes\":[1,2],\"itemCount\":3,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016bf32385353728bfa55274928f\",\"projectCateName\":\"猫咪洗澡\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016c27630be93d88ec70305d4a3e\",\"projectCateName\":\"中小型狗狗寄养\",\"petTypes\":[1,2],\"itemCount\":3,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016c0e1ce9465c0921813dc6d02b\",\"projectCateName\":\"大型狗狗洗澡\",\"petTypes\":[1,2],\"itemCount\":3,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016c0e1cffe627e7f4fc1e3dd291\",\"projectCateName\":\"中小型狗狗洗澡\",\"petTypes\":[1,2],\"itemCount\":8,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"1\",\"projectCateName\":\"寄养\",\"petTypes\":[1,2],\"itemCount\":4,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016bf323f32f3ef28b5d466f384b\",\"projectCateName\":\"宠物游泳\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016bf33fe91b1fdc95a69c81ef71\",\"projectCateName\":\"宠物行为纠正课程\",\"petTypes\":[1,2],\"itemCount\":7,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8ad0328d6a6c0917016a6c1845f50001\",\"projectCateName\":\"宠物一般体检\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdef5630001\",\"projectCateName\":\"宠物生化体检\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdf13ca0002\",\"projectCateName\":\"宠物牙齿健康护理\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdf41560003\",\"projectCateName\":\"宠物脚掌脚趾关节护理计划\",\"petTypes\":[1,2],\"itemCount\":0,\"showFlag\":true,\"sysFlag\":true},{\"projectCateId\":\"8000016d4859677f6a8b36e9125e74b1\",\"projectCateName\":\"大型狗狗剪毛\",\"petTypes\":null,\"itemCount\":0,\"showFlag\":true,\"sysFlag\":false}],\"last\":true,\"totalElements\":13,\"totalPages\":1,\"numberOfElements\":13,\"first\":true,\"sort\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 01:43:23 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store"},"requestId":"1000086032.1356","response":{"base64Encoded":false,"body":"{\"code\":\"K-030802\",\"message\":\"服务分类名称已存在\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 01:43:07 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store"},"requestId":"1000086032.1360","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":\"操作成功\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 01:43:23 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};