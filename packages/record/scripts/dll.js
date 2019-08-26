'use strict';
const fse = require('fs-extra')
const path  =require('path');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const webpack = require('webpack');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.dll.config');

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}


var golbalConfig = {};
require('./env-choose')().then((envCode)=>{
    golbalConfig  = configFactory('development',envCode);

    webpack(golbalConfig, (err, stats) => { // Stats Object
    if (err || stats.hasErrors()) {
      // Handle errors here
    }
    for (let assetsKey in stats.compilation.assets) {
      if(assetsKey.endsWith(".dll.js")){
        console.log("此次引用dll文件为",assetsKey);
        let filePath = path.join(__dirname,"../config/compile-env.json");
        let json  = fse.readJsonSync(filePath);
        json[envCode==='prod'?"prodDll":"testDll"] = assetsKey;
        fse.writeJsonSync(filePath,json);
        break;
      }
    }
    // Done processing
  });
})
  .catch(err => {
    if (err && err.message) {
      console.log(err);
      console.log(err.message);
    }
    process.exit(1);
  });
