const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname),
    filename: './public/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
    ],
  },
  devServer: {
    static: './public/',
  },
  plugins: [
    new NodePolyfillPlugin({excludeAliases: ['console']}),
  ],
};
