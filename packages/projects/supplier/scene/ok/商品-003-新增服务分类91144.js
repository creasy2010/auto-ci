module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/project-list')`)
      await sleep(2);
      
  
  log(`[clicking]添加服务 `);
        await waitElementVisiable('.goodsServices > .container > .search > .clearfix > .ant-btn');
  await page.click('.goodsServices > .container > .search > .clearfix > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]服务名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #pets-info_username');
  await page.click('.ant-row #pets-info_username'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','x')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xi')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','西')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','x')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xi')
  
  log(`[clicking]请输入服务名称!下的节点下的节点 `);
        await waitElementVisiable('.ant-row #pets-info_username');
  await page.click('.ant-row #pets-info_username'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','a')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao x')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao xi')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao xin')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao xing')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao xin')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao xi')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao xii')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao xii b')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ao xi ib g')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','奥西比高')
  
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
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','x')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xi')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xia')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xiao')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xiao x')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xiao xi')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xiao xin')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','xiao xing')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','小型')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','c')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ch')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','cho')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','chon')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','chong')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','chong w')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','chong wu')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','宠物')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','s')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','sh')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','shu')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','shua')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','shua x')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','shua')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','shua y')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','shua ya')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','刷牙')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','j')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','ji')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jia')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian s')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian sh')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian sha')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian sh')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian s')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian c')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian ch')
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','jian cha')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #pets-info_username')
  await page.type('.ant-row #pets-info_username','检查')
  
  log(`[clicking]请选择服务分类 `);
        await waitElementVisiable('.ant-form-item-children > #pets-info_projectCateId > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder');
  await page.click('.ant-form-item-children > #pets-info_projectCateId > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'); 
      await sleep(1)
  
  log(`[clicking]请选择服务分类 `);
        await waitElementVisiable('.ant-form-item-children > #pets-info_projectCateId > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder');
  await page.click('.ant-form-item-children > #pets-info_projectCateId > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'); 
      await sleep(1)
  
  log(`[clicking]请选择服务分类 `);
        await waitElementVisiable('.ant-form-item-children > #pets-info_projectCateId > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder');
  await page.click('.ant-form-item-children > #pets-info_projectCateId > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'); 
      await sleep(1)
  
  await page.keyboard.press('ArrowDown'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('ArrowUp'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Enter'); 
              await sleep(0.5)
      
  
  log(`[clicking]￥	下的节点 `);
        await waitElementVisiable('#pets-info_projectPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input');
  await page.click('#pets-info_projectPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input'); 
      await sleep(1)
  
  await waitElementVisiable('#pets-info_projectPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('#pets-info_projectPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','3')
  
  await waitElementVisiable('#pets-info_projectPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('#pets-info_projectPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','0')
  
  log(`[clicking]上 架 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn-background-ghost');
  await page.click('.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn-background-ghost'); 
      await sleep(1)
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/goods/item/8000016c0e1d3099207ab608681a5175:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/goods/item/8000016c0e1d3099207ab608681a5175"},"requestId":"1000086032.1488","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"itemVOList\":[{\"itemId\":\"8ad0328d6cd69d89016cd70170740000\",\"itemName\":\"cc\",\"delFlag\":0},{\"itemId\":\"8ad0328d6cdaf8b0016cdb292f0c0000\",\"itemName\":\"aa\",\"delFlag\":0},{\"itemId\":\"8ad0328d6cdaf8b0016cdb293e9c0001\",\"itemName\":\"ww\",\"delFlag\":0}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 03:00:11 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/simple-project-cate:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/simple-project-cate"},"requestId":"1000086032.1485","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"projectCateList\":[{\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectCateName\":\"猫咪寄养\"},{\"projectCateId\":\"8000016bf32385353728bfa55274928f\",\"projectCateName\":\"猫咪洗澡\"},{\"projectCateId\":\"8000016c27630be93d88ec70305d4a3e\",\"projectCateName\":\"中小型狗狗寄养\"},{\"projectCateId\":\"8000016c0e1ce9465c0921813dc6d02b\",\"projectCateName\":\"大型狗狗洗澡\"},{\"projectCateId\":\"8000016c0e1cffe627e7f4fc1e3dd291\",\"projectCateName\":\"中小型狗狗洗澡\"},{\"projectCateId\":\"1\",\"projectCateName\":\"寄养\"},{\"projectCateId\":\"8000016bf323f32f3ef28b5d466f384b\",\"projectCateName\":\"宠物游泳\"},{\"projectCateId\":\"8000016bf33fe91b1fdc95a69c81ef71\",\"projectCateName\":\"宠物行为纠正课程\"},{\"projectCateId\":\"8ad0328d6a6c0917016a6c1845f50001\",\"projectCateName\":\"宠物一般体检\"},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdef5630001\",\"projectCateName\":\"宠物生化体检\"},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdf13ca0002\",\"projectCateName\":\"宠物牙齿健康护理\"},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdf41560003\",\"projectCateName\":\"宠物脚掌脚趾关节护理计划\"}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:59:31 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/simple-project-cate"},"requestId":"1000086032.1492","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"projectCateList\":[{\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectCateName\":\"猫咪寄养\"},{\"projectCateId\":\"8000016bf32385353728bfa55274928f\",\"projectCateName\":\"猫咪洗澡\"},{\"projectCateId\":\"8000016c27630be93d88ec70305d4a3e\",\"projectCateName\":\"中小型狗狗寄养\"},{\"projectCateId\":\"8000016c0e1ce9465c0921813dc6d02b\",\"projectCateName\":\"大型狗狗洗澡\"},{\"projectCateId\":\"8000016c0e1cffe627e7f4fc1e3dd291\",\"projectCateName\":\"中小型狗狗洗澡\"},{\"projectCateId\":\"1\",\"projectCateName\":\"寄养\"},{\"projectCateId\":\"8000016bf323f32f3ef28b5d466f384b\",\"projectCateName\":\"宠物游泳\"},{\"projectCateId\":\"8000016bf33fe91b1fdc95a69c81ef71\",\"projectCateName\":\"宠物行为纠正课程\"},{\"projectCateId\":\"8ad0328d6a6c0917016a6c1845f50001\",\"projectCateName\":\"宠物一般体检\"},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdef5630001\",\"projectCateName\":\"宠物生化体检\"},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdf13ca0002\",\"projectCateName\":\"宠物牙齿健康护理\"},{\"projectCateId\":\"8ad0328d6a6ccadd016a6cdf41560003\",\"projectCateName\":\"宠物脚掌脚趾关节护理计划\"},{\"projectCateId\":\"8000016d4859677f6a8b36e9125e74b1\",\"projectCateName\":\"大型狗狗剪毛\"}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 03:00:18 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/goods/project/page:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project/page"},"requestId":"1000086032.1479","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"projectVOPage\":{\"number\":0,\"size\":20,\"total\":5,\"content\":[{\"projectId\":\"8ad0328d6d1fed26016d203546f3000b\",\"storeId\":123457687,\"projectName\":\"服务1\",\"petType\":null,\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectPrice\":5.01,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-09-11 20:03:53.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-09-11 20:03:46.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-17 17:14:22.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":1,\"projectCateName\":\"猫咪寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6ce60a3d016ce679e5790001\",\"storeId\":123457687,\"projectName\":\"ZZ\",\"petType\":null,\"projectCateId\":\"1\",\"projectPrice\":0.00,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-08-31 15:00:50.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-08-31 15:00:44.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-08-31 15:00:50.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":0,\"projectCateName\":\"寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6ce60a3d016ce679e6370002\",\"storeId\":123457687,\"projectName\":\"ZZ\",\"petType\":null,\"projectCateId\":\"1\",\"projectPrice\":0.00,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-08-31 15:00:44.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-08-31 15:00:44.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-10 10:44:04.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":1,\"projectCateName\":\"寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6cdaf8b0016cdb2994590002\",\"storeId\":123457687,\"projectName\":\"服务A\",\"petType\":null,\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectPrice\":13.00,\"barCode\":\"2132131231232s\",\"projectImg\":\"\",\"duration\":15,\"durationType\":0,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-08-29 10:17:11.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-08-29 10:17:11.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-11 17:36:59.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":3,\"projectCateName\":\"猫咪寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6cd69d89016cd701ef6f0001\",\"storeId\":123457687,\"projectName\":\"CC\",\"petType\":null,\"projectCateId\":\"1\",\"projectPrice\":5.00,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-08-28 14:55:24.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-08-28 14:55:24.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-18 09:28:20.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":1350,\"projectCateName\":\"寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]}],\"last\":true,\"totalElements\":5,\"totalPages\":1,\"numberOfElements\":5,\"first\":true,\"sort\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 02:59:29 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project/page"},"requestId":"1000086032.1493","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"projectVOPage\":{\"number\":0,\"size\":20,\"total\":6,\"content\":[{\"projectId\":\"8ad0328d6d3e5ed2016d42503ee2000a\",\"storeId\":123457687,\"projectName\":\"小型宠物检查\",\"petType\":null,\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectPrice\":30.00,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-09-18 11:00:18.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-09-18 11:00:18.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-18 11:00:18.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":0,\"projectCateName\":\"猫咪寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6d1fed26016d203546f3000b\",\"storeId\":123457687,\"projectName\":\"服务1\",\"petType\":null,\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectPrice\":5.01,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-09-11 20:03:53.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-09-11 20:03:46.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-17 17:14:22.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":1,\"projectCateName\":\"猫咪寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6ce60a3d016ce679e5790001\",\"storeId\":123457687,\"projectName\":\"ZZ\",\"petType\":null,\"projectCateId\":\"1\",\"projectPrice\":0.00,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-08-31 15:00:50.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-08-31 15:00:44.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-08-31 15:00:50.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":0,\"projectCateName\":\"寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6ce60a3d016ce679e6370002\",\"storeId\":123457687,\"projectName\":\"ZZ\",\"petType\":null,\"projectCateId\":\"1\",\"projectPrice\":0.00,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-08-31 15:00:44.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-08-31 15:00:44.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-10 10:44:04.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":1,\"projectCateName\":\"寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6cdaf8b0016cdb2994590002\",\"storeId\":123457687,\"projectName\":\"服务A\",\"petType\":null,\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectPrice\":13.00,\"barCode\":\"2132131231232s\",\"projectImg\":\"\",\"duration\":15,\"durationType\":0,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-08-29 10:17:11.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-08-29 10:17:11.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-11 17:36:59.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":3,\"projectCateName\":\"猫咪寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]},{\"projectId\":\"8ad0328d6cd69d89016cd701ef6f0001\",\"storeId\":123457687,\"projectName\":\"CC\",\"petType\":null,\"projectCateId\":\"1\",\"projectPrice\":5.00,\"barCode\":null,\"projectImg\":\"\",\"duration\":null,\"durationType\":null,\"petFeatures\":null,\"addedFlag\":1,\"addedTime\":\"2019-08-28 14:55:24.000\",\"moreFlag\":false,\"delFlag\":0,\"createTime\":\"2019-08-28 14:55:24.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":\"2019-09-18 09:28:20.000\",\"updatePerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"saleCount\":1350,\"projectCateName\":\"寄养\",\"maxPrice\":null,\"minPrice\":null,\"couponLabels\":[]}],\"last\":true,\"totalElements\":6,\"totalPages\":1,\"numberOfElements\":6,\"first\":true,\"sort\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 03:00:18 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/goods/project:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project"},"requestId":"1000086032.1490","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":\"操作成功\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 03:00:18 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};