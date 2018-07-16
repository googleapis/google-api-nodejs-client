const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  },
  output: {
    library: 'googleapis',
    filename: 'googleapis.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    'child_process': 'empty',
    'fs': 'empty'
  },
  module: {
    rules: [
      {
        test: /node_modules\/gtoken\//,
        use: 'null-loader'
      },
      {
        test: /node_modules\/pkginfo\//,
        use: 'null-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'production',
	plugins: [
    new BundleAnalyzerPlugin()
  ]
};
