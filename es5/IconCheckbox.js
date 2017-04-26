'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconLayout = require('./IconLayout');

var _IconLayout2 = _interopRequireDefault(_IconLayout);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckbox(props) {
    var buttonWithStatus = _react2.default.createElement(_IconLayout2.default, { icon: _Checkbox.CHECKBOX_BUTTON });

    return _react2.default.createElement(
        _Checkbox2.default,
        (0, _extends3.default)({
            minified: true,
            overrideButton: buttonWithStatus
        }, props),
        _react2.default.createElement('span', null),
        ' '
    );
}

exports.default = IconCheckbox;