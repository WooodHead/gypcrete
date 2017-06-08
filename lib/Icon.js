import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';


var COMPONENT_NAME = prefixClass('icon');
var ROOT_BEM = icBEM(COMPONENT_NAME);

var GRAY = 'gray';
var BLUE = 'blue';
var RED = 'red';
export var ICON_COLOR = { GRAY: GRAY, BLUE: BLUE, RED: RED };

function Icon(_ref) {
    var type = _ref.type,
        color = _ref.color,
        large = _ref.large,
        spinning = _ref.spinning,
        className = _ref.className,
        otherProps = _objectWithoutProperties(_ref, ['type', 'color', 'large', 'spinning', 'className']);

    var bemClass = ROOT_BEM.modifier('large', large).modifier('spin', spinning);

    if (color) {
        bemClass = bemClass.modifier(color);
    }

    var rootClassName = classNames(className, bemClass.toString(), 'gyp-icon-' + type);

    return React.createElement('span', _extends({
        className: rootClassName,
        role: 'presentation'
    }, otherProps));
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.oneOf(_Object$values(ICON_COLOR)),
    large: PropTypes.bool,
    spinning: PropTypes.bool
};

Icon.defaultProps = {
    color: undefined,
    large: false,
    spinning: false
};

export default Icon;