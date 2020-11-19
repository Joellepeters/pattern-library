const path = require('path');

module.exports = {
  entry: [
    './src/utilities/index.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist/utilities'),
    filename: 'utilities.css'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css'
            }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader?-url' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  }
};
