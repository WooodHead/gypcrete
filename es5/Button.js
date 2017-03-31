'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureButton = exports.BUTTON_COLOR = exports.COMPONENT_NAME = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _rowComp = require('./mixins/rowComp');

var _rowComp2 = _interopRequireDefault(_rowComp);

var _RowCompBody = require('./RowCompBody');

var _RowCompBody2 = _interopRequireDefault(_RowCompBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = 'ic-button';
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

var BLUE = 'blue';
var RED = 'red';
var WHITE = 'white';
var BLACK = 'black';
var BUTTON_COLOR = exports.BUTTON_COLOR = { BLUE: BLUE, RED: RED, WHITE: WHITE, BLACK: BLACK };

function Button(_ref) {
    var color = _ref.color,
        solid = _ref.solid,
        className = _ref.className,
        children = _ref.children,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['color', 'solid', 'className', 'children']);

    var bemClass = ROOT_BEM.modifier(color).modifier('solid', solid);

    var rootClassName = (0, _classnames2.default)(className, '' + bemClass);

    return _react2.default.createElement(
        'button',
        (0, _extends3.default)({ type: 'button', className: rootClassName }, otherProps),
        _react2.default.createElement(
            _RowCompBody2.default,
            null,
            children
        )
    );
}

Button.propTypes = {
    color: _react.PropTypes.oneOf((0, _values2.default)(BUTTON_COLOR)),
    solid: _react.PropTypes.bool
};

Button.defaultProps = {
    color: BLUE,
    solid: false
};

exports.PureButton = Button;
exports.default = (0, _rowComp2.default)({ defaultMinified: true })(Button);