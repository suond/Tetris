const path = require('path');

module.exports = {
  context: __dirname,
  entry: './assets/scripts/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};