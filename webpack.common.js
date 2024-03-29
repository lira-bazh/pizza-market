import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { resolve } from "path";

const __dirname = process.cwd();

const config = {
  entry: "./client/main.jsx",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  output: {
    filename: "assets/js/[name].bundle.js",
    path: resolve(__dirname, "public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "client/index.html",
      favicon: "./client/assets/image/favicon.ico",
    }),
  ],
};

export default config;
