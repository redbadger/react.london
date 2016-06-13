/* eslint prefer-template: 0 */
/* eslint object-shorthand: 0 */
/* eslint vars-on-top: 0 */
/* eslint no-var: 0 */

// import es6
require('babel-register');
require('babel-polyfill');

var chai = require('chai');
chai.use(require('dirty-chai')); // Function form for terminating assertions
global.expect = chai.expect;     // Register test tools globally

// jsdom
var jsdom = require('jsdom'); // eslint-disable-line

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

global.window.URL = {
  createObjectURL: function createObjectURL(arg) {
    return 'data://' + arg.name;
  },
};
