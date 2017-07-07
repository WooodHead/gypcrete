'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BEM = exports.COMPONENT_NAME = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('header-row');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    left: ROOT_BEM.element('left'),
    center: ROOT_BEM.element('center'),
    right: ROOT_BEM.element('right')
};

function HeaderRow(_ref) {
    var left = _ref.left,
        center = _ref.center,
        right = _ref.right,
        className = _ref.className,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['left', 'center', 'right', 'className']);

    var rootClassName = (0, _classnames2.default)(BEM.root.toString(), className);

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rootClassName }, otherProps),
        _react2.default.createElement(
            'div',
            { className: BEM.left },
            left
        ),
        _react2.default.createElement(
            'div',
            { className: BEM.center },
            center
        ),
        _react2.default.createElement(
            'div',
            { className: BEM.right },
            right
        )
    );
}

HeaderRow.defaultProps = {
    left: undefined,
    center: undefined,
    right: undefined
};

exports.default = HeaderRow;