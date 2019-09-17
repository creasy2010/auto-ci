module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/information')`)
      await sleep(2);
      
  
  
      await screenshot( '1')
      
  
  
      await screenshot( '2')
      
  
 
  },
  neworkMock :{"https://sellerbff.s2btest.kstore.shop/pet-order/wait-for-distribute-count:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet-order/wait-for-distribute-count"},"requestId":"1000071537.443","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"orderCount\":0}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 17 Sep 2019 06:59:16 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/store/appointment-center/center-detail:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/store/appointment-center/center-detail"},"requestId":"1000071537.444","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"appointmentOfCateVOList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"https://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Tue, 17 Sep 2019 06:59:16 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};