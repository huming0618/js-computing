var path = require('path');

module.exports = {
  entry: './webgl/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};