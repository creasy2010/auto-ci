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
  await page.type('.ant-row #cateName','食品')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  log(`[clicking]添加子分类编辑删除 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > td:nth-child(2)');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > td:nth-child(2)'); 
      await sleep(1)
  
  log(`[clicking]添加子分类 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(2) > td > div > a:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(2) > td > div > a:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]分类名称下的节点下的节点 `);
        await waitElementVisiable('.ant-modal-body > .ant-form > .ant-row:nth-child(1) > .ant-col > .ant-form-item-control');
  await page.click('.ant-modal-body > .ant-form > .ant-row:nth-child(1) > .ant-col > .ant-form-item-control'); 
      await sleep(1)
  
  log(`[clicking]分类名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #cateName');
  await page.click('.ant-row #cateName'); 
      await sleep(1)

  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','肉类')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)

  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.11369224739061567:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.11369224739061567"},"requestId":"1000086032.1457","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":745,\"storeId\":123457687,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":793,\"storeId\":123457687,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":768,\"storeId\":123457687,\"cateName\":\"宠物零食\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":746,\"storeId\":123457687,\"cateName\":\"宠物用品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":47,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:52:25 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.33054314149170994:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.33054314149170994"},"requestId":"1000086032.1455","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCateId\":793,\"storeId\":123457687,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:52:24 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.49285481618429205:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.49285481618429205"},"requestId":"1000086032.1461","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":745,\"storeId\":123457687,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":794,\"storeId\":123457687,\"cateName\":\"肉类\",\"cateParentId\":793,\"cateGrade\":2,\"catePath\":\"0|793|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":793,\"storeId\":123457687,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":768,\"storeId\":123457687,\"cateName\":\"宠物零食\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":746,\"storeId\":123457687,\"cateName\":\"宠物用品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":47,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:52:42 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.7252351355836744:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.7252351355836744"},"requestId":"1000086032.1459","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCateId\":794,\"storeId\":123457687,\"cateName\":\"肉类\",\"cateParentId\":793,\"cateGrade\":2,\"catePath\":\"0|793|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:52:41 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};