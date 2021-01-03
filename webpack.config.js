const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const outputPath = path.resolve(__dirname, "./dist/");
let packageObj = require("./package.json");
module.exports = {
  // devtool: "cheap-module-source-map",
  entry: { vue: "./lib/index.js", jsp: "./lib/core/logger.js" },
  output: {
    path: outputPath,
    filename: `${packageObj.name}.[name].${packageObj.version}.js`,//输出文件的名字
    library: "$logger",//暴露到全局对象时挂载的key名
    libraryTarget: "umd",//输出的模块规范
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // include: /\/includes/,
        // parallel:2,
        extractComments: false,
        terserOptions: {
          mangle: true,
          ecma: 5,
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
};
