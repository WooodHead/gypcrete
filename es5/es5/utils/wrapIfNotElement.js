'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapIfNotElement(content, _ref) {
    var Wrapper = _ref.with;

    if (_react2.default.isValidElement(content)) {
        return content;
    }
    return _react2.default.createElement(
        Wrapper,
        null,
        content
    );
}

exports.default = wrapIfNotElement;