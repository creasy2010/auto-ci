/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/9/12
 **/

let todoUseCase=[

];

module.exports = {
  before:({page})=>{

  },
    filter:(names)=>{
      if(todoUseCase.length>0){
          return names.filter((fileName=>todoUseCase.includes(fileName)))
      }else{
          return names;
      }
    },
  beforeUseCases:["supplier/common/login.js"],

  after:({page})=>{

  },
  afterUseCases:[]
}