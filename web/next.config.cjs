import nodeExternals from 'webpack-node-externals'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  externals: [nodeExternals()]
}
