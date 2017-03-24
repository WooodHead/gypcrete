import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/**
 * <Text>
 * ======
 * Visual element to be used inside a Component.
 * Usually contains 2 lines, with **Basic text**, **Tag**, **State** at the first line
 * and **Aside text** at the second line.
 *
 * ┌╌╌╌╌╌╌╌╌╌╌╌┬╌╌╌┬╌╌╌╌╌┐
 * ╎Basic text ╎Tag╎State╎
 * ├╌╌╌╌╌╌╌╌╌╌╌┴╌╌╌┴╌╌╌╌╌┴╌╌╌┐
 * ╎Aside text               ╎
 * └╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┘
 */

import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import icBEM from '../utils/icBEM';


import BasicRow from './BasicRow';

export var COMPONENT_NAME = 'ic-text';
export var ROOT_BEM = icBEM(COMPONENT_NAME);

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
                stateIcon = _props.stateIcon;

            var basicRowProps = { basic: basic, tag: tag, stateIcon: stateIcon };

            if (React.isValidElement(basicRow)) {
                // Inject { basic, tag, stateIcon } to passed-in custom row.
                return React.cloneElement(basicRow, basicRowProps);
            }

            // else return pre-configured row
            return React.createElement(BasicRow, _extends({
                className: classNames('' + BEM.row, '' + BEM.basic)
            }, basicRowProps));
        }
    }, {
        key: 'renderAsideRow',
        value: function renderAsideRow() {
            if (!this.props.aside) return null;

            return React.createElement(
                'div',
                { className: classNames('' + BEM.row, '' + BEM.aside) },
                this.props.aside
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var rootClassName = BEM.root.modifier(this.props.align);

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
    basicRow: PropTypes.element

}, BasicRow.propTypes);
Text.defaultProps = {
    align: LEFT,
    aside: null,
    basicRow: null
};


export default Text;