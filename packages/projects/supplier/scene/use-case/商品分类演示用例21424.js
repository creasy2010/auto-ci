module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/goods-cate')`)
      await sleep(2);
      
  
  await page.setViewport({ width: 1440, height: 821 })
  
  log(`[clicking] `);
        await waitElementVisiable('table > .ant-table-tbody > .ant-table-row:nth-child(2) > .namerow > .ant-table-row-expand-icon');
  await page.click('table > .ant-table-tbody > .ant-table-row:nth-child(2) > .namerow > .ant-table-row-expand-icon'); 
      await sleep(1)
  
  log(`[clicking]添加子分类 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(2) > td > div > a:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(2) > td > div > a:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking] `);
        await waitElementVisiable('.ant-row #cateName');
  await page.click('.ant-row #cateName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','1')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','1')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','1')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  
      await screenshot( '1')
      
  
  log(`[clicking]删除 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(4) > td > div > a:nth-child(2)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(4) > td > div > a:nth-child(2)'); 
      await sleep(1)
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal-content > .ant-modal-body > .ant-modal-confirm-body-wrapper > .ant-modal-confirm-btns > .ant-btn-primary');
  await page.click('.ant-modal-content > .ant-modal-body > .ant-modal-confirm-body-wrapper > .ant-modal-confirm-btns > .ant-btn-primary'); 
      await sleep(1)
  
  
      await screenshot( '2')
      
  
  await sleep(1)
  
  await sleep(1)
  
  log(`[clicking]编辑 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row-level-1 > td > div > a:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row-level-1 > td > div > a:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking] `);
        await waitElementVisiable('.ant-row #cateName');
  await page.click('.ant-row #cateName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','3')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','3')
  
  
      await screenshot( '3')
      
  
  log(`[clicking] `);
        await waitElementVisiable('.ant-row #cateName');
  await page.click('.ant-row #cateName'); 
      await sleep(1)
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','1')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','1')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','1')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/storeCate/763?reqId=0.8322440826590802:[DELETE]":[{"request":{"method":"DELETE","url":"https://sellerbff.s2btest.kstore.shop/storeCate/763?reqId=0.8322440826590802"},"requestId":"1000043840.501","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":\"操作成功\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://127.0.0.1:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Thu, 05 Sep 2019 07:21:38 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate/checkHasChild?reqId=0.26394998423344695:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/storeCate/checkHasChild?reqId=0.26394998423344695"},"requestId":"1000043840.499","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":0}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://127.0.0.1:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Thu, 05 Sep 2019 07:21:35 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate/checkHasGoods?reqId=0.7821078559924866:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/storeCate/checkHasGoods?reqId=0.7821078559924866"},"requestId":"1000043840.497","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":0}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://127.0.0.1:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Thu, 05 Sep 2019 07:21:35 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.06161088931954639:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.06161088931954639"},"requestId":"1000043840.503","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":625,\"storeId\":123457607,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":1,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":738,\"storeId\":123457607,\"cateName\":\"ceshixy222\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":679,\"storeId\":123457607,\"cateName\":\"zwc\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":634,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":633,\"cateGrade\":2,\"catePath\":\"0|633|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":685,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":632,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":628,\"storeId\":123457607,\"cateName\":\"宠物用品\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":651,\"storeId\":123457607,\"cateName\":\"14\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":701,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":654,\"storeId\":123457607,\"cateName\":\"test\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":5,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":650,\"storeId\":123457607,\"cateName\":\"13\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":6,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":649,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":7,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":648,\"storeId\":123457607,\"cateName\":\"11\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":8,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":647,\"storeId\":123457607,\"cateName\":\"10\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":9,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":646,\"storeId\":123457607,\"cateName\":\"9\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":10,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":644,\"storeId\":123457607,\"cateName\":\"7\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":11,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":645,\"storeId\":123457607,\"cateName\":\"8\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":12,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":643,\"storeId\":123457607,\"cateName\":\"6\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":13,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":642,\"storeId\":123457607,\"cateName\":\"5\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":14,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":641,\"storeId\":123457607,\"cateName\":\"4\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":15,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":640,\"storeId\":123457607,\"cateName\":\"3\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":16,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":639,\"storeId\":123457607,\"cateName\":\"2\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":17,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":633,\"storeId\":123457607,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":18,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":627,\"storeId\":123457607,\"cateName\":\"1宠物生活\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":19,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://127.0.0.1:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Thu, 05 Sep 2019 07:21:39 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.47139943863053513:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.47139943863053513"},"requestId":"1000043840.495","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":625,\"storeId\":123457607,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":1,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":738,\"storeId\":123457607,\"cateName\":\"ceshixy222\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":679,\"storeId\":123457607,\"cateName\":\"zwc\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":634,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":633,\"cateGrade\":2,\"catePath\":\"0|633|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":685,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":632,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":628,\"storeId\":123457607,\"cateName\":\"宠物用品\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":763,\"storeId\":123457607,\"cateName\":\"111\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":651,\"storeId\":123457607,\"cateName\":\"14\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":701,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":654,\"storeId\":123457607,\"cateName\":\"test\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":5,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":650,\"storeId\":123457607,\"cateName\":\"13\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":6,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":649,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":7,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":648,\"storeId\":123457607,\"cateName\":\"11\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":8,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":647,\"storeId\":123457607,\"cateName\":\"10\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":9,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":646,\"storeId\":123457607,\"cateName\":\"9\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":10,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":644,\"storeId\":123457607,\"cateName\":\"7\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":11,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":645,\"storeId\":123457607,\"cateName\":\"8\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":12,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":643,\"storeId\":123457607,\"cateName\":\"6\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":13,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":642,\"storeId\":123457607,\"cateName\":\"5\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":14,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":641,\"storeId\":123457607,\"cateName\":\"4\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":15,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":640,\"storeId\":123457607,\"cateName\":\"3\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":16,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":639,\"storeId\":123457607,\"cateName\":\"2\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":17,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":633,\"storeId\":123457607,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":18,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":627,\"storeId\":123457607,\"cateName\":\"1宠物生活\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":19,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://127.0.0.1:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Thu, 05 Sep 2019 07:21:29 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.5278737926065835:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.5278737926065835"},"requestId":"1000043840.493","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCateId\":763,\"storeId\":123457607,\"cateName\":\"111\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://127.0.0.1:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Thu, 05 Sep 2019 07:21:28 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.8978097465368602:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.8978097465368602"},"requestId":"1000043840.508","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":625,\"storeId\":123457607,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":1,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":738,\"storeId\":123457607,\"cateName\":\"ceshixy111\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":679,\"storeId\":123457607,\"cateName\":\"zwc\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":634,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":633,\"cateGrade\":2,\"catePath\":\"0|633|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":685,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":632,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":628,\"storeId\":123457607,\"cateName\":\"宠物用品\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":651,\"storeId\":123457607,\"cateName\":\"14\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":701,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":654,\"storeId\":123457607,\"cateName\":\"test\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":5,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":650,\"storeId\":123457607,\"cateName\":\"13\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":6,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":649,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":7,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":648,\"storeId\":123457607,\"cateName\":\"11\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":8,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":647,\"storeId\":123457607,\"cateName\":\"10\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":9,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":646,\"storeId\":123457607,\"cateName\":\"9\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":10,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":644,\"storeId\":123457607,\"cateName\":\"7\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":11,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":645,\"storeId\":123457607,\"cateName\":\"8\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":12,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":643,\"storeId\":123457607,\"cateName\":\"6\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":13,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":642,\"storeId\":123457607,\"cateName\":\"5\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":14,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":641,\"storeId\":123457607,\"cateName\":\"4\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":15,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":640,\"storeId\":123457607,\"cateName\":\"3\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":16,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":639,\"storeId\":123457607,\"cateName\":\"2\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":17,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":633,\"storeId\":123457607,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":18,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":627,\"storeId\":123457607,\"cateName\":\"1宠物生活\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":19,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://127.0.0.1:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Thu, 05 Sep 2019 07:22:07 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.9360487709795997:[PUT]":[{"request":{"method":"PUT","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.9360487709795997"},"requestId":"1000043840.506","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":\"操作成功\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://127.0.0.1:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Thu, 05 Sep 2019 07:22:06 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};