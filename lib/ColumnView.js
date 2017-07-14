import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';

export var COMPONENT_NAME = prefixClass('column-view');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    header: ROOT_BEM.element('header'),
    body: ROOT_BEM.element('body'),
    footer: ROOT_BEM.element('footer')
};

export function ColumnPart(_ref) {
    var children = _ref.children,
        otherProps = _objectWithoutProperties(_ref, ['children']);

    if (!children) {
        return null;
    }

    return React.createElement(
        'div',
        otherProps,
        children
    );
}

function ColumnView(_ref2) {
    var header = _ref2.header,
        footer = _ref2.footer,
        className = _ref2.className,
        children = _ref2.children,
        wrapperProps = _objectWithoutProperties(_ref2, ['header', 'footer', 'className', 'children']);

    var rootClassName = classNames(BEM.root.toString(), className);

    return React.createElement(
        'div',
        _extends({ className: rootClassName }, wrapperProps),
        React.createElement(
            ColumnPart,
            { className: BEM.header.toString() },
            header
        ),
        React.createElement(
            'div',
            { className: BEM.body.toString() },
            children
        ),
        React.createElement(
            ColumnPart,
            { className: BEM.footer.toString() },
            footer
        )
    );
}

ColumnView.propTypes = {
    header: PropTypes.node,
    footer: PropTypes.node
};

ColumnView.defaultProps = {
    header: undefined,
    footer: undefined
};

export default ColumnView;