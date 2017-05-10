'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SWITCH_STATE = exports.BEM = exports.COMPONENT_NAME = undefined;

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

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('switch-icon');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    inner: ROOT_BEM.element('inner')
};

var ON = 'on';
var OFF = 'off';
var SWITCH_STATE = exports.SWITCH_STATE = { ON: ON, OFF: OFF };

function SwitchIcon(_ref) {
    var state = _ref.state,
        className = _ref.className,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['state', 'className']);

    var bemClass = BEM.root.modifier(state);
    var rootClassName = (0, _classnames2.default)(className, '' + bemClass);

    return _react2.default.createElement(
        'span',
        (0, _extends3.default)({ className: rootClassName }, otherProps),
        _react2.default.createElement('span', { className: BEM.inner })
    );
}

SwitchIcon.propTypes = {
    state: _propTypes2.default.oneOf((0, _values2.default)(SWITCH_STATE))
};

SwitchIcon.defaultProps = {
    state: OFF
};

exports.default = SwitchIcon;