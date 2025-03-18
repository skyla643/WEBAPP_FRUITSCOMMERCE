const path = require("path");

module.exports = {
  mode: "development", // <-- Set mode to development
  entry: "./src/index.js", // <-- Ensure this points to your actual entry file
  resolve: {
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
      }
    ]
  }
};