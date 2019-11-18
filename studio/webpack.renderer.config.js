const rules = require('./webpack.rules');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

rules.push(
  {
    test: /\.less$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader',
    options: {
             modifyVars: {
               'primary-color': '#00bcd4',
               'link-color': '#1565C0',
               'border-radius-base': '2px'
             },
             javascriptEnabled: true
           }
   }]
  }
)

const plugins = [
  new HtmlWebPackPlugin({
    filename: "./ui/index.html"
  }), 
  new webpack.ExternalsPlugin('commonjs', [
    'electron'
  ])
]

module.exports = {
  module: {
    rules
  }
}
