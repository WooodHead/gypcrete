import _Object$values from 'babel-runtime/core-js/object/values';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';


import React, { PureComponent, isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import getComponentName from '../utils/getComponentName';
import icBEM from '../utils/icBEM';
import prefixClass from '../utils/prefixClass';
import prefixState from '../utils/prefixState';
import { statusPropTypes } from './withStatus';

import Icon from '../Icon';
import Text from '../Text';

import { STATUS_CODE } from '../StatusIcon';

export var COMPONENT_NAME = prefixClass('row-comp');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var ROW_COMP_BODY = ROOT_BEM.element('body');

var CLASS_ACTIVE = prefixState('active');
var CLASS_HIGHLIGHT = prefixState('highlight');
var CLASS_ERROR = prefixState('error');
var CLASS_DISABLED = prefixState('disabled');
var CLASS_UNTOUCHABLE = prefixState('untouchable');

var LEFT = 'left';
var CENTER = 'center';
var RIGHT = 'right';
var REVERSE = 'reverse';
export var ROW_COMP_ALIGN = { LEFT: LEFT, CENTER: CENTER, RIGHT: RIGHT, REVERSE: REVERSE };

function determineTextAlign(compAlign, hasIcon) {
    switch (compAlign) {
        case RIGHT:
        case REVERSE:
            return RIGHT;
        case CENTER:
            if (!hasIcon) return CENTER;
        default:
            return LEFT;
    }
}

export function getTextLayoutProps(compAlign, hasIcon) {
    return {
        align: determineTextAlign(compAlign, hasIcon),
        noGrow: compAlign === CENTER
    };
}

var rowComp = function rowComp() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$defaultMinified = _ref.defaultMinified,
        defaultMinified = _ref$defaultMinified === undefined ? false : _ref$defaultMinified,
        _ref$defaultAlign = _ref.defaultAlign,
        defaultAlign = _ref$defaultAlign === undefined ? LEFT : _ref$defaultAlign;

    return function (WrappedComponent) {
        var componentName = getComponentName(WrappedComponent);

        var RowComp = function (_PureComponent) {
            _inherits(RowComp, _PureComponent);

            function RowComp() {
                _classCallCheck(this, RowComp);

                return _possibleConstructorReturn(this, (RowComp.__proto__ || _Object$getPrototypeOf(RowComp)).apply(this, arguments));
            }

            _createClass(RowComp, [{
                key: 'getChildContext',
                value: function getChildContext() {
                    var _props = this.props,
                        align = _props.align,
                        status = _props.status,
                        statusOptions = _props.statusOptions,
                        errorMsg = _props.errorMsg;


                    return { align: align, status: status, statusOptions: statusOptions, errorMsg: errorMsg };
                }
            }, {
                key: 'renderIconElement',
                value: function renderIconElement() {
                    var icon = this.props.icon;


                    if (!icon) {
                        return null;
                    }

                    return isValidElement(icon) ? cloneElement(icon, { key: 'comp-icon' }) : React.createElement(Icon, { key: 'comp-icon', type: icon });
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
                    var textLayoutProps = getTextLayoutProps(align, !!icon);

                    var iconElement = this.renderIconElement();

                    return [iconElement, React.createElement(Text, _extends({
                        key: 'comp-text'
                    }, textProps, textLayoutProps))];
                }
            }, {
                key: 'render',
                value: function render() {
                    var _classNames;

                    var _props3 = this.props,
                        minified = _props3.minified,
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
                        otherProps = _objectWithoutProperties(_props3, ['minified', 'align', 'icon', 'basic', 'aside', 'tag', 'active', 'highlight', 'disabled', 'status', 'statusOptions', 'errorMsg', 'className', 'children']);

                    var bemClass = ROOT_BEM.modifier('minified', minified).modifier(align);

                    var wrapperClassName = classNames(className, '' + bemClass, (_classNames = {}, _defineProperty(_classNames, CLASS_ACTIVE, active), _defineProperty(_classNames, CLASS_HIGHLIGHT, highlight), _defineProperty(_classNames, CLASS_ERROR, status === STATUS_CODE.ERROR), _defineProperty(_classNames, CLASS_DISABLED, disabled), _defineProperty(_classNames, CLASS_UNTOUCHABLE, status === STATUS_CODE.LOADING), _classNames));

                    return React.createElement(
                        WrappedComponent,
                        _extends({ className: wrapperClassName }, otherProps),
                        children || this.renderContent()
                    );
                }
            }]);

            return RowComp;
        }(PureComponent);

        RowComp.displayName = 'rowComp(' + componentName + ')';
        RowComp.propTypes = _extends({
            minified: PropTypes.bool,

            align: PropTypes.oneOf(_Object$values(ROW_COMP_ALIGN)),
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            basic: PropTypes.node,
            aside: PropTypes.node,
            tag: PropTypes.node,

            active: PropTypes.bool,
            highlight: PropTypes.bool,
            disabled: PropTypes.bool

        }, statusPropTypes);
        RowComp.defaultProps = {
            minified: defaultMinified,

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
        RowComp.childContextTypes = _extends({
            align: PropTypes.oneOf(_Object$values(ROW_COMP_ALIGN))
        }, statusPropTypes);


        return RowComp;
    };
};

export default rowComp;