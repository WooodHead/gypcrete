import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withStatus, { withStatusPropTypes, STATUS_CODE } from './mixins/withStatus';

import EditableBasicRow from './EditableBasicRow';
import { PureText } from './Text';

var EditableText = function (_PureComponent) {
    _inherits(EditableText, _PureComponent);

    function EditableText() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EditableText);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableText.__proto__ || _Object$getPrototypeOf(EditableText)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            focused: false
        }, _this.handleInputFocus = function (event) {
            _this.setState({ focused: true });
            _this.props.onFocus(event);
        }, _this.handleInputBlur = function (event) {
            _this.setState({ focused: false });
            _this.props.onBlur(event);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EditableText, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                align = _props.align,
                noGrow = _props.noGrow,
                status = _props.status,
                statusIcon = _props.statusIcon,
                errorMsg = _props.errorMsg,
                className = _props.className,
                editableRowProps = _objectWithoutProperties(_props, ['align', 'noGrow', 'status', 'statusIcon', 'errorMsg', 'className']);

            var textProps = { align: align, noGrow: noGrow };
            var statusProps = this.state.focused ? {} : { statusIcon: statusIcon, errorMsg: errorMsg };

            var basicRow = React.createElement(EditableBasicRow, _extends({}, editableRowProps, {
                status: status,
                readOnly: status === STATUS_CODE.LOADING,
                onFocus: this.handleInputFocus,
                onBlur: this.handleInputBlur }));

            return React.createElement(PureText, _extends({
                basicRow: basicRow
            }, textProps, statusProps));
        }
    }]);

    return EditableText;
}(PureComponent);

EditableText.propTypes = _extends({
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,

    align: PureText.propTypes.align,
    noGrow: PureText.propTypes.noGrow
}, withStatusPropTypes);
EditableText.defaultProps = {
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},

    align: PureText.defaultProps.align,
    noGrow: PureText.defaultProps.noGrow,
    status: undefined,
    statusIcon: undefined,
    errorMsg: undefined
};


export default withStatus({ withRawStatus: true })(EditableText);
export { EditableText as PureEditableText };