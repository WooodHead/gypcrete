import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';

import React from 'react';
import classNames from 'classnames';


import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';

export var COMPONENT_NAME = prefixClass('header-row');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    left: ROOT_BEM.element('left'),
    center: ROOT_BEM.element('center'),
    right: ROOT_BEM.element('right')
};

function HeaderRow(_ref) {
    var left = _ref.left,
        center = _ref.center,
        right = _ref.right,
        className = _ref.className,
        otherProps = _objectWithoutProperties(_ref, ['left', 'center', 'right', 'className']);

    var rootClassName = classNames(BEM.root.toString(), className);

    return React.createElement(
        'div',
        _extends({ className: rootClassName }, otherProps),
        React.createElement(
            'div',
            { className: BEM.left },
            left
        ),
        React.createElement(
            'div',
            { className: BEM.center },
            center
        ),
        React.createElement(
            'div',
            { className: BEM.right },
            right
        )
    );
}

HeaderRow.defaultProps = {
    left: undefined,
    center: undefined,
    right: undefined
};

export default HeaderRow;