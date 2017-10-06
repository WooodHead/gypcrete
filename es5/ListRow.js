'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BEM = exports.COMPONENT_NAME = undefined;

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

var _withStatus = require('./mixins/withStatus');

var _prefixClass = require('./utils/prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

var _getStateClassnames = require('./utils/getStateClassnames');

var _getStateClassnames2 = _interopRequireDefault(_getStateClassnames);

var _icBEM = require('./utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _wrapIfNotElement = require('./utils/wrapIfNotElement');

var _wrapIfNotElement2 = _interopRequireDefault(_wrapIfNotElement);

var _StatusIcon = require('./StatusIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = (0, _prefixClass2.default)('list-row');
var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var BEM = exports.BEM = {
    root: ROOT_BEM,
    body: ROOT_BEM.element('body'),
    footer: ROOT_BEM.element('footer')
};

var ListRow = function (_PureComponent) {
    (0, _inherits3.default)(ListRow, _PureComponent);

    function ListRow() {
        (0, _classCallCheck3.default)(this, ListRow);
        return (0, _possibleConstructorReturn3.default)(this, (ListRow.__proto__ || (0, _getPrototypeOf2.default)(ListRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(ListRow, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                status: this.props.status,
                statusOptions: this.props.statusOptions
            };
        }
    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            var _props = this.props,
                desc = _props.desc,
                errorMsg = _props.errorMsg;

            var hasFooter = desc || errorMsg;

            if (!hasFooter) {
                return null;
            }

            return _react2.default.createElement(
                'div',
                { className: BEM.footer.toString() },
                (0, _wrapIfNotElement2.default)(errorMsg, { with: 'p' }),
                (0, _wrapIfNotElement2.default)(desc, { with: 'p' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                highlight = _props2.highlight,
                nestedList = _props2.nestedList,
                desc = _props2.desc,
                status = _props2.status,
                statusOptions = _props2.statusOptions,
                errorMsg = _props2.errorMsg,
                className = _props2.className,
                children = _props2.children,
                wrapperProps = (0, _objectWithoutProperties3.default)(_props2, ['highlight', 'nestedList', 'desc', 'status', 'statusOptions', 'errorMsg', 'className', 'children']);


            var bemClass = BEM.root.modifier('highlight', highlight);

            var stateClass = (0, _getStateClassnames2.default)({
                error: status === _StatusIcon.STATUS_CODE.ERROR
            });
            var rootClassName = (0, _classnames2.default)(bemClass.toString(), stateClass, className);

            return _react2.default.createElement(
                'li',
                (0, _extends3.default)({ className: rootClassName }, wrapperProps),
                _react2.default.createElement(
                    'div',
                    { className: BEM.body.toString() },
                    children
                ),
                this.renderFooter(),
                nestedList
            );
        }
    }]);
    return ListRow;
}(_react.PureComponent);

ListRow.propTypes = (0, _extends3.default)({
    highlight: _propTypes2.default.bool,
    nestedList: _propTypes2.default.node,
    desc: _propTypes2.default.node

}, _withStatus.statusPropTypes);
ListRow.defaultProps = {
    highlight: false,
    nestedList: undefined,
    desc: undefined
};
ListRow.childContextTypes = {
    status: _withStatus.statusPropTypes.status,
    statusOptions: _withStatus.statusPropTypes.statusOptions
};
exports.default = ListRow;