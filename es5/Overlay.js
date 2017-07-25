'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HAS_OVERLAY_CLASS = exports.COMPONENT_NAME = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('overlay');
var HAS_OVERLAY_CLASS = exports.HAS_OVERLAY_CLASS = (0, _prefixClass2.default)('has-overlay');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

var Overlay = function (_PureComponent) {
    (0, _inherits3.default)(Overlay, _PureComponent);

    function Overlay() {
        (0, _classCallCheck3.default)(this, Overlay);
        return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || (0, _getPrototypeOf2.default)(Overlay)).apply(this, arguments));
    }

    (0, _createClass3.default)(Overlay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.body.classList.add(HAS_OVERLAY_CLASS);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.classList.remove(HAS_OVERLAY_CLASS);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                overlayProps = (0, _objectWithoutProperties3.default)(_props, ['className']);

            var rootClassName = (0, _classnames2.default)(className, '' + ROOT_BEM);

            return _react2.default.createElement('div', (0, _extends3.default)({
                className: rootClassName
            }, overlayProps));
        }
    }]);
    return Overlay;
}(_react.PureComponent);

exports.default = Overlay;