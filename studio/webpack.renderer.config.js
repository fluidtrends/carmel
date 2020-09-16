const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')
const path = require('path')

const userHome =
  process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
}
