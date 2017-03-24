'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = 'ic-text-ellipsis';
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

function TextEllipsis(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: ROOT_BEM },
        children
    );
}

exports.default = TextEllipsis;