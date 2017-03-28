'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rowComp = require('./mixins/rowComp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RowCompBody(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: _rowComp.ROW_COMP_BODY },
        children
    );
}

exports.default = RowCompBody;