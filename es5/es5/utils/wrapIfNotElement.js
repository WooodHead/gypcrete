'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrap the passed-in `content` with a component if it's not a React element,
 * to make sure the result will always be a HTML tag.
 *
 * @param {Any} content
 * @param {Component} Wrapper
 *
 * @return {Element}
 */
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