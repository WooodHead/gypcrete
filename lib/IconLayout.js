import _extends from 'babel-runtime/helpers/extends';
import React, { PropTypes } from 'react';
import withStatus, { withStatusPropTypes } from './mixins/withStatus';
import wrapIfNotElement from './utils/wrapIfNotElement';


import Icon from './Icon';

import { STATUS_POSITION } from './StatusIcon';

export var COMPONENT_NAME = 'ic-iconlayout';

function IconLayout(_ref) {
    var icon = _ref.icon,
        statusIcon = _ref.statusIcon,
        errorMsg = _ref.errorMsg;

    var iconElement = wrapIfNotElement(icon, { with: Icon, via: 'type' });

    return React.createElement(
        'span',
        { className: COMPONENT_NAME },
        iconElement,
        errorMsg,
        statusIcon
    );
}

IconLayout.propTypes = _extends({
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired

}, withStatusPropTypes);

export default withStatus({ position: STATUS_POSITION.CORNER })(IconLayout);
export { IconLayout as PureIconLayout };