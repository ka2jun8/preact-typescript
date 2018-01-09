var path = require("path");
var webpack = require("webpack");

module.exports = [{
    entry: {
      'bundle': './src/index.tsx',
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {test: /\.css?$/, loaders: ['style-loader', 'css-loader']}, 
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.ts' ,'.tsx'],
    },
    devtool: 'inline-source-map'
}];