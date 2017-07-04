'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ROW_INPUT_TAGS = exports.BEM = exports.COMPONENT_NAME = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _BasicRow = require('./BasicRow');

var _BasicRow2 = _interopRequireDefault(_BasicRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('editable-basic-row');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);

var BEM = exports.BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    basicLabel: ROOT_BEM.element('basic-label')
};

var TAG_INPUT = 'input';
var TAG_TEXTAREA = 'textarea';
var ROW_INPUT_TAGS = exports.ROW_INPUT_TAGS = {
    INPUT: TAG_INPUT,
    TEXTAREA: TAG_TEXTAREA
};

var EditableBasicRow = function (_PureComponent) {
    (0, _inherits3.default)(EditableBasicRow, _PureComponent);

    function EditableBasicRow() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EditableBasicRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditableBasicRow.__proto__ || (0, _getPrototypeOf2.default)(EditableBasicRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
                _this.setState({ currentValue: event.currentTarget.value });
            }

            _this.props.onChange(event);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EditableBasicRow, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.props.value) {
                this.setState({ currentValue: nextProps.value });
            }

            if (this.inputNode && nextProps.status !== this.props.status) {
                this.inputNode.blur();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                InputTag = _props.inputTag,
                value = _props.value,
                defaultValue = _props.defaultValue,
                readOnly = _props.readOnly,
                disabled = _props.disabled,
                status = _props.status,
                placeholder = _props.placeholder,
                onChange = _props.onChange,
                onFocus = _props.onFocus,
                onBlur = _props.onBlur,
                inputProps = _props.input,
                className = _props.className,
                rowProps = (0, _objectWithoutProperties3.default)(_props, ['inputTag', 'value', 'defaultValue', 'readOnly', 'disabled', 'status', 'placeholder', 'onChange', 'onFocus', 'onBlur', 'input', 'className']);
            var _state = this.state,
                currentValue = _state.currentValue,
                focused = _state.focused;


            var bemClass = BEM.root.modifier('empty', !currentValue).modifier('focused', focused).modifier('disabled', disabled);
            var rootClassName = (0, _classnames2.default)(bemClass.toString(), className);

            var inputType = InputTag === TAG_INPUT ? 'text' : undefined;
            var inputTabIndex = readOnly || disabled ? -1 : undefined;

            var basicLabel = _react2.default.createElement(
                'span',
                { className: BEM.basicLabel },
                currentValue || placeholder,
                InputTag === TAG_TEXTAREA && '\n'
            );

            return _react2.default.createElement(
                _BasicRow2.default,
                (0, _extends3.default)({}, rowProps, {
                    basic: basicLabel,
                    className: rootClassName }),
                _react2.default.createElement(InputTag, (0, _extends3.default)({
                    ref: function ref(_ref2) {
                        _this2.inputNode = _ref2;
                    },
                    type: inputType,
                    value: currentValue,
                    placeholder: placeholder,
                    className: BEM.input.toString(),
                    readOnly: readOnly,
                    disabled: disabled,
                    tabIndex: inputTabIndex,
                    onChange: this.handleInputChange,
                    onFocus: this.handleInputFocus,
                    onBlur: this.handleInputBlur
                }, inputProps))
            );
        }
    }]);
    return EditableBasicRow;
}(_react.PureComponent);

EditableBasicRow.propTypes = {
    inputTag: _propTypes2.default.oneOf((0, _values2.default)(ROW_INPUT_TAGS)),
    value: _propTypes2.default.string,
    defaultValue: _propTypes2.default.string,
    readOnly: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    status: _propTypes2.default.string,

    placeholder: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,

    input: _propTypes2.default.object };
EditableBasicRow.defaultProps = {
    inputTag: TAG_INPUT,
    value: undefined,
    defaultValue: undefined,
    readOnly: false,
    disabled: false,
    status: undefined,
    placeholder: 'Unset',
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    input: {}
};
exports.default = EditableBasicRow;