const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const outputPath = path.resolve(__dirname, "./dist/");
let packageObj = require("./package.json");
module.exports = {
  // devtool: "cheap-module-source-map",
  entry: { vue: "./lib/index.js", jsp: "./jsp/index.js" },
  output: {
    path: outputPath,
    filename: `logger.[name].${packageObj.version}.js`,
    library: "$logger",
    libraryTarget: "umd",
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
          options: {
            presets: ["babel-preset-es2015"],
            plugins: ["transform-runtime"],
          },
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
