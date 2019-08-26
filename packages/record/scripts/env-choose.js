/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/8
 **/
let questions = [
    {
        type: 'list',
        name: 'selection',
        message: '请选择环境------------>',
        choices: [
            { name: 'dev' },
            { name: 'test1' },
            { name: 'test2' },
            { name: 'test3' },
            { name: 'local' },
            { name: 'prod' },
        ],
    },
];

module.exports = ()=>{
    return new Promise((resolve,reject)=>{
        if(process.argv[2]) {
            console.log(`根据进程参数选择环境:${process.argv[2]}`);
            resolve(process.argv[2]);
            process.env.PORT =portMap[process.argv[2]];
        }else  if(process.env['NODE_ENV:']==='production'){
            resolve('prod');
        }else{
            require('inquirer')
                .prompt(questions)
                .then(answers => {
                    let platform = answers.selection;
                    console.log('用户选择环境编码:', platform);
                    process.env.PORT =portMap[platform];
                    resolve(platform)
                })
        }
    });
}


let portMap ={
    prod:3000,
    test1:3001,
    dev:3002,
    local:3003,
}