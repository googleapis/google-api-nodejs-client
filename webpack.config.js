const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './build/src/index.js',
  resolve: {
    extensions: [ '.js', '.json' ]
  },
  output: {
    library: 'googleapis',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    'child_process': 'empty',
    'fs': 'empty'
  },
  module: {
    rules: [
      {
        test: path.resolve(__dirname, 'node_modules/gtoken/build/src/index.js'),
        use: 'null-loader'
      }
    ]
  },
  mode: 'development'
};
