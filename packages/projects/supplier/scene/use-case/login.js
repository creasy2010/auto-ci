/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/22
 **/
module.exports={
  desc:"登录",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {

    await page.evaluate(`window.__testContext__.goto('/login')`);
    // await page.setViewport({width: 1440, height: 745});

    await sleep(0.5);
    await page.waitForSelector('.ant-row #input-form_account');
    await page.click('.ant-row #input-form_account');

    await sleep(0.5);
    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '1');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '7');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '7');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '0');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '0');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '0');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '0');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '0');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '0');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '0');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.type('.ant-row #input-form_account', '0');

    await page.waitForSelector('.ant-row #input-form_account');
    await page.click('.ant-row #input-form_account');

    await sleep(0.5);
    await page.waitForSelector(
      '.form-box > .ant-form > .ant-row:nth-child(1) > .ant-col > .ant-form-item-control',
    );
    await page.click(
      '.form-box > .ant-form > .ant-row:nth-child(1) > .ant-col > .ant-form-item-control',
    );

    await sleep(0.5);
    await page.waitForSelector('.ant-row #input-form_password');
    await page.click('.ant-row #input-form_password');

    await sleep(0.5);
    await page.waitForSelector('.ant-row #input-form_password');
    await page.type('.ant-row #input-form_password', '2');

    await page.waitForSelector('.ant-row #input-form_password');
    await page.type('.ant-row #input-form_password', '2');

    await page.waitForSelector('.ant-row #input-form_password');
    await page.type('.ant-row #input-form_password', '2');

    await page.waitForSelector('.ant-row #input-form_password');
    await page.type('.ant-row #input-form_password', '2');

    await page.waitForSelector('.ant-row #input-form_password');
    await page.type('.ant-row #input-form_password', '2');

    await page.waitForSelector('.ant-row #input-form_password');
    await page.type('.ant-row #input-form_password', '2');

    await page.waitForSelector(
      '.login > .right-login-info > .form-box > .ant-form > .btn',
    );
    await page.click('.login > .right-login-info > .form-box > .ant-form > .btn');

  }
}