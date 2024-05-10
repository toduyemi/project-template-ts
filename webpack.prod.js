const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  assetModuleFilename: (pathData) => {
    const filepath = path
      .dirname(pathData.filename)
      .split('/')
      .slice(1)
      .join('/');
    return `${filepath}/[name].[hash][ext][query]`;
  },
});
