'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = (0, _prefixClass2.default)('tag');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

function Tag(_ref) {
    var className = _ref.className,
        children = _ref.children;

    var rootClass = (0, _classnames2.default)('' + ROOT_BEM.toString(), className);

    return _react2.default.createElement(
        'span',
        { className: rootClass },
        _react2.default.createElement(
            'span',
            null,
            children
        )
    );
}

exports.default = Tag;