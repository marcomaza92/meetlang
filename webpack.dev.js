const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s?css/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4321,
    hot: true
  }
});