import React from 'react';
import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';


var COMPONENT_NAME = prefixClass('text-ellipsis');
var ROOT_BEM = icBEM(COMPONENT_NAME);

function TextEllipsis(_ref) {
    var children = _ref.children;

    return React.createElement(
        'div',
        { className: ROOT_BEM, title: children },
        children
    );
}

export default TextEllipsis;