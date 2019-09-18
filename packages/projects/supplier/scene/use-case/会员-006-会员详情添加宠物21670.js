module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/customer-list')`)
      await sleep(2);
      
  
  log(`[clicking]详情 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > .mr5:nth-child(2)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > .mr5:nth-child(2)'); 
      await sleep(1)
  
  log(`[clicking]+添加宠物 `);
        await waitElementVisiable('.slick-track > .slick-slide > div > .petsTypes > .addPetsTypes');
  await page.click('.slick-track > .slick-slide > div > .petsTypes > .addPetsTypes'); 
      await sleep(1)
  
  log(`[clicking]添加会员下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('#info_masterId > .ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
  await page.click('#info_masterId > .ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','1')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','2')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','3')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','8')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','7')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','5')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','2')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','0')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','0')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','2')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','5')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','5')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','9')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','3')
  
  await waitElementVisiable('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field')
  await page.type('.ant-col > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-search > .ant-select-search__field__wrap > .ant-select-search__field','1')
  
  log(`[clicking]18752002531(18752002531) `);
        await waitElementVisiable('div > .ant-select-dropdown > #\33 721b91d-c34d-4396-f63a-b0e52f36f57b > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item');
  await page.click('div > .ant-select-dropdown > #\33 721b91d-c34d-4396-f63a-b0e52f36f57b > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item'); 
      await sleep(1)
  
  log(`[clicking]请输入宠物品种名称查询 `);
        await waitElementVisiable('.ant-form-item-children > #info_petBreedName > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder');
  await page.click('.ant-form-item-children > #info_petBreedName > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'); 
      await sleep(1)
  
  log(`[clicking] 下的节点 `);
        await waitElementVisiable('.ant-select-selection #info_petBreedName');
  await page.click('.ant-select-selection #info_petBreedName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-select-selection #info_petBreedName')
  await page.type('.ant-select-selection #info_petBreedName','j')
  
  await waitElementVisiable('.ant-select-selection #info_petBreedName')
  await page.type('.ant-select-selection #info_petBreedName','ji')
  
  await waitElementVisiable('.ant-select-selection #info_petBreedName')
  await page.type('.ant-select-selection #info_petBreedName','jin')
  
  await waitElementVisiable('.ant-select-selection #info_petBreedName')
  await page.type('.ant-select-selection #info_petBreedName','jin m')
  
  await waitElementVisiable('.ant-select-selection #info_petBreedName')
  await page.type('.ant-select-selection #info_petBreedName','jin ma')
  
  await waitElementVisiable('.ant-select-selection #info_petBreedName')
  await page.type('.ant-select-selection #info_petBreedName','jin mao')
  
  await waitElementVisiable('.ant-select-selection #info_petBreedName')
  await page.type('.ant-select-selection #info_petBreedName','金毛')
  
  await page.keyboard.press('ArrowDown'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Enter'); 
              await sleep(0.5)
      
  
  log(`[clicking]最多可上传1张，建议尺寸 640 x 640px。下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.imageUploadeForm > .clearfix > span > .ant-upload > .ant-upload');
  await page.click('.imageUploadeForm > .clearfix > span > .ant-upload > .ant-upload'); 
      await sleep(1)
  
  log(`[clicking]最多可上传1张，建议尺寸 640 x 640px。下的节点下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.clearfix > span > .ant-upload > .ant-upload > input');
  await page.click('.clearfix > span > .ant-upload > .ant-upload > input'); 
      await sleep(1)
  
  await waitElementVisiable('.clearfix > span > .ant-upload > .ant-upload > input')
  await page.type('.clearfix > span > .ant-upload > .ant-upload > input','undefined')
  
  log(`[clicking]最多可上传1张，建议尺寸 640 x 640px。下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.imageUploadeForm > .clearfix > span > .ant-upload > .ant-upload');
  await page.click('.imageUploadeForm > .clearfix > span > .ant-upload > .ant-upload'); 
      await sleep(1)
  
  log(`[clicking]最多可上传1张，建议尺寸 640 x 640px。下的节点下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.clearfix > span > .ant-upload > .ant-upload > input');
  await page.click('.clearfix > span > .ant-upload > .ant-upload > input'); 
      await sleep(1)
  
  await waitElementVisiable('.clearfix > span > .ant-upload > .ant-upload > input')
  await page.type('.clearfix > span > .ant-upload > .ant-upload > input','undefined')
  
  log(`[clicking]请选择性别 `);
        await waitElementVisiable('.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder');
  await page.click('.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'); 
      await sleep(1)
  
  log(`[clicking]公 `);
        await waitElementVisiable('div > .ant-select-dropdown > #\39 a4529f9-6195-4dda-adb3-cc6d7fe31602 > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item:nth-child(1)');
  await page.click('div > .ant-select-dropdown > #\39 a4529f9-6195-4dda-adb3-cc6d7fe31602 > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]宠物名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #info_petName');
  await page.click('.ant-row #info_petName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #info_petName')
  await page.type('.ant-row #info_petName','d')
  
  await waitElementVisiable('.ant-row #info_petName')
  await page.type('.ant-row #info_petName','do')
  
  await waitElementVisiable('.ant-row #info_petName')
  await page.type('.ant-row #info_petName','dou')
  
  await waitElementVisiable('.ant-row #info_petName')
  await page.type('.ant-row #info_petName','dou d')
  
  await waitElementVisiable('.ant-row #info_petName')
  await page.type('.ant-row #info_petName','dou do')
  
  await waitElementVisiable('.ant-row #info_petName')
  await page.type('.ant-row #info_petName','dou dou')
  
  await waitElementVisiable('.ant-row #info_petName')
  await page.type('.ant-row #info_petName','兜兜')
  
  log(`[clicking]请选择大小 `);
        await waitElementVisiable('.ant-row:nth-child(7) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder');
  await page.click('.ant-row:nth-child(7) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'); 
      await sleep(1)
  
  log(`[clicking]迷你(25cm以内) `);
        await waitElementVisiable('div > .ant-select-dropdown > #\34 41ce7d7-4e86-4f48-ce07-b727b9781234 > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item:nth-child(1)');
  await page.click('div > .ant-select-dropdown > #\34 41ce7d7-4e86-4f48-ce07-b727b9781234 > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]请选择毛长 `);
        await waitElementVisiable('.ant-row:nth-child(8) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder');
  await page.click('.ant-row:nth-child(8) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'); 
      await sleep(1)
  
  log(`[clicking]短毛 `);
        await waitElementVisiable('div > .ant-select-dropdown > #ab7e2d6c-ab94-4cac-876d-3ea759b2368c > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item:nth-child(1)');
  await page.click('div > .ant-select-dropdown > #ab7e2d6c-ab94-4cac-876d-3ea759b2368c > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]斤下的节点 `);
        await waitElementVisiable('.ant-form-item-control #info_petWeight');
  await page.click('.ant-form-item-control #info_petWeight'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-control #info_petWeight')
  await page.type('.ant-form-item-control #info_petWeight','1')
  
  log(`[clicking]宠物生日下的节点下的节点下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > .ant-calendar-picker > div > .ant-calendar-picker-input');
  await page.click('.ant-form-item-control > .ant-form-item-children > .ant-calendar-picker > div > .ant-calendar-picker-input'); 
      await sleep(1)
  
  log(`[clicking]18 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]保 存 `);
        await waitElementVisiable('.ant-col:nth-child(1) > .ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn');
  await page.click('.ant-col:nth-child(1) > .ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn'); 
      await sleep(1)
  
  
      await screenshot( '1')
      
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.6967701225529883:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.6967701225529883"},"requestId":"1000086032.11208","response":{"base64Encoded":false,"body":"[{\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"employeeMobile\":\"18752002531\"}]","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:00:26 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.7106187408240621:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/customer/page?reqId=0.7106187408240621"},"requestId":"1000086032.11206","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"detailResponseList\":[{\"customerDetailId\":\"8ad0328d6d3e5cab016d4355ba0c001a\",\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"customerAccount\":\"18752002599\",\"customerName\":\"18752002599\",\"remarkName\":\"小馨馨\",\"remark\":\"测试\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002599\",\"contactPhone\":\"18752002599\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-18 15:45:55.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d3e5cab016d3e70d4d50003\",\"customerId\":\"8ad0328d6d3e5cab016d3e70d4d00002\",\"customerAccount\":\"15288909899\",\"customerName\":\"15288909899\",\"remarkName\":\"ces\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"15288909899\",\"contactPhone\":\"15288909899\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-17 16:57:25.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6b74908a016b77e4409f0001\",\"customerId\":\"8ad0328d6b74908a016b77e43d0c0000\",\"customerAccount\":\"18762557818\",\"customerName\":\"18762557818\",\"remarkName\":\"测 if 那个\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18762557818\",\"contactPhone\":\"18762557818\",\"employeeId\":\"8a9bc76c616e61ee01616f4516f80002\",\"employeeName\":\"朱朱朱\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":370,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-06-21 10:36:15.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c894f07016c8dea7cbf0050\",\"customerId\":\"8ad0328d6c894f07016c8dea7cb9004f\",\"customerAccount\":\"13523402178\",\"customerName\":\"13523402178\",\"remarkName\":\"13523402178\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13523402178\",\"contactPhone\":\"13523402178\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-08-14 10:17:31.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8a9bc76c65ea668e01667c7908f60056\",\"customerId\":\"8a9bc76c65ea668e01667c7908f00055\",\"customerAccount\":\"18994057975\",\"customerName\":\"无人公司\",\"remarkName\":\"无人公司\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":\"\",\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"D先生\",\"contactPhone\":\"18994057975\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":370,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2018-10-16 18:43:19.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6c2ca000016c2d2a05940005\",\"customerId\":\"8ad0328d6c2ca000016c2d2a058d0004\",\"customerAccount\":\"17824859909\",\"customerName\":\"17824859909\",\"remarkName\":\"17824859909\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"17824859909\",\"contactPhone\":\"17824859909\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-07-26 15:23:44.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6b9716a3016b97e5f5890009\",\"customerId\":\"8ad0328d6b9716a3016b97e5f5850008\",\"customerAccount\":\"18851076206\",\"customerName\":\"18851076206\",\"remarkName\":\"18851076206\",\"remark\":\"\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18851076206\",\"contactPhone\":\"18851076206\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":52,\"pointsAvailable\":380,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-06-27 15:45:59.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8a9bc76c6a006d03016a0b141f160011\",\"customerId\":\"8a9bc76c6a006d03016a0b141f110010\",\"customerAccount\":\"13072567606\",\"customerName\":\"13072567606\",\"remarkName\":\"得到的\",\"remark\":\"得到的\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"13072567606\",\"contactPhone\":\"13072567606\",\"employeeId\":\"2c8080815cd3a74a015cd3ae86850001\",\"employeeName\":\"wr123\",\"customerLevelId\":1,\"customerLevelName\":\"LV1\",\"growthValue\":10,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-04-11 14:27:09.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d042ee9016d049ee2ed0004\",\"customerId\":\"8ad0328d6d042ee9016d049ee2ec0003\",\"customerAccount\":\"18752002550\",\"customerName\":\"18752002550\",\"remarkName\":\"小鑫鑫\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002550\",\"contactPhone\":\"18752002550\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-06 11:29:45.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true},{\"customerDetailId\":\"8ad0328d6d042ee9016d049d61fa0001\",\"customerId\":\"8ad0328d6d042ee9016d049d61eb0000\",\"customerAccount\":\"18752002539\",\"customerName\":\"18752002539\",\"remarkName\":\"小鑫\",\"remark\":null,\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"checkState\":1,\"contactName\":\"18752002539\",\"contactPhone\":\"18752002539\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"customerLevelId\":null,\"customerLevelName\":null,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerType\":null,\"isDistributor\":0,\"createTime\":\"2019-09-06 11:28:06.000\",\"rejectReason\":null,\"forbidReason\":null,\"petTypeCounts\":[],\"myCustomer\":true}],\"total\":12,\"currentPage\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:00:26 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet-order/customer/page:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet-order/customer/page"},"requestId":"1000086032.11217","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"number\":0,\"size\":10,\"total\":0,\"content\":[],\"last\":true,\"numberOfElements\":0,\"totalPages\":0,\"first\":true,\"sort\":null,\"totalElements\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:00:29 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/customer/customerDetail/8ad0328d6d3e5cab016d4355ba0c0019:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet/customer/customerDetail/8ad0328d6d3e5cab016d4355ba0c0019"},"requestId":"1000086032.11212","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCustomer\":{\"id\":\"8ad0328d6d3e5cab016d4355ba0d001b\",\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"storeId\":123457687,\"companyInfoId\":931,\"storeLevelId\":null,\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"customerType\":1,\"remarkName\":\"小馨馨\",\"remark\":\"测试\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"createTime\":\"2019-09-18 15:45:55.000\",\"updatePerson\":null,\"updateTime\":null,\"customer\":{\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"customerLevelId\":1,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerAccount\":\"18752002599\",\"customerPassword\":\"a50747216c3d1cc8f9626a9053ab24cc\",\"customerPayPassword\":null,\"safeLevel\":20,\"customerSaltVal\":\"8429b5b6547071b0e870b14e357ba0258000016d49050801381d30d54aea356d\",\"checkState\":1,\"delFlag\":0,\"loginIp\":null,\"loginTime\":null,\"loginErrorCount\":0,\"createTime\":\"2019-09-18 15:45:55.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null,\"customerDetail\":{\"customerDetailId\":\"8ad0328d6d3e5cab016d4355ba0c001a\",\"customerVO\":null,\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"customerName\":\"18752002599\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"contactName\":\"18752002599\",\"contactPhone\":\"18752002599\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"createTime\":\"2019-09-18 15:45:55.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null,\"rejectReason\":null,\"forbidReason\":null,\"isDistributor\":0},\"customerType\":1,\"loginLockTime\":null,\"storeCustomerRelaListByAll\":[{\"id\":\"8ad0328d6d3e5cab016d4355ba0d001b\",\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"storeId\":123457687,\"companyInfoId\":931,\"storeLevelId\":null,\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"customerType\":1,\"remarkName\":\"小馨馨\",\"remark\":\"测试\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"createTime\":\"2019-09-18 15:45:55.000\",\"updatePerson\":null,\"updateTime\":null,\"customer\":null,\"thirdLoginRelation\":null}],\"distributeChannel\":null,\"payErrorTime\":0,\"payLockTime\":null,\"headImg\":null},\"thirdLoginRelation\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:00:28 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet/customer/customerDetail/8ad0328d6d3e5cab016d4355ba0c0019"},"requestId":"1000086032.11214","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCustomer\":{\"id\":\"8ad0328d6d3e5cab016d4355ba0d001b\",\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"storeId\":123457687,\"companyInfoId\":931,\"storeLevelId\":null,\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"customerType\":1,\"remarkName\":\"小馨馨\",\"remark\":\"测试\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"createTime\":\"2019-09-18 15:45:55.000\",\"updatePerson\":null,\"updateTime\":null,\"customer\":{\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"customerLevelId\":1,\"growthValue\":0,\"pointsAvailable\":0,\"pointsUsed\":0,\"customerAccount\":\"18752002599\",\"customerPassword\":\"a50747216c3d1cc8f9626a9053ab24cc\",\"customerPayPassword\":null,\"safeLevel\":20,\"customerSaltVal\":\"8429b5b6547071b0e870b14e357ba0258000016d49050801381d30d54aea356d\",\"checkState\":1,\"delFlag\":0,\"loginIp\":null,\"loginTime\":null,\"loginErrorCount\":0,\"createTime\":\"2019-09-18 15:45:55.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null,\"customerDetail\":{\"customerDetailId\":\"8ad0328d6d3e5cab016d4355ba0c001a\",\"customerVO\":null,\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"customerName\":\"18752002599\",\"provinceId\":null,\"cityId\":null,\"areaId\":null,\"customerAddress\":null,\"delFlag\":0,\"customerStatus\":0,\"contactName\":\"18752002599\",\"contactPhone\":\"18752002599\",\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"createTime\":\"2019-09-18 15:45:55.000\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null,\"rejectReason\":null,\"forbidReason\":null,\"isDistributor\":0},\"customerType\":1,\"loginLockTime\":null,\"storeCustomerRelaListByAll\":[{\"id\":\"8ad0328d6d3e5cab016d4355ba0d001b\",\"customerId\":\"8ad0328d6d3e5cab016d4355ba0c0019\",\"storeId\":123457687,\"companyInfoId\":931,\"storeLevelId\":null,\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"customerType\":1,\"remarkName\":\"小馨馨\",\"remark\":\"测试\",\"createPerson\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"createTime\":\"2019-09-18 15:45:55.000\",\"updatePerson\":null,\"updateTime\":null,\"customer\":null,\"thirdLoginRelation\":null}],\"distributeChannel\":null,\"payErrorTime\":0,\"payLockTime\":null,\"headImg\":null},\"thirdLoginRelation\":null}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:00:29 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/customer/storeCustomer/card/count/8ad0328d6d3e5cab016d4355ba0d001b:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet/customer/storeCustomer/card/count/8ad0328d6d3e5cab016d4355ba0d001b"},"requestId":"1000086032.11216","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeCustomerId\":\"8ad0328d6d3e5cab016d4355ba0d001b\",\"rechargeableCardNum\":0,\"timingCardNum\":0,\"couponCardNum\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:00:29 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/list-for-customer:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet/list-for-customer"},"requestId":"1000086032.11215","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petVOList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:00:29 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};