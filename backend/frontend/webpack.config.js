const path = require("path");

module.exports = {
  mode: "development", // Set mode to development
  entry: path.resolve(__dirname, "../../server.ts"), // Ensure this points to your actual entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"], // Allow Webpack to resolve TypeScript and JavaScript files
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/"),
      "fs": false,
      "net": false,
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "process": require.resolve("process/browser"),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};