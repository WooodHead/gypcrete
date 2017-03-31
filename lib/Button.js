import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import icBEM from './utils/icBEM';
import rowComp from './mixins/rowComp';


import RowCompBody from './RowCompBody';

export var COMPONENT_NAME = 'ic-button';
var ROOT_BEM = icBEM(COMPONENT_NAME);

var BLUE = 'blue';
var RED = 'red';
var WHITE = 'white';
var BLACK = 'black';
export var BUTTON_COLOR = { BLUE: BLUE, RED: RED, WHITE: WHITE, BLACK: BLACK };

function Button(_ref) {
    var color = _ref.color,
        solid = _ref.solid,
        className = _ref.className,
        children = _ref.children,
        otherProps = _objectWithoutProperties(_ref, ['color', 'solid', 'className', 'children']);

    var bemClass = ROOT_BEM.modifier(color).modifier('solid', solid);

    var rootClassName = classNames(className, '' + bemClass);

    return React.createElement(
        'button',
        _extends({ type: 'button', className: rootClassName }, otherProps),
        React.createElement(
            RowCompBody,
            null,
            children
        )
    );
}

Button.propTypes = {
    color: PropTypes.oneOf(_Object$values(BUTTON_COLOR)),
    solid: PropTypes.bool
};

Button.defaultProps = {
    color: BLUE,
    solid: false
};

export { Button as PureButton };

export default rowComp({ defaultMinified: true })(Button);