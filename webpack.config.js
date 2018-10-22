const path = require('path')//path是nodejs里一个基本包
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode:'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(jpg|png|jpeg|svg|gif)$/,
        use:[
          {
            loader:'url-loader',
            option:{
              limit:1024,
              name:'[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}