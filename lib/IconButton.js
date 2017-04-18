import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';

import icBEM from './utils/icBEM';

import Button, { COMPONENT_NAME } from './Button';
import IconLayout from './IconLayout';

var rootClass = icBEM(COMPONENT_NAME).modifier('icon-only').toString({ stripBlock: true });

function IconButton(_ref) {
    var icon = _ref.icon,
        otherProps = _objectWithoutProperties(_ref, ['icon']);

    return React.createElement(
        Button,
        _extends({ className: rootClass }, otherProps),
        React.createElement(IconLayout, { icon: icon })
    );
}

IconButton.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default IconButton;