import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import prefixClass from './utils/prefixClass';
import rowComp, { getTextLayoutProps, ROW_COMP_ALIGN } from './mixins/rowComp';

import EditableText from './EditableText';

export var COMPONENT_NAME = prefixClass('text-input');

function TextInput(props, _ref) {
    var align = _ref.align;

    var wrapperProps = props.wrapperProps,
        className = props.className,
        children = props.children,
        editableTextProps = _objectWithoutProperties(props, ['wrapperProps', 'className', 'children']);

    var rootClassName = classNames(className, COMPONENT_NAME);
    var textLayoutProps = getTextLayoutProps(align, false);

    return React.createElement(
        'div',
        _extends({ className: rootClassName }, wrapperProps),
        React.createElement(EditableText, _extends({}, textLayoutProps, editableTextProps))
    );
}

TextInput.propTypes = {
    wrapperProps: PropTypes.object };

TextInput.defaultProps = {
    wrapperProps: {}
};

TextInput.contextTypes = {
    align: PropTypes.oneOf(_Object$values(ROW_COMP_ALIGN))
};

export { TextInput as PureTextInput };
export default rowComp({ defaultAlign: ROW_COMP_ALIGN.REVERSE })(TextInput);