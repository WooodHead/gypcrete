import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import classNames from 'classnames';
import prefixClass from './utils/prefixClass';
import rowComp from './mixins/rowComp';


export var COMPONENT_NAME = prefixClass('text-label');

function TextLabel(_ref) {
    var className = _ref.className,
        children = _ref.children,
        otherProps = _objectWithoutProperties(_ref, ['className', 'children']);

    var rootClassName = classNames(className, COMPONENT_NAME);

    return React.createElement(
        'div',
        _extends({ className: rootClassName }, otherProps),
        children
    );
}

export { TextLabel as PureTextLabel };

export default rowComp()(TextLabel);