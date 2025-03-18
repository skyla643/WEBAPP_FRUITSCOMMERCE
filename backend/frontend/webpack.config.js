const path = require("path");

module.exports = {
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
      "fs": false, // fs is not available in the browser
      "net": false, // net is not available in the browser
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "process": require.resolve("process/browser"),
    }
  }
};