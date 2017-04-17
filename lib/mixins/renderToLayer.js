import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';


import React, { Component } from 'react';

import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';

import getComponentName from '../utils/getComponentName';
import randId from '../utils/randId';

var LAYER_ID_PREFIX = 'layer';

function renderToLayer(WrappedComponent) {
    var componentName = getComponentName(WrappedComponent);

    var RenderToLayer = function (_Component) {
        _inherits(RenderToLayer, _Component);

        function RenderToLayer() {
            var _ref;

            _classCallCheck(this, RenderToLayer);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = _possibleConstructorReturn(this, (_ref = RenderToLayer.__proto__ || _Object$getPrototypeOf(RenderToLayer)).call.apply(_ref, [this].concat(args)));

            _this.baseLayer = null;
            _this.componentRef = null;
            return _this;
        }

        _createClass(RenderToLayer, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.createBaseLayer();
                this.renderComponentToLayer({ withProps: this.props });
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                this.renderComponentToLayer({ withProps: nextProps });
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                ReactDOM.unmountComponentAtNode(this.baseLayer);
                this.removeBaseLayer();
            }
        }, {
            key: 'createBaseLayer',
            value: function createBaseLayer() {
                var baseLayer = document.createElement('div');
                baseLayer.id = randId({ prefix: LAYER_ID_PREFIX });

                this.baseLayer = baseLayer;
                document.body.appendChild(baseLayer);
            }
        }, {
            key: 'removeBaseLayer',
            value: function removeBaseLayer() {
                if (!this.baseLayer) return;

                document.body.removeChild(this.baseLayer);
                this.baseLayer = null;
            }
        }, {
            key: 'renderComponentToLayer',
            value: function renderComponentToLayer() {
                var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    _ref2$withProps = _ref2.withProps,
                    withProps = _ref2$withProps === undefined ? this.props : _ref2$withProps;

                this.componentRef = unstable_renderSubtreeIntoContainer(this, React.createElement(WrappedComponent, withProps), this.baseLayer);
            }
        }, {
            key: 'render',
            value: function render() {
                return null;
            }
        }]);

        return RenderToLayer;
    }(Component);

    RenderToLayer.displayName = 'renderToLayer(' + componentName + ')';


    return RenderToLayer;
}

export default renderToLayer;