// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

//process是一个全局对象，argv返回的是一组包含命令行参数的数组。第一项为”node”，第二项为执行的js的完整路径，后面是附加在命令行后的参数

/*console.log('process')
console.log(process.argv)*/
var _value = process.argv.splice(2)
var fs=require('fs');
var sync_url = path.resolve(__dirname, '../json_config/'+_value+'.json');

if(fs.existsSync(sync_url)){
	var _path=JSON.parse(fs.readFileSync(sync_url));
}else{
	var _path=JSON.parse(fs.readFileSync(path.resolve(__dirname, '../json_config/default.json')));
}

/*var _path = {
	build:path.resolve(__dirname, '../new_web'),//打包放到啥地方的路径
	//build:'G:\web',
	module:'hotel',//要打包的模块
	start:'index.html',//默认打开（访问）的页面
	whether:false//是否打包放在module这个文件里面
}*/

module.exports = {
	common:{
		assetsModule:_path.module,//模块名称
		start:_path.start,
		whether:_path.whether
	},
  	build: {
	    env: require('./prod.env'),
	    index: path.resolve(__dirname, '../dist/index.html'),
	    assetsRoot: _path.build,//打包的路径
	    assetsSubDirectory:'/',
	    //assetsSubDirectory: 'static',
	    //assetsPublicPath: './../../',
	    assetsPublicPath: _path.build,//打包完的页面访问的页面
	    
	    productionSourceMap: true,
	    // Gzip off by default as many popular static hosts such as
	    // Surge or Netlify already gzip all static assets for you.
	    // Before setting to `true`, make sure to:
	    // npm install --save-dev compression-webpack-plugin
	    productionGzip: false,
	    productionGzipExtensions: ['js', 'css'],
	    // Run the build command with an extra argument to
	    // View the bundle analyzer report after build finishes:
	    // `npm run build --report`
	    // Set to `true` or `false` to always turn it on or off
	    bundleAnalyzerReport: process.env.npm_config_report
  },
  	dev: {
	    env: require('./dev.env'),
	    port: _path.port,
	    autoOpenBrowser: true,
	    assetsSubDirectory: 'static',
	    assetsPublicPath: '/',
	    proxyTable: {},
	    // CSS Sourcemaps off by default because relative paths are "buggy"
	    // with this option, according to the CSS-Loader README
	    // (https://github.com/webpack/css-loader#sourcemaps)
	    // In our experience, they generally work as expected,
	    // just be aware of this issue when enabling this option.
	    cssSourceMap: false
  	}
}



/*module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    //assetsPublicPath: './../../',
    assetsPublicPath: path.resolve(__dirname,'../dist'),
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8089,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
*/