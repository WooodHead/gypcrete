'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureTextInput = exports.COMPONENT_NAME = undefined;

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

var _rowComp = require('./mixins/rowComp');

var _rowComp2 = _interopRequireDefault(_rowComp);

var _EditableText = require('./EditableText');

var _EditableText2 = _interopRequireDefault(_EditableText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('text-input');

function TextInput(props, _ref) {
    var align = _ref.align;
    var wrapperProps = props.wrapperProps,
        className = props.className,
        children = props.children,
        editableTextProps = (0, _objectWithoutProperties3.default)(props, ['wrapperProps', 'className', 'children']);


    var rootClassName = (0, _classnames2.default)(className, COMPONENT_NAME);
    var textLayoutProps = (0, _rowComp.getTextLayoutProps)(align, false);

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rootClassName }, wrapperProps),
        _react2.default.createElement(_EditableText2.default, (0, _extends3.default)({}, textLayoutProps, editableTextProps))
    );
}

TextInput.propTypes = {
    wrapperProps: _propTypes2.default.object };

TextInput.defaultProps = {
    wrapperProps: {}
};

TextInput.contextTypes = {
    align: _propTypes2.default.oneOf((0, _values2.default)(_rowComp.ROW_COMP_ALIGN))
};

exports.PureTextInput = TextInput;
exports.default = (0, _rowComp2.default)({ defaultAlign: _rowComp.ROW_COMP_ALIGN.REVERSE })(TextInput);