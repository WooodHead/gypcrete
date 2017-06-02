'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PREFIX = undefined;

var _isNonEmptyString = require('./isNonEmptyString');

var _isNonEmptyString2 = _interopRequireDefault(_isNonEmptyString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = exports.PREFIX = 'gyp';

function prefixClass(className) {
    if (!(0, _isNonEmptyString2.default)(className)) {
        throw new Error('className should be a non-empty string.');
    }
    return PREFIX + '-' + className;
}

exports.default = prefixClass;