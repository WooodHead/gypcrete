import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PropTypes, PureComponent } from 'react';
import withStatus, { withStatusPropTypes } from './mixins/withStatus';
import wrapIfNotElement from './utils/wrapIfNotElement';


import AnchoredTooltip from './AnchoredTooltip';
import Icon from './Icon';

import { STATUS_POSITION } from './StatusIcon';

export var COMPONENT_NAME = 'ic-iconlayout';
var IconLayout = function (_PureComponent) {
    _inherits(IconLayout, _PureComponent);

    function IconLayout() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, IconLayout);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconLayout.__proto__ || _Object$getPrototypeOf(IconLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showTooltip: false
        }, _this.handleMouseEnter = function () {
            _this.setState({ showTooltip: true });
        }, _this.handleMouseLeave = function () {
            _this.setState({ showTooltip: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(IconLayout, [{
        key: 'renderTooltip',
        value: function renderTooltip() {
            var errorMsg = this.props.errorMsg;


            if (!errorMsg) {
                return null;
            }

            return React.createElement(
                AnchoredTooltip,
                {
                    anchor: this.nodeRef,
                    style: { pointerEvents: 'none' } },
                this.props.errorMsg
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                icon = _props.icon,
                statusIcon = _props.statusIcon;
            var showTooltip = this.state.showTooltip;

            var iconElement = wrapIfNotElement(icon, { with: Icon, via: 'type' });

            return React.createElement(
                'span',
                {
                    ref: function ref(_ref2) {
                        _this2.nodeRef = _ref2;
                    },
                    className: COMPONENT_NAME,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave },
                iconElement,
                showTooltip && this.renderTooltip(),
                statusIcon
            );
        }
    }]);

    return IconLayout;
}(PureComponent);

IconLayout.propTypes = _extends({
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired

}, withStatusPropTypes);


export default withStatus({ position: STATUS_POSITION.CORNER })(IconLayout);
export { IconLayout as PureIconLayout };