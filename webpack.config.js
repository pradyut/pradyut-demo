const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './client'
  ],
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'style!css!stylus',
        test: /\.styl$/,
        exclude: /node_modules/,
      },

      {
        loader: 'react-hot!babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        loader: 'react-hot!babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map',
  debug: true,
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx']
  },
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1'
  }
};