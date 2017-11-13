'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('babel-polyfill');
var props = require('./../../index');

var Bar = function Bar() {
    _classCallCheck(this, Bar);

    props(this).shouldNotBeAccessible = true;
};

module.exports = Bar;
//# sourceMappingURL=bar.js.map
