'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FlexCell = require('./FlexCell');

var _FlexCell2 = _interopRequireDefault(_FlexCell);

var _Tag = require('./Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _wrapIfNotElement = require('./utils/wrapIfNotElement');

var _wrapIfNotElement2 = _interopRequireDefault(_wrapIfNotElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BasicRow(_ref) {
    var basic = _ref.basic,
        tag = _ref.tag,
        statusIcon = _ref.statusIcon,
        children = _ref.children,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['basic', 'tag', 'statusIcon', 'children']);

    if (!basic) {
        return null;
    }

    return _react2.default.createElement(
        'div',
        otherProps,
        _react2.default.createElement(
            _FlexCell2.default,
            { shrink: true },
            basic
        ),
        tag && (0, _wrapIfNotElement2.default)(tag, { with: _Tag2.default }),
        statusIcon && (0, _wrapIfNotElement2.default)(statusIcon, { with: 'span' }),
        children
    );
}

BasicRow.propTypes = {
    basic: _propTypes2.default.node,
    tag: _propTypes2.default.node,
    statusIcon: _propTypes2.default.node
};

BasicRow.defaultProps = {
    basic: undefined,
    tag: undefined,
    statusIcon: undefined
};

exports.default = BasicRow;