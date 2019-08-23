/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/8/23
 **/

import {request} from  'urllib';
let token= "7f6528de38ae6a38a51d46f4a230486b582cc15d";

(async()=>{

  let result = await request(`https://api.github.com/repos/creasy2010/auto-ci/contents/test.txt`,{
    method:"PUT",
    content:"",
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

