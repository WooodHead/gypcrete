'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ROW_COMP_ALIGN = exports.ROW_COMP_BODY = exports.COMPONENT_NAME = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _getComponentName = require('../utils/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _icBEM = require('../utils/icBEM');

var _icBEM2 = _interopRequireDefault(_icBEM);

var _icState = require('../utils/icState');

var _icState2 = _interopRequireDefault(_icState);

var _withStatus = require('./withStatus');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _StatusIcon = require('../StatusIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = exports.COMPONENT_NAME = 'ic-row-comp'; /**
                                                              * rowComp() HOC mixin
                                                              * ===================
                                                              * A Component that goes into a row container is a **Row Component**,
                                                              * and normally should be wrapped with the `rowComp()` mixin to share
                                                              * common appearance and behaviors.
                                                              *
                                                              * By default, `rowComp()` renders a set of label contents into the wrapped
                                                              * Component, including an <Icon> and a <Text>.
                                                              *
                                                              * Usage
                                                              * -----
                                                              * A **Row Component** can be used in 2 ways:
                                                              *
                                                              * ### Use pre-configured layout by passing everything via props
                                                              * <TextLabel
                                                              *     basic="Basic Text"
                                                              *     tag="Tag"
                                                              *     aside="Aside Text"
                                                              *     align="center"
                                                              *     status"loading" />
                                                              *
                                                              * ### Customize layout via children
                                                              * <TextLabel status="error">
                                                              *     <Icon type="star" />
                                                              *     <Text basic="Announcements" />
                                                              *     <Icon type="star" />
                                                              * </TextLabel>
                                                              *
                                                              */

var ROOT_BEM = (0, _icBEM2.default)(COMPONENT_NAME);
var ROW_COMP_BODY = exports.ROW_COMP_BODY = ROOT_BEM.element('body');

// State class names
var CLASS_ACTIVE = (0, _icState2.default)('active');
var CLASS_HIGHLIGHT = (0, _icState2.default)('highlight');
var CLASS_ERROR = (0, _icState2.default)('error');
var CLASS_DISABLED = (0, _icState2.default)('disabled');
var CLASS_UNTOUCHABLE = (0, _icState2.default)('untouchable');

// Alignments
var LEFT = 'left';
var CENTER = 'center';
var RIGHT = 'right';
var REVERSE = 'reverse';
var ROW_COMP_ALIGN = exports.ROW_COMP_ALIGN = { LEFT: LEFT, CENTER: CENTER, RIGHT: RIGHT, REVERSE: REVERSE };

/**
 * Determine alignment for pre-configured <Text> based on
 * <RowComp> align and icon existence.
 *
 * @param  {String} compAlign
 * @param  {Bool}   hasIcon
 * @return {String} textAlign
 */
function determineTextAlign(compAlign, hasIcon) {
    switch (compAlign) {
        case RIGHT:
        case REVERSE:
            return RIGHT;
        case CENTER:
            if (!hasIcon) return CENTER;
        default:
            // eslint-disable-line no-fallthrough
            return LEFT;
    }
}

var rowComp = function rowComp() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$minified = _ref.minified,
        minified = _ref$minified === undefined ? false : _ref$minified,
        _ref$defaultAlign = _ref.defaultAlign,
        defaultAlign = _ref$defaultAlign === undefined ? 'left' : _ref$defaultAlign;

    return function (WrappedComponent) {
        var componentName = (0, _getComponentName2.default)(WrappedComponent);

        var RowComp = function (_PureComponent) {
            (0, _inherits3.default)(RowComp, _PureComponent);

            function RowComp() {
                (0, _classCallCheck3.default)(this, RowComp);
                return (0, _possibleConstructorReturn3.default)(this, (RowComp.__proto__ || (0, _getPrototypeOf2.default)(RowComp)).apply(this, arguments));
            }

            (0, _createClass3.default)(RowComp, [{
                key: 'getChildContext',
                value: function getChildContext() {
                    var _props = this.props,
                        status = _props.status,
                        statusOptions = _props.statusOptions,
                        errorMsg = _props.errorMsg;


                    return { status: status, statusOptions: statusOptions, errorMsg: errorMsg };
                }
            }, {
                key: 'renderContent',
                value: function renderContent() {
                    var _props2 = this.props,
                        align = _props2.align,
                        icon = _props2.icon,
                        basic = _props2.basic,
                        aside = _props2.aside,
                        tag = _props2.tag;


                    var textProps = { basic: basic, aside: aside, tag: tag };
                    var textAlign = determineTextAlign(align, !!icon);

                    return [icon && _react2.default.createElement(_Icon2.default, { key: 'comp-icon', type: icon }), _react2.default.createElement(_Text2.default, (0, _extends3.default)({
                        key: 'comp-text',
                        align: textAlign,
                        noGrow: align === CENTER
                    }, textProps))];
                }
            }, {
                key: 'render',
                value: function render() {
                    var _classNames;

                    var _props3 = this.props,
                        align = _props3.align,
                        icon = _props3.icon,
                        basic = _props3.basic,
                        aside = _props3.aside,
                        tag = _props3.tag,
                        active = _props3.active,
                        highlight = _props3.highlight,
                        disabled = _props3.disabled,
                        status = _props3.status,
                        statusOptions = _props3.statusOptions,
                        errorMsg = _props3.errorMsg,
                        className = _props3.className,
                        children = _props3.children,
                        otherProps = (0, _objectWithoutProperties3.default)(_props3, ['align', 'icon', 'basic', 'aside', 'tag', 'active', 'highlight', 'disabled', 'status', 'statusOptions', 'errorMsg', 'className', 'children']);


                    var bemClass = ROOT_BEM.modifier('minified', minified).modifier(align);

                    var wrapperClassName = (0, _classnames2.default)(className, '' + bemClass, (_classNames = {}, (0, _defineProperty3.default)(_classNames, CLASS_ACTIVE, active), (0, _defineProperty3.default)(_classNames, CLASS_HIGHLIGHT, highlight), (0, _defineProperty3.default)(_classNames, CLASS_ERROR, status === _StatusIcon.STATUS_CODE.ERROR), (0, _defineProperty3.default)(_classNames, CLASS_DISABLED, disabled), (0, _defineProperty3.default)(_classNames, CLASS_UNTOUCHABLE, status === _StatusIcon.STATUS_CODE.LOADING), _classNames));

                    return _react2.default.createElement(
                        WrappedComponent,
                        (0, _extends3.default)({ className: wrapperClassName }, otherProps),
                        children || this.renderContent()
                    );
                }
            }]);
            return RowComp;
        }(_react.PureComponent);

        RowComp.displayName = 'rowComp(' + componentName + ')';
        RowComp.propTypes = (0, _extends3.default)({
            // Text label props
            align: _react.PropTypes.oneOf((0, _values2.default)(ROW_COMP_ALIGN)),
            icon: _react.PropTypes.string,
            basic: _react.PropTypes.node,
            aside: _react.PropTypes.node,
            tag: _react.PropTypes.node,

            // State props
            active: _react.PropTypes.bool,
            highlight: _react.PropTypes.bool,
            disabled: _react.PropTypes.bool

        }, _withStatus.statusPropTypes);
        RowComp.defaultProps = {
            align: defaultAlign,
            icon: null,
            basic: null,
            aside: null,
            tag: null,

            active: false,
            highlight: false,
            disabled: false,

            status: null,
            statusOptions: {},
            errorMsg: null
        };
        RowComp.childContextTypes = (0, _extends3.default)({}, _withStatus.statusPropTypes);


        return RowComp;
    };
};

exports.default = rowComp;