const path = require('path')
const userHome =
  process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']

module.exports = {
  entry: './src/main/index.ts',
  module: {
    rules: require('./webpack.rules'),
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: {
      carmel: path.resolve(userHome, '.carmel'),
      carmelbundle: path.resolve(userHome, '.carmel', 'bundles'),
    },
  },
}
