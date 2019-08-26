/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/6
 **/


/**

 直接调用
 action.commonChange([a,b,c],"1")
 action.commonChange("a.b.c","1")
 action.commonChange("a,b,c","1")

 action.commonChange([{paths:"a.b.c",value:13123}])

 dom高级使用方法:

    1. 更改值后回周触发;
   <Select placeholder="请选择服务分类" value={main.info.projectCateId} style={{ width: 160 }}
   //@ts-ignore
   onChange={_.curryRight(action.commonChange,2)((param)=>{
                         setTimeout(action.queryItems,0);
                         return param;
                       })}>
   {
     main.cates.map((item,index)=><Option key={item.projectCateId+(index+"")}  data-paths={"main.info.projectCateId"} value={item.projectCateId}>{item.projectCateName}</Option>)
   }
   </Select>

   2.值的修改.. 或批量添加.



 dom元素调用;

 <Checkbox.Group value={binary2Array(3)
              // main.card.distributionChannel
            } style={{ width: "100%" }} onChange={this._chooseChannel.bind(null,"info,channels")}>
   <Checkbox value="1">门店收银</Checkbox>
   <Checkbox value="2">网店销售</Checkbox>
 </Checkbox.Group>

 input 类型的
 <Input.TextArea rows={3} data-paths={'info,petFeatures'} onChange={action.commonChange} value={main.info.petFeatures}  placeholder="描述宠物状态描述，生理特征描述。" />

 <Radio.Group value={main.info.petType} onChange={this._chooseEndTimeMode}>
 <Radio data-paths={"info,petType"} value={1}>狗狗</Radio>
 <Radio data-paths={"info,petType"} value={2}>猫咪</Radio>
 </Radio.Group>


 注: data-paths是要改变的值的路径;
 <Select  placeholder="请选择服务分类" style={{ width: 160, }}
 onChange={this._onSelect}>
 {
   main.cates.map((item,index)=><Option  data-paths={"info,choosedindex"} value={item.projectCateId} data-index={index}>{item.projectCateName}</Option>)
 }
 </Select>

 <Select  placeholder="请选择服务分类" style={{ width: 160, }}
 mode={"multiple"}
 onChange={this._onSelect}>
 {
   main.cates.map((item,index)=><Option  data-paths={"info,choosedindex"} value={item.projectCateId} data-index={index}>{item.projectCateName}</Option>)
 }
 </Select>
 */
export function extraPathsValue(...params):{paths:string[];value:any;batchUpdate} {

  let p1=params[0],p2=params.length>=2?params[1]:null;
  let handFunc:any =null;
  if(typeof params[params.length-1] ==='function') {
    handFunc=params[params.length-1];
  }

  let paths:string[]=[],value,batchUpdate=[];
  if( typeof p1 ==='string' && p2 && p2.props && p2.props['data-paths']) {
    //字符数组;
    paths = p2.props['data-paths'].split(/[,\.]/ig);
    value = p1;
  } else if( p1 instanceof Array && p1[0].hasOwnProperty('paths') && p1[0].hasOwnProperty('value')  ) {
    batchUpdate=p1.map(({paths,value})=>{
      let _paths =paths;
      if(typeof _paths ==='string'){
        _paths=paths.split(/[,\.]/ig);
      }

      return {
        paths:_paths,value
      }
    });
  } else if(typeof p1 ==='string') {
    //字符数组;
    paths = p1.split(/[,\.]/ig);
    value = p2;
  } else if(p1.hasOwnProperty('target') && p1.target['data-paths'] && p1.target['value']!=undefined) {
    //Radio.Group
    paths = p1.target['data-paths'].split(/[,\.]/ig);
    value=p1.target['value'];
  } else if(p1.hasOwnProperty('target') && p1.target.dataset && p1.target.dataset.paths) {
    //event; input text-area
    // @ts-ignore
    paths = p1.target.dataset.paths.split(/[,\.]/ig);
    // @ts-ignore
    value = p1.target.value;
  } else if(p1 instanceof Array && p2 instanceof Array && p2[0] && typeof p2[0].type === 'function' && p2[0].props && p2[0].props["data-paths"]) {
    // select checkbox多选状态
    paths = p2[0].props["data-paths"].split(/[,\.]/ig);
    value=p1 as Array<string|number>;
  } else if(p1 instanceof Array) {
    paths= p1;
    value= p2;
  } else if(p2 && p2.hasOwnProperty('props') && p2.props.hasOwnProperty('data-paths') && p2.props.hasOwnProperty('value')) {
    // select 单选
    paths = p2.props['data-paths'].split(/[,\.]/ig);
    value = p2.props['value'];
  }
  console.log(paths,value,batchUpdate);

  return handFunc?handFunc({paths,value,batchUpdate,raw:params}):{paths,value,batchUpdate};
}


