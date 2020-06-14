const path = require("path");
//css file出録。
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
//html file出力。
const HtmlWebpackPlugin = require("html-webpack-plugin");
//distから不要なファイルを削除する。
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    //resolveメソッドで絶対パスを取得している。
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/index.js",
  },
  module: {
    rules: [
      {
        //cssファイル検知に使用 loader下から上の順に適応される。
        test: /\.css/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty:true
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "./css/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.pug",
      filename:"index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/access.pug",
      filename:"access.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/members/taro.pug",
      filename:"members/taro.html"
    }),
    new CleanWebpackPlugin(),
  ],
};
