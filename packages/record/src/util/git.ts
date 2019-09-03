/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/9/3
 **/

import {Base64} from "js-base64";

/**
 * 获取目录下内容列表;
 */
export async function getPathContent( owner: string,
                                      repo: string,
                                      path: string,) {
  let response =  await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method:"GET",
      headers:{
        Authorization: `token ${token}`
      },
      mode: 'cors',
    });


  response  = await response.json();

  console.log(response);
}

/**
 * 上传并创建一个文件;
 * @param {string} owner
 * @param {string} repo
 * @param {string} path "/z/b/c"
 * @param {{message: string; committer: {name: string; email: string}; content: string}} body
 * @param {{token: string}} options
 * @returns {Promise<void>}
 */
export async function createFile(
  owner: string,
  repo: string,
  path: string,
  body: {
    message: string;
    committer: {
      name: string;
      email: string;
    };
    content: string;
  },
  options: {
    token: string;
  },
):Promise<void> {

  body.content = Base64.encode(this.state.code);
  let response =  await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method:"PUT",
      headers:{
        Authorization: `token ${token}`
      },
      mode: 'cors',
      body:JSON.stringify(body)
    });

  if(response.status ===422) {
    throw new Error('创建文件失败,路径冲突:'+path);
  }else if(response.status ===401){
    throw new Error('认证失败,可能是token失效了');
  }
  return;
}
