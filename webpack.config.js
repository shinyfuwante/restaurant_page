const path = require('path');
const json5 = require('json5');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.(png|svg|jpg|jpeg|gift|webp)$/i,
              type: 'asset/resource',
          },
          {
              test: /\.json5$/i,
              type: 'json',
              parser: {
                  parse: json5.parse,
              },
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
      ],
  },
};