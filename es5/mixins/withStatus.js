'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withStatusPropTypes = exports.statusPropTypes = exports.STATUS_CODE = undefined;

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

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getComponentName = require('../utils/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _StatusIcon = require('../StatusIcon');

var _StatusIcon2 = _interopRequireDefault(_StatusIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.STATUS_CODE = _StatusIcon.STATUS_CODE;
var statusPropTypes = exports.statusPropTypes = {
    status: _propTypes2.default.oneOf((0, _values2.default)(_StatusIcon.STATUS_CODE)),
    statusOptions: _propTypes2.default.object,
    errorMsg: _propTypes2.default.string
};

var withStatusPropTypes = exports.withStatusPropTypes = {
    status: statusPropTypes.status,
    statusIcon: _propTypes2.default.node,
    errorMsg: statusPropTypes.errorMsg
};

var withStatus = function withStatus() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref$withRef = _ref.withRef,
        withRef = _ref$withRef === undefined ? false : _ref$withRef,
        _ref$withRawStatus = _ref.withRawStatus,
        withRawStatus = _ref$withRawStatus === undefined ? false : _ref$withRawStatus,
        defaultStatusOptions = (0, _objectWithoutProperties3.default)(_ref, ['withRef', 'withRawStatus']);
    return function (WrappedComponent) {
        var componentName = (0, _getComponentName2.default)(WrappedComponent);

        var WithStatus = function (_Component) {
            (0, _inherits3.default)(WithStatus, _Component);

            function WithStatus() {
                (0, _classCallCheck3.default)(this, WithStatus);
                return (0, _possibleConstructorReturn3.default)(this, (WithStatus.__proto__ || (0, _getPrototypeOf2.default)(WithStatus)).apply(this, arguments));
            }

            (0, _createClass3.default)(WithStatus, [{
                key: 'getRenderedComponent',
                value: function getRenderedComponent() {
                    return this.renderedComponentRef;
                }
            }, {
                key: 'getOptionalProps',
                value: function getOptionalProps() {
                    var props = {};

                    if (withRawStatus) {
                        props.status = this.context.status;
                    }

                    return props;
                }
            }, {
                key: 'render',
                value: function render() {
                    var _this2 = this;

                    var _context = this.context,
                        status = _context.status,
                        _context$statusOption = _context.statusOptions,
                        statusOptions = _context$statusOption === undefined ? {} : _context$statusOption,
                        errorMsg = _context.errorMsg;


                    var statusIcon = status && _react2.default.createElement(_StatusIcon2.default, (0, _extends3.default)({
                        status: status
                    }, defaultStatusOptions, statusOptions));

                    var refProps = !withRef ? {} : {
                        ref: function ref(_ref2) {
                            _this2.renderedComponentRef = _ref2;
                        }
                    };
                    var optionalProps = this.getOptionalProps();

                    return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, refProps, this.props, optionalProps, {
                        statusIcon: statusIcon,
                        errorMsg: errorMsg }));
                }
            }]);
            return WithStatus;
        }(_react.Component);

        WithStatus.displayName = 'withStatus(' + componentName + ')';
        WithStatus.contextTypes = (0, _extends3.default)({}, statusPropTypes);


        return WithStatus;
    };
};

exports.default = withStatus;