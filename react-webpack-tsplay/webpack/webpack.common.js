const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //entry: path.resolve(__dirname, '..', './src/index.tsx'),
  entry: {
    'category/category': {
      import: path.resolve(__dirname, "..", "./src/index.tsx"),
      dependOn: "vendor/vendor",
    },
    'product/product': {
      import: path.resolve(__dirname, "..", "/src/product/index.tsx"),
      dependOn: "vendor/vendor",
    },
    'vendor/vendor': ["react", "react-dom"],
  },
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
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build/'),
    filename: '[name].js',
  },
  /*
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],*/
  stats: 'errors-only',
}
/**
 * app: {
      path: path.resolve(__dirname, '..', './build'),
      filename: '[name].js',
    },
    product: {
      path: path.resolve(__dirname, '..', './buildx'),
      filename: '[name].js',
    },
    vendor: {
      path: path.resolve(__dirname, '..', './buildz'),
      filename: '[name].js',
    }
 */