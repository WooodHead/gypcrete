import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import prefixClass from './utils/prefixClass';
import rowComp, { getTextLayoutProps, ROW_COMP_ALIGN } from './mixins/rowComp';


import EditableText, { PureEditableText } from './EditableText';

export var COMPONENT_NAME = prefixClass('text-input');

var filterOutStatusProps = function filterOutStatusProps(props) {
    var statusIcon = props.statusIcon,
        errorMsg = props.errorMsg,
        filteredProps = _objectWithoutProperties(props, ['statusIcon', 'errorMsg']);

    return filteredProps;
};

function TextInput(props, _ref) {
    var align = _ref.align;

    var onEditEnd = props.onEditEnd,
        value = props.value,
        defaultValue = props.defaultValue,
        placeholder = props.placeholder,
        disabled = props.disabled,
        onFocus = props.onFocus,
        onBlur = props.onBlur,
        onChange = props.onChange,
        onKeyDown = props.onKeyDown,
        input = props.input,
        className = props.className,
        otherProps = _objectWithoutProperties(props, ['onEditEnd', 'value', 'defaultValue', 'placeholder', 'disabled', 'onFocus', 'onBlur', 'onChange', 'onKeyDown', 'input', 'className']);

    var editableTextProps = {
        value: value,
        defaultValue: defaultValue,
        placeholder: placeholder,
        disabled: disabled,
        onFocus: onFocus,
        onBlur: onBlur,
        onChange: onChange,
        input: input
    };

    var rootClassName = classNames(className, COMPONENT_NAME);
    var textLayoutProps = getTextLayoutProps(align, false);

    return React.createElement(
        'div',
        _extends({ className: rootClassName }, otherProps),
        React.createElement(EditableText, _extends({}, editableTextProps, textLayoutProps))
    );
}

TextInput.propTypes = filterOutStatusProps(PureEditableText.propTypes);

TextInput.defaultProps = filterOutStatusProps(PureEditableText.defaultProps);

TextInput.contextTypes = {
    align: PropTypes.oneOf(_Object$values(ROW_COMP_ALIGN))
};

export { TextInput as PureTextInput };

export default rowComp({ defaultAlign: ROW_COMP_ALIGN.REVERSE })(TextInput);