import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';

import React, { isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';

import Icon from './Icon';
import Overlay from './Overlay';
import escapable from './mixins/escapable';
import renderToLayer from './mixins/renderToLayer';

export var COMPONENT_NAME = prefixClass('popup');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    container: ROOT_BEM.element('container'),
    body: ROOT_BEM.element('body'),
    message: ROOT_BEM.element('message'),
    button: ROOT_BEM.element('button'),
    buttonsGroup: ROOT_BEM.element('buttons-group')
};

function renderPopupIcon(icon) {
    if (typeof icon === 'string') {
        return React.createElement(Icon, {
            large: true,
            color: 'blue',
            type: icon });
    }

    return icon;
}

function renderPopupMessage(message) {
    if (!message) {
        return null;
    }

    return React.createElement(
        'div',
        { className: BEM.message.toString() },
        message
    );
}

function renderPopupButtons(buttons) {
    if (!buttons || buttons.length === 0) {
        return null;
    }

    var popupButtons = buttons.map(function (button) {
        if (isValidElement(button)) {
            var buttonBemClass = BEM.button.toString();

            return cloneElement(button, {
                className: buttonBemClass,
                align: 'center',
                minified: false
            });
        }

        return button;
    });

    return React.createElement(
        'div',
        { className: BEM.buttonsGroup.toString() },
        popupButtons
    );
}

function Popup(_ref) {
    var icon = _ref.icon,
        message = _ref.message,
        buttons = _ref.buttons,
        className = _ref.className,
        children = _ref.children,
        popupProps = _objectWithoutProperties(_ref, ['icon', 'message', 'buttons', 'className', 'children']);

    var rootClassName = classNames(BEM.root.toString(), className);

    return React.createElement(
        'div',
        _extends({ className: rootClassName }, popupProps),
        React.createElement(Overlay, null),
        React.createElement(
            'div',
            { className: BEM.container.toString() },
            React.createElement(
                'div',
                { className: BEM.body.toString() },
                renderPopupIcon(icon),
                renderPopupMessage(message)
            ),
            renderPopupButtons(buttons),
            children
        )
    );
}

Popup.propTypes = {
    icon: PropTypes.node,
    message: PropTypes.node,
    buttons: PropTypes.arrayOf(PropTypes.element)
};

Popup.defaultProps = {
    icon: null,
    message: null,
    buttons: []
};

export { Popup as PurePopup };
export var EscapablePopup = escapable(Popup);

export default renderToLayer(EscapablePopup);