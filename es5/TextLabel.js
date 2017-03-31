'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureTextLabel = exports.COMPONENT_NAME = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rowComp = require('./mixins/rowComp');

var _rowComp2 = _interopRequireDefault(_rowComp);

var _RowCompBody = require('./RowCompBody');

var _RowCompBody2 = _interopRequireDefault(_RowCompBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = 'ic-text-label';

function TextLabel(_ref) {
    var className = _ref.className,
        children = _ref.children,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children']);

    var rootClassName = (0, _classnames2.default)(className, COMPONENT_NAME);

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rootClassName }, otherProps),
        _react2.default.createElement(
            _RowCompBody2.default,
            null,
            children
        )
    );
}

exports.PureTextLabel = TextLabel;
exports.default = (0, _rowComp2.default)()(TextLabel);