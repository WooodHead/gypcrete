import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import icBEM from './utils/icBEM';


var COMPONENT_NAME = 'ic-icon';
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

    var bemClass = ROOT_BEM.modifier(color, !!color).modifier('large', large).modifier('spin', spinning);

    var rootClassName = classNames(className, '' + bemClass, 'ic-icon-' + type);

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
    color: null,
    large: false,
    spinning: false
};

export default Icon;