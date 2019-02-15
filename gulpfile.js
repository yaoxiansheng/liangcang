//导入gulp
const gulp = require("gulp");

//导入连接
const connect = require('gulp-connect');

//导入服务器代理
const proxy = require("http-proxy-middleware");

//导入压缩js插件(2个)
const uglify = require('gulp-uglify');
const pump =  require("pump");

//导入es6自动转换es5插件
const babel = require('gulp-babel');

//导入压缩css插件
const cleanCSS = require('gulp-clean-css');

//导入sass插件
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

//_______________________________________________________________________
//自定义指令

gulp.task("html",()=>{
    //获得路径（得到的结果是对象）
    return gulp.src("./src/html/*.html")
          //.pipe 是src的返回值;.dest是转存到哪里，有就存，没有就创建以后再存
          .pipe(gulp.dest("./dist/html"))
          // 转存结束自动刷新页面;
          .pipe(connect.reload());
})

gulp.task("js",()=>{
  //获得路径（得到的结果是对象）
  return gulp.src("./src/js/*.js")
   //.pipe 是src的返回值;.dest是转存到哪里，有就存，没有就创建以后再存
         .pipe(gulp.dest("./dist/js"))
         // 转存结束自动刷新页面;
         .pipe(connect.reload());
})

gulp.task("php",()=>{
  //获得路径（得到的结果是对象）
  return gulp.src("./src/php/*.php")
   //.pipe 是src的返回值;.dest是转存到哪里，有就存，没有就创建以后再存
         .pipe(gulp.dest("./dist/php"))
         // 转存结束自动刷新页面;
         .pipe(connect.reload());
})

gulp.task("img",()=>{
  //获得路径（得到的结果是对象）
  return gulp.src("./src/img/*")
   //.pipe 是src的返回值;.dest是转存到哪里，有就存，没有就创建以后再存
         .pipe(gulp.dest("./dist/img"))
         // 转存结束自动刷新页面;
         .pipe(connect.reload());
})

gulp.task('connect', function() {
  //开启服务器
  connect.server({
      port:8800,
      root:"./dist",
      //开启自动刷新（好不好使随缘了）
      liverelod:true,
      // 开启服务器代理
      middleware: function(connect, opt) {
        return proxyList;
      }
  });
});

gulp.task('compress', function (cb) {
  // 代码 es6 转码 => es5 ,压缩
  pump([
      //获得路径（得到的结果是对象）
        gulp.src("./src/js/*.js"),
        // 进行es6的编译
        babel({
              presets: ['@babel/env']
        }),
        //压缩代码
        uglify(),
        //转存
        gulp.dest("./dist/js")
    ],
    cb
  );
});

gulp.task('css', () => {
  //压缩css
  return gulp.src("./src/css/*.css")
         //压缩代码
        .pipe(cleanCSS())
         //转存
        .pipe(gulp.dest("./dist/css"));
});

gulp.task('sass', function () {
  return gulp.src("./src/sass/1.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./dist/css"))
});

gulp.task("watch",()=>{
  //监听如果有改变则执行[]里面代码
  gulp.watch("./src/html/*.html",["html"]);
  gulp.watch("./src/js/*.js",["js"]);
  gulp.watch("./src/sass/*.scss",["css"]);
  gulp.watch("./src/css/*.css",["css"])
})

//打包压缩
gulp.task("build",["compress","minify-css"])

//default这个是特殊的，因为default单词是固定的，但执行时可以不写default单词
gulp.task("default",["watch","connect"]);
//_____________________________________________________

// 服务器代理函数
const proxyList = [
      // /proxydouban => web端发起请求时带有的一个小标记,这个标记是自定义的
      proxy("/aa",{
            // 由服务器发起请求的目标
            target : "https://api.douban.com:443",
            // 是否重定向源, 默认一定为true;
            changeOrigin:true,
            // 表示路径中的某些标记要清除掉。
            pathRewrite: {
                  "/aa" : ""
            }
      })
]

