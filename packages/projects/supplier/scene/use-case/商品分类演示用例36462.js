module.exports =   {
  desc:"TODO 要添加进来. ",
  id:"uniqueId",
  async exec(
    {page},
    {sleep, log, screenshot, waitElementVisiable},
  ) {
      
  
      await page.evaluate(`window.__testContext__.goto('/react-native/blog/2019/07/03/version-60')`)
      await sleep(2);
      
  
 
  },
  neworkMock :{"https://staticxx.facebook.com/connect/xd_arbiter.php?version=44:[GET]":[{"request":{"method":"GET","url":"https://staticxx.facebook.com/connect/xd_arbiter.php?version=44"},"requestId":"658DABDFECB0EB76036D0FDC15B67B4B","response":{"headers":{"cache-control":"public,max-age=31536000,immutable","content-encoding":"br","content-length":"11674","content-security-policy":"default-src * data: blob: 'self';script-src *.facebook.com *.fbcdn.net *.facebook.net *.google-analytics.com *.virtualearth.net *.google.com 127.0.0.1:* *.spotilocal.com:* 'unsafe-inline' 'unsafe-eval' blob: data: 'self';style-src data: blob: 'unsafe-inline' *;connect-src *.facebook.com facebook.com *.fbcdn.net *.facebook.net *.spotilocal.com:* wss://*.facebook.com:* https://fb.scanandcleanlocal.com:* attachment.fbsbx.com ws://localhost:* blob: *.cdninstagram.com 'self';","content-type":"text/html; charset=utf-8","date":"Fri, 06 Sep 2019 08:48:55 GMT","expires":"Fri, 04 Sep 2020 15:27:54 GMT","status":"200","vary":"Accept-Encoding","x-content-type-options":"nosniff","x-fb-debug":"l8he8hsH89u3BumX/idZXbpgtj+UuylErI3UIyJysEGBDh0g33SRpC7vHmERueG2CF0HgjMvGdHrK1KgiLlWBw==","x-fb-trip-id":"420120009","x-xss-protection":"0"},"mimeType":"text/html","status":200}}],"https://www.facebook.com/v2.7/plugins/like.php?app_id=1677033832619985&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Dfccb3217ee4334%26domain%3Dfacebook.github.io%26origin%3Dhttps%253A%252F%252Ffacebook.github.io%252Ff3c0c1d4a9d3e%26relation%3Dparent.parent&container_width=748&href=https%3A%2F%2Ffacebook.github.io%2Freact-native%2Fblog%2F2019%2F07%2F03%2Fversion-60&layout=standard&locale=en_US&sdk=joey&share=true&show_faces=false&width=225:[GET]":[{"request":{"method":"GET","url":"https://www.facebook.com/v2.7/plugins/like.php?app_id=1677033832619985&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Dfccb3217ee4334%26domain%3Dfacebook.github.io%26origin%3Dhttps%253A%252F%252Ffacebook.github.io%252Ff3c0c1d4a9d3e%26relation%3Dparent.parent&container_width=748&href=https%3A%2F%2Ffacebook.github.io%2Freact-native%2Fblog%2F2019%2F07%2F03%2Fversion-60&layout=standard&locale=en_US&sdk=joey&share=true&show_faces=false&width=225"},"requestId":"D0517430DFE64F885A1CCC2BB61490B6","response":null}]}
};