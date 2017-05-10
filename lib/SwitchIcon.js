import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';


export var COMPONENT_NAME = prefixClass('switch-icon');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    inner: ROOT_BEM.element('inner')
};

var ON = 'on';
var OFF = 'off';
export var SWITCH_STATE = { ON: ON, OFF: OFF };

function SwitchIcon(_ref) {
    var state = _ref.state,
        className = _ref.className,
        otherProps = _objectWithoutProperties(_ref, ['state', 'className']);

    var bemClass = BEM.root.modifier(state);
    var rootClassName = classNames(className, '' + bemClass);

    return React.createElement(
        'span',
        _extends({ className: rootClassName }, otherProps),
        React.createElement('span', { className: BEM.inner })
    );
}

SwitchIcon.propTypes = {
    state: PropTypes.oneOf(_Object$values(SWITCH_STATE))
};

SwitchIcon.defaultProps = {
    state: OFF
};

export default SwitchIcon;