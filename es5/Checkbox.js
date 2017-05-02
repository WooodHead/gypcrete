'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureCheckbox = exports.CHECKBOX_BUTTON = exports.BEM = exports.COMPONENT_NAME = undefined;

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

var _rowComp = require('./mixins/rowComp');

var _rowComp2 = _interopRequireDefault(_rowComp);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('checkbox');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    button: ROOT_BEM.element('button'),
    iconWrapper: ROOT_BEM.element('icon-wrapper')
};

var CHECKBOX_BUTTON = exports.CHECKBOX_BUTTON = _react2.default.createElement(_Icon2.default, { type: 'empty', className: '' + BEM.button });

var Checkbox = function (_PureComponent) {
    (0, _inherits3.default)(Checkbox, _PureComponent);

    function Checkbox() {
        (0, _classCallCheck3.default)(this, Checkbox);
        return (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).apply(this, arguments));
    }

    (0, _createClass3.default)(Checkbox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateInputIndeterminate();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.indeterminate !== this.props.indeterminate) {
                this.updateInputIndeterminate();
            }
        }
    }, {
        key: 'updateInputIndeterminate',
        value: function updateInputIndeterminate() {
            this.inputRef.indeterminate = this.props.indeterminate;
        }
    }, {
        key: 'renderCheckboxInput',
        value: function renderCheckboxInput(inputProps, overrideButton) {
            var _this2 = this;

            return _react2.default.createElement(
                'span',
                { className: BEM.iconWrapper },
                _react2.default.createElement('input', (0, _extends3.default)({
                    ref: function ref(_ref) {
                        _this2.inputRef = _ref;
                    },
                    type: 'checkbox',
                    className: BEM.input
                }, inputProps)),
                overrideButton || CHECKBOX_BUTTON
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                indeterminate = _props.indeterminate,
                overrideButton = _props.overrideButton,
                checked = _props.checked,
                defaultChecked = _props.defaultChecked,
                disabled = _props.disabled,
                onChange = _props.onChange,
                className = _props.className,
                children = _props.children,
                otherProps = (0, _objectWithoutProperties3.default)(_props, ['input', 'indeterminate', 'overrideButton', 'checked', 'defaultChecked', 'disabled', 'onChange', 'className', 'children']);


            var inputProps = (0, _extends3.default)({
                checked: checked,
                defaultChecked: defaultChecked,
                disabled: disabled,
                onChange: onChange
            }, input);

            var rootClassName = (0, _classnames2.default)(className, COMPONENT_NAME);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: rootClassName }, otherProps),
                this.renderCheckboxInput(inputProps, overrideButton),
                children
            );
        }
    }]);
    return Checkbox;
}(_react.PureComponent);

Checkbox.propTypes = {
    input: _propTypes2.default.object,
    indeterminate: _propTypes2.default.bool,
    overrideButton: _propTypes2.default.element,

    checked: _propTypes2.default.bool,
    defaultChecked: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
Checkbox.defaultProps = {
    input: {},
    indeterminate: false,
    overrideButton: null,

    checked: undefined,
    defaultChecked: undefined,
    disabled: false,
    onChange: undefined
};
exports.default = (0, _rowComp2.default)()(Checkbox);
exports.PureCheckbox = Checkbox;