import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import icBEM from './utils/icBEM';
import prefixClass from './utils/prefixClass';
import withStatus, { withStatusPropTypes } from './mixins/withStatus';


import BasicRow from './BasicRow';


export var COMPONENT_NAME = prefixClass('text');
var ROOT_BEM = icBEM(COMPONENT_NAME);

export var BEM = {
    root: ROOT_BEM,
    row: ROOT_BEM.element('row'),
    basic: ROOT_BEM.element('basic'),
    aside: ROOT_BEM.element('aside')
};

var LEFT = 'left';
var CENTER = 'center';
var RIGHT = 'right';
export var TEXT_ALIGN = { LEFT: LEFT, CENTER: CENTER, RIGHT: RIGHT };

var Text = function (_PureComponent) {
    _inherits(Text, _PureComponent);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || _Object$getPrototypeOf(Text)).apply(this, arguments));
    }

    _createClass(Text, [{
        key: 'renderBasicRow',
        value: function renderBasicRow() {
            var _props = this.props,
                basicRow = _props.basicRow,
                basic = _props.basic,
                tag = _props.tag,
                statusIcon = _props.statusIcon;

            var basicRowProps = { basic: basic, tag: tag, statusIcon: statusIcon };

            if (basicRow && React.isValidElement(basicRow)) {
                return React.cloneElement(basicRow, basicRowProps);
            }

            return null;
        }
    }, {
        key: 'renderAsideRow',
        value: function renderAsideRow() {
            var _props2 = this.props,
                aside = _props2.aside,
                errorMsg = _props2.errorMsg;

            var displayText = errorMsg || aside;

            if (!displayText) {
                return null;
            }

            return React.createElement(
                'div',
                { className: classNames(BEM.row.toString(), BEM.aside.toString()) },
                displayText
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                align = _props3.align,
                noGrow = _props3.noGrow,
                className = _props3.className;


            var bemClass = BEM.root.modifier(align).modifier('no-grow', noGrow);

            var rootClassName = classNames(bemClass.toString(), className);

            return React.createElement(
                'div',
                { className: rootClassName },
                this.renderBasicRow(),
                this.renderAsideRow()
            );
        }
    }]);

    return Text;
}(PureComponent);

Text.propTypes = _extends({
    align: PropTypes.oneOf(_Object$values(TEXT_ALIGN)),
    aside: PropTypes.node,
    basicRow: PropTypes.element,
    noGrow: PropTypes.bool

}, withStatusPropTypes, BasicRow.propTypes);
Text.defaultProps = _extends({
    align: LEFT,
    aside: undefined,
    basicRow: React.createElement(BasicRow, {
        className: classNames(BEM.row.toString(), BEM.basic.toString()) }),
    noGrow: false,
    errorMsg: undefined,
    statusIcon: undefined
}, BasicRow.defaultProps);


export default withStatus()(Text);
export { Text as PureText };