import React from 'react';
import icBEM from './utils/icBEM';


var COMPONENT_NAME = 'ic-text-ellipsis';
var ROOT_BEM = icBEM(COMPONENT_NAME);

function TextEllipsis(_ref) {
    var children = _ref.children;

    return React.createElement(
        'div',
        { className: ROOT_BEM },
        children
    );
}

export default TextEllipsis;