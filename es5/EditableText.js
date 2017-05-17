'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureEditableText = exports.BEM = exports.COMPONENT_NAME = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _withStatus = require('./mixins/withStatus');

var _withStatus2 = _interopRequireDefault(_withStatus);

var _BasicRow = require('./BasicRow');

var _BasicRow2 = _interopRequireDefault(_BasicRow);

var _Text = require('./Text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('editable-text');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    basicRow: ROOT_BEM.element('basic-row'),
    basicLabel: ROOT_BEM.element('basic-label')
};

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
            currentValue: _this.props.value || _this.props.defaultValue || '',
            focused: false
        }, _this.handleInputFocus = function (event) {
            _this.setState({ focused: true });
            _this.props.onFocus(event);
        }, _this.handleInputBlur = function (event) {
            _this.setState({ focused: false });
            _this.props.onBlur(event);
        }, _this.handleInputChange = function (event) {
            if (!_this.props.value) {
                _this.setState({ currentValue: event.target.value });
            }

            _this.props.onChange(event);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EditableText, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.props.value) {
                this.setState({ currentValue: nextProps.value });
            }
        }
    }, {
        key: 'renderBasicRow',
        value: function renderBasicRow() {
            var _this2 = this;

            var _props = this.props,
                placeholder = _props.placeholder,
                disabled = _props.disabled,
                extraInputProps = _props.input;


            var className = (0, _classnames2.default)(_Text.BEM.row.toString(), _Text.BEM.basic.toString(), BEM.basicRow.toString());

            return _react2.default.createElement(
                _BasicRow2.default,
                { basic: '', className: className },
                _react2.default.createElement('input', (0, _extends3.default)({
                    ref: function ref(_ref2) {
                        _this2.inputNode = _ref2;
                    },
                    type: 'text',
                    className: BEM.input,
                    value: this.state.currentValue,
                    placeholder: placeholder,
                    disabled: disabled,
                    onFocus: this.handleInputFocus,
                    onBlur: this.handleInputBlur,
                    onChange: this.handleInputChange
                }, extraInputProps))
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                value = _props2.value,
                defaultValue = _props2.defaultValue,
                placeholder = _props2.placeholder,
                disabled = _props2.disabled,
                onChange = _props2.onChange,
                input = _props2.input,
                statusIcon = _props2.statusIcon,
                errorMsg = _props2.errorMsg,
                className = _props2.className,
                textProps = (0, _objectWithoutProperties3.default)(_props2, ['value', 'defaultValue', 'placeholder', 'disabled', 'onChange', 'input', 'statusIcon', 'errorMsg', 'className']);
            var _state = this.state,
                currentValue = _state.currentValue,
                focused = _state.focused;


            var bemClass = BEM.root.modifier('empty', !currentValue).modifier('focused', focused);

            var rootClassName = (0, _classnames2.default)('' + bemClass, className);

            var basicLabel = _react2.default.createElement(
                'span',
                { className: BEM.basicLabel },
                currentValue || placeholder
            );

            var statusProps = focused ? {} : { statusIcon: statusIcon, errorMsg: errorMsg };

            return _react2.default.createElement(_Text.PureText, (0, _extends3.default)({
                className: rootClassName,
                basic: basicLabel,
                basicRow: this.renderBasicRow()
            }, statusProps, textProps));
        }
    }]);
    return EditableText;
}(_react.PureComponent);

EditableText.propTypes = {
    value: _propTypes2.default.string,
    defaultValue: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,

    input: _propTypes2.default.object,
    errorMsg: _propTypes2.default.string,
    statusIcon: _propTypes2.default.node
};
EditableText.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    placeholder: 'Unset',
    disabled: false,
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onChange: function onChange() {},
    input: {},
    errorMsg: undefined,
    statusIcon: undefined
};
exports.default = (0, _withStatus2.default)()(EditableText);
exports.PureEditableText = EditableText;