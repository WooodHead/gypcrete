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


import SwitchIcon from './SwitchIcon';
import IconLayout from './IconLayout';

export var COMPONENT_NAME = prefixClass('switch');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    button: ROOT_BEM.element('button'),
    iconWrapper: ROOT_BEM.element('icon-wrapper')
};

var Switch = function (_PureComponent) {
    _inherits(Switch, _PureComponent);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || _Object$getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'renderSwitchButton',
        value: function renderSwitchButton(inputProps) {
            var _this2 = this;

            var button = React.createElement(SwitchIcon, null);

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
                React.createElement(IconLayout, { icon: button, tooltip: false })
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
                otherProps = _objectWithoutProperties(_props, ['input', 'checked', 'defaultChecked', 'disabled', 'onChange', 'className', 'children']);

            var rootClassName = classNames(className, '' + BEM.root);
            var inputProps = _extends({
                checked: checked,
                defaultChecked: defaultChecked,
                disabled: disabled,
                onChange: onChange
            }, input);

            return React.createElement(
                'div',
                _extends({ className: rootClassName }, otherProps),
                this.renderSwitchButton(inputProps),
                children
            );
        }
    }]);

    return Switch;
}(PureComponent);

Switch.propTypes = {
    input: PropTypes.object,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,

    disabled: PropTypes.bool,
    onChange: PropTypes.func
};
Switch.defaultProps = {
    input: {},
    checked: undefined,
    defaultChecked: undefined,

    disabled: false,
    onChange: undefined
};


export default rowComp({ defaultAlign: 'reverse' })(Switch);
export { Switch as PureSwitch };