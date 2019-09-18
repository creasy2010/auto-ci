module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/customer-list')`)
      await sleep(2);
      
  
  log(`[clicking]宠物列表 `);
        await waitElementVisiable('.ant-menu > .ant-menu-submenu > #\30_0\$Menu > .ant-menu-item:nth-child(2) > a');
  await page.click('.ant-menu > .ant-menu-submenu > #\30_0\$Menu > .ant-menu-item:nth-child(2) > a'); 
      await sleep(1)
  
  log(`[clicking]添加 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(5) > .opt > .btn');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(5) > .opt > .btn'); 
      await sleep(1)
  
  log(`[clicking]提醒日期下的节点下的节点下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > #info_remindDate > div > .ant-calendar-picker-input');
  await page.click('.ant-form-item-control > .ant-form-item-children > #info_remindDate > div > .ant-calendar-picker-input'); 
      await sleep(1)
  
  log(`[clicking]19 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-cell:nth-child(4) > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-cell:nth-child(4) > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]提醒内容下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #info_remindContent');
  await page.click('.ant-row #info_remindContent'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','x')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','x h')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','xhi')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','xhi f')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','xhi fa')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','xhi fan')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','xhifan')
  
  await page.keyboard.press('Enter'); 
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
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','c')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','ch')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','chi')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','chi f')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','chi fa')
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','chi fan')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #info_remindContent')
  await page.type('.ant-row #info_remindContent','chifan')
  
  await page.keyboard.press('Enter'); 
              await sleep(0.5)
      
  
  log(`[clicking]添加提醒 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn');
  await page.click('.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]删除 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row > td > .opt > .btn');
  await page.click('.ant-table-tbody > .ant-table-row > td > .opt > .btn'); 
      await sleep(1)
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-popover-inner > div > .ant-popover-inner-content > .del-cate > .mr20');
  await page.click('.ant-popover-inner > div > .ant-popover-inner-content > .del-cate > .mr20'); 
      await sleep(1)
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.7053030404002767:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.7053030404002767"},"requestId":"1000086032.11558","response":{"base64Encoded":false,"body":"[{\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"employeeMobile\":\"18752002531\"}]","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:04:55 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.38245671464887265:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.38245671464887265"},"requestId":"1000086032.11556","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"detailResponseList\":[{\"customerDetailId\":\"8ad0328d6d3e5cab016d4355ba0c001a\",\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"customerAccount\":\"18752002599\",\"customerName\":\"18752002599\",\"remarkName\":\"小馨馨\",\"remark\":\"测试\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002599\",\"contactPhone\":\"18752002599\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-18 15:45:55.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d3e5cab016d3e70d4d50003\",\"customerId\":\"8ad0328d6d3e5cab016d3e70d4d00002\",\"customerAccount\":\"15288909899\",\"customerName\":\"15288909899\",\"remarkName\":\"ces\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15288909899\",\"contactPhone\":\"15288909899\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-17 16:57:25.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6b74908a016b77e4409f0001\",\"customerId\":\"8ad0328d6b74908a016b77e43d0c0000\",\"customerAccount\":\"18762557818\",\"customerName\":\"18762557818\",\"remarkName\":\"测 if 那个\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18762557818\",\"contactPhone\":\"18762557818\",\"employeeId\":\"8a9bc76c616e61ee01616f4516f80002\",\"employeeName\":\"朱朱朱\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":370,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-06-21 10:36:15.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c894f07016c8dea7cbf0050\",\"customerId\":\"8ad0328d6c894f07016c8dea7cb9004f\",\"customerAccount\":\"13523402178\",\"customerName\":\"13523402178\",\"remarkName\":\"13523402178\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13523402178\",\"contactPhone\":\"13523402178\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-08-14 10:17:31.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8a9bc76c65ea668e01667c7908f60056\",\"customerId\":\"8a9bc76c65ea668e01667c7908f00055\",\"customerAccount\":\"18994057975\",\"customerName\":\"无人公司\",\"remarkName\":\"无人公司\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":\"\",\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"D先生\",\"contactPhone\":\"18994057975\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":370,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2018-10-16 18:43:19.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c2ca000016c2d2a05940005\",\"customerId\":\"8ad0328d6c2ca000016c2d2a058d0004\",\"customerAccount\":\"17824859909\",\"customerName\":\"17824859909\",\"remarkName\":\"17824859909\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"17824859909\",\"contactPhone\":\"17824859909\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-26 15:23:44.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6b9716a3016b97e5f5890009\",\"customerId\":\"8ad0328d6b9716a3016b97e5f5850008\",\"customerAccount\":\"18851076206\",\"customerName\":\"18851076206\",\"remarkName\":\"18851076206\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18851076206\",\"contactPhone\":\"18851076206\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-06-27 15:45:59.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8a9bc76c6a006d03016a0b141f160011\",\"customerId\":\"8a9bc76c6a006d03016a0b141f110010\",\"customerAccount\":\"13072567606\",\"customerName\":\"13072567606\",\"remarkName\":\"得到的\",\"remark\":\"得到的\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13072567606\",\"contactPhone\":\"13072567606\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":10,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-04-11 14:27:09.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d042ee9016d049ee2ed0004\",\"customerId\":\"8ad0328d6d042ee9016d049ee2ec0003\",\"customerAccount\":\"18752002550\",\"customerName\":\"18752002550\",\"remarkName\":\"小鑫鑫\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002550\",\"contactPhone\":\"18752002550\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-06 11:29:45.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d042ee9016d049d61fa0001\",\"customerId\":\"8ad0328d6d042ee9016d049d61eb0000\",\"customerAccount\":\"18752002539\",\"customerName\":\"18752002539\",\"remarkName\":\"小鑫\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002539\",\"contactPhone\":\"18752002539\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-06 11:28:06.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true}],\"total\":12,\"currentPage\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:04:54 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet-remind/list:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet-remind/list"},"requestId":"1000086032.11571","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petRemindVOList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:04:58 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet-remind/list"},"requestId":"1000086032.11574","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petRemindVOList\":[{\"id\":\"8ad0328d6d3e5cab016d43675e6c001e\",\"remindDate\":\"2019-09-19\",\"remindContent\":\"chifan\",\"petId\":\"8ad0328d6d3e5cab016d43669560001d\"}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:05:11 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet-remind/list"},"requestId":"1000086032.11576","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petRemindVOList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:05:22 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet-remind:[DELETE]":[{"request":{"method":"DELETE","url":"https://sellerbff.s2btest.kstore.shop/pet-remind"},"requestId":"1000086032.11575","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":\"操作成功\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:05:21 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet-remind:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet-remind"},"requestId":"1000086032.11573","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":\"操作成功\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:05:10 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/8ad0328d6d3e5cab016d43669560001d:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet/8ad0328d6d3e5cab016d43669560001d"},"requestId":"1000086032.11569","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petVO\":{\"petId\":\"8ad0328d6d3e5cab016d43669560001d\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"storeEmployeeRela\":null,\"petType\":2,\"petPhoto\":null,\"petGender\":1,\"petName\":\"lala\",\"petLength\":null,\"petWoolLength\":1,\"petWeight\":3.0,\"petBirthday\":\"2019-09-18\",\"petBreedId\":null,\"petBreedName\":\"布偶猫\",\"storeId\":123457687,\"lastedPetRemindVO\":null,\"customerName\":null,\"customerMobile\":null,\"recentPetRecordVO\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:04:58 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/list:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet/list"},"requestId":"1000086032.11560","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petVOList\":{\"number\":0,\"size\":20,\"total\":6,\"content\":[{\"petId\":\"8ad0328d6d3e5cab016d43669560001d\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":2,\"petPhoto\":null,\"petGender\":1,\"petName\":\"lala\",\"petLength\":null,\"petWoolLength\":1,\"petWeight\":3.0,\"petBirthday\":\"2019-09-18\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":null,\"petBreedName\":\"布偶猫\"},{\"petId\":\"8ad0328d6d3e5cab016d43643d73001c\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":1,\"petPhoto\":\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201909181601252406.jpg\",\"petGender\":0,\"petName\":\"兜兜\",\"petLength\":0,\"petWoolLength\":0,\"petWeight\":1.0,\"petBirthday\":\"2019-09-18\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":null,\"petBreedName\":\"金毛\"},{\"petId\":\"8ad0328d6d3e5cab016d3e6eec6d0000\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":1,\"petPhoto\":null,\"petGender\":1,\"petName\":\"TT\",\"petLength\":null,\"petWoolLength\":null,\"petWeight\":null,\"petBirthday\":\"2019-09-17\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":1,\"petBreedId\":null,\"petBreedName\":\"柯基\"},{\"petId\":\"8ad0328d6d3e5cab016d3e6eec6e0001\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":1,\"petPhoto\":null,\"petGender\":1,\"petName\":\"TT\",\"petLength\":null,\"petWoolLength\":null,\"petWeight\":null,\"petBirthday\":\"2019-09-17\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":null,\"petBreedName\":\"柯基\"},{\"petId\":\"8ad0328d6ce60888016ce6c5bf950026\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":2,\"petPhoto\":null,\"petGender\":0,\"petName\":\"波斯猫\",\"petLength\":null,\"petWoolLength\":null,\"petWeight\":5.0,\"petBirthday\":\"2019-08-31\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":6,\"petBreedId\":\"8ad0328d6ce01b38016ce057d6880008\",\"petBreedName\":\"波斯猫\"},{\"petId\":\"8ad0328d6cd69b7e016cd6ff60310012\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":1,\"petPhoto\":null,\"petGender\":0,\"petName\":\"ZZZ\",\"petLength\":null,\"petWoolLength\":null,\"petWeight\":null,\"petBirthday\":null,\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":\"dog\",\"petBreedName\":\"其他\"}],\"last\":true,\"numberOfElements\":6,\"totalPages\":1,\"first\":true,\"sort\":null,\"totalElements\":6}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:04:55 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};