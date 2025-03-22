const path = require("path");
const webpack = require("webpack");

module.exports = {
  // Set the context to your frontend folder
  context: path.resolve(__dirname, "frontend"),
  // Specify the entry point of your app
  entry: "./src/index.tsx",
  // Define where to output the compiled bundle
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"  // Useful for the dev server
  },
  resolve: {
    // Let webpack resolve these file extensions
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      url: require.resolve("url/"),
      buffer: require.resolve("buffer/")
    }
  },
  module: {
    rules: [
      // Use ts-loader for TypeScript files
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      // Handle CSS files with style-loader, css-loader, and postcss-loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"]
    })
  ],
  // Configure the dev server to serve from the public folder
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 3000,
    historyApiFallback: true  // For single-page apps
  }
};