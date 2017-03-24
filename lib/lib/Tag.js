import React from 'react';
import classNames from 'classnames';


import icBEM from './utils/icBEM';

var COMPONENT_NAME = 'ic-tag';
var ROOT_BEM = icBEM(COMPONENT_NAME);

function Tag(_ref) {
    var className = _ref.className,
        children = _ref.children;

    var rootClass = classNames('' + ROOT_BEM, className);

    return React.createElement(
        'span',
        { className: rootClass },
        children
    );
}

export default Tag;