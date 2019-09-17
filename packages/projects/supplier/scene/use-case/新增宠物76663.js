module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/goods-list')`)
      await sleep(2);
      
  
  log(`[clicking]商品分类 `);
        await waitElementVisiable('.ant-menu > .ant-menu-submenu > #\30_0\$Menu > .ant-menu-item-active > a');
  await page.click('.ant-menu > .ant-menu-submenu > #\30_0\$Menu > .ant-menu-item-active > a'); 
      await sleep(1)
  
  log(`[clicking]新增一级分类 `);
        await waitElementVisiable('#page-content > div > .container > .handle-bar > .ant-btn');
  await page.click('#page-content > div > .container > .handle-bar > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]分类名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #cateName');
  await page.click('.ant-row #cateName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','c')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','ch')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','cho')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','chon')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','chong')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','chong s')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','chong s w')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','chong swu')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','宠物')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','y')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','yo')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','yon')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','yong')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','yong p')
  
  await waitElementVisiable('.ant-row #cateName')
  await page.type('.ant-row #cateName','用品')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  
      await screenshot( '1')
      
  
  log(`[clicking]宠物用品 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > .namerow');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > .namerow'); 
      await sleep(1)
  
  log(`[clicking]宠物用品 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > .namerow');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > .namerow'); 
      await sleep(1)
  
 
  },
  neworkMock :{"https://shopbff.chongzhanggui.cn/contract/goods/brand/list?reqId=0.7583832679743576:[GET]":[{"request":{"method":"GET","url":"https://shopbff.chongzhanggui.cn/contract/goods/brand/list?reqId=0.7583832679743576"},"requestId":"1000041313.1173","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://shop.chongzhanggui.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Mon, 16 Sep 2019 03:30:32 GMT","Keep-Alive":"timeout=120","Server":"nginx/1.14.2","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://shopbff.chongzhanggui.cn/storeCate?reqId=0.022584241442149322:[GET]":[{"request":{"method":"GET","url":"https://shopbff.chongzhanggui.cn/storeCate?reqId=0.022584241442149322"},"requestId":"1000041313.1182","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":651,\"storeId\":123457629,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":660,\"storeId\":123457629,\"cateName\":\"宠物用品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457629,\"cateName\":\"宠物零食\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://shop.chongzhanggui.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Mon, 16 Sep 2019 03:30:45 GMT","Keep-Alive":"timeout=120","Server":"nginx/1.14.2","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://shopbff.chongzhanggui.cn/storeCate?reqId=0.6202860332095768:[POST]":[{"request":{"method":"POST","url":"https://shopbff.chongzhanggui.cn/storeCate?reqId=0.6202860332095768"},"requestId":"1000041313.1180","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCateId\":660,\"storeId\":123457629,\"cateName\":\"宠物用品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://shop.chongzhanggui.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Mon, 16 Sep 2019 03:30:43 GMT","Keep-Alive":"timeout=120","Server":"nginx/1.14.2","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://shopbff.chongzhanggui.cn/storeCate?reqId=0.7585482751973964:[GET]":[{"request":{"method":"GET","url":"https://shopbff.chongzhanggui.cn/storeCate?reqId=0.7585482751973964"},"requestId":"1000041313.1178","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":651,\"storeId\":123457629,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457629,\"cateName\":\"宠物零食\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://shop.chongzhanggui.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Mon, 16 Sep 2019 03:30:34 GMT","Keep-Alive":"timeout=120","Server":"nginx/1.14.2","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://shopbff.chongzhanggui.cn/storeCate?reqId=0.8237574518914828:[GET]":[{"request":{"method":"GET","url":"https://shopbff.chongzhanggui.cn/storeCate?reqId=0.8237574518914828"},"requestId":"1000041313.1171","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":651,\"storeId\":123457629,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":0,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457629,\"cateName\":\"宠物零食\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://shop.chongzhanggui.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Mon, 16 Sep 2019 03:30:32 GMT","Keep-Alive":"timeout=120","Server":"nginx/1.14.2","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};