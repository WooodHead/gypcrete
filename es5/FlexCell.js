'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = (0, _prefixClass2.default)('flex-cell');
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
    shrink: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number]),
    grow: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number]),
    basis: _propTypes2.default.string
};

FlexCell.defaultProps = {
    shrink: false,
    grow: false,
    basis: 'auto'
};

exports.default = FlexCell;