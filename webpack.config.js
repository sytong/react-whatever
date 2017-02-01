module.exports = {
  context: __dirname + "/app",
  entry: {
     javascript: "./js/app.js",
     html: "./index.html",
   },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.json/,
        loader: "json-loader"
      }
    ]
  },
  externals: {
    'Config': JSON.stringify(require('./config.json'))
  }
};
