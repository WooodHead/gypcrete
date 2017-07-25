import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';

import getComponentName from '../utils/getComponentName';

var createEscapeListener = function createEscapeListener(callback) {
    return function (event) {
        if (event.keyCode === keycode('Escape')) {
            callback(event);
        }
    };
};

function escapable(WrappedComponent) {
    var _class, _temp;

    var componentName = getComponentName(WrappedComponent);

    return _temp = _class = function (_Component) {
        _inherits(_class, _Component);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || _Object$getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.keyUpListener = createEscapeListener(this.props.onEscape);
                document.addEventListener('keyup', this.keyUpListener);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                document.removeEventListener('keyup', this.keyUpListener);
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props,
                    onEscape = _props.onEscape,
                    otherProps = _objectWithoutProperties(_props, ['onEscape']);

                return React.createElement(WrappedComponent, otherProps);
            }
        }]);

        return _class;
    }(Component), _class.displayName = 'escapable(' + componentName + ')', _class.propTypes = {
        onEscape: PropTypes.func
    }, _class.defaultProps = {
        onEscape: function onEscape() {}
    }, _temp;
}

export default escapable;