const purify = require("purify-css")
// const postcss = require('postcss');
// const postcssCustomProperties = require('postcss-custom-properties');

var content = ['./*.html', './assets/js/*.js']
var css = ['./assets/css/output.css'];

var options = {
  // Will write purified CSS to this file.
  output: './assets/css/removeunsed.css'
};

purify(content, css, options);