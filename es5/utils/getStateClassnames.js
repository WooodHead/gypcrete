'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _prefixClass = require('./prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = 'state';

var CLASS_ACTIVE = (0, _prefixClass2.default)(PREFIX + '-active');
var CLASS_HIGHLIGHT = (0, _prefixClass2.default)(PREFIX + '-highlight');
var CLASS_ERROR = (0, _prefixClass2.default)(PREFIX + '-error');
var CLASS_DISABLED = (0, _prefixClass2.default)(PREFIX + '-disabled');
var CLASS_UNTOUCHABLE = (0, _prefixClass2.default)(PREFIX + '-untouchable');

function getStateClassnames(stateProps) {
    var _classNames;

    var results = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, CLASS_ACTIVE, stateProps.active), (0, _defineProperty3.default)(_classNames, CLASS_HIGHLIGHT, stateProps.highlight), (0, _defineProperty3.default)(_classNames, CLASS_ERROR, stateProps.error), (0, _defineProperty3.default)(_classNames, CLASS_DISABLED, stateProps.disabled), (0, _defineProperty3.default)(_classNames, CLASS_UNTOUCHABLE, stateProps.untouchable), _classNames));

    return results;
}

exports.default = getStateClassnames;