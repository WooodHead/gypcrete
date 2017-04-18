'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconLayout = require('./IconLayout');

var _IconLayout2 = _interopRequireDefault(_IconLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootClass = (0, _icBEM2.default)(_Button.COMPONENT_NAME).modifier('icon-only').toString({ stripBlock: true });

function IconButton(_ref) {
    var icon = _ref.icon,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['icon']);

    return _react2.default.createElement(
        _Button2.default,
        (0, _extends3.default)({ className: rootClass }, otherProps),
        _react2.default.createElement(_IconLayout2.default, { icon: icon })
    );
}

IconButton.propTypes = {
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired
};

exports.default = IconButton;