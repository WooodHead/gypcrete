'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getComponentName = require('../utils/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _randId = require('../utils/randId');

var _randId2 = _interopRequireDefault(_randId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LAYER_ID_PREFIX = 'layer';

function renderToLayer(WrappedComponent) {
    var componentName = (0, _getComponentName2.default)(WrappedComponent);

    var RenderToLayer = function (_Component) {
        (0, _inherits3.default)(RenderToLayer, _Component);

        function RenderToLayer() {
            var _ref;

            (0, _classCallCheck3.default)(this, RenderToLayer);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderToLayer.__proto__ || (0, _getPrototypeOf2.default)(RenderToLayer)).call.apply(_ref, [this].concat(args)));

            _this.baseLayer = null;
            _this.componentRef = null;
            return _this;
        }

        (0, _createClass3.default)(RenderToLayer, [{
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
                _reactDom2.default.unmountComponentAtNode(this.baseLayer);
                this.removeBaseLayer();
            }
        }, {
            key: 'createBaseLayer',
            value: function createBaseLayer() {
                var baseLayer = document.createElement('div');
                baseLayer.id = (0, _randId2.default)({ prefix: LAYER_ID_PREFIX });

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

                this.componentRef = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, _react2.default.createElement(WrappedComponent, withProps), this.baseLayer);
            }
        }, {
            key: 'render',
            value: function render() {
                return null;
            }
        }]);
        return RenderToLayer;
    }(_react.Component);

    RenderToLayer.displayName = 'renderToLayer(' + componentName + ')';


    return RenderToLayer;
}

exports.default = renderToLayer;