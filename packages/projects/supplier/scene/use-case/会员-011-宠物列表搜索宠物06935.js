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
  
  log(`[clicking]所有类型
搜 索下的节点下的节点 `);
        await waitElementVisiable('.search > .clearfix > .fr > .ant-input-search > .ant-input');
  await page.click('.search > .clearfix > .fr > .ant-input-search > .ant-input'); 
      await sleep(1)
  
  await waitElementVisiable('.search > .clearfix > .fr > .ant-input-search > .ant-input')
  await page.type('.search > .clearfix > .fr > .ant-input-search > .ant-input','l')
  
  await waitElementVisiable('.search > .clearfix > .fr > .ant-input-search > .ant-input')
  await page.type('.search > .clearfix > .fr > .ant-input-search > .ant-input','la')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.search > .clearfix > .fr > .ant-input-search > .ant-input')
  await page.type('.search > .clearfix > .fr > .ant-input-search > .ant-input','la l')
  
  await waitElementVisiable('.search > .clearfix > .fr > .ant-input-search > .ant-input')
  await page.type('.search > .clearfix > .fr > .ant-input-search > .ant-input','la la')
  
  await waitElementVisiable('.search > .clearfix > .fr > .ant-input-search > .ant-input')
  await page.type('.search > .clearfix > .fr > .ant-input-search > .ant-input','lala')
  
  await page.keyboard.press('Enter'); 
              await sleep(0.5)
      
  
  log(`[clicking]搜 索 `);
        await waitElementVisiable('div > .search > .clearfix > .fr > .ant-btn');
  await page.click('div > .search > .clearfix > .fr > .ant-btn'); 
      await sleep(1)
  
  
      await screenshot( '1')
      
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.49454391702444966:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/customer/employee/allEmployees?reqId=0.49454391702444966"},"requestId":"1000086032.11581","response":{"base64Encoded":false,"body":"[{\"employeeId\":\"8ad0328d6cb7f21d016cb82ddc470001\",\"employeeName\":\"18752002531\",\"employeeMobile\":\"18752002531\"}]","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:05:48 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet/list:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet/list"},"requestId":"1000086032.11583","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petVOList\":{\"number\":0,\"size\":20,\"total\":6,\"content\":[{\"petId\":\"8ad0328d6d3e5cab016d43669560001d\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":2,\"petPhoto\":null,\"petGender\":1,\"petName\":\"lala\",\"petLength\":null,\"petWoolLength\":1,\"petWeight\":3.0,\"petBirthday\":\"2019-09-18\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":null,\"petBreedName\":\"布偶猫\"},{\"petId\":\"8ad0328d6d3e5cab016d43643d73001c\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":1,\"petPhoto\":\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201909181601252406.jpg\",\"petGender\":0,\"petName\":\"兜兜\",\"petLength\":0,\"petWoolLength\":0,\"petWeight\":1.0,\"petBirthday\":\"2019-09-18\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":null,\"petBreedName\":\"金毛\"},{\"petId\":\"8ad0328d6d3e5cab016d3e6eec6d0000\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":1,\"petPhoto\":null,\"petGender\":1,\"petName\":\"TT\",\"petLength\":null,\"petWoolLength\":null,\"petWeight\":null,\"petBirthday\":\"2019-09-17\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":1,\"petBreedId\":null,\"petBreedName\":\"柯基\"},{\"petId\":\"8ad0328d6d3e5cab016d3e6eec6e0001\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":1,\"petPhoto\":null,\"petGender\":1,\"petName\":\"TT\",\"petLength\":null,\"petWoolLength\":null,\"petWeight\":null,\"petBirthday\":\"2019-09-17\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":null,\"petBreedName\":\"柯基\"},{\"petId\":\"8ad0328d6ce60888016ce6c5bf950026\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":2,\"petPhoto\":null,\"petGender\":0,\"petName\":\"波斯猫\",\"petLength\":null,\"petWoolLength\":null,\"petWeight\":5.0,\"petBirthday\":\"2019-08-31\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":6,\"petBreedId\":\"8ad0328d6ce01b38016ce057d6880008\",\"petBreedName\":\"波斯猫\"},{\"petId\":\"8ad0328d6cd69b7e016cd6ff60310012\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":1,\"petPhoto\":null,\"petGender\":0,\"petName\":\"ZZZ\",\"petLength\":null,\"petWoolLength\":null,\"petWeight\":null,\"petBirthday\":null,\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":\"dog\",\"petBreedName\":\"其他\"}],\"last\":true,\"numberOfElements\":6,\"totalPages\":1,\"first\":true,\"sort\":null,\"totalElements\":6}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:05:49 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/pet/list"},"requestId":"1000086032.11589","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"petVOList\":{\"number\":0,\"size\":20,\"total\":1,\"content\":[{\"petId\":\"8ad0328d6d3e5cab016d43669560001d\",\"masterId\":\"8ad0328d6cb7f21d016cb8457c800005\",\"petType\":2,\"petPhoto\":null,\"petGender\":1,\"petName\":\"lala\",\"petLength\":null,\"petWoolLength\":1,\"petWeight\":3.0,\"petBirthday\":\"2019-09-18\",\"phone\":\"18752002531\",\"name\":\"18752002531\",\"remindCount\":0,\"petBreedId\":null,\"petBreedName\":\"布偶猫\"}],\"last\":true,\"numberOfElements\":1,\"totalPages\":1,\"first\":true,\"sort\":null,\"totalElements\":1}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Wed, 18 Sep 2019 08:05:56 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};