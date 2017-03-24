'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexCell = require('../FlexCell');

var _FlexCell2 = _interopRequireDefault(_FlexCell);

var _Tag = require('../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _TextEllipsis = require('../TextEllipsis');

var _TextEllipsis2 = _interopRequireDefault(_TextEllipsis);

var _wrapIfNotElement = require('../utils/wrapIfNotElement');

var _wrapIfNotElement2 = _interopRequireDefault(_wrapIfNotElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BasicRow(_ref) {
    var basic = _ref.basic,
        tag = _ref.tag,
        stateIcon = _ref.stateIcon,
        otherProps = (0, _objectWithoutProperties3.default)(_ref, ['basic', 'tag', 'stateIcon']);

    if (!basic) return null;

    return _react2.default.createElement(
        'div',
        otherProps,
        _react2.default.createElement(
            _FlexCell2.default,
            { shrink: true },
            _react2.default.createElement(
                _TextEllipsis2.default,
                null,
                basic
            )
        ),
        tag && (0, _wrapIfNotElement2.default)(tag, { with: _Tag2.default }),
        stateIcon && (0, _wrapIfNotElement2.default)(stateIcon, { with: 'span' })
    );
}

BasicRow.propTypes = {
    basic: _react.PropTypes.node.isRequired,
    tag: _react.PropTypes.node,
    stateIcon: _react.PropTypes.node
};

BasicRow.defaultProps = {
    basic: null,
    tag: null,
    stateIcon: null
};

exports.default = BasicRow;