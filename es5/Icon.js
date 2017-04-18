'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ICON_COLOR = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = 'ic-icon';
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

var GRAY = 'gray';
var BLUE = 'blue';
var RED = 'red';
var ICON_COLOR = exports.ICON_COLOR = { GRAY: GRAY, BLUE: BLUE, RED: RED };

function Icon(_ref) {
    var type = _ref.type,
        color = _ref.color,
        large = _ref.large,
        spinning = _ref.spinning,
        className = _ref.className,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['type', 'color', 'large', 'spinning', 'className']);

    var bemClass = ROOT_BEM.modifier(color, !!color).modifier('large', large).modifier('spin', spinning);

    var rootClassName = (0, _classnames2.default)(className, '' + bemClass, 'ic-icon-' + type);

    return _react2.default.createElement('span', (0, _extends3.default)({
        className: rootClassName,
        role: 'presentation'
    }, otherProps));
}

Icon.propTypes = {
    type: _propTypes2.default.string.isRequired,
    color: _propTypes2.default.oneOf((0, _values2.default)(ICON_COLOR)),
    large: _propTypes2.default.bool,
    spinning: _propTypes2.default.bool
};

Icon.defaultProps = {
    color: null,
    large: false,
    spinning: false
};

exports.default = Icon;