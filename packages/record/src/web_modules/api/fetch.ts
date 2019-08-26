import { AsyncResult } from '@/typings';
import { message as AntdMsg } from 'antd';
import config from 'kit/config';

import { fetch as fetchPolyfill } from 'whatwg-fetch';

interface IFetch {
  host: string;
  url: string;
  method?: string;
  data?: Object;
  contentType?: string;
}

const contentType = 'application/json; charset=utf-8';

async function Common<T = object>(params: IFetch): Promise<AsyncResult<T>> {
  let { host, url, data, method } = params;
  let methodUrl = host + url; // prefixHost(host, url);

  const headers = {
    // platform: "wechat",
    // Charset,
    'Content-Type': contentType,
    // "Access-Control-Allow-Origin": "*",
    Authorization:
      'Bearer' + ((window as any).token ? ' ' + (window as any).token : '')
    // 'Bearer' + (session ? ' ' + session : '')
  };
  url = methodUrl;
  try {
    console.log('fetch data ', params);
    let res: any = await fetchPolyfill(url, {
      body: data
        ? JSON.stringify({
            ...data
          })
        : null,
      headers,
      method,
      mode: 'cors'
    });

    if ((res.status >= 200 && res.status < 300) || res.statu === 400) {
      const json = (await res.json()) as AsyncResult<T>;
      let { message, context, code } = json;

      //@ts-ignore
      if (__DEV__ && code !== 'K-000000') {
        //TODO 不要带到生产环境去.
        AntdMsg.error(
          `调用接口报错:${url},请联系相关人员处理! code[${code}] ,msg:${message}`,
          20
        );
      }

      if (code === 'K-000015') {
        AntdMsg.warning(`登录信息过期,请重新登录`);
        location.href = '#/account/login';
      } else if (code !== 'K-000000') {
        let content = `${message}`;
        AntdMsg.warning(content);
        throw new Error(content);
      }

      //TODO 这里针对状态码做统一的控制.
      return json;
      //@ts-ignore
      // Raven && Raven.captureException(json, {
      //     fingerprint: ["url", url],
      //     extra: params
      //   });
    } else if (res.status == 404) {
      AntdMsg.error(`接口调用失败,请查询接口情况!!`, 20);
      throw new Error(`接口调用失败[${url}],请查询接口情况!!`);
    } else {
      AntdMsg.error(`发生未知异常错误!!`, 20);
      throw new Error('发生未知异常错误!!');
    }
  } catch (e) {
    //@ts-ignore
    window.Raven && window.Raven.captureException(e);
    console.error(e);
    throw e;
  }
}

export function fetch<T = object>(params: IFetch): Promise<AsyncResult<T>> {
  return Common<T>(params);
}

let host = config.host || 'http://118.31.238.229:8390';

export function get<T = any>(url, data, option = { host }) {
  //TODO 把当前的权限 记录下来.
  return fetch<T>({
    host: option.host,
    url,
    method: 'get'
  });
}

export function patch<T = any>(url, data, option = { host }) {
  //TODO 把当前的权限 记录下来.
  return fetch<T>({
    host: option.host,
    url,
    method: 'patch'
  });
}

export function head<T = any>(url, data, option = { host }) {
  //TODO 把当前的权限 记录下来.
  return fetch<T>({
    host: option.host,
    url,
    method: 'head'
  });
}

export function put<T = any>(url, data, option = { host }) {
  return fetch<T>({
    host: option.host,
    url,
    method: 'put',
    data
  });
}

export function post<T = any>(url, data, option = { host }) {
  return fetch<T>({
    host: option.host,
    url,
    method: 'post',
    data
  });
}

export function options<T = any>(url, data, option = { host }) {
  return fetch<T>({
    host: option.host,
    url,
    method: 'options',
    data
  });
}

export function deleteF<T = any>(url, data, option = { host }) {
  return fetch<T>({
    host: option.host,
    url,
    method: 'delete',
    data
  });
}

// export default { fetch };
