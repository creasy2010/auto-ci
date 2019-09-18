module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/customer-list')`)
      await sleep(2);
      
  
  log(`[clicking]编辑 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > .mr5:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > .mr5:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]会员备注下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #remark');
  await page.click('.ant-row #remark'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','c')
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','ce')
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','测')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','c')
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','ce')
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','ce s')
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','ce sh')
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','ce shi')
  
  await waitElementVisiable('.ant-row #remark')
  await page.type('.ant-row #remark','测试')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  
      await screenshot( '1')
      
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.45182760332820715:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.45182760332820715"},"requestId":"1000086032.11029","response":{"base64Encoded":false,"body":"[{\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"employeeMobile\":\"18752002531\"}]","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 07:46:32 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.5954682413051555:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.5954682413051555"},"requestId":"1000086032.11023","response":{"base64Encoded":false,"body":"[{\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"employeeMobile\":\"18752002531\"}]","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 07:46:21 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.8854315644250337:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.8854315644250337"},"requestId":"1000086032.11027","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"detailResponseList\":[{\"customerDetailId\":\"8ad0328d6d3e5cab016d4355ba0c001a\",\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"customerAccount\":\"18752002599\",\"customerName\":\"18752002599\",\"remarkName\":\"小馨馨\",\"remark\":\"测试\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002599\",\"contactPhone\":\"18752002599\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-18 15:45:55.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d3e5cab016d3e70d4d50003\",\"customerId\":\"8ad0328d6d3e5cab016d3e70d4d00002\",\"customerAccount\":\"15288909899\",\"customerName\":\"15288909899\",\"remarkName\":\"ces\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15288909899\",\"contactPhone\":\"15288909899\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-17 16:57:25.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6b74908a016b77e4409f0001\",\"customerId\":\"8ad0328d6b74908a016b77e43d0c0000\",\"customerAccount\":\"18762557818\",\"customerName\":\"18762557818\",\"remarkName\":\"测 if 那个\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18762557818\",\"contactPhone\":\"18762557818\",\"employeeId\":\"8a9bc76c616e61ee01616f4516f80002\",\"employeeName\":\"朱朱朱\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":370,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-06-21 10:36:15.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c894f07016c8dea7cbf0050\",\"customerId\":\"8ad0328d6c894f07016c8dea7cb9004f\",\"customerAccount\":\"13523402178\",\"customerName\":\"13523402178\",\"remarkName\":\"13523402178\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13523402178\",\"contactPhone\":\"13523402178\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-08-14 10:17:31.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8a9bc76c65ea668e01667c7908f60056\",\"customerId\":\"8a9bc76c65ea668e01667c7908f00055\",\"customerAccount\":\"18994057975\",\"customerName\":\"无人公司\",\"remarkName\":\"无人公司\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":\"\",\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"D先生\",\"contactPhone\":\"18994057975\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":370,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2018-10-16 18:43:19.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c2ca000016c2d2a05940005\",\"customerId\":\"8ad0328d6c2ca000016c2d2a058d0004\",\"customerAccount\":\"17824859909\",\"customerName\":\"17824859909\",\"remarkName\":\"17824859909\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"17824859909\",\"contactPhone\":\"17824859909\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-26 15:23:44.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6b9716a3016b97e5f5890009\",\"customerId\":\"8ad0328d6b9716a3016b97e5f5850008\",\"customerAccount\":\"18851076206\",\"customerName\":\"18851076206\",\"remarkName\":\"18851076206\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18851076206\",\"contactPhone\":\"18851076206\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-06-27 15:45:59.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8a9bc76c6a006d03016a0b141f160011\",\"customerId\":\"8a9bc76c6a006d03016a0b141f110010\",\"customerAccount\":\"13072567606\",\"customerName\":\"13072567606\",\"remarkName\":\"得到的\",\"remark\":\"得到的\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13072567606\",\"contactPhone\":\"13072567606\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":10,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-04-11 14:27:09.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d042ee9016d049ee2ed0004\",\"customerId\":\"8ad0328d6d042ee9016d049ee2ec0003\",\"customerAccount\":\"18752002550\",\"customerName\":\"18752002550\",\"remarkName\":\"小鑫鑫\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002550\",\"contactPhone\":\"18752002550\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-06 11:29:45.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d042ee9016d049d61fa0001\",\"customerId\":\"8ad0328d6d042ee9016d049d61eb0000\",\"customerAccount\":\"18752002539\",\"customerName\":\"18752002539\",\"remarkName\":\"小鑫\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002539\",\"contactPhone\":\"18752002539\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-06 11:28:06.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true}],\"total\":12,\"currentPage\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 07:46:32 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/customer/storeCustomer/modify?reqId=0.2065118260023595:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet/customer/storeCustomer/modify?reqId=0.2065118260023595"},"requestId":"1000086032.11025","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":\"操作成功\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 07:46:32 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};