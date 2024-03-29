const path = require("path");
 
module.exports = {
  // モードを開発モードにする
  mode: "development",
  // 入力ファイル設定
  entry: [path.resolve(__dirname, "./src/index.ts")],
  // 出力ファイル設定
  output: {
    // 出力されるファイル名
    filename: "bundle.js",
    // 出力先ディレクトリ
    path: path.resolve(__dirname, "dist")
  },
 
  // モジュール設定
  module: {
    rules: [
      {
        // ts-loaderの設定
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ]
  },
  // モジュール解決
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
 
  // 開発モード設定
  //devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  }
};
