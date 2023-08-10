const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'test-olgm-bundle.js'
  },
  optimization: {
    minimizer: [ false ]
  }
};
