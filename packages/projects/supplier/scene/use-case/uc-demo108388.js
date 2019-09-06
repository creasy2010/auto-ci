module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/login')`)
      await sleep(2);
      
  
  await waitElementVisiable('.ant-row #input-form_account')
  await page.type('.ant-row #input-form_account','undefined')
  
  await waitElementVisiable('.ant-row #input-form_password')
  await page.type('.ant-row #input-form_password','undefined')
  
  log(`[clicking]登录 `);
        await waitElementVisiable('.login > .right-login-info > .form-box > .ant-form > .btn');
  await page.click('.login > .right-login-info > .form-box > .ant-form > .btn'); 
      await sleep(1)
  
  log(`[clicking]应用中心 `);
        await waitElementVisiable('.header > .display > .ant-menu > .ant-menu-item:nth-child(6) > a');
  await page.click('.header > .display > .ant-menu > .ant-menu-item:nth-child(6) > a'); 
      await sleep(1)
  
  log(`[clicking]优惠券

结账时抵用消费金额，刺激用户消费 `);
        await waitElementVisiable('.container > .appsMain > .ant-row:nth-child(4) > .ant-col > .createMarket');
  await page.click('.container > .appsMain > .ant-row:nth-child(4) > .ant-col > .createMarket'); 
      await sleep(1)
  
  log(`[clicking]创建优惠券 `);
        await waitElementVisiable('#page-content > div > .container > .handle-bar > .ant-btn');
  await page.click('#page-content > div > .container > .handle-bar > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]优惠券名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #couponName');
  await page.click('.ant-row #couponName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','g')
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','u')
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','a')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','n')
  
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
      
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','d')
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','de')
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','dem')
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','demo')
  
  await waitElementVisiable('.ant-row #couponName')
  await page.type('.ant-row #couponName','demo')
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-radio-wrapper > span > #rangeDay > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)');
  await page.click('.ant-radio-wrapper > span > #rangeDay > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]29 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]  元下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-control #denomination');
  await page.click('.ant-form-item-control #denomination'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-control #denomination')
  await page.type('.ant-form-item-control #denomination','5')
  
  await waitElementVisiable('.ant-form-item-control #denomination')
  await page.type('.ant-form-item-control #denomination','0')
  
  await waitElementVisiable('.ant-form-item-control #denomination')
  await page.type('.ant-form-item-control #denomination','0')
  
  log(`[clicking]满    元可使用下的节点 `);
        await waitElementVisiable('.ant-form-item-control #fullBuyPrice');
  await page.click('.ant-form-item-control #fullBuyPrice'); 
      await sleep(1)
  
  log(`[clicking]  元下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-control #denomination');
  await page.click('.ant-form-item-control #denomination'); 
      await sleep(1)
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  log(`[clicking]满    元可使用下的节点 `);
        await waitElementVisiable('.ant-form-item-control #fullBuyPrice');
  await page.click('.ant-form-item-control #fullBuyPrice'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-control #fullBuyPrice')
  await page.type('.ant-form-item-control #fullBuyPrice','5')
  
  await waitElementVisiable('.ant-form-item-control #fullBuyPrice')
  await page.type('.ant-form-item-control #fullBuyPrice','0')
  
  await waitElementVisiable('.ant-form-item-control #fullBuyPrice')
  await page.type('.ant-form-item-control #fullBuyPrice','0')
  
  log(`[clicking]全部商品
按商品分类
自定义选择 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > .ant-checkbox-group > .ant-row:nth-child(1) > .ant-col:nth-child(2)');
  await page.click('.ant-form-item-control > .ant-form-item-children > .ant-checkbox-group > .ant-row:nth-child(1) > .ant-col:nth-child(2)'); 
      await sleep(1)
  
  log(`[clicking]全部商品
按商品分类
自定义选择 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > .ant-checkbox-group > .ant-row:nth-child(1) > .ant-col:nth-child(2)');
  await page.click('.ant-form-item-control > .ant-form-item-children > .ant-checkbox-group > .ant-row:nth-child(1) > .ant-col:nth-child(2)'); 
      await sleep(1)
  
  log(`[clicking]商品下的节点下的节点 `);
        await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-row:nth-child(1) > .ant-col > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row > .ant-col > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-row > .ant-col > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]服务下的节点下的节点 `);
        await waitElementVisiable('.ant-row:nth-child(3) > .ant-col > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-row:nth-child(3) > .ant-col > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row:nth-child(3) > .ant-col > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-row:nth-child(3) > .ant-col > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]按商品分类 `);
        await waitElementVisiable('.ant-row:nth-child(1) > .ant-col > .ant-radio-group > .ant-radio-wrapper:nth-child(2) > span:nth-child(2)');
  await page.click('.ant-row:nth-child(1) > .ant-col > .ant-radio-group > .ant-radio-wrapper:nth-child(2) > span:nth-child(2)'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-col > .ant-radio-group > .ant-radio-wrapper-checked:nth-child(2) > .ant-radio > .ant-radio-input')
  await page.type('.ant-col > .ant-radio-group > .ant-radio-wrapper-checked:nth-child(2) > .ant-radio > .ant-radio-input','undefined')
  
  log(`[clicking]请选择商品分类 `);
        await waitElementVisiable('.ant-col > div > .ant-select > .ant-select-selection > .ant-select-search__field__placeholder');
  await page.click('.ant-col > div > .ant-select > .ant-select-selection > .ant-select-search__field__placeholder'); 
      await sleep(1)
  
  log(`[clicking]test `);
        await waitElementVisiable('div > .ant-select-dropdown > #rc-tree-select-list_1 > .ant-select-tree > .ant-select-tree-treenode-switcher-close:nth-child(5)');
  await page.click('div > .ant-select-dropdown > #rc-tree-select-list_1 > .ant-select-tree > .ant-select-tree-treenode-switcher-close:nth-child(5)'); 
      await sleep(1)
  
  log(`[clicking]test下的节点下的节点 `);
        await waitElementVisiable('#rc-tree-select-list_1 > .ant-select-tree > .ant-select-tree-treenode-switcher-close:nth-child(5) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner');
  await page.click('#rc-tree-select-list_1 > .ant-select-tree > .ant-select-tree-treenode-switcher-close:nth-child(5) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner'); 
      await sleep(1)
  
  log(`[clicking]13下的节点下的节点 `);
        await waitElementVisiable('#rc-tree-select-list_1 > .ant-select-tree > .ant-select-tree-treenode-switcher-close:nth-child(6) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner');
  await page.click('#rc-tree-select-list_1 > .ant-select-tree > .ant-select-tree-treenode-switcher-close:nth-child(6) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner'); 
      await sleep(1)
  
  log(`[clicking]12下的节点下的节点 `);
        await waitElementVisiable('#rc-tree-select-list_1 > .ant-select-tree > .ant-select-tree-treenode-switcher-close:nth-child(7) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner');
  await page.click('#rc-tree-select-list_1 > .ant-select-tree > .ant-select-tree-treenode-switcher-close:nth-child(7) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner'); 
      await sleep(1)
  
  log(`[clicking]小程序
门店 `);
        await waitElementVisiable('.sc-bxivhb > .ant-form > .ant-row:nth-child(5) > .ant-col > .ant-form-item-control');
  await page.click('.sc-bxivhb > .ant-form > .ant-row:nth-child(5) > .ant-col > .ant-form-item-control'); 
      await sleep(1)
  
  log(`[clicking]小程序
门店 `);
        await waitElementVisiable('.sc-bxivhb > .ant-form > .ant-row:nth-child(5) > .ant-col > .ant-form-item-control');
  await page.click('.sc-bxivhb > .ant-form > .ant-row:nth-child(5) > .ant-col > .ant-form-item-control'); 
      await sleep(1)
  
  log(`[clicking]按服务分类 `);
        await waitElementVisiable('.ant-row:nth-child(3) > .ant-col > .ant-radio-group > .ant-radio-wrapper:nth-child(2) > span:nth-child(2)');
  await page.click('.ant-row:nth-child(3) > .ant-col > .ant-radio-group > .ant-radio-wrapper:nth-child(2) > span:nth-child(2)'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row:nth-child(3) > .ant-col > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input')
  await page.type('.ant-row:nth-child(3) > .ant-col > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input','undefined')
  
  log(`[clicking]请选服务分类 `);
        await waitElementVisiable('div > #chooseProjectCateIds > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder');
  await page.click('div > #chooseProjectCateIds > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'); 
      await sleep(1)
  
  log(`[clicking]2323 `);
        await waitElementVisiable('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active');
  await page.click('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active'); 
      await sleep(1)
  
  log(`[clicking]寄养 `);
        await waitElementVisiable('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active');
  await page.click('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active'); 
      await sleep(1)
  
  log(`[clicking]洗澡 `);
        await waitElementVisiable('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active');
  await page.click('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active'); 
      await sleep(1)
  
  log(`[clicking]洗澡 `);
        await waitElementVisiable('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active');
  await page.click('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active'); 
      await sleep(1)
  
  log(`[clicking]洗澡 `);
        await waitElementVisiable('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active');
  await page.click('div > .ant-select-dropdown > #\32 6984642-5714-4730-d76d-10401b76475d > .ant-select-dropdown-menu > .ant-select-dropdown-menu-item-active'); 
      await sleep(1)
  
  log(`[clicking]小程序
门店 `);
        await waitElementVisiable('.sc-bxivhb > .ant-form > .ant-row:nth-child(5) > .ant-col > .ant-form-item-control');
  await page.click('.sc-bxivhb > .ant-form > .ant-row:nth-child(5) > .ant-col > .ant-form-item-control'); 
      await sleep(1)
  
  log(`[clicking]小程序下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(1) > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(1) > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]小程序下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(1) > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(1) > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]门店下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(2) > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(2) > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]门店下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(2) > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(2) > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]门店下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(2) > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-form-item-children > #channel > .ant-checkbox-group-item:nth-child(2) > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-form-item-children > #channel > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]使用说明下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #couponDesc');
  await page.click('.ant-row #couponDesc'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','r')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','re')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','rea')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','ream')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','reamr')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','reamrk')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','reamr')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','ream')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','reama')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','reama')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','reamar')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','reamark')
  
  await waitElementVisiable('.ant-row #couponDesc')
  await page.type('.ant-row #couponDesc','reamark')
  
  log(`[clicking]保 存 `);
        await waitElementVisiable('.container > div > .sc-bxivhb > .bar-button > .ant-btn-primary');
  await page.click('.container > div > .sc-bxivhb > .bar-button > .ant-btn-primary'); 
      await sleep(1)
  
  log(`[clicking]demo `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(1)');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]查看 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > a:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > a:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]loading... `);
        await waitElementVisiable('div #page-content');
  await page.click('div #page-content'); 
      await sleep(1)
  
  log(`[clicking]优惠券列表 `);
        await waitElementVisiable('#page-content > div > .ant-breadcrumb > span:nth-child(3) > .ant-breadcrumb-link');
  await page.click('#page-content > div > .ant-breadcrumb > span:nth-child(3) > .ant-breadcrumb-link'); 
      await sleep(1)
  
  log(`[clicking]优惠券 `);
        await waitElementVisiable('.ant-layout-sider-children > .ant-menu > .ant-menu-submenu-active > .ant-menu-submenu-title > .leftNavItem');
  await page.click('.ant-layout-sider-children > .ant-menu > .ant-menu-submenu-active > .ant-menu-submenu-title > .leftNavItem'); 
      await sleep(1)
  
  log(`[clicking]优惠券活动列表 `);
        await waitElementVisiable('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a');
  await page.click('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a'); 
      await sleep(1)
  
  log(`[clicking]优惠券活动名称	下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input');
  await page.click('.ant-form-item-control > .ant-form-item-children > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input'); 
      await sleep(1)
  
  log(`[clicking]全场赠券 `);
        await waitElementVisiable('#page-content > div > .container > .handle-bar > .ant-btn');
  await page.click('#page-content > div > .container > .handle-bar > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]活动名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #activityName');
  await page.click('.ant-row #activityName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','d')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','de')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','dem')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','demo')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','demo')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','a')
  
  await page.keyboard.press('a'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','ac')
  
  await page.keyboard.press('c'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','act')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','acti')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','activ')
  
  await page.keyboard.press('v'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','active')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','activ')
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','activi')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','activit')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','activity')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','activity')
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)');
  await page.click('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]29 `);
        await waitElementVisiable('.ant-calendar-range-left > div > .ant-calendar-body > .ant-calendar-table > .ant-calendar-tbody > tr:nth-child(5) > .ant-calendar-cell:nth-child(7) > .ant-calendar-date');
  await page.click('.ant-calendar-range-left > div > .ant-calendar-body > .ant-calendar-table > .ant-calendar-tbody > tr:nth-child(5) > .ant-calendar-cell:nth-child(7) > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]选择优惠券 最多可选10张
优惠券名称
	
优惠券面值（元）
	
有效期
	

* 总张数

（1-999999999张）

	
操作

暂无数据 `);
        await waitElementVisiable('.ant-row:nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > div');
  await page.click('.ant-row:nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > div'); 
      await sleep(1)
  
  log(`[clicking]选择优惠券 最多可选10张
优惠券名称
	
优惠券面值（元）
	
有效期
	

* 总张数

（1-999999999张）

	
操作

暂无数据 `);
        await waitElementVisiable('.ant-row:nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > div');
  await page.click('.ant-row:nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > div'); 
      await sleep(1)
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)');
  await page.click('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]29 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]29 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]选择优惠券 最多可选10张
优惠券名称
	
优惠券面值（元）
	
有效期
	

* 总张数

（1-999999999张）

	
操作

暂无数据 `);
        await waitElementVisiable('.ant-row:nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > div');
  await page.click('.ant-row:nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > div'); 
      await sleep(1)
  
  log(`[clicking]选择优惠券 最多可选10张
优惠券名称
	
优惠券面值（元）
	
有效期
	

* 总张数

（1-999999999张）

	
操作

暂无数据 `);
        await waitElementVisiable('.ant-row:nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > div');
  await page.click('.ant-row:nth-child(3) > .ant-col > .ant-form-item-control > .ant-form-item-children > div'); 
      await sleep(1)
  
  log(`[clicking]选择优惠券 `);
        await waitElementVisiable('.ant-col > .ant-form-item-control > .ant-form-item-children > div > .ant-btn');
  await page.click('.ant-col > .ant-form-item-control > .ant-form-item-children > div > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]	
优惠券名称
	
面值
	
有效期
	
使用范围
	
优惠券状态
	
操作下的节点下的节点下的节点下的节点下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-table-column-title > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-table-column-title > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-table-column-title > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-table-column-title > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]确 认 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  log(`[clicking]demo	满500减50	2019-09-06 至 2019-09-29	
	
详情  删除下的节点下的节点下的节点下的节点下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007');
  await page.click('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007'); 
      await sleep(1)
  
  log(`[clicking]demo	满500减50	2019-09-06 至 2019-09-29	
	
详情  删除下的节点 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(4)');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(4)'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','5')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','0')
  
  log(`[clicking]仅门店混合分类优惠券	满50减20	2019-09-05 至 2019-09-30	
	
详情  删除下的节点 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > td:nth-child(4)');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > td:nth-child(4)'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','5')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','0')
  
  log(`[clicking]保 存 `);
        await waitElementVisiable('.sc-bZQynM > .ant-form > .ant-row-flex > .ant-col > .ant-btn:nth-child(1)');
  await page.click('.sc-bZQynM > .ant-form > .ant-row-flex > .ant-col > .ant-btn:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)');
  await page.click('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]2019年9月
一
	
二
	
三
	
四
	
五
	
六
	
日


26
	
27
	
28
	
29
	
30
	
31
	
1


2
	
3
	
4
	
5
	
6
	
7
	
8


9
	
10
	
11
	
12
	
13
	
14
	
15


16
	
17
	
18
	
19
	
20
	
21
	
22


23
	
24
	
25
	
26
	
27
	
28
	
29


30
	
1
	
2
	
3
	
4
	
5
	
6下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input');
  await page.click('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]31 `);
        await waitElementVisiable('.ant-calendar-body > .ant-calendar-table > .ant-calendar-tbody > tr:nth-child(5) > .ant-calendar-last-day-of-month');
  await page.click('.ant-calendar-body > .ant-calendar-table > .ant-calendar-tbody > tr:nth-child(5) > .ant-calendar-last-day-of-month'); 
      await sleep(1)
  
  log(`[clicking]31 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-start-date > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-start-date > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]2019年10月下的节点 `);
        await waitElementVisiable('.ant-calendar-range-part > div > .ant-calendar-header > div > .ant-calendar-prev-month-btn');
  await page.click('.ant-calendar-range-part > div > .ant-calendar-header > div > .ant-calendar-prev-month-btn'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]26 `);
        await waitElementVisiable('.ant-calendar-body > .ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date');
  await page.click('.ant-calendar-body > .ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date'); 
      await sleep(1)
  
  log(`[clicking]26 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]26 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-start-date > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-start-date > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]2019年11月下的节点 `);
        await waitElementVisiable('.ant-calendar-range-part > div > .ant-calendar-header > div > .ant-calendar-prev-month-btn');
  await page.click('.ant-calendar-range-part > div > .ant-calendar-header > div > .ant-calendar-prev-month-btn'); 
      await sleep(1)
  
  log(`[clicking]2019年10月下的节点 `);
        await waitElementVisiable('.ant-calendar-range-left > div > .ant-calendar-header > div > .ant-calendar-prev-month-btn');
  await page.click('.ant-calendar-range-left > div > .ant-calendar-header > div > .ant-calendar-prev-month-btn'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]30 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-calendar-time > .ant-calendar-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-ok-btn');
  await page.click('.ant-calendar-time > .ant-calendar-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-ok-btn'); 
      await sleep(1)
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)');
  await page.click('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]2019年9月
一
	
二
	
三
	
四
	
五
	
六
	
日


26
	
27
	
28
	
29
	
30
	
31
	
1


2
	
3
	
4
	
5
	
6
	
7
	
8


9
	
10
	
11
	
12
	
13
	
14
	
15


16
	
17
	
18
	
19
	
20
	
21
	
22


23
	
24
	
25
	
26
	
27
	
28
	
29


30
	
1
	
2
	
3
	
4
	
5
	
6下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input');
  await page.click('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input'); 
      await sleep(1)
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input')
  await page.type('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input','6')
  
  log(`[clicking]保 存  返 回 `);
        await waitElementVisiable('.container > .sc-bZQynM > .ant-form > .ant-row-flex > .ant-col-10');
  await page.click('.container > .sc-bZQynM > .ant-form > .ant-row-flex > .ant-col-10'); 
      await sleep(1)
  
  log(`[clicking]保 存 `);
        await waitElementVisiable('.sc-bZQynM > .ant-form > .ant-row-flex > .ant-col > .ant-btn:nth-child(1)');
  await page.click('.sc-bZQynM > .ant-form > .ant-row-flex > .ant-col > .ant-btn:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]好 的 `);
        await waitElementVisiable('.ant-modal-content > .ant-modal-body > .ant-modal-confirm-body-wrapper > .ant-modal-confirm-btns > .ant-btn');
  await page.click('.ant-modal-content > .ant-modal-body > .ant-modal-confirm-body-wrapper > .ant-modal-confirm-btns > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]保 存 `);
        await waitElementVisiable('.sc-bZQynM > .ant-form > .ant-row-flex > .ant-col > .ant-btn:nth-child(1)');
  await page.click('.sc-bZQynM > .ant-form > .ant-row-flex > .ant-col > .ant-btn:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]  test33333 
工作台
收银台
应用中心
预约中心
寄养中心
 17700000000 
应用中心
应用中心
小程序管理
美团点评
同城配送
会员卡
优惠券
优惠券列表
优惠券活动列表
短信发送
应用>优惠券>优惠券活动列表>创建全场赠券活动
创建全场赠券活动

操作说明：

同一优惠券每位客户每次只可领取1张，每个订单只可使用1张，使用后可重新领取；

活动名称
活动时间
~
相关优惠券仅限活动期间展示及领取
选择优惠券
选择优惠券 最多可选10张
优惠券名称
	
优惠券面值（元）
	
有效期
	

* 总张数

（1-999999999张）

	
操作
demo	满500减50	2019-09-06 至 2019-09-29	
	
详情  删除

仅门店混合分类优惠券	满50减20	2019-09-05 至 2019-09-30	
	
详情  删除
每人限领次数
不限
每个客户可领取的次数，每次仅限领取1张
保 存  返 回
2张优惠券结束时间早于活动结束时间，请删除后再保存或是修改活动时间。
好 的 `);
        await waitElementVisiable('body');
  await page.click('body'); 
      await sleep(1)
  
  log(`[clicking]好 的 `);
        await waitElementVisiable('.ant-modal-content > .ant-modal-body > .ant-modal-confirm-body-wrapper > .ant-modal-confirm-btns > .ant-btn');
  await page.click('.ant-modal-content > .ant-modal-body > .ant-modal-confirm-body-wrapper > .ant-modal-confirm-btns > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]好 的 `);
        await waitElementVisiable('.ant-modal-content > .ant-modal-body > .ant-modal-confirm-body-wrapper > .ant-modal-confirm-btns > .ant-btn');
  await page.click('.ant-modal-content > .ant-modal-body > .ant-modal-confirm-body-wrapper > .ant-modal-confirm-btns > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]详情 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > a:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > a:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]Without Sidebar下的节点 `);
        await waitElementVisiable('#sitemapLinksContainer > .sitemapOptionContainer > div:nth-child(1) > label > input');
  await page.click('#sitemapLinksContainer > .sitemapOptionContainer > div:nth-child(1) > label > input'); 
      await sleep(1)
  
  await waitElementVisiable('#sitemapLinksContainer > .sitemapOptionContainer > div:nth-child(1) > label > input')
  await page.type('#sitemapLinksContainer > .sitemapOptionContainer > div:nth-child(1) > label > input','undefined')
  
  log(`[clicking]优惠券列表 `);
        await waitElementVisiable('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a');
  await page.click('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a'); 
      await sleep(1)
  
  log(`[clicking]查看 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > a:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(1) > td > div > a:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]使用门槛 `);
        await waitElementVisiable('.ant-tabs-content > .ant-tabs-tabpane > .sc-ifAKCX > .ant-form > .ant-row:nth-child(4)');
  await page.click('.ant-tabs-content > .ant-tabs-tabpane > .sc-ifAKCX > .ant-form > .ant-row:nth-child(4)'); 
      await sleep(1)
  
  log(`[clicking]优惠券列表 `);
        await waitElementVisiable('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a');
  await page.click('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a'); 
      await sleep(1)
  
  log(`[clicking]编辑    `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row > td > div > .createMarket');
  await page.click('.ant-table-tbody > .ant-table-row > td > div > .createMarket'); 
      await sleep(1)
  
  log(`[clicking]创建优惠券

我的优惠券

￥0

满--可用

优惠券名称
使用说明: `);
        await waitElementVisiable('.ant-layout > .ant-layout-has-sider > .ant-layout-content > #page-content > .container');
  await page.click('.ant-layout > .ant-layout-has-sider > .ant-layout-content > #page-content > .container'); 
      await sleep(1)
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-radio-wrapper > span > #rangeDay > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(3)');
  await page.click('.ant-radio-wrapper > span > #rangeDay > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(3)'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-radio-wrapper > span > #rangeDay > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)');
  await page.click('.ant-radio-wrapper > span > #rangeDay > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]31 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > tr:nth-child(5) > .ant-calendar-last-day-of-month > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > tr:nth-child(5) > .ant-calendar-last-day-of-month > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]保 存 `);
        await waitElementVisiable('.container > div > .sc-bxivhb > .bar-button > .ant-btn-primary');
  await page.click('.container > div > .sc-bxivhb > .bar-button > .ant-btn-primary'); 
      await sleep(1)
  
  log(`[clicking]查看 `);
        await waitElementVisiable('.ant-table-tbody > .ant-table-row:nth-child(2) > td > div > a:nth-child(1)');
  await page.click('.ant-table-tbody > .ant-table-row:nth-child(2) > td > div > a:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]优惠券列表 `);
        await waitElementVisiable('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a');
  await page.click('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a'); 
      await sleep(1)
  
  log(`[clicking]优惠券活动列表 `);
        await waitElementVisiable('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a');
  await page.click('.ant-menu > .ant-menu-submenu > #\35\$Menu > .ant-menu-item-active > a'); 
      await sleep(1)
  
  log(`[clicking]全场赠券 `);
        await waitElementVisiable('#page-content > div > .container > .handle-bar > .ant-btn');
  await page.click('#page-content > div > .container > .handle-bar > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]活动名称下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-row #activityName');
  await page.click('.ant-row #activityName'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','a')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','ac')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','act')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','acti')
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','activ')
  
  await page.keyboard.press('v'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-row #activityName')
  await page.type('.ant-row #activityName','activity')
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)');
  await page.click('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]31 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-active-week > .ant-calendar-selected-end-date > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]30 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > tr:nth-child(6) > .ant-calendar-in-range-cell > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > tr:nth-child(6) > .ant-calendar-in-range-cell > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]6 `);
        await waitElementVisiable('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date');
  await page.click('.ant-calendar-table > .ant-calendar-tbody > .ant-calendar-current-week > .ant-calendar-today > .ant-calendar-date'); 
      await sleep(1)
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-calendar-time > .ant-calendar-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-ok-btn');
  await page.click('.ant-calendar-time > .ant-calendar-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-ok-btn'); 
      await sleep(1)
  
  log(`[clicking]~下的节点 `);
        await waitElementVisiable('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)');
  await page.click('.ant-form-item-control > .ant-form-item-children > #time > .ant-calendar-picker-input > .ant-calendar-range-picker-input:nth-child(1)'); 
      await sleep(1)
  
  log(`[clicking]2019年9月
一
	
二
	
三
	
四
	
五
	
六
	
日


26
	
27
	
28
	
29
	
30
	
31
	
1


2
	
3
	
4
	
5
	
6
	
7
	
8


9
	
10
	
11
	
12
	
13
	
14
	
15


16
	
17
	
18
	
19
	
20
	
21
	
22


23
	
24
	
25
	
26
	
27
	
28
	
29


30
	
1
	
2
	
3
	
4
	
5
	
6下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input');
  await page.click('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input'); 
      await sleep(1)
  
  await page.keyboard.press('Backspace'); 
              await sleep(0.5)
      
  
  await waitElementVisiable('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input')
  await page.type('.ant-calendar-date-panel > .ant-calendar-range-left > .ant-calendar-input-wrap > .ant-calendar-date-input-wrap > .ant-calendar-input','9')
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-calendar-time > .ant-calendar-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-ok-btn');
  await page.click('.ant-calendar-time > .ant-calendar-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-ok-btn'); 
      await sleep(1)
  
  log(`[clicking]确 定 `);
        await waitElementVisiable('.ant-calendar-time > .ant-calendar-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-ok-btn');
  await page.click('.ant-calendar-time > .ant-calendar-panel > .ant-calendar-footer > .ant-calendar-footer-btn > .ant-calendar-ok-btn'); 
      await sleep(1)
  
  log(`[clicking]选择优惠券 `);
        await waitElementVisiable('.ant-col > .ant-form-item-control > .ant-form-item-children > div > .ant-btn');
  await page.click('.ant-col > .ant-form-item-control > .ant-form-item-children > div > .ant-btn'); 
      await sleep(1)
  
  log(`[clicking]	
优惠券名称
	
面值
	
有效期
	
使用范围
	
优惠券状态
	
操作下的节点下的节点下的节点下的节点下的节点下的节点下的节点下的节点 `);
        await waitElementVisiable('.ant-table-column-title > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input');
  await page.click('.ant-table-column-title > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-table-column-title > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
  await page.type('.ant-table-column-title > .ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input','undefined')
  
  log(`[clicking]确 认 `);
        await waitElementVisiable('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary');
  await page.click('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary'); 
      await sleep(1)
  
  log(`[clicking]demo	满500减50	2019-09-06 至 2019-10-31	
	
详情  删除下的节点 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(4)');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(4)'); 
      await sleep(1)
  
  log(`[clicking]demo	满500减50	2019-09-06 至 2019-10-31	
	
详情  删除下的节点 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(4)');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(1) > td:nth-child(4)'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','5')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0423beea0007','0')
  
  log(`[clicking]仅门店混合分类优惠券	满50减20	2019-09-05 至 2019-09-30	
	
详情  删除下的节点 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > td:nth-child(4)');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > td:nth-child(4)'); 
      await sleep(1)
  
  log(`[clicking]仅门店混合分类优惠券	满50减20	2019-09-05 至 2019-09-30	
	
详情  删除下的节点 `);
        await waitElementVisiable('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > td:nth-child(4)');
  await page.click('.ant-table-body > table > .ant-table-tbody > .ant-table-row:nth-child(2) > td:nth-child(4)'); 
      await sleep(1)
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','5')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','0')
  
  await waitElementVisiable('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002')
  await page.type('.ant-form-item-control #couponId_8ad0328d6d0102f0016d0141378c0002','0')
  
  log(`[clicking]保 存 `);
        await waitElementVisiable('.sc-bZQynM > .ant-form > .ant-row-flex > .ant-col > .ant-btn:nth-child(1)');
  await page.click('.sc-bZQynM > .ant-form > .ant-row-flex > .ant-col > .ant-btn:nth-child(1)'); 
      await sleep(1)
  
 
  },
  neworkMock :{"https://seller.s2btest.kstore.shop/sockjs-node/207/kkpzzmx5/eventsource:[GET]":[{"request":{"method":"GET","url":"https://seller.s2btest.kstore.shop/sockjs-node/207/kkpzzmx5/eventsource"},"requestId":"1000006116.26","response":{"base64Encoded":false,"body":"","headers":{},"mimeType":"text/html","status":200}}],"https://seller.s2btest.kstore.shop/sockjs-node/207/krr543of/xhr_streaming?t=1567732401059:[POST]":[{"request":{"method":"POST","url":"https://seller.s2btest.kstore.shop/sockjs-node/207/krr543of/xhr_streaming?t=1567732401059"},"requestId":"1000006116.25","response":{"base64Encoded":false,"body":"","headers":{},"mimeType":"text/html","status":405}}],"https://seller.s2btest.kstore.shop/sockjs-node/207/p5y1jh0r/htmlfile?c=_jp.aic1ark:[GET]":[{"request":{"method":"GET","url":"https://seller.s2btest.kstore.shop/sockjs-node/207/p5y1jh0r/htmlfile?c=_jp.aic1ark"},"requestId":"D6EFF982A3A59CC60FE5D7A545CE9D5B","response":{"headers":{"Accept-Ranges":"bytes","Connection":"keep-alive","Content-Length":"715","Content-Security-Policy":"upgrade-insecure-requests","Content-Type":"text/html; charset=utf-8","Date":"Fri, 06 Sep 2019 01:13:28 GMT","ETag":"\"5d70e5ef-2cb\"","Last-Modified":"Thu, 05 Sep 2019 10:39:43 GMT","Server":"nginx/1.10.3"},"mimeType":"text/html","status":200}}],"https://seller.s2btest.kstore.shop/sockjs-node/207/yelnxps3/xhr?t=1567732401877:[POST]":[{"request":{"method":"POST","url":"https://seller.s2btest.kstore.shop/sockjs-node/207/yelnxps3/xhr?t=1567732401877"},"requestId":"1000006116.28","response":{"base64Encoded":false,"body":"","headers":{},"mimeType":"text/html","status":405}}],"https://seller.s2btest.kstore.shop/sockjs-node/iframe.html:[GET]":[{"request":{"method":"GET","url":"https://seller.s2btest.kstore.shop/sockjs-node/iframe.html"},"requestId":"C16533F56EF3D22A5A8B9587FE1784BC","response":{"headers":{"Accept-Ranges":"bytes","Connection":"keep-alive","Content-Length":"715","Content-Security-Policy":"upgrade-insecure-requests","Content-Type":"text/html; charset=utf-8","Date":"Fri, 06 Sep 2019 01:13:27 GMT","ETag":"\"5d70e5ef-2cb\"","Last-Modified":"Thu, 05 Sep 2019 10:39:43 GMT","Server":"nginx/1.10.3"},"mimeType":"text/html","status":200}},{"request":{"method":"GET","url":"https://seller.s2btest.kstore.shop/sockjs-node/iframe.html"},"requestId":"A8F6AE780558910756199FEF0A27DAD3","response":{"headers":{"Accept-Ranges":"bytes","Content-Length":"715","Content-Security-Policy":"upgrade-insecure-requests","Content-Type":"text/html; charset=utf-8","Date":"Fri, 06 Sep 2019 01:13:27 GMT","ETag":"\"5d70e5ef-2cb\"","Last-Modified":"Thu, 05 Sep 2019 10:39:43 GMT","Server":"nginx/1.10.3"},"mimeType":"text/html","status":200}},{"request":{"method":"GET","url":"https://seller.s2btest.kstore.shop/sockjs-node/iframe.html"},"requestId":"211592CA1C65175404AA7DBDE30E6835","response":{"headers":{"Accept-Ranges":"bytes","Content-Length":"715","Content-Security-Policy":"upgrade-insecure-requests","Content-Type":"text/html; charset=utf-8","Date":"Fri, 06 Sep 2019 01:13:27 GMT","ETag":"\"5d70e5ef-2cb\"","Last-Modified":"Thu, 05 Sep 2019 10:39:43 GMT","Server":"nginx/1.10.3"},"mimeType":"text/html","status":200}}],"https://sellerbff.s2btest.kstore.shop/baseConfig:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/baseConfig"},"requestId":"1000006116.37","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"baseConfigId\":30,\"pcWebsite\":\"http://pc.s2btest.kstore.shop\",\"mobileWebsite\":\"http://m.s2btest.kstore.shop\",\"pcLogo\":\"[{\\\"uid\\\":\\\"rc-upload-1562236598088-10\\\",\\\"status\\\":\\\"done\\\",\\\"url\\\":\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201907041837028103.png\\\"}]\",\"pcBanner\":\"[{\\\"uid\\\":\\\"rc-upload-1559554902870-14\\\",\\\"status\\\":\\\"done\\\",\\\"url\\\":\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201906031750572024.jpg\\\"}]\",\"pcMainBanner\":null,\"mobileBanner\":null,\"pcIco\":\"[{\\\"uid\\\":\\\"rc-upload-1559554902870-19\\\",\\\"status\\\":\\\"done\\\",\\\"url\\\":\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201906031752323276.ico\\\"}]\",\"pcTitle\":null,\"supplierWebsite\":\"http://seller.s2btest.kstore.shop\",\"registerContent\":\"<p style=\\\"white-space: normal; text-align: center;\\\"><strong><span style=\\\"font-size: 20px;\\\">会员注册协议</span></strong></p><p style=\\\"white-space: normal; text-align: center;\\\"><br/></p><p style=\\\"white-space: normal;\\\">尊敬的用户1，欢迎您注册成为本网站用户。在注册前请您仔细阅读如下服务条款：</p><p style=\\\"white-space: normal;\\\">本服务协议双方为本网站与本网站用户，本服务协议具有合同效力。</p><p style=\\\"white-space: normal;\\\">您确认本服务协议后，本服务协议即在您和本网站之间产生法律效力。请您务必在注册之前认真阅读全部服务协议内容，如有任何疑问，可向本网站咨询。</p><p style=\\\"white-space: normal;\\\">无论您事实上是否在注册之前认真阅读了本服务协议，只要您点击协议正本下方的&quot;注册&quot;按钮并按照本网站注册程序成功注册为用户，您的行为仍然表示您同意并签署了本服务协议。</p><p style=\\\"white-space: normal;\\\">1．本网站服务条款的确认和接纳</p><p style=\\\"white-space: normal;\\\">本网站各项服务的所有权和运作权归本网站拥有。</p><p style=\\\"white-space: normal;\\\"><img src=\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809171543362651\\\" title=\\\"\\\" alt=\\\"undefined/\\\"/><img src=\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809171608450778\\\" title=\\\"\\\" alt=\\\"undefined/\\\"/></p><p style=\\\"white-space: normal;\\\">2．用户必须：</p><p style=\\\"white-space: normal;\\\">(1)自行配备上网的所需设备， 包括个人电脑、调制解调器或其他必备上网装置。</p><p style=\\\"white-space: normal;\\\">(2)自行负担个人上网所支付的与此服务有关的电话费用、 网络费用。</p><p style=\\\"white-space: normal;\\\">3．用户在本网站上交易平台上不得发布下列违法信息：</p><p style=\\\"white-space: normal;\\\">(1)反对宪法所确定的基本原则的；</p><p style=\\\"white-space: normal;\\\">(2).危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p><p style=\\\"white-space: normal;\\\">(3).损害国家荣誉和利益的；</p><p style=\\\"white-space: normal;\\\">(4).煽动民族仇恨、民族歧视，破坏民族团结的；</p><p style=\\\"white-space: normal;\\\">(5).破坏国家宗教政策，宣扬邪教和封建迷信的；</p><p style=\\\"white-space: normal;\\\">(6).散布谣言，扰乱社会秩序，破坏社会稳定的；</p><p style=\\\"white-space: normal;\\\">(7).散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p><p style=\\\"white-space: normal;\\\">(8).侮辱或者诽谤他人，侵害他人合法权益的；</p><p style=\\\"white-space: normal;\\\">(9).含有法律、行政法规禁止的其他内容的。</p><p style=\\\"white-space: normal;\\\">4． 有关个人资料</p><p style=\\\"white-space: normal;\\\">用户同意：</p><p style=\\\"white-space: normal;\\\">(1) 提供及时、详尽及准确的个人资料。</p><p style=\\\"white-space: normal;\\\">(2).同意接收来自本网站的信息。</p><p style=\\\"white-space: normal;\\\">(3) 不断更新注册资料，符合及时、详尽准确的要求。所有原始键入的资料将引用为注册资料。</p><p style=\\\"white-space: normal;\\\">(4)本网站不公开用户的姓名、地址、电子邮箱和笔名，以下情况除外：</p><p style=\\\"white-space: normal;\\\">（a）用户授权本网站透露这些信息。</p><p style=\\\"white-space: normal;\\\">（b）相应的法律及程序要求本网站提供用户的个人资料。如果用户提供的资料包含有不正确的信息，本网站保留结束用户使用本网站信息服务资格的权利。</p><p style=\\\"white-space: normal;\\\">5. 用户在注册时应当选择稳定性及安全性相对较好的电子邮箱，并且同意接受并阅读本网站发往用户的各类电子邮件。如用户未及时从自己的电子邮箱接受电子邮件或因用户电子邮箱或用户电子邮件接收及阅读程序本身的问题使电子邮件无法正常接收或阅读的，只要本网站成功发送了电子邮件，应当视为用户已经接收到相关的电子邮件。电子邮件在发信服务器上所记录的发出时间视为送达时间。</p><p style=\\\"white-space: normal;\\\">6． 服务条款的修改</p><p style=\\\"white-space: normal;\\\">本网站有权在必要时修改服务条款，本网站服务条款一旦发生变动，将会在重要页面上提示修改内容。如果不同意所改动的内容，用户可以主动取消获得的本网站信息服务。如果用户继续享用本网站信息服务，则视为接受服务条款的变动。本网站保留随时修改或中断服务而不需通知用户的权利。本网站行使修改或中断服务的权利，不需对用户或第三方负责。</p><p style=\\\"white-space: normal;\\\">7． 用户隐私制度</p><p style=\\\"white-space: normal;\\\">尊重用户个人隐私是本网站的一项基本政策。所以，本网站一定不会在未经合法用户授权时公开、编辑或透露其注册资料及保存在本网站中的非公开内容，除非有法律许可要求或本网站在诚信的基础上认为透露这些信息在以下四种情况是必要的：</p><p style=\\\"white-space: normal;\\\">(1) 遵守有关法律规定，遵从本网站合法服务程序。</p><p style=\\\"white-space: normal;\\\">(2) 保持维护本网站的商标所有权。</p><p style=\\\"white-space: normal;\\\">(3) 在紧急情况下竭力维护用户个人和社会大众的隐私安全。</p><p style=\\\"white-space: normal;\\\">(4)符合其他相关的要求。</p><p style=\\\"white-space: normal;\\\">本网站保留发布会员人口分析资询的权利。</p><p style=\\\"white-space: normal;\\\">8．用户的帐号、密码和安全性</p><p style=\\\"white-space: normal;\\\">你一旦注册成功成为用户，你将得到一个密码和帐号。如果你不保管好自己的帐号和密码安全，将负全部责任。另外，每个用户都要对其帐户中的所有活动和事件负全责。你可随时根据指示改变你的密码，也可以结束旧的帐户重开一个新帐户。用户同意若发现任何非法使用用户帐号或安全漏洞的情况，请立即通告本网站。</p><p style=\\\"white-space: normal;\\\">9. 物流配送</p><p style=\\\"white-space: normal;\\\">因如下情况造成订单延迟或无法配送等，本站不承担延迟配送的责任：</p><p style=\\\"white-space: normal;\\\">（1）用户提供的信息错误、地址不详细等原因导致的；</p><p style=\\\"white-space: normal;\\\">（2）货物送达后无人签收，导致无法配送或延迟配送的；</p><p style=\\\"white-space: normal;\\\">（3）情势变更因素导致的；</p><p style=\\\"white-space: normal;\\\">（4）不可抗力因素导致的，例如：自然灾害、交通戒严、突发战争等。</p><p style=\\\"white-space: normal;\\\">10． 拒绝提供担保</p><p style=\\\"white-space: normal;\\\">用户明确同意信息服务的使用由用户个人承担风险。 本网站不担保服务不会受中断，对服务的及时性，安全性，出错发生都不作担保，但会在能力范围内，避免出错。</p><p style=\\\"white-space: normal;\\\">11．有限责任</p><p style=\\\"white-space: normal;\\\">本网站对任何直接、间接、偶然、特殊及继起的损害不负责任，这些损害来自：不正当使用本网站服务，或用户传送的信息不符合规定等。这些行为都有可能导致本网站形象受损，所以本网站事先提出这种损害的可能性，同时会尽量避免这种损害的发生。</p><p style=\\\"white-space: normal;\\\">12．信息的储存及限制</p><p style=\\\"white-space: normal;\\\">本网站有判定用户的行为是否符合本网站服务条款的要求和精神的权利，如果用户违背本网站服务条款的规定，本网站有权中断其服务的帐号。</p><p style=\\\"white-space: normal;\\\">13．用户管理</p><p style=\\\"white-space: normal;\\\">用户必须遵循：</p><p style=\\\"white-space: normal;\\\">(1) 使用信息服务不作非法用途。</p><p style=\\\"white-space: normal;\\\">(2) 不干扰或混乱网络服务。</p><p style=\\\"white-space: normal;\\\">(3) 遵守所有使用服务的网络协议、规定、程序和惯例。用户的行为准则是以因特网法规，政策、程序和惯例为根据的。</p><p style=\\\"white-space: normal;\\\">用户同意保障和维护本网站全体成员的利益，负责支付由用户使用超出服务范围引起的律师费用，违反服务条款的损害补偿费用，其它人使用用户的电脑、帐号和其它知识产权的追索费。</p><p style=\\\"white-space: normal;\\\">15．结束服务</p><p style=\\\"white-space: normal;\\\">用户或本网站可随时根据实际情况中断一项或多项服务。本网站不需对任何个人或第三方负责而随时中断服务。用户若反对任何服务条款的建议或对后来的条款修改有异议，或对本网站服务不满，用户可以行使如下权利：</p><p style=\\\"white-space: normal;\\\">(1) 不再使用本网站信息服务。</p><p style=\\\"white-space: normal;\\\">(2) 通知本网站停止对该用户的服务。</p><p style=\\\"white-space: normal;\\\">结束用户服务后，用户使用本网站服务的权利马上中止。从那时起，用户没有权利，本网站也没有义务传送任何未处理的信息或未完成的服务给用户或第三方。</p><p style=\\\"white-space: normal;\\\">16．通告</p><p style=\\\"white-space: normal;\\\">所有发给用户的通告都可通过重要页面的公告或电子邮件或常规的信件传送。服务条款的修改、服务变更、或其它重要事件的通告都会以此形式进行。</p><p style=\\\"white-space: normal;\\\">17．信息内容的所有权</p><p style=\\\"white-space: normal;\\\">本网站定义的信息内容包括：文字、软件、声音、相片、录象、图表；在广告中全部内容；本网站为用户提供的其它信息。所有这些内容受版权、商标、标签和其它财产所有权法律的保护。所以，用户只能在本网站和广告商授权下才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。</p><p style=\\\"white-space: normal;\\\">18．法律</p><p style=\\\"white-space: normal;\\\">本网站信息服务条款要与中华人民共和国的法律解释一致。用户和本网站一致同意服从本网站所在地有管辖权的法院管辖。如发生本网站服务条款与中华人民共和国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它条款则依旧保持对用户的约束力。</p><p><br/></p>\"}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/baseConfig?reqId=0.9290230367214458:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/baseConfig?reqId=0.9290230367214458"},"requestId":"1000006116.49","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"baseConfigId\":30,\"pcWebsite\":\"http://pc.s2btest.kstore.shop\",\"mobileWebsite\":\"http://m.s2btest.kstore.shop\",\"pcLogo\":\"[{\\\"uid\\\":\\\"rc-upload-1562236598088-10\\\",\\\"status\\\":\\\"done\\\",\\\"url\\\":\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201907041837028103.png\\\"}]\",\"pcBanner\":\"[{\\\"uid\\\":\\\"rc-upload-1559554902870-14\\\",\\\"status\\\":\\\"done\\\",\\\"url\\\":\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201906031750572024.jpg\\\"}]\",\"pcMainBanner\":null,\"mobileBanner\":null,\"pcIco\":\"[{\\\"uid\\\":\\\"rc-upload-1559554902870-19\\\",\\\"status\\\":\\\"done\\\",\\\"url\\\":\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201906031752323276.ico\\\"}]\",\"pcTitle\":null,\"supplierWebsite\":\"http://seller.s2btest.kstore.shop\",\"registerContent\":\"<p style=\\\"white-space: normal; text-align: center;\\\"><strong><span style=\\\"font-size: 20px;\\\">会员注册协议</span></strong></p><p style=\\\"white-space: normal; text-align: center;\\\"><br/></p><p style=\\\"white-space: normal;\\\">尊敬的用户1，欢迎您注册成为本网站用户。在注册前请您仔细阅读如下服务条款：</p><p style=\\\"white-space: normal;\\\">本服务协议双方为本网站与本网站用户，本服务协议具有合同效力。</p><p style=\\\"white-space: normal;\\\">您确认本服务协议后，本服务协议即在您和本网站之间产生法律效力。请您务必在注册之前认真阅读全部服务协议内容，如有任何疑问，可向本网站咨询。</p><p style=\\\"white-space: normal;\\\">无论您事实上是否在注册之前认真阅读了本服务协议，只要您点击协议正本下方的&quot;注册&quot;按钮并按照本网站注册程序成功注册为用户，您的行为仍然表示您同意并签署了本服务协议。</p><p style=\\\"white-space: normal;\\\">1．本网站服务条款的确认和接纳</p><p style=\\\"white-space: normal;\\\">本网站各项服务的所有权和运作权归本网站拥有。</p><p style=\\\"white-space: normal;\\\"><img src=\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809171543362651\\\" title=\\\"\\\" alt=\\\"undefined/\\\"/><img src=\\\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809171608450778\\\" title=\\\"\\\" alt=\\\"undefined/\\\"/></p><p style=\\\"white-space: normal;\\\">2．用户必须：</p><p style=\\\"white-space: normal;\\\">(1)自行配备上网的所需设备， 包括个人电脑、调制解调器或其他必备上网装置。</p><p style=\\\"white-space: normal;\\\">(2)自行负担个人上网所支付的与此服务有关的电话费用、 网络费用。</p><p style=\\\"white-space: normal;\\\">3．用户在本网站上交易平台上不得发布下列违法信息：</p><p style=\\\"white-space: normal;\\\">(1)反对宪法所确定的基本原则的；</p><p style=\\\"white-space: normal;\\\">(2).危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p><p style=\\\"white-space: normal;\\\">(3).损害国家荣誉和利益的；</p><p style=\\\"white-space: normal;\\\">(4).煽动民族仇恨、民族歧视，破坏民族团结的；</p><p style=\\\"white-space: normal;\\\">(5).破坏国家宗教政策，宣扬邪教和封建迷信的；</p><p style=\\\"white-space: normal;\\\">(6).散布谣言，扰乱社会秩序，破坏社会稳定的；</p><p style=\\\"white-space: normal;\\\">(7).散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p><p style=\\\"white-space: normal;\\\">(8).侮辱或者诽谤他人，侵害他人合法权益的；</p><p style=\\\"white-space: normal;\\\">(9).含有法律、行政法规禁止的其他内容的。</p><p style=\\\"white-space: normal;\\\">4． 有关个人资料</p><p style=\\\"white-space: normal;\\\">用户同意：</p><p style=\\\"white-space: normal;\\\">(1) 提供及时、详尽及准确的个人资料。</p><p style=\\\"white-space: normal;\\\">(2).同意接收来自本网站的信息。</p><p style=\\\"white-space: normal;\\\">(3) 不断更新注册资料，符合及时、详尽准确的要求。所有原始键入的资料将引用为注册资料。</p><p style=\\\"white-space: normal;\\\">(4)本网站不公开用户的姓名、地址、电子邮箱和笔名，以下情况除外：</p><p style=\\\"white-space: normal;\\\">（a）用户授权本网站透露这些信息。</p><p style=\\\"white-space: normal;\\\">（b）相应的法律及程序要求本网站提供用户的个人资料。如果用户提供的资料包含有不正确的信息，本网站保留结束用户使用本网站信息服务资格的权利。</p><p style=\\\"white-space: normal;\\\">5. 用户在注册时应当选择稳定性及安全性相对较好的电子邮箱，并且同意接受并阅读本网站发往用户的各类电子邮件。如用户未及时从自己的电子邮箱接受电子邮件或因用户电子邮箱或用户电子邮件接收及阅读程序本身的问题使电子邮件无法正常接收或阅读的，只要本网站成功发送了电子邮件，应当视为用户已经接收到相关的电子邮件。电子邮件在发信服务器上所记录的发出时间视为送达时间。</p><p style=\\\"white-space: normal;\\\">6． 服务条款的修改</p><p style=\\\"white-space: normal;\\\">本网站有权在必要时修改服务条款，本网站服务条款一旦发生变动，将会在重要页面上提示修改内容。如果不同意所改动的内容，用户可以主动取消获得的本网站信息服务。如果用户继续享用本网站信息服务，则视为接受服务条款的变动。本网站保留随时修改或中断服务而不需通知用户的权利。本网站行使修改或中断服务的权利，不需对用户或第三方负责。</p><p style=\\\"white-space: normal;\\\">7． 用户隐私制度</p><p style=\\\"white-space: normal;\\\">尊重用户个人隐私是本网站的一项基本政策。所以，本网站一定不会在未经合法用户授权时公开、编辑或透露其注册资料及保存在本网站中的非公开内容，除非有法律许可要求或本网站在诚信的基础上认为透露这些信息在以下四种情况是必要的：</p><p style=\\\"white-space: normal;\\\">(1) 遵守有关法律规定，遵从本网站合法服务程序。</p><p style=\\\"white-space: normal;\\\">(2) 保持维护本网站的商标所有权。</p><p style=\\\"white-space: normal;\\\">(3) 在紧急情况下竭力维护用户个人和社会大众的隐私安全。</p><p style=\\\"white-space: normal;\\\">(4)符合其他相关的要求。</p><p style=\\\"white-space: normal;\\\">本网站保留发布会员人口分析资询的权利。</p><p style=\\\"white-space: normal;\\\">8．用户的帐号、密码和安全性</p><p style=\\\"white-space: normal;\\\">你一旦注册成功成为用户，你将得到一个密码和帐号。如果你不保管好自己的帐号和密码安全，将负全部责任。另外，每个用户都要对其帐户中的所有活动和事件负全责。你可随时根据指示改变你的密码，也可以结束旧的帐户重开一个新帐户。用户同意若发现任何非法使用用户帐号或安全漏洞的情况，请立即通告本网站。</p><p style=\\\"white-space: normal;\\\">9. 物流配送</p><p style=\\\"white-space: normal;\\\">因如下情况造成订单延迟或无法配送等，本站不承担延迟配送的责任：</p><p style=\\\"white-space: normal;\\\">（1）用户提供的信息错误、地址不详细等原因导致的；</p><p style=\\\"white-space: normal;\\\">（2）货物送达后无人签收，导致无法配送或延迟配送的；</p><p style=\\\"white-space: normal;\\\">（3）情势变更因素导致的；</p><p style=\\\"white-space: normal;\\\">（4）不可抗力因素导致的，例如：自然灾害、交通戒严、突发战争等。</p><p style=\\\"white-space: normal;\\\">10． 拒绝提供担保</p><p style=\\\"white-space: normal;\\\">用户明确同意信息服务的使用由用户个人承担风险。 本网站不担保服务不会受中断，对服务的及时性，安全性，出错发生都不作担保，但会在能力范围内，避免出错。</p><p style=\\\"white-space: normal;\\\">11．有限责任</p><p style=\\\"white-space: normal;\\\">本网站对任何直接、间接、偶然、特殊及继起的损害不负责任，这些损害来自：不正当使用本网站服务，或用户传送的信息不符合规定等。这些行为都有可能导致本网站形象受损，所以本网站事先提出这种损害的可能性，同时会尽量避免这种损害的发生。</p><p style=\\\"white-space: normal;\\\">12．信息的储存及限制</p><p style=\\\"white-space: normal;\\\">本网站有判定用户的行为是否符合本网站服务条款的要求和精神的权利，如果用户违背本网站服务条款的规定，本网站有权中断其服务的帐号。</p><p style=\\\"white-space: normal;\\\">13．用户管理</p><p style=\\\"white-space: normal;\\\">用户必须遵循：</p><p style=\\\"white-space: normal;\\\">(1) 使用信息服务不作非法用途。</p><p style=\\\"white-space: normal;\\\">(2) 不干扰或混乱网络服务。</p><p style=\\\"white-space: normal;\\\">(3) 遵守所有使用服务的网络协议、规定、程序和惯例。用户的行为准则是以因特网法规，政策、程序和惯例为根据的。</p><p style=\\\"white-space: normal;\\\">用户同意保障和维护本网站全体成员的利益，负责支付由用户使用超出服务范围引起的律师费用，违反服务条款的损害补偿费用，其它人使用用户的电脑、帐号和其它知识产权的追索费。</p><p style=\\\"white-space: normal;\\\">15．结束服务</p><p style=\\\"white-space: normal;\\\">用户或本网站可随时根据实际情况中断一项或多项服务。本网站不需对任何个人或第三方负责而随时中断服务。用户若反对任何服务条款的建议或对后来的条款修改有异议，或对本网站服务不满，用户可以行使如下权利：</p><p style=\\\"white-space: normal;\\\">(1) 不再使用本网站信息服务。</p><p style=\\\"white-space: normal;\\\">(2) 通知本网站停止对该用户的服务。</p><p style=\\\"white-space: normal;\\\">结束用户服务后，用户使用本网站服务的权利马上中止。从那时起，用户没有权利，本网站也没有义务传送任何未处理的信息或未完成的服务给用户或第三方。</p><p style=\\\"white-space: normal;\\\">16．通告</p><p style=\\\"white-space: normal;\\\">所有发给用户的通告都可通过重要页面的公告或电子邮件或常规的信件传送。服务条款的修改、服务变更、或其它重要事件的通告都会以此形式进行。</p><p style=\\\"white-space: normal;\\\">17．信息内容的所有权</p><p style=\\\"white-space: normal;\\\">本网站定义的信息内容包括：文字、软件、声音、相片、录象、图表；在广告中全部内容；本网站为用户提供的其它信息。所有这些内容受版权、商标、标签和其它财产所有权法律的保护。所以，用户只能在本网站和广告商授权下才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。</p><p style=\\\"white-space: normal;\\\">18．法律</p><p style=\\\"white-space: normal;\\\">本网站信息服务条款要与中华人民共和国的法律解释一致。用户和本网站一致同意服从本网站所在地有管辖权的法院管辖。如发生本网站服务条款与中华人民共和国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它条款则依旧保持对用户的约束力。</p><p><br/></p>\"}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-activity/add?reqId=0.034743216302250524:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-activity/add?reqId=0.034743216302250524"},"requestId":"1000006116.107","response":{"base64Encoded":false,"body":"{\"code\":\"K-080106\",\"message\":\"选择的优惠券有问题\",\"context\":{\"couponActivity\":null,\"couponActivityConfigList\":null,\"couponInfoList\":null,\"customerLevelList\":null,\"invalidCouponIdList\":[\"8ad0328d6d0102f0016d0141378c0002\",\"8ad0328d6d0102f0016d0423beea0007\"]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:16:45 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-activity/add?reqId=0.1524000431946122:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-activity/add?reqId=0.1524000431946122"},"requestId":"1000006116.149","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":\"操作成功\",\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:18:44 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-activity/add?reqId=0.6365373662338127:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-activity/add?reqId=0.6365373662338127"},"requestId":"1000006116.109","response":{"base64Encoded":false,"body":"{\"code\":\"K-080106\",\"message\":\"选择的优惠券有问题\",\"context\":{\"couponActivity\":null,\"couponActivityConfigList\":null,\"couponInfoList\":null,\"customerLevelList\":null,\"invalidCouponIdList\":[\"8ad0328d6d0102f0016d0141378c0002\",\"8ad0328d6d0102f0016d0423beea0007\"]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:16:50 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-activity/page?reqId=0.12170964896738012:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-activity/page?reqId=0.12170964896738012"},"requestId":"1000006116.139","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"number\":0,\"size\":10,\"total\":1,\"content\":[{\"activityId\":\"8ad0328d6d0102f0016d014223170004\",\"activityName\":\"限线下ZWC/洗澡活动\",\"startTime\":\"2019-09-05 19:50:00.000\",\"endTime\":\"2019-09-30 19:48:00.000\",\"couponActivityType\":0,\"receiveType\":0,\"pauseFlag\":0,\"receiveCount\":null,\"terminals\":null,\"storeId\":123457607,\"platformFlag\":0,\"delFlag\":0,\"joinLevel\":\"-1\",\"createTime\":\"2019-09-05 19:49:35.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"delTime\":null,\"delPerson\":null,\"leftGroupNum\":null,\"activityTitle\":null,\"activityDesc\":null}],\"last\":true,\"numberOfElements\":1,\"sort\":null,\"totalElements\":1,\"totalPages\":1,\"first\":true}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:59 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-activity/page?reqId=0.1538246787154034:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-activity/page?reqId=0.1538246787154034"},"requestId":"1000006116.152","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"number\":0,\"size\":10,\"total\":2,\"content\":[{\"activityId\":\"8ad0328d6d0102f0016d0426f2b5000e\",\"activityName\":\"activity\",\"startTime\":\"2019-09-06 09:19:00.000\",\"endTime\":\"2019-09-30 09:17:00.000\",\"couponActivityType\":0,\"receiveType\":0,\"pauseFlag\":0,\"receiveCount\":null,\"terminals\":null,\"storeId\":123457607,\"platformFlag\":0,\"delFlag\":0,\"joinLevel\":\"-1\",\"createTime\":\"2019-09-06 09:18:44.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"delTime\":null,\"delPerson\":null,\"leftGroupNum\":null,\"activityTitle\":null,\"activityDesc\":null},{\"activityId\":\"8ad0328d6d0102f0016d014223170004\",\"activityName\":\"限线下ZWC/洗澡活动\",\"startTime\":\"2019-09-05 19:50:00.000\",\"endTime\":\"2019-09-30 19:48:00.000\",\"couponActivityType\":0,\"receiveType\":0,\"pauseFlag\":0,\"receiveCount\":null,\"terminals\":null,\"storeId\":123457607,\"platformFlag\":0,\"delFlag\":0,\"joinLevel\":\"-1\",\"createTime\":\"2019-09-05 19:49:35.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"delTime\":null,\"delPerson\":null,\"leftGroupNum\":null,\"activityTitle\":null,\"activityDesc\":null}],\"last\":true,\"numberOfElements\":2,\"sort\":null,\"totalElements\":2,\"totalPages\":1,\"first\":true}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:18:44 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-activity/page?reqId=0.8086923700912452:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-activity/page?reqId=0.8086923700912452"},"requestId":"1000006116.95","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"number\":0,\"size\":10,\"total\":1,\"content\":[{\"activityId\":\"8ad0328d6d0102f0016d014223170004\",\"activityName\":\"限线下ZWC/洗澡活动\",\"startTime\":\"2019-09-05 19:50:00.000\",\"endTime\":\"2019-09-30 19:48:00.000\",\"couponActivityType\":0,\"receiveType\":0,\"pauseFlag\":0,\"receiveCount\":null,\"terminals\":null,\"storeId\":123457607,\"platformFlag\":0,\"delFlag\":0,\"joinLevel\":\"-1\",\"createTime\":\"2019-09-05 19:49:35.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"delTime\":null,\"delPerson\":null,\"leftGroupNum\":null,\"activityTitle\":null,\"activityDesc\":null}],\"last\":true,\"numberOfElements\":1,\"sort\":null,\"totalElements\":1,\"totalPages\":1,\"first\":true}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:15:33 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-cate/list?reqId=0.06834771477596968:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/coupon-cate/list?reqId=0.06834771477596968"},"requestId":"1000006116.122","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:31 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-cate/list?reqId=0.5396999752442522:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/coupon-cate/list?reqId=0.5396999752442522"},"requestId":"1000006116.83","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:57 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/8ad0328d6d0102f0016d0141378c0002?reqId=0.6471409256249006:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/8ad0328d6d0102f0016d0141378c0002?reqId=0.6471409256249006"},"requestId":"1000006116.133","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfo\":{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":null,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":null,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]},\"goodsList\":null,\"projectPage\":null}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:49 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/8ad0328d6d0102f0016d0423beea0007?reqId=0.6359018001007637:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/8ad0328d6d0102f0016d0423beea0007?reqId=0.6359018001007637"},"requestId":"1000006116.91","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfo\":{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-09-29 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":null,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":null,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},\"goodsList\":null,\"projectPage\":null}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:15:24 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/8ad0328d6d0102f0016d0423beea0007?reqId=0.652332259163118:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/8ad0328d6d0102f0016d0423beea0007?reqId=0.652332259163118"},"requestId":"1000006116.121","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfo\":{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-09-29 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":null,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":null,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},\"goodsList\":null,\"projectPage\":null}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:31 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/8ad0328d6d0102f0016d0423beea0007?reqId=0.7528179296256094:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/8ad0328d6d0102f0016d0423beea0007?reqId=0.7528179296256094"},"requestId":"1000006116.114","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfo\":{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-09-29 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":null,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":null,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},\"goodsList\":null,\"projectPage\":null}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:25 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.11206774624839921:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.11206774624839921"},"requestId":"1000006116.88","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfos\":{\"number\":0,\"size\":10,\"total\":2,\"content\":[{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-09-29 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":1,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":1,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":0,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":1,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]}],\"last\":true,\"numberOfElements\":2,\"sort\":null,\"totalElements\":2,\"totalPages\":1,\"first\":true}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:15:15 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.11848579723561214:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.11848579723561214"},"requestId":"1000006116.117","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfos\":{\"number\":0,\"size\":10,\"total\":2,\"content\":[{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-09-29 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":1,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":1,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":0,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":1,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]}],\"last\":true,\"numberOfElements\":2,\"sort\":null,\"totalElements\":2,\"totalPages\":1,\"first\":true}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:29 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.23503401676676905:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.23503401676676905"},"requestId":"1000006116.105","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfos\":{\"number\":0,\"size\":10,\"total\":2,\"content\":[{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-09-29 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":1,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":1,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":0,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":1,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]}],\"last\":true,\"numberOfElements\":2,\"sort\":null,\"totalElements\":2,\"totalPages\":1,\"first\":true}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:16:02 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.2993708126291037:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.2993708126291037"},"requestId":"1000006116.147","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfos\":{\"number\":0,\"size\":10,\"total\":2,\"content\":[{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-10-31 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":1,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":1,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":0,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":1,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]}],\"last\":true,\"numberOfElements\":2,\"sort\":null,\"totalElements\":2,\"totalPages\":1,\"first\":true}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:18:29 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.3596502517010729:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.3596502517010729"},"requestId":"1000006116.136","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfos\":{\"number\":0,\"size\":10,\"total\":2,\"content\":[{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-10-31 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":1,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":1,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":0,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":1,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]}],\"last\":true,\"numberOfElements\":2,\"sort\":null,\"totalElements\":2,\"totalPages\":1,\"first\":true}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:51 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.36938597102375725:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.36938597102375725"},"requestId":"1000006116.69","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfos\":{\"number\":0,\"size\":10,\"total\":1,\"content\":[{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":0,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":1,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]}],\"last\":true,\"numberOfElements\":1,\"sort\":null,\"totalElements\":1,\"totalPages\":1,\"first\":true}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:46 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.5235177866539376:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.5235177866539376"},"requestId":"1000006116.112","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfos\":{\"number\":0,\"size\":10,\"total\":2,\"content\":[{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-09-29 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":1,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":1,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":0,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":1,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]}],\"last\":true,\"numberOfElements\":2,\"sort\":null,\"totalElements\":2,\"totalPages\":1,\"first\":true}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:21 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.9721442373284765:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info/page?reqId=0.9721442373284765"},"requestId":"1000006116.131","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"couponInfos\":{\"number\":0,\"size\":10,\"total\":2,\"content\":[{\"couponId\":\"8ad0328d6d0102f0016d0423beea0007\",\"couponName\":\"demo\",\"rangeDayType\":0,\"startTime\":\"2019-09-06 00:00:00.000\",\"endTime\":\"2019-10-31 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":500.00,\"fullBuyType\":1,\"denomination\":50.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"reamark\",\"couponType\":1,\"delFlag\":0,\"isFree\":1,\"cateNames\":[],\"scopeNames\":[\"12\",\"13\",\"test\"],\"couponStatus\":1,\"scopeIds\":[\"649\",\"650\",\"654\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"1\",\"8000016c27630be93d88ec70305d4a3e\",\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"寄养\",\"2323\",\"洗澡\"],\"useChannelList\":[1]},{\"couponId\":\"8ad0328d6d0102f0016d0141378c0002\",\"couponName\":\"仅门店混合分类优惠券\",\"rangeDayType\":0,\"startTime\":\"2019-09-05 00:00:00.000\",\"endTime\":\"2019-09-30 23:59:59.000\",\"effectiveDays\":null,\"fullBuyPrice\":50.00,\"fullBuyType\":1,\"denomination\":20.00,\"storeId\":123457607,\"platformFlag\":0,\"scopeType\":3,\"couponDesc\":\"仅面向门店的混合分类优惠券、仅支持zwc、洗澡\",\"couponType\":1,\"delFlag\":0,\"isFree\":0,\"cateNames\":[],\"scopeNames\":[\"zwc\"],\"couponStatus\":1,\"scopeIds\":[\"679\"],\"cateIds\":[],\"goodsFlag\":true,\"projectFlag\":true,\"projectScopeType\":1,\"projectScopeIds\":[\"8000016bf33fe91b1fdc95a69c81ef71\"],\"projectScopeNames\":[\"洗澡\"],\"useChannelList\":[1]}],\"last\":true,\"numberOfElements\":2,\"sort\":null,\"totalElements\":2,\"totalPages\":1,\"first\":true}}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:47 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info?reqId=0.09286672821285413:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/coupon-info?reqId=0.09286672821285413"},"requestId":"1000006116.85","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:15:14 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/coupon-info?reqId=0.3154437576516509:[PUT]":[{"request":{"method":"PUT","url":"https://sellerbff.s2btest.kstore.shop/coupon-info?reqId=0.3154437576516509"},"requestId":"1000006116.128","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":null}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:47 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/employee/login:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/employee/login"},"requestId":"1000006116.31","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"token\":\"eyJhbGciOiJIUzI1NiJ9.eyJjb21wYW55SW5mb0lkIjo4NTIsImVudkNvZGUiOiJ0ZXN0MSIsInN5c3RlbUNvZGUiOiJkMmNTdG9yZSIsImlwIjoiNTguMjQwLjI1NC4xNjIiLCJhZG1pbklkIjo4NTIsImVtcGxveWVlSWQiOiI4YWQwMzI4ZDZiOTcxNmEzMDE2Yjk3ODdjNGRiMDAwMSIsInN0b3JlSWQiOjEyMzQ1NzYwNywiZXhwIjoxNTY3ODcxOTk5LCJFbXBsb3llZU5hbWUiOiIxNzcwMDAwMDAwMCIsInVzZXJJZCI6IjAwMDAwMCIsInBsYXRmb3JtIjoiU1RPUkUifQ.9yqTdmQeAASIK1I-7J3Aikmx35Ca3xAR84BVYmNnC8c\",\"accountName\":\"17700000000\",\"mobile\":\"17700000000\",\"companyInfoId\":852,\"storeId\":123457607,\"storeCode\":\"11009\",\"auditState\":1,\"isMasterAccount\":1,\"isEmployee\":0,\"employeeId\":\"8ad0328d6b9716a3016b9787c4db0001\",\"employeeName\":\"啦啦啦1\",\"companyType\":1,\"supplierName\":null,\"storeName\":\"test33333\",\"storeLogo\":\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201907171131251933.gif\",\"selectedStore\":true,\"switchFlag\":false,\"contractEndDate\":\"2019-09-06 23:59:59.000\"}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:34 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/employee/store/state:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/employee/store/state"},"requestId":"1000006116.55","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeState\":0,\"storeClosedReason\":null,\"overDueDay\":0,\"contractEndDate\":\"2019-09-06 23:59:59.000\",\"storeLogo\":\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201907171131251933.gif\"}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/simple-project-cate?reqId=0.010711738522699576:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/simple-project-cate?reqId=0.010711738522699576"},"requestId":"1000006116.126","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"projectCateList\":[{\"projectCateId\":\"1\",\"projectCateName\":\"寄养\"},{\"projectCateId\":\"8000016c27630be93d88ec70305d4a3e\",\"projectCateName\":\"2323\"},{\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectCateName\":\"40\"},{\"projectCateId\":\"8000016c0e1ce9465c0921813dc6d02b\",\"projectCateName\":\"18\"},{\"projectCateId\":\"8000016c0e1cffe627e7f4fc1e3dd291\",\"projectCateName\":\"17\"},{\"projectCateId\":\"8000016bf32385353728bfa55274928f\",\"projectCateName\":\"33\"},{\"projectCateId\":\"8000016bf323f32f3ef28b5d466f384b\",\"projectCateName\":\"44\"},{\"projectCateId\":\"8000016bf33fe91b1fdc95a69c81ef71\",\"projectCateName\":\"洗澡\"},{\"projectCateId\":\"8000016c6c5278f41751d3c55eb4c03b\",\"projectCateName\":\"test123\"},{\"projectCateId\":\"8000016c0e1babb05f9229502341a9f5\",\"projectCateName\":\"66\"},{\"projectCateId\":\"8ad0328d6bbbd7be016bbc08c5e90004\",\"projectCateName\":\"活体\"},{\"projectCateId\":\"8ad0328d6bb0473f016bb169ffbc000e\",\"projectCateName\":\"寄养\"},{\"projectCateId\":\"8ad0328d6babda13016bac869ed00020\",\"projectCateName\":\"test22\"},{\"projectCateId\":\"8ad0328d6b9718ca016b9855095f005e\",\"projectCateName\":\"萌宠美容\"},{\"projectCateId\":\"8ad0328d6b9718ca016b9854e788005d\",\"projectCateName\":\"猫咪精洗套餐\"},{\"projectCateId\":\"8ad0328d6b9718ca016b9854c7b5005c\",\"projectCateName\":\"大型犬精洗套餐\"},{\"projectCateId\":\"8ad0328d6b9718ca016b9854a86b005b\",\"projectCateName\":\"小型犬精洗套餐\"},{\"projectCateId\":\"8ad0328d6b9718ca016b983977490054\",\"projectCateName\":\"test1\"}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:31 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/simple-project-cate?reqId=0.6436221949830145:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/goods/project-cate-store/simple-project-cate?reqId=0.6436221949830145"},"requestId":"1000006116.81","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"projectCateList\":[{\"projectCateId\":\"1\",\"projectCateName\":\"寄养\"},{\"projectCateId\":\"8000016c27630be93d88ec70305d4a3e\",\"projectCateName\":\"2323\"},{\"projectCateId\":\"8000016c0e1d3099207ab608681a5175\",\"projectCateName\":\"40\"},{\"projectCateId\":\"8000016c0e1ce9465c0921813dc6d02b\",\"projectCateName\":\"18\"},{\"projectCateId\":\"8000016c0e1cffe627e7f4fc1e3dd291\",\"projectCateName\":\"17\"},{\"projectCateId\":\"8000016bf32385353728bfa55274928f\",\"projectCateName\":\"33\"},{\"projectCateId\":\"8000016bf323f32f3ef28b5d466f384b\",\"projectCateName\":\"44\"},{\"projectCateId\":\"8000016bf33fe91b1fdc95a69c81ef71\",\"projectCateName\":\"洗澡\"},{\"projectCateId\":\"8000016c6c5278f41751d3c55eb4c03b\",\"projectCateName\":\"test123\"},{\"projectCateId\":\"8000016c0e1babb05f9229502341a9f5\",\"projectCateName\":\"66\"},{\"projectCateId\":\"8ad0328d6bbbd7be016bbc08c5e90004\",\"projectCateName\":\"活体\"},{\"projectCateId\":\"8ad0328d6bb0473f016bb169ffbc000e\",\"projectCateName\":\"寄养\"},{\"projectCateId\":\"8ad0328d6babda13016bac869ed00020\",\"projectCateName\":\"test22\"},{\"projectCateId\":\"8ad0328d6b9718ca016b9855095f005e\",\"projectCateName\":\"萌宠美容\"},{\"projectCateId\":\"8ad0328d6b9718ca016b9854e788005d\",\"projectCateName\":\"猫咪精洗套餐\"},{\"projectCateId\":\"8ad0328d6b9718ca016b9854c7b5005c\",\"projectCateName\":\"大型犬精洗套餐\"},{\"projectCateId\":\"8ad0328d6b9718ca016b9854a86b005b\",\"projectCateName\":\"小型犬精洗套餐\"},{\"projectCateId\":\"8ad0328d6b9718ca016b983977490054\",\"projectCateName\":\"test1\"}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:57 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet-order/count:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet-order/count"},"requestId":"1000006116.57","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"initCount\":20}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/pet-order/wait-for-distribute-count:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/pet-order/wait-for-distribute-count"},"requestId":"1000006116.59","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"orderCount\":19}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:38 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/roleMenuFunc/functions:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/roleMenuFunc/functions"},"requestId":"1000006116.35","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[\"f_role_manage\",\"f_pet_order_list\",\"f_information_manager\",\"f_import\",\"foster-list1\",\"/distribution-setting\",\"f_royalty_setting\",\"f_card_survey\",\"f_cashier_0\",\"f_distribution_goods\",\"f_distribution_record\",\"f_flow_watch_1\",\"f_foster_care\",\"f_freight_type_set\",\"f_goods_list\",\"f_goods_check_1\",\"f_living_care\",\"f_marketing_gift_add\",\"f_meituan_consume_list\",\"f_operation_log_list\",\"f_stroke_card_list\",\"f_video\",\"f_timing_card_add\",\"f_cashier\",\"f_apps\",\"f_meituan_auth\",\"f_meituan_deal_list\",\"f_minipro_manage\",\"f_local_config_1\",\"f_sms_touch\",\"f_appointment_center\",\"f_appointment_setting\",\"寄养详情\",\"foster-detail\",\"foster-list\",\"forst-notice\",\"foster-setting\",\"f_appoint_list\",\"f_store_funds\",\"f_coupon_activity_list\",\"f_coupon_list\",\"f_foster_care_modify\",\"f_goods_detail_1\",\"f_living_care_modify\",\"f_marketing_discount_add\",\"f_marketing_operate\",\"f_marketing_reduction_add\",\"f_online_server_edit\",\"f_operation_log_export\",\"f_pet_list\",\"f_project_cate\",\"f_rechargeable_card_add\",\"f_store_distribution_setting_edit1\",\"f_trade_watch_1\",\"f_local_config_2\",\"f_sms_sendRecord\",\"f_customer_level_2\",\"f_goods_sku_edit\",\"f_goods_watch_1\",\"f_customer_manage\",\"f_check_export\",\"f_customer_watch_1\",\"f_project_list\",\"f_employee_watch_1\",\"f_goods_del\",\"f_stat_download_1\",\"f_goods_add\",\"f_goods_eval_q\",\"f_page_manage_pc\",\"f_page_manage_mobile\",\"f_template_manage_pc\",\"f_template_manage_mobile\",\"f_goods_cate\",\"f_store_goods_tab_0\",\"f_store_goods_tab_1\",\"f_store_goods_tab_2\",\"valet_order_f_001\",\"rolf001\",\"rolf002\",\"rolf003\",\"rolf004\",\"rolf005\",\"rolf006\",\"rodf001\",\"f_return_apply_list\",\"f_order_return_edit\",\"f_customer_list\",\"f_customer_level_0\",\"f_customer_level_1\",\"fetchAllOfflineAccounts\",\"f_store_level_add_1\",\"f_billing_details\",\"destoryOpenOrderInvoice\",\"f_employee_list\",\"f_basic_setting\",\"f_store_info\",\"f_expressManage_1\",\"f_foster_config\",\"f_appointmentr_config\",\"f_image\",\"f_resource\"]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/roleMenuFunc/menus:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/roleMenuFunc/menus"},"requestId":"1000006116.33","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"id\":\"menu_3e0ceea19c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef01e9c9c11e9b48a0050568808e1\",\"realId\":\"3e0ceea19c9f11e9b48a0050568808e1\",\"title\":\"应用中心\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/apps\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":0},{\"id\":\"menu_ff8080816cd6896a016cd7d365260001\",\"pid\":\"menu_ff8080816cd6896a016cd79a75f60000\",\"realId\":\"ff8080816cd6896a016cd7d365260001\",\"title\":\"概况\",\"grade\":2,\"icon\":\"survey_ico.png\",\"authNm\":null,\"url\":\"/information\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":0},{\"id\":\"menu_32dee2489c9c11e9b48a0050568808e1\",\"pid\":\"menu_ff8080816cd6896a016cd79a75f60000\",\"realId\":\"32dee2489c9c11e9b48a0050568808e1\",\"title\":\"商品\",\"grade\":2,\"icon\":\"goods_ico.png\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_3e0ced789c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feed7c9c9c11e9b48a0050568808e1\",\"realId\":\"3e0ced789c9f11e9b48a0050568808e1\",\"title\":\"分销设置\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/distribution-setting\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_3e0cf0d19c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feefd09c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf0d19c9f11e9b48a0050568808e1\",\"title\":\"流量统计\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/flow-statistics\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_3e0cf19d9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef4719c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf19d9c9f11e9b48a0050568808e1\",\"title\":\"促销活动列表\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/marketing-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_3e0cf66a9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef3519c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf66a9c9f11e9b48a0050568808e1\",\"title\":\"服务列表\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/project-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_3e0cf6da9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef4569c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf6da9c9f11e9b48a0050568808e1\",\"title\":\"分销设置\",\"grade\":4,\"icon\":\"1\",\"authNm\":null,\"url\":\"/distribution-setting\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_3e0cf7739c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef4d29c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf7739c9f11e9b48a0050568808e1\",\"title\":\"提成设置\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/royalty-setting\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_3e0cf7859c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef3699c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf7859c9f11e9b48a0050568808e1\",\"title\":\"小程序管理\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/mini-program\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_e4feefd09c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee0b69c9c11e9b48a0050568808e1\",\"realId\":\"e4feefd09c9c11e9b48a0050568808e1\",\"title\":\"统计报表\",\"grade\":3,\"icon\":\"statistics-icon.png\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_e4fef01e9c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee48d9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef01e9c9c11e9b48a0050568808e1\",\"title\":\"应用中心\",\"grade\":3,\"icon\":\"marketing-empty.png\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_e4fef3699c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee48d9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef3699c9c11e9b48a0050568808e1\",\"title\":\"小程序管理\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816c5c141d016c5fb8ef380001\",\"pid\":\"menu_ff8080816c5c141d016c5fb740b20000\",\"realId\":\"ff8080816c5c141d016c5fb8ef380001\",\"title\":\"短信触达\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/sms-touch\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816c69ab3a016c69c8d7100001\",\"pid\":\"menu_ff8080816c69ab3a016c69c7fc3d0000\",\"realId\":\"ff8080816c69ab3a016c69c8d7100001\",\"title\":\"短信触达\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/sms-touch\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816c6f8ae9016c6fc6640c0001\",\"pid\":\"menu_ff8080816c5098e9016c514e34980005\",\"realId\":\"ff8080816c6f8ae9016c6fc6640c0001\",\"title\":\"配送设置\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/local-config\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816c98ba66016c99a534850001\",\"pid\":\"menu_ff8080816c98ba66016c99a4d0cd0000\",\"realId\":\"ff8080816c98ba66016c99a534850001\",\"title\":\"预约中心\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816c98ba66016c99a72fbc0003\",\"pid\":\"menu_ff8080816c98ba66016c99a534850001\",\"realId\":\"ff8080816c98ba66016c99a72fbc0003\",\"title\":\"预约看板\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/appointment-center\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816ca78ff3016ca8d7042f0007\",\"pid\":\"menu_ff8080816ca78ff3016ca89073fa0002\",\"realId\":\"ff8080816ca78ff3016ca8d7042f0007\",\"title\":\"寄养中心\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816ca78ff3016ca8eac8a40012\",\"pid\":\"menu_ff8080816ca78ff3016ca8d7042f0007\",\"realId\":\"ff8080816ca78ff3016ca8eac8a40012\",\"title\":\"寄养看板\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/foster-notice\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816cd6896a016cd79a75f60000\",\"pid\":\"menu_0\",\"realId\":\"ff8080816cd6896a016cd79a75f60000\",\"title\":\"工作台\",\"grade\":1,\"icon\":\"c\",\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816cffcd14016cfffb44190003\",\"pid\":\"menu_ff8080816cffcd14016cfffafcc10002\",\"realId\":\"ff8080816cffcd14016cfffb44190003\",\"title\":\"资金管理\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_ff8080816cffcd14016cfffbcb8e0004\",\"pid\":\"menu_ff8080816cffcd14016cfffb44190003\",\"realId\":\"ff8080816cffcd14016cfffbcb8e0004\",\"title\":\"店铺资金\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/store-funds\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":1},{\"id\":\"menu_32dee3109c9c11e9b48a0050568808e1\",\"pid\":\"menu_ff8080816cd6896a016cd79a75f60000\",\"realId\":\"32dee3109c9c11e9b48a0050568808e1\",\"title\":\"订单\",\"grade\":2,\"icon\":\"order_ico.png\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_32dee57f9c9c11e9b48a0050568808e1\",\"pid\":\"menu_0\",\"realId\":\"32dee57f9c9c11e9b48a0050568808e1\",\"title\":\"收银台\",\"grade\":1,\"icon\":\"cashier_ico.png\",\"authNm\":null,\"url\":\"/cashier\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_3e0ced029c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feed7c9c9c11e9b48a0050568808e1\",\"realId\":\"3e0ced029c9f11e9b48a0050568808e1\",\"title\":\"分销商品\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/distribution-goods-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_3e0cf0e39c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feefd09c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf0e39c9f11e9b48a0050568808e1\",\"title\":\"交易统计\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/trade-statistics\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_3e0cf2db9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef4929c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf2db9c9f11e9b48a0050568808e1\",\"title\":\"优惠券列表\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/coupon-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_3e0cf67c9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef3519c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf67c9c9f11e9b48a0050568808e1\",\"title\":\"服务分类\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/project-cate-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_3e0cf7989c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef37e9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf7989c9f11e9b48a0050568808e1\",\"title\":\"团购列表\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/meituan-groupon-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_e4fef37e9c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee48d9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef37e9c9c11e9b48a0050568808e1\",\"title\":\"美团点评\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_ff8080816ca78ff3016ca8b97ad30004\",\"pid\":\"menu_ff8080816c98ba66016c99a534850001\",\"realId\":\"ff8080816ca78ff3016ca8b97ad30004\",\"title\":\"预约列表\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/appointment-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_ff8080816ca78ff3016ca8e64a6f000f\",\"pid\":\"menu_ff8080816ca78ff3016ca8d7042f0007\",\"realId\":\"ff8080816ca78ff3016ca8e64a6f000f\",\"title\":\"寄养列表\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/foster-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":2},{\"id\":\"menu_32dee32c9c9c11e9b48a0050568808e1\",\"pid\":\"menu_ff8080816cd6896a016cd79a75f60000\",\"realId\":\"32dee32c9c9c11e9b48a0050568808e1\",\"title\":\"会员\",\"grade\":2,\"icon\":\"members_ico.png\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_32dee48d9c9c11e9b48a0050568808e1\",\"pid\":\"menu_0\",\"realId\":\"32dee48d9c9c11e9b48a0050568808e1\",\"title\":\"应用中心\",\"grade\":1,\"icon\":\"application_ico.png\",\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_3e0ced909c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feed7c9c9c11e9b48a0050568808e1\",\"realId\":\"3e0ced909c9f11e9b48a0050568808e1\",\"title\":\"分销记录\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/distribution-record\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_3e0cf0f59c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feefd09c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf0f59c9f11e9b48a0050568808e1\",\"title\":\"商品统计\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/goods-statistics\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_3e0cf2c89c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef4929c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf2c89c9f11e9b48a0050568808e1\",\"title\":\"优惠券活动列表\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/coupon-activity-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_3e0cf7a99c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef37e9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf7a99c9f11e9b48a0050568808e1\",\"title\":\"核销列表\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/meituan-consume-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_3e0cf7bb9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef37e9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf7bb9c9f11e9b48a0050568808e1\",\"title\":\"授权管理\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/meituan-auth\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_ff8080816ca78ff3016ca8b9dae60005\",\"pid\":\"menu_ff8080816c98ba66016c99a534850001\",\"realId\":\"ff8080816ca78ff3016ca8b9dae60005\",\"title\":\"预约设置\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/appointment-setting\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_ff8080816ca78ff3016ca8eb411c0013\",\"pid\":\"menu_ff8080816ca78ff3016ca8d7042f0007\",\"realId\":\"ff8080816ca78ff3016ca8eb411c0013\",\"title\":\"寄养设置\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/foster-setting\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":3},{\"id\":\"menu_32dee47b9c9c11e9b48a0050568808e1\",\"pid\":\"menu_ff8080816cd6896a016cd79a75f60000\",\"realId\":\"32dee47b9c9c11e9b48a0050568808e1\",\"title\":\"设置\",\"grade\":2,\"icon\":\"set_ico.png\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":4},{\"id\":\"menu_3e0cf1059c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feefd09c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf1059c9f11e9b48a0050568808e1\",\"title\":\"客户统计\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/customer-statistics\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":4},{\"id\":\"menu_3e0cf8539c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef2ff9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf8539c9f11e9b48a0050568808e1\",\"title\":\"划卡记录\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/stroke-card-record\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":4},{\"id\":\"menu_ff8080816c98ba66016c99a4d0cd0000\",\"pid\":\"menu_0\",\"realId\":\"ff8080816c98ba66016c99a4d0cd0000\",\"title\":\"预约中心\",\"grade\":1,\"icon\":\"cashier_ico.png\",\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":4},{\"id\":\"menu_3e0cf13c9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feefd09c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf13c9c9f11e9b48a0050568808e1\",\"title\":\"业务员统计\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/employee-statistics\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":5},{\"id\":\"menu_3e0cf1799c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef2ff9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf1799c9f11e9b48a0050568808e1\",\"title\":\"充值卡\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/rechargeable-card-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":5},{\"id\":\"menu_ff8080816ca78ff3016ca89073fa0002\",\"pid\":\"menu_0\",\"realId\":\"ff8080816ca78ff3016ca89073fa0002\",\"title\":\"寄养中心\",\"grade\":1,\"icon\":\"cashier_ico.png\",\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":5},{\"id\":\"menu_3e0cf1619c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feefd09c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf1619c9f11e9b48a0050568808e1\",\"title\":\"报表下载\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/download-report\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":6},{\"id\":\"menu_3e0cf18b9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef2ff9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf18b9c9f11e9b48a0050568808e1\",\"title\":\"计次卡\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/timing-card-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":6},{\"id\":\"menu_ff8080816c5098e9016c514e34980005\",\"pid\":\"menu_32dee48d9c9c11e9b48a0050568808e1\",\"realId\":\"ff8080816c5098e9016c514e34980005\",\"title\":\"同城配送\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":6},{\"id\":\"menu_ff8080816cffcd14016cfffafcc10002\",\"pid\":\"menu_ff8080816cd6896a016cd79a75f60000\",\"realId\":\"ff8080816cffcd14016cfffafcc10002\",\"title\":\"财务\",\"grade\":2,\"icon\":\"cashier_ico.png\",\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":6},{\"id\":\"menu_e4fef2ff9c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee48d9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef2ff9c9c11e9b48a0050568808e1\",\"title\":\"会员卡\",\"grade\":3,\"icon\":\"1496728582489.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":8},{\"id\":\"menu_e4fef3179c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee2489c9c11e9b48a0050568808e1\",\"realId\":\"e4fef3179c9c11e9b48a0050568808e1\",\"title\":\"商品管理\",\"grade\":3,\"icon\":\"1496720449610.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":8},{\"id\":\"menu_e4fef4929c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee48d9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef4929c9c11e9b48a0050568808e1\",\"title\":\"优惠券\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":8},{\"id\":\"menu_3e0cf6309c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef3179c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf6309c9f11e9b48a0050568808e1\",\"title\":\"商品列表\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/goods-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":9},{\"id\":\"menu_e4fef3519c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee2489c9c11e9b48a0050568808e1\",\"realId\":\"e4fef3519c9c11e9b48a0050568808e1\",\"title\":\"服务管理\",\"grade\":3,\"icon\":\"1496720449610.jpg\",\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":9},{\"id\":\"menu_ff8080816c69ab3a016c69c7fc3d0000\",\"pid\":\"menu_32dee48d9c9c11e9b48a0050568808e1\",\"realId\":\"ff8080816c69ab3a016c69c7fc3d0000\",\"title\":\"短信发送\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":9},{\"id\":\"menu_ff8080816c6f1aff016c83d808b90002\",\"pid\":\"menu_ff8080816c6f1aff016c83d549180000\",\"realId\":\"ff8080816c6f1aff016c83d808b90002\",\"title\":\"页面管理\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/page-manage/pc\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":10},{\"id\":\"menu_ff8080816c6f1aff016c83d84cba0003\",\"pid\":\"menu_ff8080816c6f1aff016c83d5a5f30001\",\"realId\":\"ff8080816c6f1aff016c83d84cba0003\",\"title\":\"页面管理\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/page-manage/weixin\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":10},{\"id\":\"menu_3e0cef239c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef3179c9c11e9b48a0050568808e1\",\"realId\":\"3e0cef239c9f11e9b48a0050568808e1\",\"title\":\"发布商品\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/release-products\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":11},{\"id\":\"menu_3e0cef7d9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef3179c9c11e9b48a0050568808e1\",\"realId\":\"3e0cef7d9c9f11e9b48a0050568808e1\",\"title\":\"商品分类\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/goods-cate\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":12},{\"id\":\"menu_e4feeeea9c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee3109c9c11e9b48a0050568808e1\",\"realId\":\"e4feeeea9c9c11e9b48a0050568808e1\",\"title\":\"订单管理\",\"grade\":3,\"icon\":\"1496720232614.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":13},{\"id\":\"menu_3e0ceff59c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4feeeea9c9c11e9b48a0050568808e1\",\"realId\":\"3e0ceff59c9f11e9b48a0050568808e1\",\"title\":\"订单列表\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/order-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":14},{\"id\":\"menu_e4fef06e9c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee32c9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef06e9c9c11e9b48a0050568808e1\",\"title\":\"会员管理\",\"grade\":3,\"icon\":\"1496727665078.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":18},{\"id\":\"menu_3e0cf2409c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef06e9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf2409c9f11e9b48a0050568808e1\",\"title\":\"会员列表\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/customer-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":19},{\"id\":\"menu_ff8080816c6f1aff016c83d9b22a0004\",\"pid\":\"menu_ff8080816c6f1aff016c83d549180000\",\"realId\":\"ff8080816c6f1aff016c83d9b22a0004\",\"title\":\"模板管理\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/template-manage/pc\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":20},{\"id\":\"menu_ff8080816c6f1aff016c83d9f79e0005\",\"pid\":\"menu_ff8080816c6f1aff016c83d5a5f30001\",\"realId\":\"ff8080816c6f1aff016c83d9f79e0005\",\"title\":\"模板管理\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/template-manage/weixin\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":20},{\"id\":\"menu_3e0cf7f09c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef06e9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf7f09c9f11e9b48a0050568808e1\",\"title\":\"宠物列表\",\"grade\":4,\"icon\":null,\"authNm\":null,\"url\":\"/pet-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":21},{\"id\":\"menu_e4fef1789c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee3d59c9c11e9b48a0050568808e1\",\"realId\":\"e4fef1789c9c11e9b48a0050568808e1\",\"title\":\"收款账户\",\"grade\":3,\"icon\":\"1496720573138.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":21},{\"id\":\"menu_3e0cf3869c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef1789c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf3869c9f11e9b48a0050568808e1\",\"title\":\"供应商收款账户\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/vendor-payment-account\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":23},{\"id\":\"menu_e4fef1c49c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee3d59c9c11e9b48a0050568808e1\",\"realId\":\"e4fef1c49c9c11e9b48a0050568808e1\",\"title\":\"资金管理\",\"grade\":3,\"icon\":\"1496720633054.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":24},{\"id\":\"menu_e4fef1db9c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee3d59c9c11e9b48a0050568808e1\",\"realId\":\"e4fef1db9c9c11e9b48a0050568808e1\",\"title\":\"开票管理\",\"grade\":3,\"icon\":\"1496720652755.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":29},{\"id\":\"menu_3e0cf3c59c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef1db9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf3c59c9f11e9b48a0050568808e1\",\"title\":\"订单开票\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/finance-order-ticket\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":30},{\"id\":\"menu_3e0cf3f79c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef1db9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf3f79c9f11e9b48a0050568808e1\",\"title\":\"开票项目\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/finance-ticket-new\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":33},{\"id\":\"menu_3e0cf39b9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef1c49c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf39b9c9f11e9b48a0050568808e1\",\"title\":\"财务对账\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/finance-manage-check\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":36},{\"id\":\"menu_3e0cf3ae9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef1c49c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf3ae9c9f11e9b48a0050568808e1\",\"title\":\"财务结算\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/finance-manage-settle\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":37},{\"id\":\"menu_3e0cf40c9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef2159c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf40c9c9f11e9b48a0050568808e1\",\"title\":\"员工列表\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/employee-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":39},{\"id\":\"menu_3e0cf4209c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef2159c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf4209c9f11e9b48a0050568808e1\",\"title\":\"角色设置\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/role-list\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":40},{\"id\":\"menu_e4fef22e9c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee47b9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef22e9c9c11e9b48a0050568808e1\",\"title\":\"设置\",\"grade\":3,\"icon\":\"1496720694903.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":41},{\"id\":\"menu_e4fef4d29c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee47b9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef4d29c9c11e9b48a0050568808e1\",\"title\":\"提成设置\",\"grade\":3,\"icon\":null,\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":42},{\"id\":\"menu_3e0cf4599c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef22e9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf4599c9f11e9b48a0050568808e1\",\"title\":\"店铺信息\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/store-info-edit/0\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":43},{\"id\":\"menu_e4fef2159c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee47b9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef2159c9c11e9b48a0050568808e1\",\"title\":\"员工管理\",\"grade\":3,\"icon\":\"1496720672998.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":43},{\"id\":\"menu_3e0cf4a69c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef26c9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf4a69c9f11e9b48a0050568808e1\",\"title\":\"物流公司设置\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/logistics-manage\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":46},{\"id\":\"menu_3e0cf1dc9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef26c9c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf1dc9c9f11e9b48a0050568808e1\",\"title\":\"运费模板\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/freight\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":47},{\"id\":\"menu_e4fef2809c9c11e9b48a0050568808e1\",\"pid\":\"menu_32dee47b9c9c11e9b48a0050568808e1\",\"realId\":\"e4fef2809c9c11e9b48a0050568808e1\",\"title\":\"素材管理\",\"grade\":3,\"icon\":\"1496720799651.jpg\",\"authNm\":null,\"url\":\"\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":47},{\"id\":\"menu_3e0cf4ba9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef2809c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf4ba9c9f11e9b48a0050568808e1\",\"title\":\"图片库\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/picture-store\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":48},{\"id\":\"menu_3e0cf3309c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef2809c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf3309c9f11e9b48a0050568808e1\",\"title\":\"视频库\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/video-store\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":49},{\"id\":\"menu_3e0cf4cc9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef2809c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf4cc9c9f11e9b48a0050568808e1\",\"title\":\"素材分类\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/resource-cate\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":50},{\"id\":\"menu_ff8080816c6f1aff016c83d5a5f30001\",\"pid\":\"menu_32dee47b9c9c11e9b48a0050568808e1\",\"realId\":\"ff8080816c6f1aff016c83d5a5f30001\",\"title\":\"小程序装修\",\"grade\":3,\"icon\":\"mobile.png\",\"authNm\":null,\"url\":null,\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":138},{\"id\":\"menu_3e0cf1fd9c9f11e9b48a0050568808e1\",\"pid\":\"menu_e4fef0889c9c11e9b48a0050568808e1\",\"realId\":\"3e0cf1fd9c9f11e9b48a0050568808e1\",\"title\":\"在线客服\",\"grade\":4,\"icon\":\"\",\"authNm\":null,\"url\":\"/online-service\",\"reqType\":null,\"authRemark\":null,\"isMenuUrl\":null,\"sort\":155}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/store/appointment-center/center-detail:[POST]":[{"request":{"method":"POST","url":"https://sellerbff.s2btest.kstore.shop/store/appointment-center/center-detail"},"requestId":"1000006116.62","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"appointmentOfCateVOList\":[]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:38 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.24385451462031527:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.24385451462031527"},"requestId":"1000006116.97","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeLevelVOList\":[{\"storeLevelId\":13346,\"storeId\":123457607,\"levelName\":\"普通\",\"discountRate\":1.00,\"amountConditions\":null,\"orderConditions\":1,\"delFlag\":0,\"createTime\":\"2019-06-27 14:03:25.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:15:33 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.26089174255431424:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.26089174255431424"},"requestId":"1000006116.144","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeLevelVOList\":[{\"storeLevelId\":13346,\"storeId\":123457607,\"levelName\":\"普通\",\"discountRate\":1.00,\"amountConditions\":null,\"orderConditions\":1,\"delFlag\":0,\"createTime\":\"2019-06-27 14:03:25.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:18:03 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.4599495991177849:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.4599495991177849"},"requestId":"1000006116.154","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeLevelVOList\":[{\"storeLevelId\":13346,\"storeId\":123457607,\"levelName\":\"普通\",\"discountRate\":1.00,\"amountConditions\":null,\"orderConditions\":1,\"delFlag\":0,\"createTime\":\"2019-06-27 14:03:25.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:18:44 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.4890821740679101:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.4890821740679101"},"requestId":"1000006116.102","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeLevelVOList\":[{\"storeLevelId\":13346,\"storeId\":123457607,\"levelName\":\"普通\",\"discountRate\":1.00,\"amountConditions\":null,\"orderConditions\":1,\"delFlag\":0,\"createTime\":\"2019-06-27 14:03:25.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:15:39 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.9995394098539616:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/store/storeLevel/list?reqId=0.9995394098539616"},"requestId":"1000006116.141","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeLevelVOList\":[{\"storeLevelId\":13346,\"storeId\":123457607,\"levelName\":\"普通\",\"discountRate\":1.00,\"amountConditions\":null,\"orderConditions\":1,\"delFlag\":0,\"createTime\":\"2019-06-27 14:03:25.000\",\"createPerson\":\"8ad0328d6b9716a3016b9787c4db0001\",\"updateTime\":null,\"updatePerson\":null,\"deleteTime\":null,\"deletePerson\":null}]}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:59 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/store/storesByEmployeeId:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/store/storesByEmployeeId"},"requestId":"1000006116.50","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeVOList\":[{\"storeId\":123457607,\"shopTypeId\":\"123123123124123121251241231\",\"storeCode\":\"11009\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-06-27 14:03:25.000\",\"contractEndDate\":\"2019-09-06 23:59:59.000\",\"storeName\":\"test33333\",\"storeLogo\":\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201907171131251933.gif\",\"storeSign\":\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201907251017290657.png\",\"contactPerson\":null,\"contactMobile\":\"12\",\"contactEmail\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"addressDetail\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-09-06 09:13:34.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-06-27 14:03:25.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"118.796623\",\"latitude\":\"32.059352\",\"presetLabel\":\"0,2,3\",\"customizeLabel\":\"cc、aa、hh\\uD83D\\uDE0A喜爱哦\\uD83D\\uDC4C, 、测试,aa\",\"businessCycle\":\"0\",\"businessHoursBegin\":\"09:00:00\",\"businessHoursEnd\":\"20:00:00\",\"remarks\":\"\",\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457630,\"shopTypeId\":\"8ad0328d6bf3f4b2016bf49245100002\",\"storeCode\":\"S088522\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-16 16:18:15.000\",\"contractEndDate\":\"2019-07-23 23:59:01.000\",\"storeName\":\"177的新店铺\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":710000,\"cityId\":710300,\"areaId\":710302,\"addressDetail\":\"详细地址\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-19 14:29:16.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-16 16:18:15.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457632,\"shopTypeId\":\"23422312312341241\",\"storeCode\":\"S419044\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-16 18:39:47.000\",\"contractEndDate\":\"2019-07-23 23:59:01.000\",\"storeName\":\"合伙人新开\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":320000,\"cityId\":320100,\"areaId\":320102,\"addressDetail\":\"千米网111\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-18 10:07:00.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-16 18:39:47.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457635,\"shopTypeId\":\"123123123124123121251241231\",\"storeCode\":\"S753493\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-17 16:02:29.000\",\"contractEndDate\":\"2022-07-24 23:59:01.000\",\"storeName\":\"158合伙人代开门店\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":710000,\"cityId\":710100,\"areaId\":710101,\"addressDetail\":\"00000\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-31 17:07:09.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-17 16:02:29.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457636,\"shopTypeId\":\"8ad0328d6bf3f4b2016bf49245100002\",\"storeCode\":\"S547927\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-18 14:54:02.000\",\"contractEndDate\":\"2019-07-25 23:59:00.000\",\"storeName\":\"员工代开\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":140000,\"cityId\":140300,\"areaId\":0,\"addressDetail\":\"1212212\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-18 20:04:21.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-18 14:54:02.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457639,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f138540003\",\"storeCode\":\"S582533\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-18 20:05:07.000\",\"contractEndDate\":\"2019-07-25 23:59:00.000\",\"storeName\":\"已已\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":140000,\"cityId\":140300,\"areaId\":140303,\"addressDetail\":\"333333\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-18 20:07:31.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-18 20:05:07.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":2,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457643,\"shopTypeId\":\"8ad0328d6c036808016c043533c60053\",\"storeCode\":\"S799043\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-19 14:16:24.000\",\"contractEndDate\":\"2020-07-29 23:59:59.000\",\"storeName\":\"小小小\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":370000,\"cityId\":370300,\"areaId\":370303,\"addressDetail\":\"122221\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-16 15:32:12.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-19 14:16:24.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":2,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457644,\"shopTypeId\":\"8ad0328d6c036808016c043472590045\",\"storeCode\":\"000001\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-25 16:14:24.000\",\"contractEndDate\":\"2029-08-10 23:59:59.000\",\"storeName\":\"合伙人代开\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":320000,\"cityId\":320100,\"areaId\":320102,\"addressDetail\":\"南京市玄武区鹤鸣路52号\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-28 10:05:47.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-25 16:14:24.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457647,\"shopTypeId\":\"23422312312341241\",\"storeCode\":\"S916273\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-26 15:19:33.000\",\"contractEndDate\":\"2020-08-02 23:59:59.000\",\"storeName\":\"员工代开177门店\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":150000,\"cityId\":150300,\"areaId\":150304,\"addressDetail\":\"详细地址11212\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-30 09:58:21.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-26 15:19:33.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":2,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457661,\"shopTypeId\":\"8ad0328d6c036808016c0434d044004c\",\"storeCode\":\"S645677\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:01:19.000\",\"contractEndDate\":\"2019-08-07 23:59:01.000\",\"storeName\":\"小二的店铺\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":230000,\"cityId\":230100,\"areaId\":230102,\"addressDetail\":\"11111111111111\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-01 09:39:59.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:01:19.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457662,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f1288c0002\",\"storeCode\":\"S521536\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:07:00.000\",\"contractEndDate\":\"2019-08-07 23:59:01.000\",\"storeName\":\"飒飒多撒多撒多撒多\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"阿萨德撒多撒多所\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:07:00.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:07:00.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457663,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f1288c0002\",\"storeCode\":\"S757890\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:15:37.000\",\"contractEndDate\":\"2019-08-07 23:59:01.000\",\"storeName\":\"asaaaaaaaa\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"asdsadsad\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:15:37.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:15:37.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457664,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f1288c0002\",\"storeCode\":\"S373065\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:20:59.000\",\"contractEndDate\":\"2019-08-07 23:59:00.000\",\"storeName\":\"fddgfdgfd\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"fdgfdgdfgdfg\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:28:36.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:20:59.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457665,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f1288c0002\",\"storeCode\":\"S048287\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:28:59.000\",\"contractEndDate\":\"2019-08-07 23:59:01.000\",\"storeName\":\"23412412sdaf\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"sfsdfasd\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:31:01.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:28:59.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457666,\"shopTypeId\":\"8ad0328d6c04ccb7016c04efe5e30000\",\"storeCode\":\"S348563\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:36:47.000\",\"contractEndDate\":\"2019-08-07 23:59:00.000\",\"storeName\":\"发送到发送到发\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"第三个的是法师打发\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:46:38.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:36:47.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457668,\"shopTypeId\":\"8ad0328d6c036808016c0441e8bd005b\",\"storeCode\":\"S106372\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 16:12:57.000\",\"contractEndDate\":\"2020-08-07 23:59:59.000\",\"storeName\":\"三儿的店铺\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"123456789012345678901234567890123456789012345678901234567890\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 16:12:57.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 16:12:57.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null}],\"partnerName\":\"测试去重\",\"partnerMobile\":\"15895875839\"}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}},{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/store/storesByEmployeeId"},"requestId":"1000006116.51","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":{\"storeVOList\":[{\"storeId\":123457607,\"shopTypeId\":\"123123123124123121251241231\",\"storeCode\":\"11009\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-06-27 14:03:25.000\",\"contractEndDate\":\"2019-09-06 23:59:59.000\",\"storeName\":\"test33333\",\"storeLogo\":\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201907171131251933.gif\",\"storeSign\":\"https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201907251017290657.png\",\"contactPerson\":null,\"contactMobile\":\"12\",\"contactEmail\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"addressDetail\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-09-06 09:13:34.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-06-27 14:03:25.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"118.796623\",\"latitude\":\"32.059352\",\"presetLabel\":\"0,2,3\",\"customizeLabel\":\"cc、aa、hh\\uD83D\\uDE0A喜爱哦\\uD83D\\uDC4C, 、测试,aa\",\"businessCycle\":\"0\",\"businessHoursBegin\":\"09:00:00\",\"businessHoursEnd\":\"20:00:00\",\"remarks\":\"\",\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457630,\"shopTypeId\":\"8ad0328d6bf3f4b2016bf49245100002\",\"storeCode\":\"S088522\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-16 16:18:15.000\",\"contractEndDate\":\"2019-07-23 23:59:01.000\",\"storeName\":\"177的新店铺\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":710000,\"cityId\":710300,\"areaId\":710302,\"addressDetail\":\"详细地址\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-19 14:29:16.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-16 16:18:15.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457632,\"shopTypeId\":\"23422312312341241\",\"storeCode\":\"S419044\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-16 18:39:47.000\",\"contractEndDate\":\"2019-07-23 23:59:01.000\",\"storeName\":\"合伙人新开\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":320000,\"cityId\":320100,\"areaId\":320102,\"addressDetail\":\"千米网111\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-18 10:07:00.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-16 18:39:47.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457635,\"shopTypeId\":\"123123123124123121251241231\",\"storeCode\":\"S753493\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-17 16:02:29.000\",\"contractEndDate\":\"2022-07-24 23:59:01.000\",\"storeName\":\"158合伙人代开门店\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":710000,\"cityId\":710100,\"areaId\":710101,\"addressDetail\":\"00000\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-31 17:07:09.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-17 16:02:29.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457636,\"shopTypeId\":\"8ad0328d6bf3f4b2016bf49245100002\",\"storeCode\":\"S547927\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-18 14:54:02.000\",\"contractEndDate\":\"2019-07-25 23:59:00.000\",\"storeName\":\"员工代开\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":140000,\"cityId\":140300,\"areaId\":0,\"addressDetail\":\"1212212\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-18 20:04:21.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-18 14:54:02.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457639,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f138540003\",\"storeCode\":\"S582533\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-18 20:05:07.000\",\"contractEndDate\":\"2019-07-25 23:59:00.000\",\"storeName\":\"已已\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":140000,\"cityId\":140300,\"areaId\":140303,\"addressDetail\":\"333333\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-18 20:07:31.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-18 20:05:07.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":2,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457643,\"shopTypeId\":\"8ad0328d6c036808016c043533c60053\",\"storeCode\":\"S799043\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-19 14:16:24.000\",\"contractEndDate\":\"2020-07-29 23:59:59.000\",\"storeName\":\"小小小\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":370000,\"cityId\":370300,\"areaId\":370303,\"addressDetail\":\"122221\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-16 15:32:12.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-19 14:16:24.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":2,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457644,\"shopTypeId\":\"8ad0328d6c036808016c043472590045\",\"storeCode\":\"000001\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-25 16:14:24.000\",\"contractEndDate\":\"2029-08-10 23:59:59.000\",\"storeName\":\"合伙人代开\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":320000,\"cityId\":320100,\"areaId\":320102,\"addressDetail\":\"南京市玄武区鹤鸣路52号\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-28 10:05:47.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-25 16:14:24.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":1,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457647,\"shopTypeId\":\"23422312312341241\",\"storeCode\":\"S916273\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-26 15:19:33.000\",\"contractEndDate\":\"2020-08-02 23:59:59.000\",\"storeName\":\"员工代开177门店\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":150000,\"cityId\":150300,\"areaId\":150304,\"addressDetail\":\"详细地址11212\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-30 09:58:21.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-26 15:19:33.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":2,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457661,\"shopTypeId\":\"8ad0328d6c036808016c0434d044004c\",\"storeCode\":\"S645677\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:01:19.000\",\"contractEndDate\":\"2019-08-07 23:59:01.000\",\"storeName\":\"小二的店铺\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":230000,\"cityId\":230100,\"areaId\":230102,\"addressDetail\":\"11111111111111\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-08-01 09:39:59.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:01:19.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457662,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f1288c0002\",\"storeCode\":\"S521536\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:07:00.000\",\"contractEndDate\":\"2019-08-07 23:59:01.000\",\"storeName\":\"飒飒多撒多撒多撒多\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"阿萨德撒多撒多所\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:07:00.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:07:00.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457663,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f1288c0002\",\"storeCode\":\"S757890\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:15:37.000\",\"contractEndDate\":\"2019-08-07 23:59:01.000\",\"storeName\":\"asaaaaaaaa\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"asdsadsad\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:15:37.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:15:37.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457664,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f1288c0002\",\"storeCode\":\"S373065\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:20:59.000\",\"contractEndDate\":\"2019-08-07 23:59:00.000\",\"storeName\":\"fddgfdgfd\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"fdgfdgdfgdfg\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:28:36.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:20:59.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457665,\"shopTypeId\":\"8ad0328d6c04ccb7016c04f1288c0002\",\"storeCode\":\"S048287\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:28:59.000\",\"contractEndDate\":\"2019-08-07 23:59:01.000\",\"storeName\":\"23412412sdaf\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"sfsdfasd\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:31:01.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:28:59.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457666,\"shopTypeId\":\"8ad0328d6c04ccb7016c04efe5e30000\",\"storeCode\":\"S348563\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 15:36:47.000\",\"contractEndDate\":\"2019-08-07 23:59:00.000\",\"storeName\":\"发送到发送到发\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"第三个的是法师打发\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 15:46:38.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 15:36:47.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null},{\"storeId\":123457668,\"shopTypeId\":\"8ad0328d6c036808016c0441e8bd005b\",\"storeCode\":\"S106372\",\"storeType\":\"SHOP\",\"companyInfo\":{\"companyInfoId\":852,\"companyCode\":\"S00852\",\"supplierName\":null,\"companyName\":null,\"provinceId\":320000,\"cityId\":320500,\"areaId\":320507,\"detailAddress\":\"润元路与润南巷交叉口西北150米苏州市相城区\",\"contactName\":null,\"contactPhone\":\"12\",\"copyright\":null,\"companyDescript\":null,\"createTime\":\"2019-06-27 14:03:06.000\",\"operator\":\"\",\"updateTime\":\"2019-09-05 19:23:18.000\",\"companyType\":1,\"goodsIds\":[],\"socialCreditCode\":null,\"address\":null,\"legalRepresentative\":null,\"registeredCapital\":null,\"foundDate\":null,\"businessTermStart\":null,\"businessTermEnd\":null,\"businessScope\":null,\"businessLicence\":null,\"frontIDCard\":null,\"backIDCard\":null,\"delFlag\":0,\"storeVOList\":null,\"employeeVOList\":null,\"remitAffirm\":0,\"applyEnterTime\":null,\"partnerId\":\"8ad0328d6bf90f65016bf9ce848b0006\"},\"contractStartDate\":\"2019-07-31 16:12:57.000\",\"contractEndDate\":\"2020-08-07 23:59:59.000\",\"storeName\":\"三儿的店铺\",\"storeLogo\":null,\"storeSign\":null,\"contactPerson\":null,\"contactMobile\":null,\"contactEmail\":null,\"provinceId\":110000,\"cityId\":110100,\"areaId\":110101,\"addressDetail\":\"123456789012345678901234567890123456789012345678901234567890\",\"accountDay\":null,\"auditState\":1,\"auditReason\":null,\"storeState\":0,\"storeClosedReason\":null,\"loginTime\":\"2019-07-31 16:12:57.000\",\"delFlag\":0,\"companyType\":1,\"supplierName\":null,\"applyEnterTime\":\"2019-07-31 16:12:57.000\",\"freightTemplateType\":0,\"goodsIds\":[],\"smallProgramCode\":null,\"masterName\":null,\"masterMobile\":null,\"masterLastLoginTime\":null,\"surplusDays\":null,\"openType\":0,\"issuePerson\":null,\"shopTypeName\":null,\"longitude\":\"123\",\"latitude\":\"123\",\"presetLabel\":null,\"customizeLabel\":null,\"businessCycle\":null,\"businessHoursBegin\":null,\"businessHoursEnd\":null,\"remarks\":null,\"receivedStatus\":null,\"withdrawAmount\":null,\"frozenAmount\":null,\"toBookedAmount\":null}],\"partnerName\":\"测试去重\",\"partnerMobile\":\"15895875839\"}}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:37 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.5022090929862681:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.5022090929862681"},"requestId":"1000006116.124","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":625,\"storeId\":123457607,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":1,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":738,\"storeId\":123457607,\"cateName\":\"ceshixy111\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":679,\"storeId\":123457607,\"cateName\":\"zwc\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":634,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":633,\"cateGrade\":2,\"catePath\":\"0|633|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":685,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":632,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":628,\"storeId\":123457607,\"cateName\":\"宠物用品\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":651,\"storeId\":123457607,\"cateName\":\"14\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":701,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":654,\"storeId\":123457607,\"cateName\":\"test\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":5,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":650,\"storeId\":123457607,\"cateName\":\"13\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":6,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":649,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":7,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":648,\"storeId\":123457607,\"cateName\":\"11\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":8,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":647,\"storeId\":123457607,\"cateName\":\"10\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":9,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":646,\"storeId\":123457607,\"cateName\":\"9\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":10,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":644,\"storeId\":123457607,\"cateName\":\"7\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":11,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":645,\"storeId\":123457607,\"cateName\":\"8\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":12,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":643,\"storeId\":123457607,\"cateName\":\"6\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":13,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":642,\"storeId\":123457607,\"cateName\":\"5\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":14,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":641,\"storeId\":123457607,\"cateName\":\"4\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":15,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":640,\"storeId\":123457607,\"cateName\":\"3\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":16,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":639,\"storeId\":123457607,\"cateName\":\"2\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":17,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":633,\"storeId\":123457607,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":18,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":627,\"storeId\":123457607,\"cateName\":\"1宠物生活\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":19,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:17:31 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}],"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.6611949022899797:[GET]":[{"request":{"method":"GET","url":"https://sellerbff.s2btest.kstore.shop/storeCate?reqId=0.6611949022899797"},"requestId":"1000006116.82","response":{"base64Encoded":false,"body":"{\"code\":\"K-000000\",\"message\":null,\"context\":[{\"storeCateId\":625,\"storeId\":123457607,\"cateName\":\"默认分类\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":1,\"isDefault\":1,\"storeCateList\":null},{\"storeCateId\":738,\"storeId\":123457607,\"cateName\":\"ceshixy111\",\"cateParentId\":652,\"cateGrade\":2,\"catePath\":\"0|652|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":679,\"storeId\":123457607,\"cateName\":\"zwc\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":634,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":633,\"cateGrade\":2,\"catePath\":\"0|633|\",\"delFlag\":0,\"sort\":0,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":685,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":654,\"cateGrade\":2,\"catePath\":\"0|654|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":632,\"storeId\":123457607,\"cateName\":\"狗粮\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":1,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":652,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":628,\"storeId\":123457607,\"cateName\":\"宠物用品\",\"cateParentId\":627,\"cateGrade\":2,\"catePath\":\"0|627|\",\"delFlag\":0,\"sort\":2,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":651,\"storeId\":123457607,\"cateName\":\"14\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":3,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":701,\"storeId\":123457607,\"cateName\":\"15\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":4,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":654,\"storeId\":123457607,\"cateName\":\"test\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":5,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":650,\"storeId\":123457607,\"cateName\":\"13\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":6,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":649,\"storeId\":123457607,\"cateName\":\"12\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":7,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":648,\"storeId\":123457607,\"cateName\":\"11\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":8,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":647,\"storeId\":123457607,\"cateName\":\"10\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":9,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":646,\"storeId\":123457607,\"cateName\":\"9\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":10,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":644,\"storeId\":123457607,\"cateName\":\"7\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":11,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":645,\"storeId\":123457607,\"cateName\":\"8\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":12,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":643,\"storeId\":123457607,\"cateName\":\"6\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":13,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":642,\"storeId\":123457607,\"cateName\":\"5\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":14,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":641,\"storeId\":123457607,\"cateName\":\"4\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":15,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":640,\"storeId\":123457607,\"cateName\":\"3\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":16,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":639,\"storeId\":123457607,\"cateName\":\"2\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":17,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":633,\"storeId\":123457607,\"cateName\":\"宠物食品\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":18,\"isDefault\":0,\"storeCateList\":null},{\"storeCateId\":627,\"storeId\":123457607,\"cateName\":\"1宠物生活\",\"cateParentId\":0,\"cateGrade\":1,\"catePath\":\"0|\",\"delFlag\":0,\"sort\":19,\"isDefault\":0,\"storeCateList\":null}]}","headers":{"Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://seller.s2btest.kstore.shop","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Date":"Fri, 06 Sep 2019 01:13:57 GMT","Server":"nginx/1.10.3","Transfer-Encoding":"chunked","Vary":"Origin","X-Application-Context":"sbc-supplier:8087"},"mimeType":"application/json","status":200}}]}
};