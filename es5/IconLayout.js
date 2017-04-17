'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureIconLayout = exports.COMPONENT_NAME = undefined;

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

var _withStatus = require('./mixins/withStatus');

var _withStatus2 = _interopRequireDefault(_withStatus);

var _wrapIfNotElement = require('./utils/wrapIfNotElement');

var _wrapIfNotElement2 = _interopRequireDefault(_wrapIfNotElement);

var _AnchoredTooltip = require('./AnchoredTooltip');

var _AnchoredTooltip2 = _interopRequireDefault(_AnchoredTooltip);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _StatusIcon = require('./StatusIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = 'ic-iconlayout';
var IconLayout = function (_PureComponent) {
    (0, _inherits3.default)(IconLayout, _PureComponent);

    function IconLayout() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, IconLayout);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconLayout.__proto__ || (0, _getPrototypeOf2.default)(IconLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showTooltip: false
        }, _this.handleMouseEnter = function () {
            _this.setState({ showTooltip: true });
        }, _this.handleMouseLeave = function () {
            _this.setState({ showTooltip: false });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(IconLayout, [{
        key: 'renderTooltip',
        value: function renderTooltip() {
            var errorMsg = this.props.errorMsg;


            if (!errorMsg) {
                return null;
            }

            return _react2.default.createElement(
                _AnchoredTooltip2.default,
                {
                    anchor: this.nodeRef,
                    style: { pointerEvents: 'none' } },
                this.props.errorMsg
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                icon = _props.icon,
                statusIcon = _props.statusIcon;
            var showTooltip = this.state.showTooltip;

            var iconElement = (0, _wrapIfNotElement2.default)(icon, { with: _Icon2.default, via: 'type' });

            return _react2.default.createElement(
                'span',
                {
                    ref: function ref(_ref2) {
                        _this2.nodeRef = _ref2;
                    },
                    className: COMPONENT_NAME,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave },
                iconElement,
                showTooltip && this.renderTooltip(),
                statusIcon
            );
        }
    }]);
    return IconLayout;
}(_react.PureComponent);

IconLayout.propTypes = (0, _extends3.default)({
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]).isRequired

}, _withStatus.withStatusPropTypes);
exports.default = (0, _withStatus2.default)({ position: _StatusIcon.STATUS_POSITION.CORNER })(IconLayout);
exports.PureIconLayout = IconLayout;