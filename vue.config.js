const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
}