'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = 'ic-flex-cell';
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

function FlexCell(_ref) {
    var shrink = _ref.shrink,
        grow = _ref.grow,
        basis = _ref.basis,
        children = _ref.children;

    var flexStyles = {
        flexShrink: Number(shrink),
        flexGrow: Number(grow),
        flexBasis: basis
    };

    return _react2.default.createElement(
        'div',
        { className: ROOT_BEM, style: flexStyles },
        children
    );
}

FlexCell.propTypes = {
    shrink: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),
    grow: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),
    basis: _react.PropTypes.string
};

FlexCell.defaultProps = {
    shrink: false,
    grow: false,
    basis: 'auto'
};

exports.default = FlexCell;