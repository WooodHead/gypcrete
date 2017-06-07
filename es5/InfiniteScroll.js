'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BEM = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _documentOffset = require('document-offset');

var _documentOffset2 = _interopRequireDefault(_documentOffset);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _TextLabel = require('./TextLabel');

var _TextLabel2 = _interopRequireDefault(_TextLabel);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = (0, _prefixClass2.default)('infinite-scroll');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    footer: ROOT_BEM.element('footer')
};

var FILL_SPACE_TYPE = {
    AUTO: 'auto',
    MANUAL: 'manual'
};

var InfiniteScroll = function (_PureComponent) {
    (0, _inherits3.default)(InfiniteScroll, _PureComponent);

    function InfiniteScroll() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, InfiniteScroll);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InfiniteScroll.__proto__ || (0, _getPrototypeOf2.default)(InfiniteScroll)).call.apply(_ref, [this].concat(args))), _this), _this.getScrollNodeHeight = function () {
            var scrollNode = _this.scrollNode;
            var usePageAsContainer = _this.props.usePageAsContainer;


            if (usePageAsContainer) {
                var scrollNodeOffset = (0, _documentOffset2.default)(scrollNode) || {};
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
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(InfiniteScroll, [{
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


            if ((0, _react.isValidElement)(loadingLabel)) {
                return loadingLabel;
            }

            return _react2.default.createElement(_TextLabel2.default, {
                disabled: true,
                align: 'center',
                icon: _react2.default.createElement(_Icon2.default, { type: 'loading', spinning: true }),
                basic: loadingLabel });
        }
    }, {
        key: 'renderFooterButton',
        value: function renderFooterButton(buttonItem) {
            var onLoadMore = this.props.onLoadMore;


            if (!buttonItem) {
                return null;
            }

            if ((0, _react.isValidElement)(buttonItem)) {
                return buttonItem;
            }

            return _react2.default.createElement(_Button2.default, {
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

            return _react2.default.createElement(
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
                rootProps = (0, _objectWithoutProperties3.default)(_props2, ['onLoadMore', 'threshold', 'isLoading', 'hasMore', 'usePageAsContainer', 'fillSpace', 'loadingLabel', 'showMoreButton', 'noNewestButton', 'children', 'className', 'style']);

            var rootClassName = (0, _classnames2.default)('' + BEM.root, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, rootProps, {
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
}(_react.PureComponent);

InfiniteScroll.propTypes = {
    onLoadMore: _propTypes2.default.func.isRequired,
    threshold: _propTypes2.default.number,
    isLoading: _propTypes2.default.bool,
    hasMore: _propTypes2.default.bool,
    usePageAsContainer: _propTypes2.default.bool,
    fillSpace: _propTypes2.default.oneOf((0, _values2.default)(FILL_SPACE_TYPE)),

    loadingLabel: _propTypes2.default.node,
    showMoreButton: _propTypes2.default.node,
    noNewestButton: _propTypes2.default.node
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
exports.default = InfiniteScroll;