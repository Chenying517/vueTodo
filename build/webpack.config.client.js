const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'

let config

const devServer = {
  port: 8899,
  contentBase: path.join(__dirname, '../dist'),
  overlay: {
    errors: true
  },
  hot: true,
}
const defautPlugin=[
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlPlugin({
  }),
  new VueLoaderPlugin()
]
if (isDev) {
  config = Merge(baseConfig, {
    devtool : '#cheap-module-eval-source-map',
    module: {
      rules: [{
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }]
    },
    devServer,
    plugins: defautPlugin.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = Merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../src/index.js'),
      vendor: ['vue']
    },
    output:{
      filename:'[name].[chunkhash:8].js'
    },
    module:{
      rules:{
        test: /\.styl$/,
        use: ExtractPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    },
    plugins:defautPlugin.concat([
      new ExtractPlugin('styles.[contentHash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      }),
    ])
  })
}
module.exports = config