'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.STATUS_POSITION = exports.STATUS_CODE = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING = 'loading';
var SUCCESS = 'success';
var ERROR = 'error';
var STATUS_CODE = exports.STATUS_CODE = { LOADING: LOADING, SUCCESS: SUCCESS, ERROR: ERROR };

var INLINE = 'inline';
var CORNER = 'corner';
var STATUS_POSITION = exports.STATUS_POSITION = { INLINE: INLINE, CORNER: CORNER };

var COMPONENT_NAME = (0, _prefixClass2.default)('status-icon');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

var ICON_HIDE_TIMEOUT = 2 * 1000;

var StatusIcon = function (_PureComponent) {
    (0, _inherits3.default)(StatusIcon, _PureComponent);

    function StatusIcon(props) {
        (0, _classCallCheck3.default)(this, StatusIcon);

        var _this = (0, _possibleConstructorReturn3.default)(this, (StatusIcon.__proto__ || (0, _getPrototypeOf2.default)(StatusIcon)).call(this, props));

        _this.state = {
            hideIcon: false
        };

        _this.hideIconTimeout = null;
        return _this;
    }

    (0, _createClass3.default)(StatusIcon, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.autoToggleStatusIcon();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.status !== this.props.status) {
                this.autoToggleStatusIcon(nextProps.status);
            }

            if (!nextProps.autohide && this.state.hideIcon) {
                this.setState({ hideIcon: false });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.hideIconTimeout);
        }
    }, {
        key: 'autoToggleStatusIcon',
        value: function autoToggleStatusIcon() {
            var _this2 = this;

            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.status;

            if (!this.props.autohide) {
                return;
            }

            if (status === SUCCESS) {
                this.hideIconTimeout = setTimeout(function () {
                    _this2.setState({ hideIcon: true });
                    _this2.hideIconTimeout = null;
                }, ICON_HIDE_TIMEOUT);

                return;
            }

            clearTimeout(this.hideIconTimeout);
            this.setState({ hideIcon: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var rootClassName = ROOT_BEM.modifier(this.props.position);
            var icon = null;

            switch (this.props.status) {
                case LOADING:
                    icon = _react2.default.createElement(_Icon2.default, { type: 'inline-loading', color: 'gray', spinning: true });
                    break;
                case SUCCESS:
                    if (!this.state.hideIcon) {
                        icon = _react2.default.createElement(_Icon2.default, { type: 'inline-success', color: 'blue' });
                    }
                    break;
                case ERROR:
                    icon = _react2.default.createElement(_Icon2.default, { type: 'inline-error', color: 'red' });
                    break;
                default:
                    break;
            }

            return icon && _react2.default.createElement(
                'span',
                { className: rootClassName },
                icon
            );
        }
    }]);
    return StatusIcon;
}(_react.PureComponent);

StatusIcon.propTypes = {
    status: _propTypes2.default.oneOf((0, _values2.default)(STATUS_CODE)),
    position: _propTypes2.default.oneOf((0, _values2.default)(STATUS_POSITION)),
    autohide: _propTypes2.default.bool
};
StatusIcon.defaultProps = {
    status: undefined,
    position: INLINE,
    autohide: true
};
exports.default = StatusIcon;