module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/goods-cate')`)
      await sleep(2);
      
  
  log(`[clicking]新增一级分类 `);
        await waitElementVisiable('#page-content > div > .container > .handle-bar > .ant-btn');
  await page.click('#page-content > div > .container > .handle-bar > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]分类名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #cateName');
  await page.click('.ant-row #cateName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','g')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','一')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','x')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','xe')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','级')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','w')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','wv')
  
  await page.keyboard.press('v'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','wvo')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','分类')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName',' ')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  log(`[clicking]添加子分类 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(2) > td > div > a:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(2) > td > div > a:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]分类名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #cateName');
  await page.click('.ant-row #cateName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','f')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','fg')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','二')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','x')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','xe')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','级')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','w')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','wv')
  
  await page.keyboard.press('v'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','wvd')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','wvdo')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','wvd')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','wv')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','wvo')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','分类')
  
  log(`[clicking]分类名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #cateName');
  await page.click('.ant-row #cateName'); 
      await sleep(1)
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  log(`[clicking]一级分类下的节点 `);
        await waitElementVisiable('table > .ant-table-tbody > .ant-table-row:nth-child(2) > .namerow > .ant-table-row-expand-icon');
  await page.click('table > .ant-table-tbody > .ant-table-row:nth-child(2) > .namerow > .ant-table-row-expand-icon'); 
      await sleep(1)
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.17070598125233172:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.17070598125233172"},"requestId":"1000099791.157","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCateId\":796,\"storeId\":123457607,\"cateName\":\"二级分类\",\"cateParentId\":795,\"cateGrade\":2,\"catePath\":\"0|795|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:56:36 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.23052363424497435:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.23052363424497435"},"requestId":"1000099791.153","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCateId\":795,\"storeId\":123457607,\"cateName\":\"一级分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:56:24 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.6246684433887792:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.6246684433887792"},"requestId":"1000099791.155","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":625,\"storeId\":123457607,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":1,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":795,\"storeId\":123457607,\"cateName\":\"一级分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":738,\"storeId\":123457607,\"cateName\":\"ceshixy111\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":679,\"storeId\":123457607,\"cateName\":\"zwc\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":634,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":633,\"cateGrade\":2,\"catePath\":\"0|633|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":685,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":632,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":628,\"storeId\":123457607,\"cateName\":\"宠物用品\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":651,\"storeId\":123457607,\"cateName\":\"14\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":701,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":654,\"storeId\":123457607,\"cateName\":\"test\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":5,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":650,\"storeId\":123457607,\"cateName\":\"13\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":6,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":649,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":7,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":648,\"storeId\":123457607,\"cateName\":\"11\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":8,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":647,\"storeId\":123457607,\"cateName\":\"10\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":9,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":646,\"storeId\":123457607,\"cateName\":\"9\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":10,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":644,\"storeId\":123457607,\"cateName\":\"7\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":11,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":645,\"storeId\":123457607,\"cateName\":\"8\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":12,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":643,\"storeId\":123457607,\"cateName\":\"6\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":13,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":642,\"storeId\":123457607,\"cateName\":\"5\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":14,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":641,\"storeId\":123457607,\"cateName\":\"4\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":15,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":640,\"storeId\":123457607,\"cateName\":\"3\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":16,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":639,\"storeId\":123457607,\"cateName\":\"2\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":17,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":633,\"storeId\":123457607,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":18,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":627,\"storeId\":123457607,\"cateName\":\"1宠物生活\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":19,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:56:25 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.7321959804545362:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.7321959804545362"},"requestId":"1000099791.159","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":625,\"storeId\":123457607,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":1,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":796,\"storeId\":123457607,\"cateName\":\"二级分类\",\"cateParentId\":795,\"cateGrade\":2,\"catePath\":\"0|795|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":795,\"storeId\":123457607,\"cateName\":\"一级分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":738,\"storeId\":123457607,\"cateName\":\"ceshixy111\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":679,\"storeId\":123457607,\"cateName\":\"zwc\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":634,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":633,\"cateGrade\":2,\"catePath\":\"0|633|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":685,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":632,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":628,\"storeId\":123457607,\"cateName\":\"宠物用品\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":651,\"storeId\":123457607,\"cateName\":\"14\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":701,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":654,\"storeId\":123457607,\"cateName\":\"test\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":5,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":650,\"storeId\":123457607,\"cateName\":\"13\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":6,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":649,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":7,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":648,\"storeId\":123457607,\"cateName\":\"11\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":8,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":647,\"storeId\":123457607,\"cateName\":\"10\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":9,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":646,\"storeId\":123457607,\"cateName\":\"9\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":10,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":644,\"storeId\":123457607,\"cateName\":\"7\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":11,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":645,\"storeId\":123457607,\"cateName\":\"8\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":12,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":643,\"storeId\":123457607,\"cateName\":\"6\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":13,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":642,\"storeId\":123457607,\"cateName\":\"5\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":14,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":641,\"storeId\":123457607,\"cateName\":\"4\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":15,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":640,\"storeId\":123457607,\"cateName\":\"3\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":16,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":639,\"storeId\":123457607,\"cateName\":\"2\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":17,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":633,\"storeId\":123457607,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":18,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":627,\"storeId\":123457607,\"cateName\":\"1宠物生活\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":19,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:56:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};