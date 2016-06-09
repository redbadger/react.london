
/* eslint prefer-template: 0 */
/* eslint object-shorthand: 0 */

// import es6
require('babel-register');
require('babel-polyfill');

// Register test tools globally
global.expect = require('chai').expect;

// jsdom
var jsdom = require('jsdom'); // eslint-disable-line

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

global.window.URL = {
  createObjectURL: function (arg) {
    return 'data://' + arg.name;
  }
};
