'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TEXT_ALIGN = exports.BEM = exports.ROOT_BEM = exports.COMPONENT_NAME = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icBEM = require('../utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _BasicRow = require('./BasicRow');

var _BasicRow2 = _interopRequireDefault(_BasicRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Text>
 * ======
 * Visual element to be used inside a Component.
 * Usually contains 2 lines, with **Basic text**, **Tag**, **State** at the first line
 * and **Aside text** at the second line.
 *
 * ┌╌╌╌╌╌╌╌╌╌╌╌┬╌╌╌┬╌╌╌╌╌┐
 * ╎Basic text ╎Tag╎State╎
 * ├╌╌╌╌╌╌╌╌╌╌╌┴╌╌╌┴╌╌╌╌╌┴╌╌╌┐
 * ╎Aside text               ╎
 * └╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┘
 */

var COMPONENT_NAME = exports.COMPONENT_NAME = 'ic-text';
var ROOT_BEM = exports.ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

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
                stateIcon = _props.stateIcon;

            var basicRowProps = { basic: basic, tag: tag, stateIcon: stateIcon };

            if (_react2.default.isValidElement(basicRow)) {
                // Inject { basic, tag, stateIcon } to passed-in custom row.
                return _react2.default.cloneElement(basicRow, basicRowProps);
            }

            // else return pre-configured row
            return _react2.default.createElement(_BasicRow2.default, (0, _extends3.default)({
                className: (0, _classnames2.default)('' + BEM.row, '' + BEM.basic)
            }, basicRowProps));
        }
    }, {
        key: 'renderAsideRow',
        value: function renderAsideRow() {
            if (!this.props.aside) return null;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('' + BEM.row, '' + BEM.aside) },
                this.props.aside
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var rootClassName = BEM.root.modifier(this.props.align);

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
    align: _react.PropTypes.oneOf((0, _values2.default)(TEXT_ALIGN)),
    aside: _react.PropTypes.node,
    basicRow: _react.PropTypes.element

}, _BasicRow2.default.propTypes);
Text.defaultProps = {
    align: LEFT,
    aside: null,
    basicRow: null
};
exports.default = Text;