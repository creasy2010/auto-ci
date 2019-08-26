/**
 * @desc
 *
 * jenkins打包出错, 本地先上传..
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/5/29
 **/


var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require( 'vinyl-ftp' );

(async()=>{

  var conn = ftp.create( {
    host:    '172.19.26.161',
    user:     'root',
    password: '000000',
    port:22,
    parallel: 10,
    log:      gutil.log
  } );

  var globs = [
    'dist/**'
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp.src( globs, { base: '.', buffer: false } )
    .pipe( conn.newer( '/data/www/s2b/supplier/dist_supplier' ) ) // only upload newer files
    .pipe( conn.dest( '/data/www/s2b/supplier/dist_supplier' ) );
})();