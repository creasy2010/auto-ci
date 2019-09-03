/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/9/3
 **/

import {Base64} from 'js-base64';

export default class GitRepoUtil {
  owner: string;
  repo: string;
  token: string;

  constructor(owner: string, repo: string, token: string) {
    this.owner = owner;
    this.repo = repo;
    this.token = token;
  }

  /**
   * 获取目录下内容列表;
   *
   * @param {string} path  a/b/c
   * @returns {Promise<Response>}
   */
  getContent = async (path: string) => {
    let response = await fetch(
      `https://api.github.com/repos/${this.owner}/${this
        .repo}/contents/${path}`,
      {
        method: 'GET',
        headers: {
          Authorization: `token ${this.token}`,
        },
        mode: 'cors',
      },
    );
    response = await response.json();
    return response;
  };

  /**
   *
   * @param {string} path
   * @param {{message: string; committer: {name: string; email: string}; content: string}} body
   * @returns {Promise<void>}
   */
  createFile = async (
    path: string,
    body: {
      message: string;
      committer: {
        name: string;
        email: string;
      };
      content: string;
    },
  ) => {
    body.content = Base64.encode(body.content);
    let response = await fetch(
      `https://api.github.com/repos/${this.owner}/${this
        .repo}/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${this.token}`,
        },
        mode: 'cors',
        body: JSON.stringify(body),
      },
    );

    if (response.status === 422) {
      throw new Error('创建文件失败,路径冲突:' + path);
    } else if (response.status === 401) {
      throw new Error('认证失败,可能是token失效了');
    }
    return;
  };
}
