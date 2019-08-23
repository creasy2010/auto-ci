import {IContext, IUtil} from '../../../../ci/typings';

/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/22
 **/

module.exports =   {
  desc:"form表单组件操作",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
    await page.evaluate(`window.__testContext__.goto('/rechargeable-card-add')`);
    await sleep(2);

    // await page.setViewport({ width: 2133, height: 1105 })

    log(`[clicking] `);
    await waitElementVisiable(
      page,
      '.ant-row #recharge-form_rechargeableCardName',
    );
    await page.click('.ant-row #recharge-form_rechargeableCardName');
    await sleep(1);

    await screenshot( '0');

    await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
    await page.type('.ant-row #recharge-form_rechargeableCardName', '1');

    await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
    await page.type('.ant-row #recharge-form_rechargeableCardName', '2');

    await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
    await page.type('.ant-row #recharge-form_rechargeableCardName', '3');

    await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
    await page.type('.ant-row #recharge-form_rechargeableCardName', '3');

    await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
    await page.type('.ant-row #recharge-form_rechargeableCardName', '2');

    await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
    await page.type('.ant-row #recharge-form_rechargeableCardName', '4');

    await page.waitForSelector('.ant-row #recharge-form_rechargeableCardName');
    await page.type('.ant-row #recharge-form_rechargeableCardName', '2');

    log(`[clicking] `);
    await waitElementVisiable(
      '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    );
    await page.click(
      '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    );
    await sleep(1);

    await screenshot('1');

    await page.waitForSelector(
      '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    );
    await page.type(
      '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
      '1',
    );

    await page.waitForSelector(
      '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    );
    await page.type(
      '#recharge-form_price > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
      '0',
    );

    await screenshot('2');

    log(`[clicking] `);
    await waitElementVisiable(
      page,
      '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    );
    await page.click(
      '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    );
    await sleep(1);

    await page.waitForSelector(
      '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    );
    await page.type(
      '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
      '1',
    );

    await page.waitForSelector(
      '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
    );
    await page.type(
      '#recharge-form_presentPrice > .ant-col > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input',
      '0',
    );

    log(`[clicking] `);
    await waitElementVisiable(
      page,
      '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper:nth-child(2) > .ant-radio > .ant-radio-input',
    );
    await page.click(
      '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper:nth-child(2) > .ant-radio > .ant-radio-input',
    );
    await sleep(1);

    await screenshot('3');

    await page.waitForSelector(
      '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input',
    );
    await page.type(
      '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input',
      'undefined',
    );

    log(`[clicking] `);
    await waitElementVisiable(
      page,
      '.ant-radio-wrapper #recharge-form_validityDays',
    );
    await page.click('.ant-radio-wrapper #recharge-form_validityDays');
    await sleep(1);

    await screenshot('4');

    await page.waitForSelector('.ant-radio-wrapper #recharge-form_validityDays');
    await page.type('.ant-radio-wrapper #recharge-form_validityDays', '1');

    await page.waitForSelector('.ant-radio-wrapper #recharge-form_validityDays');
    await page.type('.ant-radio-wrapper #recharge-form_validityDays', '0');

    await screenshot('5');

    log(`[clicking]永久有效 `);
    await waitElementVisiable(
      '.ant-form-item-control > .ant-form-item-children > .ant-radio-group > .ant-radio-wrapper:nth-child(1) > span:nth-child(2)',
    );
    await page.click(
      '.ant-form-item-control > .ant-form-item-children > .ant-radio-group > .ant-radio-wrapper:nth-child(1) > span:nth-child(2)',
    );
    await sleep(1);

    await page.waitForSelector(
      '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input',
    );
    await page.type(
      '.ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input',
      'undefined',
    );

    log(`[clicking]永久有效 `);
    await waitElementVisiable(
      page,
      '.ant-form-item-control > .ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > span:nth-child(2)',
    );
    await page.click(
      '.ant-form-item-control > .ant-form-item-children > .ant-radio-group > .ant-radio-wrapper-checked > span:nth-child(2)',
    );
    await sleep(1);

    await screenshot( '6');

    log(`[clicking] `);
    await waitElementVisiable(
      page,
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    );
    await page.click(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    );
    await sleep(1);

    await page.waitForSelector(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    );
    await page.type(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
      '1',
    );

    await page.waitForSelector(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    );
    await page.type(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
      '0',
    );

    await page.waitForSelector(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    );
    await page.type(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
      '0',
    );

    await page.waitForSelector(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
    );
    await page.type(
      '.ant-row:nth-child(5) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input',
      '0',
    );

    log(`[clicking]门店收银 `);
    await waitElementVisiable(
      page,
      '.ant-form-item-control > .ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(1) > span:nth-child(2)',
    );
    await page.click(
      '.ant-form-item-control > .ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(1) > span:nth-child(2)',
    );
    await sleep(1);

    await screenshot( '7');

    await page.waitForSelector(
      '.ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input',
    );
    await page.type(
      '.ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input',
      'undefined',
    );

    log(`[clicking]小程序商城 `);
    await waitElementVisiable(
      page,
      '.ant-form-item-control > .ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(2) > span:nth-child(2)',
    );
    await page.click(
      '.ant-form-item-control > .ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(2) > span:nth-child(2)',
    );
    await sleep(1);

    await screenshot( '8');

    await page.waitForSelector(
      '.ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(2) > .ant-checkbox > .ant-checkbox-input',
    );
    await page.type(
      '.ant-form-item-children > #recharge-form_distributionChannels > .ant-checkbox-wrapper:nth-child(2) > .ant-checkbox > .ant-checkbox-input',
      'undefined',
    );

    log(`[clicking]保 存 `);
    await waitElementVisiable(
      page,
      '.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col:nth-child(2) > .ant-btn',
    );
    await page.click(
      '.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col:nth-child(2) > .ant-btn',
    );
    await sleep(1);

    await screenshot( '9');

    log(`[clicking]上 架 `);
    await waitElementVisiable(
      page,
      '.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn-background-ghost',
    );
    await page.click(
      '.ant-form-item-control > .ant-form-item-children > .ant-row > .ant-col > .ant-btn-background-ghost',
    );
    await sleep(1);

    await screenshot( '10');
  },
  neworkMock : {
    'https://sellerbff.s2btest.kstore.shop/marketing/rechargeable-card:[POST]': [
      {
        request: {
          method: 'POST',
          url:
            'https://sellerbff.s2btest.kstore.shop/marketing/rechargeable-card',
        },
        requestId: '1000026303.665',
        response: {headers: {}, mimeType: 'application/json', status: 200},
      },
      {
        request: {
          method: 'POST',
          url:
            'https://sellerbff.s2btest.kstore.shop/marketing/rechargeable-card',
        },
        requestId: '1000026303.667',
        response: {headers: {}, mimeType: 'application/json', status: 200},
      },
    ],
  }
}