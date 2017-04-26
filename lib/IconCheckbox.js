import _extends from 'babel-runtime/helpers/extends';
import React from 'react';

import IconLayout from './IconLayout';
import Checkbox, { CHECKBOX_BUTTON } from './Checkbox';

function IconCheckbox(props) {
    var buttonWithStatus = React.createElement(IconLayout, { icon: CHECKBOX_BUTTON });

    return React.createElement(
        Checkbox,
        _extends({
            minified: true,
            overrideButton: buttonWithStatus
        }, props),
        React.createElement('span', null),
        ' '
    );
}

export default IconCheckbox;