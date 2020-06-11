const path = require('path')
module.exports = {
  entry: "./src/index.js",
  output: {
      //resolveメソッドで絶対パスを取得している。
      path:path.resolve(__dirname,"./dist")
  }
}
