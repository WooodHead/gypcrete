'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PureSwitch = exports.BEM = exports.COMPONENT_NAME = undefined;

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

var _SwitchIcon = require('./SwitchIcon');

var _SwitchIcon2 = _interopRequireDefault(_SwitchIcon);

var _IconLayout = require('./IconLayout');

var _IconLayout2 = _interopRequireDefault(_IconLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('switch');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    button: ROOT_BEM.element('button'),
    iconWrapper: ROOT_BEM.element('icon-wrapper')
};

var Switch = function (_PureComponent) {
    (0, _inherits3.default)(Switch, _PureComponent);

    function Switch() {
        (0, _classCallCheck3.default)(this, Switch);
        return (0, _possibleConstructorReturn3.default)(this, (Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).apply(this, arguments));
    }

    (0, _createClass3.default)(Switch, [{
        key: 'renderSwitchButton',
        value: function renderSwitchButton() {
            var _this2 = this;

            var inputProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var button = _react2.default.createElement(_SwitchIcon2.default, null);

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
                _react2.default.createElement(_IconLayout2.default, { icon: button, tooltip: false })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                checked = _props.checked,
                defaultChecked = _props.defaultChecked,
                disabled = _props.disabled,
                onChange = _props.onChange,
                className = _props.className,
                children = _props.children,
                otherProps = (0, _objectWithoutProperties3.default)(_props, ['input', 'checked', 'defaultChecked', 'disabled', 'onChange', 'className', 'children']);


            var rootClassName = (0, _classnames2.default)(className, '' + BEM.root);
            var inputProps = (0, _extends3.default)({
                checked: checked,
                defaultChecked: defaultChecked,
                disabled: disabled,
                onChange: onChange
            }, input);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: rootClassName }, otherProps),
                this.renderSwitchButton(inputProps),
                children
            );
        }
    }]);
    return Switch;
}(_react.PureComponent);

Switch.propTypes = {
    input: _propTypes2.default.object,
    checked: _propTypes2.default.bool,
    defaultChecked: _propTypes2.default.bool,

    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func
};
Switch.defaultProps = {
    input: {},
    checked: undefined,
    defaultChecked: undefined,

    disabled: false,
    onChange: undefined
};
exports.default = (0, _rowComp2.default)({ defaultAlign: 'reverse' })(Switch);
exports.PureSwitch = Switch;