'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureText = exports.TEXT_ALIGN = exports.BEM = exports.COMPONENT_NAME = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

var _withStatus = require('./mixins/withStatus');

var _withStatus2 = _interopRequireDefault(_withStatus);

var _BasicRow = require('./BasicRow');

var _BasicRow2 = _interopRequireDefault(_BasicRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('text');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

var BEM = exports.BEM = {
    root: ROOT_BEM,
    row: ROOT_BEM.element('row'),
    basic: ROOT_BEM.element('basic'),
    aside: ROOT_BEM.element('aside')
};

var LEFT = 'left';
var CENTER = 'center';
var RIGHT = 'right';
var TEXT_ALIGN = exports.TEXT_ALIGN = { LEFT: LEFT, CENTER: CENTER, RIGHT: RIGHT };

var Text = function (_PureComponent) {
    (0, _inherits3.default)(Text, _PureComponent);

    function Text() {
        (0, _classCallCheck3.default)(this, Text);
        return (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).apply(this, arguments));
    }

    (0, _createClass3.default)(Text, [{
        key: 'renderBasicRow',
        value: function renderBasicRow() {
            var _props = this.props,
                basicRow = _props.basicRow,
                basic = _props.basic,
                tag = _props.tag,
                statusIcon = _props.statusIcon;

            var basicRowProps = { basic: basic, tag: tag, statusIcon: statusIcon };

            if (basicRow && _react2.default.isValidElement(basicRow)) {
                return _react2.default.cloneElement(basicRow, basicRowProps);
            }

            return null;
        }
    }, {
        key: 'renderAsideRow',
        value: function renderAsideRow() {
            var _props2 = this.props,
                aside = _props2.aside,
                errorMsg = _props2.errorMsg;

            var displayText = errorMsg || aside;

            if (!displayText) {
                return null;
            }

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(BEM.row.toString(), BEM.aside.toString()) },
                displayText
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                align = _props3.align,
                noGrow = _props3.noGrow,
                className = _props3.className;


            var bemClass = BEM.root.modifier(align).modifier('no-grow', noGrow);

            var rootClassName = (0, _classnames2.default)(bemClass.toString(), className);

            return _react2.default.createElement(
                'div',
                { className: rootClassName },
                this.renderBasicRow(),
                this.renderAsideRow()
            );
        }
    }]);
    return Text;
}(_react.PureComponent);

Text.propTypes = (0, _extends3.default)({
    align: _propTypes2.default.oneOf((0, _values2.default)(TEXT_ALIGN)),
    aside: _propTypes2.default.node,
    basicRow: _propTypes2.default.element,
    noGrow: _propTypes2.default.bool

}, _withStatus.withStatusPropTypes, _BasicRow2.default.propTypes);
Text.defaultProps = (0, _extends3.default)({
    align: LEFT,
    aside: undefined,
    basicRow: _react2.default.createElement(_BasicRow2.default, {
        className: (0, _classnames2.default)(BEM.row.toString(), BEM.basic.toString()) }),
    noGrow: false,
    errorMsg: undefined,
    statusIcon: undefined
}, _BasicRow2.default.defaultProps);
exports.default = (0, _withStatus2.default)()(Text);
exports.PureText = Text;