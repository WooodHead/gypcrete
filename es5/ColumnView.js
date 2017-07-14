'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BEM = exports.COMPONENT_NAME = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.ColumnPart = ColumnPart;

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

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('column-view');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    header: ROOT_BEM.element('header'),
    body: ROOT_BEM.element('body'),
    footer: ROOT_BEM.element('footer')
};

function ColumnPart(_ref) {
    var children = _ref.children,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['children']);

    if (!children) {
        return null;
    }

    return _react2.default.createElement(
        'div',
        otherProps,
        children
    );
}

function ColumnView(_ref2) {
    var header = _ref2.header,
        footer = _ref2.footer,
        className = _ref2.className,
        children = _ref2.children,
        wrapperProps = (0, _objectWithoutProperties3.default)(_ref2, ['header', 'footer', 'className', 'children']);

    var rootClassName = (0, _classnames2.default)(BEM.root.toString(), className);

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rootClassName }, wrapperProps),
        _react2.default.createElement(
            ColumnPart,
            { className: BEM.header.toString() },
            header
        ),
        _react2.default.createElement(
            'div',
            { className: BEM.body.toString() },
            children
        ),
        _react2.default.createElement(
            ColumnPart,
            { className: BEM.footer.toString() },
            footer
        )
    );
}

ColumnView.propTypes = {
    header: _propTypes2.default.node,
    footer: _propTypes2.default.node
};

ColumnView.defaultProps = {
    header: undefined,
    footer: undefined
};

exports.default = ColumnView;