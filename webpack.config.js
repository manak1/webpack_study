const path = require("path");
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
        //cssファイル検知に使用 loader端から上の順に適応される。
        test: /\.css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
