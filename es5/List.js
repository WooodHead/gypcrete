'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BEM = exports.COMPONENT_NAME = undefined;

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

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('list');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    title: ROOT_BEM.element('title'),
    body: ROOT_BEM.element('body'),
    desc: ROOT_BEM.element('desc')
};

var NORMAL = 'normal';
var SETTING = 'setting';
var BUTTON = 'button';
var LIST_VARIANTS = [NORMAL, SETTING, BUTTON];

function List(_ref) {
    var variant = _ref.variant,
        title = _ref.title,
        desc = _ref.desc,
        className = _ref.className,
        children = _ref.children,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['variant', 'title', 'desc', 'className', 'children']);

    var bemClass = BEM.root.modifier(variant);
    var rootClassName = (0, _classnames2.default)(bemClass.toString(), className);

    var titleNode = _react2.default.createElement(
        'div',
        { className: BEM.title.toString() },
        title
    );
    var descNode = _react2.default.createElement(
        'div',
        { className: BEM.desc.toString() },
        desc
    );

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rootClassName }, otherProps),
        title && titleNode,
        _react2.default.createElement(
            'ul',
            { className: BEM.body.toString() },
            children
        ),
        desc && descNode
    );
}

List.propTypes = {
    variant: _propTypes2.default.oneOf((0, _values2.default)(LIST_VARIANTS)),
    title: _propTypes2.default.string,
    desc: _propTypes2.default.node
};

List.defaultProps = {
    variant: NORMAL,
    title: undefined,
    desc: undefined
};

exports.default = List;