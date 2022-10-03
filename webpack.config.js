const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ttf|woff(2)?|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    client: {
      logging: "info",
      overlay: true,
      reconnect: 2,
    },
    compress: true,
    port: 5050,
    hot: true,
  },
  devtool: "source-map",
};
