//webpack.config.js

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin')



// the path(s) that should be cleaned
let pathsToClean = [
  'public',
  'build'
]

// the clean options to use
let cleanOptions = {
  root:     '/full/webpack/root/path',
  exclude:  ['shared.js', 'styles.css'],
  verbose:  true,
  dry:      false
}

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
        title: 'TicTacToe',
        template : 'src/client/index.html'
    })
  ],
  module: {
      rules: [
      {
        test: /\.css$/,
        use: ['css-loader' ]
      }
    ]
  }
};