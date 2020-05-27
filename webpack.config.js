module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
