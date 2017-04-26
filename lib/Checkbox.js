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
import rowComp from './mixins/rowComp';


import Icon from './Icon';
import RowCompBody from './RowCompBody';

export var COMPONENT_NAME = prefixClass('checkbox');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    button: ROOT_BEM.element('button'),
    iconWrapper: ROOT_BEM.element('icon-wrapper')
};

export var CHECKBOX_BUTTON = React.createElement(Icon, { type: 'empty', className: '' + BEM.button });

var Checkbox = function (_PureComponent) {
    _inherits(Checkbox, _PureComponent);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || _Object$getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    _createClass(Checkbox, [{
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

            return React.createElement(
                'span',
                { className: BEM.iconWrapper },
                React.createElement('input', _extends({
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
                otherProps = _objectWithoutProperties(_props, ['input', 'indeterminate', 'overrideButton', 'checked', 'defaultChecked', 'disabled', 'onChange', 'className', 'children']);

            var inputProps = _extends({
                checked: checked,
                defaultChecked: defaultChecked,
                disabled: disabled,
                onChange: onChange
            }, input);

            var rootClassName = classNames(className, COMPONENT_NAME);

            return React.createElement(
                'div',
                _extends({ className: rootClassName }, otherProps),
                React.createElement(
                    RowCompBody,
                    null,
                    this.renderCheckboxInput(inputProps, overrideButton),
                    children
                )
            );
        }
    }]);

    return Checkbox;
}(PureComponent);

Checkbox.propTypes = {
    input: PropTypes.object,
    indeterminate: PropTypes.bool,
    overrideButton: PropTypes.element,

    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
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


export default rowComp()(Checkbox);
export { Checkbox as PureCheckbox };