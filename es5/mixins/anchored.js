'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.anchoredPropTypes = exports.ANCHORED_PLACEMENT = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _documentOffset = require('document-offset');

var _documentOffset2 = _interopRequireDefault(_documentOffset);

var _getComponentName = require('../utils/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOP = 'top';
var BOTTOM = 'bottom';
var ANCHORED_PLACEMENT = exports.ANCHORED_PLACEMENT = { TOP: TOP, BOTTOM: BOTTOM };

var anchoredPropTypes = exports.anchoredPropTypes = {
    placement: _propTypes2.default.oneOf((0, _values2.default)(ANCHORED_PLACEMENT)),
    arrowStyle: _propTypes2.default.objectOf(_propTypes2.default.number)
};

var DEFAULT_OPTIONS = {
    padding: 16,
    defaultPlacement: BOTTOM
};

function getVerticalPlacement(defaultPlacement, hasSpaceAbove, hasSpaceBelow) {
    if (defaultPlacement === TOP) {
        return hasSpaceAbove ? TOP : BOTTOM;
    }

    return hasSpaceBelow ? BOTTOM : TOP;
}

var anchored = function anchored() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (WrappedComponent) {
        var componentName = (0, _getComponentName2.default)(WrappedComponent);

        var anchoredOptions = (0, _extends3.default)({}, DEFAULT_OPTIONS, options);

        var Anchored = function (_Component) {
            (0, _inherits3.default)(Anchored, _Component);

            function Anchored() {
                var _ref;

                var _temp, _this, _ret;

                (0, _classCallCheck3.default)(this, Anchored);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Anchored.__proto__ || (0, _getPrototypeOf2.default)(Anchored)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                    placement: BOTTOM,
                    position: {},
                    arrowPosition: {}
                }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
            }

            (0, _createClass3.default)(Anchored, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.adjustPosition();
                }
            }, {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(nextProps) {
                    if (nextProps.anchor !== this.props.anchor) {
                        this.adjustPosition(nextProps.anchor);
                    }
                }
            }, {
                key: 'getAnchorDOMNode',
                value: function getAnchorDOMNode() {
                    var fromAnchor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.anchor;

                    if (fromAnchor instanceof window.HTMLElement) {
                        return fromAnchor;
                    }

                    if (fromAnchor instanceof _react.Component) {
                        return _reactDom2.default.findDOMNode(fromAnchor);
                    }

                    return null;
                }
            }, {
                key: 'getSelfDOMNode',
                value: function getSelfDOMNode() {
                    return _reactDom2.default.findDOMNode(this);
                }
            }, {
                key: 'adjustPosition',
                value: function adjustPosition() {
                    var nextAnchor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.anchor;

                    var anchorNode = this.getAnchorDOMNode(nextAnchor);
                    var selfNode = this.getSelfDOMNode();

                    if (!anchorNode) {
                        return;
                    }

                    var anchorRect = anchorNode.getBoundingClientRect();
                    var anchorOffset = (0, _documentOffset2.default)(anchorNode);
                    var anchorHalfWidth = anchorRect.width / 2;

                    var selfRect = selfNode.getBoundingClientRect();
                    var selfHalfWidth = selfRect.width / 2;

                    var nextState = {
                        placement: undefined,
                        position: {},
                        arrowPosition: {}
                    };

                    var hasSpaceAbove = anchorRect.top >= selfRect.height;
                    var hasSpaceBelow = window.innerHeight - anchorRect.bottom >= selfRect.height;

                    nextState.placement = getVerticalPlacement(anchoredOptions.defaultPlacement, hasSpaceAbove, hasSpaceBelow);

                    if (nextState.placement === TOP) {
                        nextState.position.top = anchorOffset.top - selfRect.height;
                    } else {
                        nextState.position.top = anchorOffset.top + anchorRect.height;
                    }

                    var hasSpaceOnLeft = anchorRect.left >= selfHalfWidth;
                    var hasSpaceOnRight = window.innerWidth - anchorRect.right >= selfHalfWidth;

                    switch (true) {
                        case hasSpaceOnLeft && hasSpaceOnRight:
                            nextState.position.left = anchorOffset.left + anchorHalfWidth - selfHalfWidth;
                            break;

                        case hasSpaceOnLeft && !hasSpaceOnRight:
                            nextState.position.left = anchorOffset.left + anchorRect.width + anchoredOptions.padding - selfRect.width;

                            nextState.arrowPosition.left = selfRect.width - anchoredOptions.padding - anchorHalfWidth;
                            break;

                        default:
                            nextState.position.left = anchorOffset.left - anchoredOptions.padding;
                            nextState.arrowPosition.left = anchoredOptions.padding + anchorHalfWidth;
                            break;
                    }

                    this.setState(nextState);
                }
            }, {
                key: 'render',
                value: function render() {
                    var _props = this.props,
                        anchor = _props.anchor,
                        style = _props.style,
                        otherProps = (0, _objectWithoutProperties3.default)(_props, ['anchor', 'style']);


                    var mergedStyle = (0, _extends3.default)({
                        position: 'absolute'
                    }, this.state.position, style);

                    if (!anchor) {
                        return null;
                    }

                    return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, otherProps, {
                        placement: this.state.placement,
                        arrowStyle: this.state.arrowPosition,
                        style: mergedStyle }));
                }
            }]);
            return Anchored;
        }(_react.Component);

        Anchored.displayName = 'anchored(' + componentName + ')';
        Anchored.propTypes = {
            anchor: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(window.Node), _propTypes2.default.instanceOf(_react.Component)])
        };
        Anchored.defaultProps = {
            anchor: null
        };


        return Anchored;
    };
};

exports.default = anchored;