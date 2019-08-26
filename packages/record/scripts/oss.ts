/**
 * oss 服务接口
 * @author niko
 * @deprecated 不再使用, 使用x-site-core-db中的oss服务
 */
 

let OSS = require('ali-oss');
let co = require('co');
import * as path from 'path';

let ossClientInstance;

export interface listItemI {
  name: string;
  url: string;
  lastModified: string;
  etag: string;
  type: string;
  size: number;
  storageClass: string;
  owner: {
    id: string;
    displayName: string;
  };
}

export interface ossResponseI {
  status: number;
  statusCode: number;
  headers: object;
  size: number;
  aborted: boolean;
  rn: number;
  keepAliveSocket: boolean;
  data: any;
}

/**
 * oss服务对象，只提供put Object操作
 * @date   2015-09-11
 * @author niko
 * @param  {String}   accessKeyId     阿里OSS Id
 * @param  {String}   accessKeySecret 阿里OSS 密钥
 * @param  {String}   keyPath         保存在阿里OSS的路径,e.g. /qianmicom/d2c/dev/:adminID/[pc|mobile]/
 */
export class Client {
  oss: any;
  prefixName = '';
  requestTimeout = '';

  constructor(ossConfig) {

    var DEFAULT_OPTIONS = {
      accessKeyId: ossConfig.accessKeyId,
      accessKeySecret: ossConfig.accessKeySecret,
      bucket: 'qianmi-web',
      region: 'oss-cn-hangzhou',
    };

    this.oss = new OSS(DEFAULT_OPTIONS);

    //根据环境信息来确定的
    // Object 前缀// 这个配置文件 可以 不在环境中的配置信息中出现. 没必要..
    this.prefixName =ossConfig.prefix; //环境信息
    this.requestTimeout =
      ossConfig.requestTimeout || ossConfig.timeout || 15000; //环境信息
  }

  /**
	 * 保存文件至阿里OSS
	 * @date   2015-09-11
	 * @author niko
	 * @param  {String|Buffer|ReadStream}   src      filepath, new Buffer(), ReadStream
	 * @param  {String}   adminID  商户id
	 * @param  {String}   distName 存放的文件名字
	 * @param  {Boolean}  isPC     是否PC端资源
	 */
  putObject(src, distName): Promise<any> {
    //使用path可以把"/"的问题解决了
    var name = path.join(this.prefixName, distName); //; this.prefixName+ distName;
     name= this.convertSlash(name);
    console.log("发送文件",src,'到阿里云上,name:',name);
    return co(this.oss.put(name, src, { timeout: this.requestTimeout }));
  }
    //转换name的路径始终以/ 表示  参照：https://github.com/sindresorhus/slash.git
  convertSlash(stringPath){
      const isExtendedLengthPath = /^\\\\\?\\/.test(stringPath);
      const hasNonAscii = /[^\u0000-\u0080]+/.test(stringPath); // eslint-disable-line no-control-regex

      if (isExtendedLengthPath || hasNonAscii) {
          return stringPath;
      }

      return stringPath.replace(/\\/g, '/');
  }

  /**
	 *
	 * @param src
	 * @param distName
	 * @returns {*}
	 */
  putObjectAbsolute(src, absoluteDistName): Promise<any> {
    console.log('发送文件到阿里云上,name:', absoluteDistName);
    return co(
      this.oss.put(absoluteDistName, src, { timeout: this.requestTimeout }),
    );
  }

  /**
	 * 返回值 是一个buffer 对象..
	 * @param distName
	 * @returns {*}
	 */
  getObject(distName): Promise<any> {
    var name = this.prefixName + distName;
    //log4js.info("获取文件::",name);
    return co(this.oss.get(name));
  }

  getObjectAbsolute(absoluteDistName): Promise<any> {
    // console.log('从阿里云获取文件::', absoluteDistName);
    return co(this.oss.get(absoluteDistName));
  }

  /**
	 * 删除数据
	 * @param distName
	 * @returns {*}
	 */
  delObject(distName): Promise<any> {
    var name = distName;
    //log4js.info("删除文件::",name);
    return co(this.oss.delete(name));
  }

  /**
   * Head an object and get the meta info.
   *
   *
   * @param distName
   * @returns {Promise<any>}
   */
  head(distName): Promise<any> {
    var name = distName;
    //log4js.info("删除文件::",name);
    return co(this.oss.head(name));
  }

  listObject(distDir): Promise<any> {
    //log4js.info('获取目录:',distDir," 下的文件列表!");
    return co(this.oss.list({ prefix: this.prefixName + distDir }));
  }

  /**
   * 复制内容;;
   * @param name
   * @param sourceName
   * @param {{}} options
   * @returns {Promise<any>}
   */
  copy(name, sourceName, options = {}): Promise<any> {
    return co(this.oss.copy(name, sourceName, options));
  }

  /**
	 *
	 * @param options :{prefix:absoluteDistDir,"max-keys":1000}
	 *                或 "x-site/prod/d2cStore/A1078241/view/";
	 * @return {*}
	 */
  listObjectAbsolute(
    absoluteDistDir,
  ): Promise<{
    res: ossResponseI;
    objects: Array<listItemI>;
    prefixes: string;
  }> {
    //log4js.info('获取目录:',absoluteDistDir," 下的文件列表!");
    let options = {};
    if (typeof absoluteDistDir === 'string') {
      options['prefix'] = absoluteDistDir;
    } else {
      options = absoluteDistDir;
    }
    return co(this.oss.list(options));
  }

  /**
	 * 批量删除
	 * @param distNames
	 * @returns {*}
	 */
  delMultiObjectAbsolute(distNames, options?): Promise<any> {
    //log4js.info("批量删除文件::",distNames);
    return co(this.oss.deleteMulti(distNames, options));
  }
}

export function getOssClient(ossConfig): Client {
  if (ossClientInstance) {
    return ossClientInstance;
  } else if (ossConfig && ossConfig.accessKeyId && ossConfig.accessKeySecret) {
    return (ossClientInstance = new Client(ossConfig));
  } else {
    throw new Error('必须传入阿里云OSS配置文件');
  }
}
