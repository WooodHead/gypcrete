'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapIfNotElement(content, _ref) {
    var Wrapper = _ref.with,
        _ref$via = _ref.via,
        prop = _ref$via === undefined ? 'children' : _ref$via;

    if (_react2.default.isValidElement(content)) {
        return content;
    }

    var wrapperProps = (0, _defineProperty3.default)({}, prop, content);

    return _react2.default.createElement(Wrapper, wrapperProps);
}

exports.default = wrapIfNotElement;