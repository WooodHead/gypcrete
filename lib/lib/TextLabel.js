import React from 'react';
import classNames from 'classnames';
import rowComp from './mixins/rowComp';


import RowCompBody from './RowCompBody';

export var COMPONENT_NAME = 'ic-text-label';

function TextLabel(_ref) {
    var className = _ref.className,
        children = _ref.children;

    var rootClassName = classNames(className, COMPONENT_NAME);

    return React.createElement(
        'div',
        { className: rootClassName },
        React.createElement(
            RowCompBody,
            null,
            children
        )
    );
}

// export for tests
export { TextLabel as PureTextLabel };

export default rowComp()(TextLabel);