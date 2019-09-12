const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js?[chunkhash]'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
      }),
    ],
    splitChunks: {
      // We chunk large dependencies into separate files to optimize browser caching.
      cacheGroups: {
        'vendors-rrule': {
          test: /node_modules[\\/](rrule)[\\/]/,
        },
      },
      chunks: 'all', // Dependencies that are not defined in cacheGroups end up in vendors~main.js.
      maxInitialRequests: Infinity,
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}