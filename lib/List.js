import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';

export var COMPONENT_NAME = prefixClass('list');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    title: ROOT_BEM.element('title'),
    body: ROOT_BEM.element('body'),
    desc: ROOT_BEM.element('desc')
};

var NORMAL = 'normal';
var SETTING = 'setting';
var BUTTON = 'button';
var LIST_VARIANTS = [NORMAL, SETTING, BUTTON];

function List(_ref) {
    var variant = _ref.variant,
        title = _ref.title,
        desc = _ref.desc,
        className = _ref.className,
        children = _ref.children,
        otherProps = _objectWithoutProperties(_ref, ['variant', 'title', 'desc', 'className', 'children']);

    var bemClass = BEM.root.modifier(variant);
    var rootClassName = classNames(bemClass.toString(), className);

    var titleNode = React.createElement(
        'div',
        { className: BEM.title.toString() },
        title
    );
    var descNode = React.createElement(
        'div',
        { className: BEM.desc.toString() },
        desc
    );

    return React.createElement(
        'div',
        _extends({ className: rootClassName }, otherProps),
        title && titleNode,
        React.createElement(
            'ul',
            { className: BEM.body.toString() },
            children
        ),
        desc && descNode
    );
}

List.propTypes = {
    variant: PropTypes.oneOf(_Object$values(LIST_VARIANTS)),
    title: PropTypes.string,
    desc: PropTypes.node
};

List.defaultProps = {
    variant: NORMAL,
    title: undefined,
    desc: undefined
};

export default List;