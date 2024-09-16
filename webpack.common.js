import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

const __dirname = process.cwd();

const config = {
  entry: "./client/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.join(__dirname, "./client")
    }
  },
  output: {
    filename: "assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "/client/assets/styles/var";'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|png)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css"
    }),
    new HtmlWebpackPlugin({
      template: "client/index.html",
      favicon: "./client/assets/image/favicon.ico"
    })
  ]
};

export default config;
