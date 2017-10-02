'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureEditableText = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStatus = require('./mixins/withStatus');

var _withStatus2 = _interopRequireDefault(_withStatus);

var _EditableBasicRow = require('./EditableBasicRow');

var _EditableBasicRow2 = _interopRequireDefault(_EditableBasicRow);

var _Text = require('./Text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditableText = function (_PureComponent) {
    (0, _inherits3.default)(EditableText, _PureComponent);

    function EditableText() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EditableText);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditableText.__proto__ || (0, _getPrototypeOf2.default)(EditableText)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            focused: false
        }, _this.handleInputFocus = function (event) {
            _this.setState({ focused: true });
            _this.props.onFocus(event);
        }, _this.handleInputBlur = function (event) {
            _this.setState({ focused: false });
            _this.props.onBlur(event);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EditableText, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                align = _props.align,
                noGrow = _props.noGrow,
                status = _props.status,
                statusIcon = _props.statusIcon,
                errorMsg = _props.errorMsg,
                className = _props.className,
                editableRowProps = (0, _objectWithoutProperties3.default)(_props, ['align', 'noGrow', 'status', 'statusIcon', 'errorMsg', 'className']);


            var textProps = { align: align, noGrow: noGrow };
            var statusProps = this.state.focused ? {} : { statusIcon: statusIcon, errorMsg: errorMsg };

            var basicRow = _react2.default.createElement(_EditableBasicRow2.default, (0, _extends3.default)({}, editableRowProps, {
                status: status,
                readOnly: status === _withStatus.STATUS_CODE.LOADING,
                onFocus: this.handleInputFocus,
                onBlur: this.handleInputBlur }));

            return _react2.default.createElement(_Text.PureText, (0, _extends3.default)({
                basicRow: basicRow
            }, textProps, statusProps));
        }
    }]);
    return EditableText;
}(_react.PureComponent);

EditableText.propTypes = (0, _extends3.default)({
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,

    align: _Text.PureText.propTypes.align,
    noGrow: _Text.PureText.propTypes.noGrow

}, _withStatus.withStatusPropTypes);
EditableText.defaultProps = {
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},

    align: _Text.PureText.defaultProps.align,
    noGrow: _Text.PureText.defaultProps.noGrow,
    status: undefined,
    statusIcon: undefined,
    errorMsg: undefined
};
exports.default = (0, _withStatus2.default)({ withRawStatus: true })(EditableText);
exports.PureEditableText = EditableText;