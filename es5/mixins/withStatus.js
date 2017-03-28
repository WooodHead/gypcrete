'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withStatusPropTypes = exports.statusPropTypes = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getComponentName = require('../utils/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _StatusIcon = require('../StatusIcon');

var _StatusIcon2 = _interopRequireDefault(_StatusIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statusPropTypes = exports.statusPropTypes = {
    status: _react.PropTypes.oneOf((0, _values2.default)(_StatusIcon.STATUS_CODE)),
    statusOptions: _react.PropTypes.object,
    errorMsg: _react.PropTypes.string
};

var withStatusPropTypes = exports.withStatusPropTypes = {
    statusIcon: _react.PropTypes.node,
    errorMsg: _react.PropTypes.string
};

var withStatus = function withStatus() {
    var defaultOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (WrappedComponent) {
        var componentName = (0, _getComponentName2.default)(WrappedComponent);

        function WithStatus(props, context) {
            var status = context.status,
                _context$statusOption = context.statusOptions,
                statusOptions = _context$statusOption === undefined ? {} : _context$statusOption,
                errorMsg = context.errorMsg;


            var statusIcon = status && _react2.default.createElement(_StatusIcon2.default, (0, _extends3.default)({
                status: status
            }, defaultOptions, statusOptions));

            return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, props, {
                statusIcon: statusIcon,
                errorMsg: errorMsg }));
        }
        WithStatus.displayName = 'withStatus(' + componentName + ')';

        WithStatus.contextTypes = (0, _extends3.default)({}, statusPropTypes);

        return WithStatus;
    };
};

exports.default = withStatus;