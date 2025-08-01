'use strict';

module.exports = {
  mode: 'development',
  entry: { main: './src/index' },
  output: {
    path: __dirname + '/wwwroot/observer-ui/dist',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader' },
    ]
  }
};
