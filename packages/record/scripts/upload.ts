
import {join} from 'path';
import {getOssClient} from './oss';
const klaw = require('klaw');

let ossClient = getOssClient(require('../config/oss-config.json'));
let basePath = join(__dirname, '..');
let items: string[] = [];

klaw(join(basePath,"public/icon"))
  .on('data', (item: any) => {
    items.push(item.path)

  })
  .on('end', async () =>{
    items =items.filter((fiPath:string)=>{
      return  fiPath.endsWith('.png')
    });

    for (let i = 0, ilen = items.length; i < ilen; i++) {
      let item = items[i];
      console.log(item);
      let result  = await ossClient.putObject(item,item.replace(join(basePath,'public'),""));
      console.log(result);
    }
  });
