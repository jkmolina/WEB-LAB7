const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
      <html>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `,
  })],
}
