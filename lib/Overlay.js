import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';

export var COMPONENT_NAME = prefixClass('overlay');
export var HAS_OVERLAY_CLASS = prefixClass('has-overlay');
var ROOT_BEM = icBEM(COMPONENT_NAME);

var Overlay = function (_PureComponent) {
    _inherits(Overlay, _PureComponent);

    function Overlay() {
        _classCallCheck(this, Overlay);

        return _possibleConstructorReturn(this, (Overlay.__proto__ || _Object$getPrototypeOf(Overlay)).apply(this, arguments));
    }

    _createClass(Overlay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.body.classList.add(HAS_OVERLAY_CLASS);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.classList.remove(HAS_OVERLAY_CLASS);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                overlayProps = _objectWithoutProperties(_props, ['className']);

            var rootClassName = classNames(className, '' + ROOT_BEM);

            return React.createElement('div', _extends({
                className: rootClassName
            }, overlayProps));
        }
    }]);

    return Overlay;
}(PureComponent);

export default Overlay;