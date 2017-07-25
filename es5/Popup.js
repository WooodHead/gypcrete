'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EscapablePopup = exports.PurePopup = exports.BEM = exports.COMPONENT_NAME = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _escapable = require('./mixins/escapable');

var _escapable2 = _interopRequireDefault(_escapable);

var _renderToLayer = require('./mixins/renderToLayer');

var _renderToLayer2 = _interopRequireDefault(_renderToLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('popup');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    container: ROOT_BEM.element('container'),
    body: ROOT_BEM.element('body'),
    message: ROOT_BEM.element('message'),
    button: ROOT_BEM.element('button'),
    buttonsGroup: ROOT_BEM.element('buttons-group')
};

function renderPopupIcon(icon) {
    if (typeof icon === 'string') {
        return _react2.default.createElement(_Icon2.default, {
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

    return _react2.default.createElement(
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
        if ((0, _react.isValidElement)(button)) {
            var buttonBemClass = BEM.button.toString();

            return (0, _react.cloneElement)(button, {
                className: buttonBemClass,
                align: 'center',
                minified: false
            });
        }

        return button;
    });

    return _react2.default.createElement(
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
        popupProps = (0, _objectWithoutProperties3.default)(_ref, ['icon', 'message', 'buttons', 'className', 'children']);

    var rootClassName = (0, _classnames2.default)(BEM.root.toString(), className);

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rootClassName }, popupProps),
        _react2.default.createElement(_Overlay2.default, null),
        _react2.default.createElement(
            'div',
            { className: BEM.container.toString() },
            _react2.default.createElement(
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
    icon: _propTypes2.default.node,
    message: _propTypes2.default.node,
    buttons: _propTypes2.default.arrayOf(_propTypes2.default.element)
};

Popup.defaultProps = {
    icon: null,
    message: null,
    buttons: []
};

exports.PurePopup = Popup;
var EscapablePopup = exports.EscapablePopup = (0, _escapable2.default)(Popup);

exports.default = (0, _renderToLayer2.default)(EscapablePopup);