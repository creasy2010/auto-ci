module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/customer-list')`)
      await sleep(2);
      
  
  await page.setViewport({ width: 1920, height: 1001 })
  
  log(`[clicking] `);
        await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input');
  await page.click('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','1')
  
  await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','2')
  
  await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','3')
  
  log(`[clicking]搜 索 `);
        await waitElementVisiable('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn');
  await page.click('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking] `);
        await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input');
  await page.click('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','1')
  
  await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','3')
  
  await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','1')
  
  await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','3')
  
  await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','1')
  
  await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','3')
  
  await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','1')
  
  await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
  await page.type('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input','3')
  
  log(`[clicking]搜 索 `);
        await waitElementVisiable('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn');
  await page.click('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking] `);
        await waitElementVisiable('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input');
  await page.click('.ant-row:nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input'); 
      await sleep(1)
  
  log(`[clicking]详情 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row > td > div > .mr5:nth-child(2)');
  await page.click('.ant-table-tbody > .ant-table-row > td > div > .mr5:nth-child(2)'); 
      await sleep(1)
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.12492999054189702:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.12492999054189702"},"requestId":"1000023208.235","response":{"base64Encoded":false,"body":"[{\"employeeId\":\"8a9bc76c616e61ee01616ec8d9d70000\",\"employeeName\":\"13100000000\",\"employeeMobile\":\"13100000000\"},{\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"employeeMobile\":\"17700000000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9cb454530007\",\"employeeName\":\"15800000000\",\"employeeMobile\":\"15800000000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9cc65c03000b\",\"employeeName\":\"15915900000\",\"employeeMobile\":\"15915900000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9ceb5923000c\",\"employeeName\":\"19900000000\",\"employeeMobile\":\"19900000000\"},{\"employeeId\":\"8ad0328d6bab436a016bab7c4ffa0000\",\"employeeName\":\"15599999999\",\"employeeMobile\":\"15599999999\"},{\"employeeId\":\"8ad0328d6bad3bb9016bad6bb3290007\",\"employeeName\":\"19911111111\",\"employeeMobile\":\"19911111111\"},{\"employeeId\":\"8ad0328d6bb0444e016bb0b3809d0002\",\"employeeName\":\"吴蓉\",\"employeeMobile\":\"15895875839\"},{\"employeeId\":\"8ad0328d6bb0444e016bb1ac53a10005\",\"employeeName\":\"19988881111\",\"employeeMobile\":\"19988881111\"},{\"employeeId\":\"8ad0328d6bb7f7e8016bbbcc03190002\",\"employeeName\":\"销售小吴\",\"employeeMobile\":\"15951900000\"},{\"employeeId\":\"8ad0328d6bfd856c016bfe0024ab0003\",\"employeeName\":\"19900000023\",\"employeeMobile\":\"19900000023\"},{\"employeeId\":\"8ad0328d6bfd856c016bfe002dc90004\",\"employeeName\":\"19900000023\",\"employeeMobile\":\"19900000023\"},{\"employeeId\":\"8ad0328d6c4b7480016c500f4c931164\",\"employeeName\":\"13700000012\",\"employeeMobile\":\"13700000012\"},{\"employeeId\":\"8ad0328d6c514768016c514c6ea70000\",\"employeeName\":\"13701999999\",\"employeeMobile\":\"13701999999\"},{\"employeeId\":\"8ad0328d6cd69b7e016cd718cd780018\",\"employeeName\":\"18988998899\",\"employeeMobile\":\"18988998899\"},{\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"employeeName\":\"17800000000\",\"employeeMobile\":\"17800000000\"},{\"employeeId\":\"8ad0328d6ce60888016cf129f68f0053\",\"employeeName\":\"17800000001\",\"employeeMobile\":\"17800000001\"},{\"employeeId\":\"8ad0328d6ce60888016cf12a61ad0054\",\"employeeName\":\"17800000002\",\"employeeMobile\":\"17800000002\"},{\"employeeId\":\"8ad0328d6ce60888016cf12a61ae0055\",\"employeeName\":\"17800000002\",\"employeeMobile\":\"17800000002\"},{\"employeeId\":\"8ad0328d6ce60888016cf1b8c5960056\",\"employeeName\":\"13700000013\",\"employeeMobile\":\"13700000013\"},{\"employeeId\":\"8ad0328d6ce60888016cf1baef830068\",\"employeeName\":\"13700000014\",\"employeeMobile\":\"13700000014\"},{\"employeeId\":\"8ad0328d6ce60888016cf1d970b40069\",\"employeeName\":\"17800000044\",\"employeeMobile\":\"17800000044\"}]","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:45 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.7873813548395516:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.7873813548395516"},"requestId":"1000023208.231","response":{"base64Encoded":false,"body":"[{\"employeeId\":\"8a9bc76c616e61ee01616ec8d9d70000\",\"employeeName\":\"13100000000\",\"employeeMobile\":\"13100000000\"},{\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"employeeMobile\":\"17700000000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9cb454530007\",\"employeeName\":\"15800000000\",\"employeeMobile\":\"15800000000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9cc65c03000b\",\"employeeName\":\"15915900000\",\"employeeMobile\":\"15915900000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9ceb5923000c\",\"employeeName\":\"19900000000\",\"employeeMobile\":\"19900000000\"},{\"employeeId\":\"8ad0328d6bab436a016bab7c4ffa0000\",\"employeeName\":\"15599999999\",\"employeeMobile\":\"15599999999\"},{\"employeeId\":\"8ad0328d6bad3bb9016bad6bb3290007\",\"employeeName\":\"19911111111\",\"employeeMobile\":\"19911111111\"},{\"employeeId\":\"8ad0328d6bb0444e016bb0b3809d0002\",\"employeeName\":\"吴蓉\",\"employeeMobile\":\"15895875839\"},{\"employeeId\":\"8ad0328d6bb0444e016bb1ac53a10005\",\"employeeName\":\"19988881111\",\"employeeMobile\":\"19988881111\"},{\"employeeId\":\"8ad0328d6bb7f7e8016bbbcc03190002\",\"employeeName\":\"销售小吴\",\"employeeMobile\":\"15951900000\"},{\"employeeId\":\"8ad0328d6bfd856c016bfe0024ab0003\",\"employeeName\":\"19900000023\",\"employeeMobile\":\"19900000023\"},{\"employeeId\":\"8ad0328d6bfd856c016bfe002dc90004\",\"employeeName\":\"19900000023\",\"employeeMobile\":\"19900000023\"},{\"employeeId\":\"8ad0328d6c4b7480016c500f4c931164\",\"employeeName\":\"13700000012\",\"employeeMobile\":\"13700000012\"},{\"employeeId\":\"8ad0328d6c514768016c514c6ea70000\",\"employeeName\":\"13701999999\",\"employeeMobile\":\"13701999999\"},{\"employeeId\":\"8ad0328d6cd69b7e016cd718cd780018\",\"employeeName\":\"18988998899\",\"employeeMobile\":\"18988998899\"},{\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"employeeName\":\"17800000000\",\"employeeMobile\":\"17800000000\"},{\"employeeId\":\"8ad0328d6ce60888016cf129f68f0053\",\"employeeName\":\"17800000001\",\"employeeMobile\":\"17800000001\"},{\"employeeId\":\"8ad0328d6ce60888016cf12a61ad0054\",\"employeeName\":\"17800000002\",\"employeeMobile\":\"17800000002\"},{\"employeeId\":\"8ad0328d6ce60888016cf12a61ae0055\",\"employeeName\":\"17800000002\",\"employeeMobile\":\"17800000002\"},{\"employeeId\":\"8ad0328d6ce60888016cf1b8c5960056\",\"employeeName\":\"13700000013\",\"employeeMobile\":\"13700000013\"},{\"employeeId\":\"8ad0328d6ce60888016cf1baef830068\",\"employeeName\":\"13700000014\",\"employeeMobile\":\"13700000014\"},{\"employeeId\":\"8ad0328d6ce60888016cf1d970b40069\",\"employeeName\":\"17800000044\",\"employeeMobile\":\"17800000044\"}]","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.9216595162582031:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.9216595162582031"},"requestId":"1000023208.226","response":{"base64Encoded":false,"body":"[{\"employeeId\":\"8a9bc76c616e61ee01616ec8d9d70000\",\"employeeName\":\"13100000000\",\"employeeMobile\":\"13100000000\"},{\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"employeeMobile\":\"17700000000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9cb454530007\",\"employeeName\":\"15800000000\",\"employeeMobile\":\"15800000000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9cc65c03000b\",\"employeeName\":\"15915900000\",\"employeeMobile\":\"15915900000\"},{\"employeeId\":\"8ad0328d6b9c66b8016b9ceb5923000c\",\"employeeName\":\"19900000000\",\"employeeMobile\":\"19900000000\"},{\"employeeId\":\"8ad0328d6bab436a016bab7c4ffa0000\",\"employeeName\":\"15599999999\",\"employeeMobile\":\"15599999999\"},{\"employeeId\":\"8ad0328d6bad3bb9016bad6bb3290007\",\"employeeName\":\"19911111111\",\"employeeMobile\":\"19911111111\"},{\"employeeId\":\"8ad0328d6bb0444e016bb0b3809d0002\",\"employeeName\":\"吴蓉\",\"employeeMobile\":\"15895875839\"},{\"employeeId\":\"8ad0328d6bb0444e016bb1ac53a10005\",\"employeeName\":\"19988881111\",\"employeeMobile\":\"19988881111\"},{\"employeeId\":\"8ad0328d6bb7f7e8016bbbcc03190002\",\"employeeName\":\"销售小吴\",\"employeeMobile\":\"15951900000\"},{\"employeeId\":\"8ad0328d6bfd856c016bfe0024ab0003\",\"employeeName\":\"19900000023\",\"employeeMobile\":\"19900000023\"},{\"employeeId\":\"8ad0328d6bfd856c016bfe002dc90004\",\"employeeName\":\"19900000023\",\"employeeMobile\":\"19900000023\"},{\"employeeId\":\"8ad0328d6c4b7480016c500f4c931164\",\"employeeName\":\"13700000012\",\"employeeMobile\":\"13700000012\"},{\"employeeId\":\"8ad0328d6c514768016c514c6ea70000\",\"employeeName\":\"13701999999\",\"employeeMobile\":\"13701999999\"},{\"employeeId\":\"8ad0328d6cd69b7e016cd718cd780018\",\"employeeName\":\"18988998899\",\"employeeMobile\":\"18988998899\"},{\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"employeeName\":\"17800000000\",\"employeeMobile\":\"17800000000\"},{\"employeeId\":\"8ad0328d6ce60888016cf129f68f0053\",\"employeeName\":\"17800000001\",\"employeeMobile\":\"17800000001\"},{\"employeeId\":\"8ad0328d6ce60888016cf12a61ad0054\",\"employeeName\":\"17800000002\",\"employeeMobile\":\"17800000002\"},{\"employeeId\":\"8ad0328d6ce60888016cf12a61ae0055\",\"employeeName\":\"17800000002\",\"employeeMobile\":\"17800000002\"},{\"employeeId\":\"8ad0328d6ce60888016cf1b8c5960056\",\"employeeName\":\"13700000013\",\"employeeMobile\":\"13700000013\"},{\"employeeId\":\"8ad0328d6ce60888016cf1baef830068\",\"employeeName\":\"13700000014\",\"employeeMobile\":\"13700000014\"},{\"employeeId\":\"8ad0328d6ce60888016cf1d970b40069\",\"employeeName\":\"17800000044\",\"employeeMobile\":\"17800000044\"}]","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:33 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.18440189047558864:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.18440189047558864"},"requestId":"1000023208.229","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"detailResponseList\":[{\"customerDetailId\":\"8ad0328d6ce60888016cf09e26a80049\",\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"customerAccount\":\"13131313222\",\"customerName\":\"13131313222\",\"remarkName\":\"123\",\"remark\":\"3333\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13131313222\",\"contactPhone\":\"13131313222\",\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"employeeName\":\"17800000000\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-02 14:16:32.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c65828f016c6607c8490001\",\"customerId\":\"8ad0328d6c65828f016c6607c8320000\",\"customerAccount\":\"19900022222\",\"customerName\":\"19900022222\",\"remarkName\":\"test123\",\"remark\":\"1111\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"19900022222\",\"contactPhone\":\"19900022222\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-08-06 16:24:42.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c47940a016c47c7a82608e2\",\"customerId\":\"8ad0328d6c47940a016c47c7a82608e1\",\"customerAccount\":\"15900000123\",\"customerName\":\"15900000123\",\"remarkName\":\"15900000123\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15900000123\",\"contactPhone\":\"15900000123\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-31 19:26:03.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c3b5b42016c3bc286200025\",\"customerId\":\"8ad0328d6c3b5b42016c3bc2861f0024\",\"customerAccount\":\"13500000012\",\"customerName\":\"13500000012\",\"remarkName\":\"11123\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13500000012\",\"contactPhone\":\"13500000012\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-29 11:25:00.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c1d2a90016c1e3cf1590d77\",\"customerId\":\"8ad0328d6c1d2a90016c1e3cf1590d76\",\"customerAccount\":\"15899900010\",\"customerName\":\"15899900010\",\"remarkName\":\"123132\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15899900010\",\"contactPhone\":\"15899900010\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-23 17:50:06.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c1d2a90016c1e3cf16c0d7d\",\"customerId\":\"8ad0328d6c1d2a90016c1e3cf16c0d7c\",\"customerAccount\":\"15899900012\",\"customerName\":\"15899900012\",\"remarkName\":\"123134\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15899900012\",\"contactPhone\":\"15899900012\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-23 17:50:06.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c1d2a90016c1e3cf1900d83\",\"customerId\":\"8ad0328d6c1d2a90016c1e3cf1900d82\",\"customerAccount\":\"15899900014\",\"customerName\":\"15899900014\",\"remarkName\":\"123136\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15899900014\",\"contactPhone\":\"15899900014\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-23 17:50:06.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6bab436a016bab910c2c0003\",\"customerId\":\"8ad0328d6bab436a016bab910c2a0002\",\"customerAccount\":\"18899900000\",\"customerName\":\"18899900000\",\"remarkName\":\"123123\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18899900000\",\"contactPhone\":\"18899900000\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-01 11:25:38.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[{\"masterId\":null,\"petType\":1,\"count\":1}],\"myCustomer\":false},{\"customerDetailId\":\"8ad0328d6c1d2a90016c1e3cf1ae0d89\",\"customerId\":\"8ad0328d6c1d2a90016c1e3cf1ae0d88\",\"customerAccount\":\"15899900016\",\"customerName\":\"15899900016\",\"remarkName\":\"123138\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15899900016\",\"contactPhone\":\"15899900016\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-23 17:50:06.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c1d2a90016c1e3cf10c0d5c\",\"customerId\":\"8ad0328d6c1d2a90016c1e3cf10c0d5b\",\"customerAccount\":\"15899900001\",\"customerName\":\"15899900001\",\"remarkName\":\"123123\",\"remark\":\"5\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15899900001\",\"contactPhone\":\"15899900001\",\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-23 17:50:06.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true}],\"total\":24,\"currentPage\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.3818292054836059:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.3818292054836059"},"requestId":"1000023208.233","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"detailResponseList\":[{\"customerDetailId\":\"8ad0328d6ce60888016cf09e26a80049\",\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"customerAccount\":\"13131313222\",\"customerName\":\"13131313222\",\"remarkName\":\"123\",\"remark\":\"3333\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13131313222\",\"contactPhone\":\"13131313222\",\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"employeeName\":\"17800000000\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-02 14:16:32.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true}],\"total\":1,\"currentPage\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:45 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet-order/customer/page:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet-order/customer/page"},"requestId":"1000023208.249","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"number\":0,\"size\":10,\"total\":0,\"content\":[],\"last\":true,\"first\":true,\"totalElements\":0,\"totalPages\":0,\"numberOfElements\":0,\"sort\":null}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:52 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/customer/customerDetail/8ad0328d6ce60888016cf09e26a70048:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet/customer/customerDetail/8ad0328d6ce60888016cf09e26a70048"},"requestId":"1000023208.242","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCustomer\":{\"id\":\"8ad0328d6ce60888016cf09e26ac004a\",\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"storeId\":123457607,\"companyInfoId\":852,\"storeLevelId\":null,\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"customerType\":1,\"remarkName\":\"123\",\"remark\":\"3333\",\"createPerson\":\"8ad0328d6ce60888016ceff302f40042\",\"createTime\":\"2019-09-02 14:16:32.000\",\"updatePerson\":null,\"updateTime\":null,\"customer\":{\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"customerLevelId\":1,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerAccount\":\"13131313222\",\"customerPassword\":\"0dd2835b35c59a7ab2b12af9ebcf3aa1\",\"customerPayPassword\":null,\"safeLevel\":20,\"customerSaltVal\":\"18895d24a68a4c45e6bb83081fe4f8a28000016cface94a5045b7bb3c6f3610c\",\"checkState\":1,\"delFlag\":0,\"loginIp\":null,\"loginTime\":null,\"loginErrorCount\":0,\"createTime\":\"2019-09-02 14:16:32.000\",\"createPerson\":\"8ad0328d6ce60888016ceff302f40042\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null,\"customerDetail\":{\"customerDetailId\":\"8ad0328d6ce60888016cf09e26a80049\",\"customerVO\":null,\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"customerName\":\"13131313222\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"contactName\":\"13131313222\",\"contactPhone\":\"13131313222\",\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"createTime\":\"2019-09-02 14:16:32.000\",\"createPerson\":\"8ad0328d6ce60888016ceff302f40042\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null,\"rejectReason\":null,\"forbidReason\":null,\"isDistributor\":0},\"customerType\":1,\"loginLockTime\":null,\"storeCustomerRelaListByAll\":[{\"id\":\"8ad0328d6ce60888016cf09e26ac004a\",\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"storeId\":123457607,\"companyInfoId\":852,\"storeLevelId\":null,\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"customerType\":1,\"remarkName\":\"123\",\"remark\":\"3333\",\"createPerson\":\"8ad0328d6ce60888016ceff302f40042\",\"createTime\":\"2019-09-02 14:16:32.000\",\"updatePerson\":null,\"updateTime\":null,\"customer\":null,\"thirdLoginRelation\":null}],\"distributeChannel\":null,\"payErrorTime\":0,\"payLockTime\":null,\"headImg\":null},\"thirdLoginRelation\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:51 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet/customer/customerDetail/8ad0328d6ce60888016cf09e26a70048"},"requestId":"1000023208.243","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCustomer\":{\"id\":\"8ad0328d6ce60888016cf09e26ac004a\",\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"storeId\":123457607,\"companyInfoId\":852,\"storeLevelId\":null,\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"customerType\":1,\"remarkName\":\"123\",\"remark\":\"3333\",\"createPerson\":\"8ad0328d6ce60888016ceff302f40042\",\"createTime\":\"2019-09-02 14:16:32.000\",\"updatePerson\":null,\"updateTime\":null,\"customer\":{\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"customerLevelId\":1,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerAccount\":\"13131313222\",\"customerPassword\":\"0dd2835b35c59a7ab2b12af9ebcf3aa1\",\"customerPayPassword\":null,\"safeLevel\":20,\"customerSaltVal\":\"18895d24a68a4c45e6bb83081fe4f8a28000016cface94a5045b7bb3c6f3610c\",\"checkState\":1,\"delFlag\":0,\"loginIp\":null,\"loginTime\":null,\"loginErrorCount\":0,\"createTime\":\"2019-09-02 14:16:32.000\",\"createPerson\":\"8ad0328d6ce60888016ceff302f40042\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null,\"customerDetail\":{\"customerDetailId\":\"8ad0328d6ce60888016cf09e26a80049\",\"customerVO\":null,\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"customerName\":\"13131313222\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"contactName\":\"13131313222\",\"contactPhone\":\"13131313222\",\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"createTime\":\"2019-09-02 14:16:32.000\",\"createPerson\":\"8ad0328d6ce60888016ceff302f40042\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null,\"rejectReason\":null,\"forbidReason\":null,\"isDistributor\":0},\"customerType\":1,\"loginLockTime\":null,\"storeCustomerRelaListByAll\":[{\"id\":\"8ad0328d6ce60888016cf09e26ac004a\",\"customerId\":\"8ad0328d6ce60888016cf09e26a70048\",\"storeId\":123457607,\"companyInfoId\":852,\"storeLevelId\":null,\"employeeId\":\"8ad0328d6ce60888016ceff302f40042\",\"customerType\":1,\"remarkName\":\"123\",\"remark\":\"3333\",\"createPerson\":\"8ad0328d6ce60888016ceff302f40042\",\"createTime\":\"2019-09-02 14:16:32.000\",\"updatePerson\":null,\"updateTime\":null,\"customer\":null,\"thirdLoginRelation\":null}],\"distributeChannel\":null,\"payErrorTime\":0,\"payLockTime\":null,\"headImg\":null},\"thirdLoginRelation\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:51 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/customer/storeCustomer/card/count/8ad0328d6ce60888016cf09e26ac004a:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet/customer/storeCustomer/card/count/8ad0328d6ce60888016cf09e26ac004a"},"requestId":"1000023208.247","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCustomerId\":\"8ad0328d6ce60888016cf09e26ac004a\",\"rechargeableCardNum\":0,\"timingCardNum\":0,\"couponCardNum\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:52 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/list-for-customer:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet/list-for-customer"},"requestId":"1000023208.245","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petVOList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3001","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 03 Sep 2019 14:48:51 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};