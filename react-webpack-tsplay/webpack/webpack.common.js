const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const Entry = require('./entry')
module.exports = {
  entry: Entry,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.m?js/,
        resolve:
        {
            fullySpecified: false
        }
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './pub/'),
    filename: '[name].js',
  },
  plugins: [
    //to remove licence LICENSE.txt file
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['**/*.LICENSE.txt'],
      protectWebpackAssets: false
    })
  ],
  stats: 'errors-only'
}
