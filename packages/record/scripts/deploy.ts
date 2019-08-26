
import {join} from 'path';
import {getOssClient} from './oss';
const klaw = require('klaw');
import * as fse from 'fs-extra';







let ossClient = getOssClient(require('../config/oss-config.json'));
let basePath = join(__dirname, '..');
let items: string[] = [];

klaw(join(basePath,"build/static/js"))
  .on('data', (item: any) => {
    // console.log('data::',item);
    items.push(item.path)
  })
  .on('end', async () =>{
    items =items.filter((fiPath:string)=>{
      return !fiPath.endsWith('.map') && fiPath.endsWith('.js')
    });

    for (let i = 0, ilen = items.length; i < ilen; i++) {
      let item = items[i];
      console.log(item);
      let result  = await ossClient.putObject(item,item.replace(join(basePath,'build'),""));
      console.log(result);
    }
  });
