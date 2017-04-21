import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';


export var COMPONENT_NAME = prefixClass('tooltip');
var ROOT_BEM = icBEM(COMPONENT_NAME);
var BEM = {
    root: ROOT_BEM,
    arrow: ROOT_BEM.element('arrow')
};

var TOP = 'top';
var BOTTOM = 'bottom';
export var TOOLTIP_PLACEMENT = { TOP: TOP, BOTTOM: BOTTOM };

function Tooltip(_ref) {
    var placement = _ref.placement,
        arrowStyle = _ref.arrowStyle,
        className = _ref.className,
        otherProps = _objectWithoutProperties(_ref, ['placement', 'arrowStyle', 'className']);

    var bemClass = BEM.root.modifier(placement);
    var rootClassName = classNames(className, '' + bemClass);

    return React.createElement(
        'span',
        _extends({ className: rootClassName }, otherProps),
        'content',
        React.createElement('span', { className: BEM.arrow, style: arrowStyle })
    );
}

Tooltip.propTypes = {
    placement: PropTypes.oneOf(_Object$values(TOOLTIP_PLACEMENT)),
    arrowStyle: PropTypes.objectOf(PropTypes.number)
};

Tooltip.defaultProps = {
    placement: TOP,
    arrowStyle: {}
};

export default Tooltip;