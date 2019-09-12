module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/order-list')`)
      await sleep(2);
      
  
  await page.setViewport({ width: 1920, height: 1001 })
  
  log(`[clicking] `);
        await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input');
  await page.click('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input')
  await page.type('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input','2')
  
  await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input')
  await page.type('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input','3')
  
  await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input')
  await page.type('.ant-row:nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input','4')
  
  log(`[clicking]搜 索 `);
        await waitElementVisiable('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn');
  await page.click('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]搜 索 `);
        await waitElementVisiable('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn');
  await page.click('.ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]全部 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > .ant-select-focused > .ant-select-selection > .ant-select-selection__rendered');
  await page.click('.ant-form-item-control > .ant-form-item-children > .ant-select-focused > .ant-select-selection > .ant-select-selection__rendered'); 
      await sleep(1)
  
  log(`[clicking]全部 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > .ant-select-open > .ant-select-selection > .ant-select-selection__rendered');
  await page.click('.ant-form-item-control > .ant-form-item-children > .ant-select-open > .ant-select-selection > .ant-select-selection__rendered'); 
      await sleep(1)
  
  log(`[clicking]undefined `);
        await waitElementVisiable('.ant-row:nth-child(4) > .ant-col:nth-child(2) > .ant-form-item-control:nth-child(1) > .ant-form-item-children:nth-child(1) > .ant-select:nth-child(1) > .ant-select-selection:nth-child(1) > .ant-select-arrow:nth-child(2) > .anticon:nth-child(1) > svg:nth-child(1) > path:nth-child(1)');
  await page.click('.ant-row:nth-child(4) > .ant-col:nth-child(2) > .ant-form-item-control:nth-child(1) > .ant-form-item-children:nth-child(1) > .ant-select:nth-child(1) > .ant-select-selection:nth-child(1) > .ant-select-arrow:nth-child(2) > .anticon:nth-child(1) > svg:nth-child(1) > path:nth-child(1)'); 
      await sleep(1)
  
  await page.keyboard.press('ArrowDown'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('ArrowDown'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('ArrowDown'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('ArrowDown'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('ArrowUp'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('ArrowUp'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Enter'); 
              await sleep(0.5)
      
  
  
      await screenshot( '1')
      
  
 
  },
  neworkMock :{}
};