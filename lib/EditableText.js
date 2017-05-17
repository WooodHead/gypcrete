import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';
import withStatus from './mixins/withStatus';


import BasicRow from './BasicRow';
import { PureText, BEM as TEXT_BEM } from './Text';

export var COMPONENT_NAME = prefixClass('editable-text');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    basicRow: ROOT_BEM.element('basic-row'),
    basicLabel: ROOT_BEM.element('basic-label')
};

var EditableText = function (_PureComponent) {
    _inherits(EditableText, _PureComponent);

    function EditableText() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EditableText);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableText.__proto__ || _Object$getPrototypeOf(EditableText)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EditableText, [{
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


            var className = classNames(TEXT_BEM.row.toString(), TEXT_BEM.basic.toString(), BEM.basicRow.toString());

            return React.createElement(
                BasicRow,
                { basic: '', className: className },
                React.createElement('input', _extends({
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
                textProps = _objectWithoutProperties(_props2, ['value', 'defaultValue', 'placeholder', 'disabled', 'onChange', 'input', 'statusIcon', 'errorMsg', 'className']);

            var _state = this.state,
                currentValue = _state.currentValue,
                focused = _state.focused;


            var bemClass = BEM.root.modifier('empty', !currentValue).modifier('focused', focused);

            var rootClassName = classNames('' + bemClass, className);

            var basicLabel = React.createElement(
                'span',
                { className: BEM.basicLabel },
                currentValue || placeholder
            );

            var statusProps = focused ? {} : { statusIcon: statusIcon, errorMsg: errorMsg };

            return React.createElement(PureText, _extends({
                className: rootClassName,
                basic: basicLabel,
                basicRow: this.renderBasicRow()
            }, statusProps, textProps));
        }
    }]);

    return EditableText;
}(PureComponent);

EditableText.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,

    input: PropTypes.object,
    errorMsg: PropTypes.string,
    statusIcon: PropTypes.node
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


export default withStatus()(EditableText);
export { EditableText as PureEditableText };