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

import EditableText from './EditableText';
import Icon from './Icon';
import TextLabel from './TextLabel';

import { STATUS_CODE as STATUS } from './StatusIcon';

var EditableTextLabel = function (_PureComponent) {
    _inherits(EditableTextLabel, _PureComponent);

    function EditableTextLabel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EditableTextLabel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableTextLabel.__proto__ || _Object$getPrototypeOf(EditableTextLabel)).call.apply(_ref, [this].concat(args))), _this), _this.handleDoubleClick = function () {
            _this.props.onEditRequest();
        }, _this.handleInputBlur = function (event) {
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
        key: 'render',
        value: function render() {
            var _props = this.props,
                inEdit = _props.inEdit,
                onEditRequest = _props.onEditRequest,
                onEditEnd = _props.onEditEnd,
                labelProps = _objectWithoutProperties(_props, ['inEdit', 'onEditRequest', 'onEditEnd']);

            var icon = labelProps.icon,
                basic = labelProps.basic,
                align = labelProps.align,
                status = labelProps.status;


            if (!inEdit && status !== STATUS.LOADING) {
                return React.createElement(TextLabel, _extends({
                    onDoubleClick: this.handleDoubleClick
                }, labelProps));
            }

            var layoutProps = getTextLayoutProps(align, !!icon);

            return React.createElement(
                TextLabel,
                labelProps,
                icon && React.createElement(Icon, { type: icon }),
                React.createElement(EditableText, _extends({
                    defaultValue: basic,
                    onBlur: this.handleInputBlur,
                    input: {
                        autoFocus: inEdit,
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
    onEditRequest: PropTypes.func,
    onEditEnd: PropTypes.func,

    icon: TextLabel.propTypes.icon,
    basic: TextLabel.propTypes.basic,
    align: TextLabel.propTypes.align,
    status: TextLabel.propTypes.status
};
EditableTextLabel.defaultProps = {
    inEdit: false,
    onEditRequest: function onEditRequest() {},
    onEditEnd: function onEditEnd() {},

    icon: TextLabel.defaultProps.icon,
    basic: TextLabel.defaultProps.basic,
    align: TextLabel.defaultProps.align,
    status: TextLabel.defaultProps.status
};


export default EditableTextLabel;