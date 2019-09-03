/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/23
 **/

// import * as urlLib from  'urllib';

var urllib = require('urllib');
let token= "c655aac4ae47285008c2bd959ed61135c2062514";

(async()=>{

  let result = await urllib.request(`https://api.github.com/repos/creasy2010/auto-ci/contents/test11.txt`,{
    method:"PUT",
    headers:{
      Authorization: `token ${token}`
    },
    data:`{
      "message": "添加一个用例测试",
      "committer": {
        "name": "杨晓东",
        "email": "coder.yang2010@gmail.com"
      },
      "content": "bXkgbmV3IGZpbGUgY29udGVudHM="
    }`
  });

  console.log(result.data.toString());
})();

