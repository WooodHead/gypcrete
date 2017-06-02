
import React from 'react';
import classNames from 'classnames';


import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';

var COMPONENT_NAME = prefixClass('tag');
var ROOT_BEM = icBEM(COMPONENT_NAME);

function Tag(_ref) {
    var className = _ref.className,
        children = _ref.children;

    var rootClass = classNames('' + ROOT_BEM.toString(), className);

    return React.createElement(
        'span',
        { className: rootClass },
        React.createElement(
            'span',
            null,
            children
        )
    );
}

export default Tag;