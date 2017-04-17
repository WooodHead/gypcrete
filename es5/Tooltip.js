'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TOOLTIP_PLACEMENT = exports.COMPONENT_NAME = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = 'ic-tooltip';
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = {
    root: ROOT_BEM,
    arrow: ROOT_BEM.element('arrow')
};

var TOP = 'top';
var BOTTOM = 'bottom';
var TOOLTIP_PLACEMENT = exports.TOOLTIP_PLACEMENT = { TOP: TOP, BOTTOM: BOTTOM };

function Tooltip(_ref) {
    var placement = _ref.placement,
        arrowStyle = _ref.arrowStyle,
        className = _ref.className,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['placement', 'arrowStyle', 'className']);

    var bemClass = BEM.root.modifier(placement);
    var rootClassName = (0, _classnames2.default)(className, '' + bemClass);

    return _react2.default.createElement(
        'span',
        (0, _extends3.default)({ className: rootClassName }, otherProps),
        'content',
        _react2.default.createElement('span', { className: BEM.arrow, style: arrowStyle })
    );
}

Tooltip.propTypes = {
    placement: _react.PropTypes.oneOf((0, _values2.default)(TOOLTIP_PLACEMENT)),
    arrowStyle: _react.PropTypes.objectOf(_react.PropTypes.number)
};

Tooltip.defaultProps = {
    placement: TOP,
    arrowStyle: {}
};

exports.default = Tooltip;