'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureIconLayout = exports.COMPONENT_NAME = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStatus = require('./mixins/withStatus');

var _withStatus2 = _interopRequireDefault(_withStatus);

var _wrapIfNotElement = require('./utils/wrapIfNotElement');

var _wrapIfNotElement2 = _interopRequireDefault(_wrapIfNotElement);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _StatusIcon = require('./StatusIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = 'ic-iconlayout';

function IconLayout(_ref) {
    var icon = _ref.icon,
        statusIcon = _ref.statusIcon,
        errorMsg = _ref.errorMsg;

    var iconElement = (0, _wrapIfNotElement2.default)(icon, { with: _Icon2.default, via: 'type' });

    return _react2.default.createElement(
        'span',
        { className: COMPONENT_NAME },
        iconElement,
        errorMsg,
        statusIcon
    );
}

IconLayout.propTypes = (0, _extends3.default)({
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]).isRequired

}, _withStatus.withStatusPropTypes);

exports.default = (0, _withStatus2.default)({ position: _StatusIcon.STATUS_POSITION.CORNER })(IconLayout);
exports.PureIconLayout = IconLayout;