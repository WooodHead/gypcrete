import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import _Object$values from 'babel-runtime/core-js/object/values';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import documentOffset from 'document-offset';

import getComponentName from '../utils/getComponentName';

var TOP = 'top';
var BOTTOM = 'bottom';
export var ANCHORED_PLACEMENT = { TOP: TOP, BOTTOM: BOTTOM };

export var anchoredPropTypes = {
    placement: PropTypes.oneOf(_Object$values(ANCHORED_PLACEMENT)),
    arrowStyle: PropTypes.objectOf(PropTypes.number)
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
        var componentName = getComponentName(WrappedComponent);

        var anchoredOptions = _extends({}, DEFAULT_OPTIONS, options);

        var Anchored = function (_Component) {
            _inherits(Anchored, _Component);

            function Anchored() {
                var _ref;

                var _temp, _this, _ret;

                _classCallCheck(this, Anchored);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Anchored.__proto__ || _Object$getPrototypeOf(Anchored)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                    placement: BOTTOM,
                    position: {},
                    arrowPosition: {}
                }, _temp), _possibleConstructorReturn(_this, _ret);
            }

            _createClass(Anchored, [{
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

                    if (fromAnchor instanceof Component) {
                        return ReactDOM.findDOMNode(fromAnchor);
                    }

                    return null;
                }
            }, {
                key: 'getSelfDOMNode',
                value: function getSelfDOMNode() {
                    return ReactDOM.findDOMNode(this);
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
                    var anchorOffset = documentOffset(anchorNode);
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
                        otherProps = _objectWithoutProperties(_props, ['anchor', 'style']);

                    var mergedStyle = _extends({
                        position: 'absolute'
                    }, this.state.position, style);

                    if (!anchor) {
                        return null;
                    }

                    return React.createElement(WrappedComponent, _extends({}, otherProps, {
                        placement: this.state.placement,
                        arrowStyle: this.state.arrowPosition,
                        style: mergedStyle }));
                }
            }]);

            return Anchored;
        }(Component);

        Anchored.displayName = 'anchored(' + componentName + ')';
        Anchored.propTypes = {
            anchor: PropTypes.oneOfType([PropTypes.instanceOf(window.Node), PropTypes.instanceOf(Component)])
        };
        Anchored.defaultProps = {
            anchor: null
        };


        return Anchored;
    };
};

export default anchored;