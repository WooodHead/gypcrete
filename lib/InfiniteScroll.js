import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';


import React, { PureComponent, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import documentOffset from 'document-offset';

import Button from './Button';
import TextLabel from './TextLabel';
import Icon from './Icon';

import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';


var COMPONENT_NAME = prefixClass('infinite-scroll');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    footer: ROOT_BEM.element('footer')
};

var FILL_SPACE_TYPE = {
    AUTO: 'auto',
    MANUAL: 'manual'
};

var InfiniteScroll = function (_PureComponent) {
    _inherits(InfiniteScroll, _PureComponent);

    function InfiniteScroll() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InfiniteScroll);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfiniteScroll.__proto__ || _Object$getPrototypeOf(InfiniteScroll)).call.apply(_ref, [this].concat(args))), _this), _this.getScrollNodeHeight = function () {
            var scrollNode = _this.scrollNode;
            var usePageAsContainer = _this.props.usePageAsContainer;


            if (usePageAsContainer) {
                var scrollNodeOffset = documentOffset(scrollNode) || {};
                var scrollNodeTopOffset = scrollNodeOffset.top || 0;

                return scrollNodeTopOffset + scrollNode.offsetHeight;
            }

            return scrollNode.scrollHeight;
        }, _this.getContainerHeight = function () {
            var usePageAsContainer = _this.props.usePageAsContainer;


            if (usePageAsContainer) {
                return window.innerHeight;
            }

            return _this.scrollNode.parentNode.clientHeight;
        }, _this.getContainerScrollTop = function () {
            var usePageAsContainer = _this.props.usePageAsContainer;


            if (usePageAsContainer) {
                var windowBodyElement = document.documentElement || document.body.parentNode || document.body;
                return window.pageYOffset || windowBodyElement.scrollTop;
            }

            return _this.scrollNode.parentNode.scrollTop;
        }, _this.getRemainingBottomOffset = function () {
            var scrollNodeHeight = _this.getScrollNodeHeight();
            var containerHeight = _this.getContainerHeight();
            var containerScrollTop = _this.getContainerScrollTop();

            return scrollNodeHeight - (containerScrollTop + containerHeight);
        }, _this.loadMoreToFillSpace = function (event) {
            var _this$props = _this.props,
                onLoadMore = _this$props.onLoadMore,
                hasMore = _this$props.hasMore,
                isLoading = _this$props.isLoading,
                fillSpace = _this$props.fillSpace;


            if (!isLoading && hasMore && fillSpace === FILL_SPACE_TYPE.AUTO) {
                var scrollNodeHeight = _this.getScrollNodeHeight();
                var containerHeight = _this.getContainerHeight();
                var idealContainerHeight = 2 * containerHeight;

                if (scrollNodeHeight <= idealContainerHeight) {
                    onLoadMore(event);
                }
            }
        }, _this.handleScrollListener = function (event) {
            var _this$props2 = _this.props,
                onLoadMore = _this$props2.onLoadMore,
                threshold = _this$props2.threshold,
                hasMore = _this$props2.hasMore,
                isLoading = _this$props2.isLoading;

            var remainingBottomOffset = _this.getRemainingBottomOffset();

            if (!isLoading && hasMore && threshold > remainingBottomOffset) {
                onLoadMore(event);
            }
        }, _this.attachScrollListener = function () {
            var usePageAsContainer = _this.props.usePageAsContainer;

            _this.scrollContainer = usePageAsContainer ? window : _this.scrollNode.parentNode;

            _this.scrollContainer.addEventListener('scroll', _this.handleScrollListener);
        }, _this.detachScrollListener = function () {
            if (_this.scrollContainer) {
                _this.scrollContainer.removeEventListener('scroll', _this.handleScrollListener);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InfiniteScroll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.attachScrollListener();
            this.loadMoreToFillSpace();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadMoreToFillSpace();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.detachScrollListener();
        }
    }, {
        key: 'renderLoadingLabel',
        value: function renderLoadingLabel() {
            var loadingLabel = this.props.loadingLabel;


            if (isValidElement(loadingLabel)) {
                return loadingLabel;
            }

            return React.createElement(TextLabel, {
                disabled: true,
                align: 'center',
                icon: React.createElement(Icon, { type: 'loading', spinning: true }),
                basic: loadingLabel });
        }
    }, {
        key: 'renderFooterButton',
        value: function renderFooterButton(buttonItem) {
            var onLoadMore = this.props.onLoadMore;


            if (!buttonItem) {
                return null;
            }

            if (isValidElement(buttonItem)) {
                return buttonItem;
            }

            return React.createElement(Button, {
                color: 'black',
                align: 'center',
                basic: buttonItem,
                minified: false,
                onClick: onLoadMore });
        }
    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            var _props = this.props,
                isLoading = _props.isLoading,
                hasMore = _props.hasMore,
                showMoreButton = _props.showMoreButton,
                noNewestButton = _props.noNewestButton;

            var footerChild = null;

            if (isLoading) {
                footerChild = this.renderLoadingLabel();
            } else if (hasMore) {
                footerChild = this.renderFooterButton(showMoreButton);
            } else {
                footerChild = this.renderFooterButton(noNewestButton);
            }

            return React.createElement(
                'div',
                { className: BEM.footer },
                footerChild
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                onLoadMore = _props2.onLoadMore,
                threshold = _props2.threshold,
                isLoading = _props2.isLoading,
                hasMore = _props2.hasMore,
                usePageAsContainer = _props2.usePageAsContainer,
                fillSpace = _props2.fillSpace,
                loadingLabel = _props2.loadingLabel,
                showMoreButton = _props2.showMoreButton,
                noNewestButton = _props2.noNewestButton,
                children = _props2.children,
                className = _props2.className,
                style = _props2.style,
                rootProps = _objectWithoutProperties(_props2, ['onLoadMore', 'threshold', 'isLoading', 'hasMore', 'usePageAsContainer', 'fillSpace', 'loadingLabel', 'showMoreButton', 'noNewestButton', 'children', 'className', 'style']);

            var rootClassName = classNames('' + BEM.root, className);

            return React.createElement(
                'div',
                _extends({}, rootProps, {
                    ref: function ref(_ref2) {
                        _this2.scrollNode = _ref2;
                    },
                    className: rootClassName }),
                children,
                this.renderFooter()
            );
        }
    }]);

    return InfiniteScroll;
}(PureComponent);

InfiniteScroll.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    threshold: PropTypes.number,
    isLoading: PropTypes.bool,
    hasMore: PropTypes.bool,
    usePageAsContainer: PropTypes.bool,
    fillSpace: PropTypes.oneOf(_Object$values(FILL_SPACE_TYPE)),

    loadingLabel: PropTypes.node,
    showMoreButton: PropTypes.node,
    noNewestButton: PropTypes.node
};
InfiniteScroll.defaultProps = {
    onLoadMore: function onLoadMore() {},
    threshold: 100,
    isLoading: false,
    hasMore: true,
    usePageAsContainer: false,
    fillSpace: FILL_SPACE_TYPE.MANUAL,

    loadingLabel: null,
    showMoreButton: null,
    noNewestButton: null
};


export default InfiniteScroll;