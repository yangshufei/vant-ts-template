const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8023,
    open: false,
    disableHostCheck: true, // 绕过主机检查，解决Invalid Host header问题
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/mixin.scss";
          @import "@/styles/variables.scss";
          `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        api: resolve('src/api'),
        assets: resolve('src/assets'),
        components: resolve('src/components'),
        router: resolve('src/router'),
        store: resolve('src/store'),
        styles: resolve('src/styles'),
        utils: resolve('src/utils'),
        views: resolve('src/views')
      }
    }
  }
}
