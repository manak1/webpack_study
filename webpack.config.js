const path = require("path");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: "./src/index.js",
  output: {
    //resolveメソッドで絶対パスを取得している。
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
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
    ],
  },
  plugins: [
      new MiniCSSExtractPlugin(),
  ]
};
