import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import EnhancedPropTypes from './utils/enhancedPropTypes';
import icBEM from './utils/icBEM';

import Button, { COMPONENT_NAME } from './Button';
import IconLayout from './IconLayout';

var rootClass = icBEM(COMPONENT_NAME).modifier('icon-only').toString({ stripBlock: true });

function IconButton(_ref) {
    var icon = _ref.icon,
        color = _ref.color,
        solid = _ref.solid,
        buttonProps = _objectWithoutProperties(_ref, ['icon', 'color', 'solid']);

    return React.createElement(
        Button,
        _extends({ className: rootClass }, buttonProps),
        React.createElement(IconLayout, { icon: icon })
    );
}

IconButton.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    color: EnhancedPropTypes.isEmpty,
    solid: EnhancedPropTypes.isEmpty
};

IconButton.defaultProps = {
    color: undefined,
    solid: undefined
};

export default IconButton;