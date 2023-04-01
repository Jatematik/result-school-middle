const { merge } = require('webpack-merge')
const commonRequire = require('./webpack.config.js')

module.exports = merge(commonRequire, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    open: true
  },
})