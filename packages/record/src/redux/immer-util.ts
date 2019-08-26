/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/4/28
 **/


export function commonChange(immerObj,param:{
  batchUpdate?:[{
    paths:string[];
    value:any;
  }];
  paths:string[];
  value:any;
  key:string;
}) {

  if(param.paths) {
    param.paths = ensurePath(param.paths);
  }

  if(param.paths[0]===param.key) {
    modifyDeep(immerObj,param.paths.splice(1),param.value);
  }

  if(param.batchUpdate){
    for (let i = 0, iLen = param.batchUpdate.length; i < iLen; i++) {
      let {paths,value} = param.batchUpdate[i];
      paths=ensurePath(paths);

      if(paths[0]===param.key) {
        modifyDeep(immerObj,paths.splice(1),value);
      }
    }
  }

  return immerObj;
}

function ensurePath(paths:string|string[]):string[]{
  let result =  paths ;

  if(typeof paths ==='string'){
    result=paths.split(".");
    return result;
  } else {
    return result as string[];
  }
  // return  result;
}

export function modifyDeep(immerObj,paths:(string|number)[], value:any) {

  let obj = immerObj;
  let lastIndex= paths.length-1;
  for (let i = 0, iLen = lastIndex; i < iLen; i++) {
    obj=obj[paths[i]];
    if(!obj) {
       console.warn(`the obj defined by paths ${paths} is not exist!!`)
    }
  }

  if(typeof(value)==='function') {
    //调用外部方法对对象进行处理;
    value(obj[paths[lastIndex]]);
  }else{
    obj[paths[lastIndex]]=value;
  }
}


export function assign(immerObj,obj){
  if(!obj){
    return immerObj;
  }
  for (let propKey in obj) {
    immerObj[propKey] = obj[propKey];
  }
  return immerObj;
}