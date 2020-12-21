const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')
const { getThemeVariables } = require('antd/dist/theme')

module.exports = [
  {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true,
              compact: true,
            }),
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
  {
    test: /\.(?:png|jpg|svg|icns|gif|ico)$/,
    loader: 'url-loader',
    query: {
      limit: 500000,
    },
  },
  {
    test: /\.mp4$/,
    use: 'file-loader?name=videos/[name].[ext]',
  },
  {
    test: /\.ttf$/,
    use: ['file-loader'],
  },
  {
    test: /json\/utils$/,
    use: ['file-loader'],
  },
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.m?(js)$/,
    parser: { amd: false },
    exclude: /(node_modules|\.webpack|mocha)/,
    use: [
      {
        loader: '@marshallofsound/webpack-asset-relocator-loader',
        options: {
          outputAssetBase: 'native_modules',
        },
      },
    ],
  },
  {
    test: /node_modules[/\\](mocha|@npmcli|node-gyp)/i,
    use: [
      {
        loader: 'shebang-loader',
      },
    ],
  },
  {
    test: /\.m?js$/,
    include: [
      path.resolve(__dirname, "node_modules", "@hapi"),
    ],
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                esmodules: true,
              },
            },
          ],
        ],
        plugins: [
          "@babel/plugin-proposal-private-methods", 
          "@babel/plugin-proposal-class-properties",
          // "@babel/plugin-transform-runtime"
        ]
      }
    }
  },
  {
    test: /\.ts(x?)$/,
    exclude: /(node_modules|\.webpack)/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory()],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        },
      },
    ],
  },
]
