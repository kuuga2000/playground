const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  //entry: path.resolve(__dirname, '..', './src/index.tsx'),
  entry: {
    'static/store/company/desktop/id_ID/company_purchased/purchased': {
      import: path.resolve(__dirname, "..", "/app/design/frontend/company/default/company_purchased/purchased"),
      dependOn: "vendor/vendor",
    },
    'static/store/company/desktop/id_ID/company_customer/customer': {
      import: path.resolve(__dirname, "..", "/app/design/frontend/company/default/company_customer/customer"),
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
  /*
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],*/
  plugins: [
    //to remove licence LICENSE.txt file
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['**/*.LICENSE.txt'],
      protectWebpackAssets: false
    })
  ],
  stats: 'errors-only'
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