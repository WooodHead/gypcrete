import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';

import { getTextLayoutProps } from './mixins/rowComp';
import wrapIfNotElement from './utils/wrapIfNotElement';

import EditableText from './EditableText';
import Icon from './Icon';
import TextLabel from './TextLabel';

import { STATUS_CODE as STATUS } from './StatusIcon';

var TOUCH_TIMEOUT_MS = 250;

var EditableTextLabel = function (_PureComponent) {
    _inherits(EditableTextLabel, _PureComponent);

    function EditableTextLabel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EditableTextLabel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableTextLabel.__proto__ || _Object$getPrototypeOf(EditableTextLabel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            inEdit: _this.props.inEdit || false,

            touchCount: 0,
            dblTouchTimeout: null
        }, _this.resetDblTouchSimulation = function () {
            _this.setState({
                touchCount: 0,
                dblTouchTimeout: null
            });
        }, _this.handleDoubleClick = function (event) {
            if (!_this.getEditabilityControlled()) {
                _this.setState({ inEdit: true });
            }

            _this.props.onDblClick(event);
        }, _this.handleTouchStart = function (event) {
            var currentCount = _this.state.touchCount + 1;

            if (currentCount === 2) {
                _this.handleDoubleClick(event);
                _this.resetDblTouchSimulation();
                return;
            }

            global.clearTimeout(_this.state.dblTouchTimeout);
            var resetTimeout = global.setTimeout(_this.resetDblTouchSimulation, TOUCH_TIMEOUT_MS);

            _this.setState({
                touchCount: currentCount,
                dblTouchTimeout: resetTimeout
            });
        }, _this.handleInputBlur = function (event) {
            _this.leaveEditModeIfNotControlled();
            _this.props.onEditEnd({
                value: event.currentTarget.value,
                event: event
            });
        }, _this.handleInputKeyDown = function (event) {
            switch (event.keyCode) {
                case keycode('Enter'):
                    event.currentTarget.blur();
                    break;
                case keycode('Escape'):
                    _this.leaveEditModeIfNotControlled();
                    _this.props.onEditEnd({
                        value: null,
                        event: event
                    });
                    break;
                default:
                    break;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EditableTextLabel, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.getEditabilityControlled(nextProps)) {
                this.setState({ inEdit: nextProps.inEdit });
            }
        }
    }, {
        key: 'getEditabilityControlled',
        value: function getEditabilityControlled() {
            var fromProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            return fromProps.inEdit !== undefined;
        }
    }, {
        key: 'leaveEditModeIfNotControlled',
        value: function leaveEditModeIfNotControlled() {
            if (!this.getEditabilityControlled(this.props)) {
                this.setState({ inEdit: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                inEdit = _props.inEdit,
                onDblClick = _props.onDblClick,
                onEditEnd = _props.onEditEnd,
                labelProps = _objectWithoutProperties(_props, ['inEdit', 'onDblClick', 'onEditEnd']);

            var icon = labelProps.icon,
                basic = labelProps.basic,
                align = labelProps.align,
                status = labelProps.status;


            if (!this.state.inEdit && status !== STATUS.LOADING) {
                return React.createElement(TextLabel, _extends({
                    onDoubleClick: this.handleDoubleClick,
                    onTouchStart: this.handleTouchStart
                }, labelProps));
            }

            var layoutProps = getTextLayoutProps(align, !!icon);
            var labelIcon = icon && wrapIfNotElement(icon, { with: Icon, via: 'type' });

            return React.createElement(
                TextLabel,
                labelProps,
                labelIcon,
                React.createElement(EditableText, _extends({
                    defaultValue: basic,
                    onBlur: this.handleInputBlur,
                    input: {
                        autoFocus: this.state.inEdit,
                        onKeyDown: this.handleInputKeyDown
                    }
                }, layoutProps))
            );
        }
    }]);

    return EditableTextLabel;
}(PureComponent);

EditableTextLabel.propTypes = {
    inEdit: PropTypes.bool,
    onEditEnd: PropTypes.func,
    onDblClick: PropTypes.func,

    icon: TextLabel.propTypes.icon,
    basic: TextLabel.propTypes.basic,
    align: TextLabel.propTypes.align,
    status: TextLabel.propTypes.status
};
EditableTextLabel.defaultProps = {
    inEdit: undefined,
    onEditEnd: function onEditEnd() {},
    onDblClick: function onDblClick() {},

    icon: TextLabel.defaultProps.icon,
    basic: TextLabel.defaultProps.basic,
    align: TextLabel.defaultProps.align,
    status: TextLabel.defaultProps.status
};


export default EditableTextLabel;