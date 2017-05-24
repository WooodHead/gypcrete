'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _rowComp = require('./mixins/rowComp');

var _EditableText = require('./EditableText');

var _EditableText2 = _interopRequireDefault(_EditableText);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _TextLabel = require('./TextLabel');

var _TextLabel2 = _interopRequireDefault(_TextLabel);

var _StatusIcon = require('./StatusIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditableTextLabel = function (_PureComponent) {
    (0, _inherits3.default)(EditableTextLabel, _PureComponent);

    function EditableTextLabel() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EditableTextLabel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditableTextLabel.__proto__ || (0, _getPrototypeOf2.default)(EditableTextLabel)).call.apply(_ref, [this].concat(args))), _this), _this.handleDoubleClick = function () {
            _this.props.onEditRequest();
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EditableTextLabel, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.inEdit) {
                this.editableTextRef.getRenderedComponent().focusInputNode();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                inEdit = _props.inEdit,
                onEditRequest = _props.onEditRequest,
                onEditEnd = _props.onEditEnd,
                labelProps = (0, _objectWithoutProperties3.default)(_props, ['inEdit', 'onEditRequest', 'onEditEnd']);
            var icon = labelProps.icon,
                basic = labelProps.basic,
                align = labelProps.align,
                status = labelProps.status;


            if (!inEdit && status !== _StatusIcon.STATUS_CODE.LOADING) {
                return _react2.default.createElement(_TextLabel2.default, (0, _extends3.default)({
                    onDoubleClick: this.handleDoubleClick
                }, labelProps));
            }

            var layoutProps = (0, _rowComp.getTextLayoutProps)(align, !!icon);

            return _react2.default.createElement(
                _TextLabel2.default,
                labelProps,
                icon && _react2.default.createElement(_Icon2.default, { type: icon }),
                _react2.default.createElement(_EditableText2.default, (0, _extends3.default)({
                    ref: function ref(_ref2) {
                        _this2.editableTextRef = _ref2;
                    },
                    defaultValue: basic,
                    onEditEnd: onEditEnd
                }, layoutProps))
            );
        }
    }]);
    return EditableTextLabel;
}(_react.PureComponent);

EditableTextLabel.propTypes = {
    inEdit: _propTypes2.default.bool,
    onEditRequest: _propTypes2.default.func,

    onEditEnd: _EditableText.PureEditableText.propTypes.onEditEnd,

    icon: _TextLabel2.default.propTypes.icon,
    basic: _TextLabel2.default.propTypes.basic,
    align: _TextLabel2.default.propTypes.align,
    status: _TextLabel2.default.propTypes.status
};
EditableTextLabel.defaultProps = {
    inEdit: false,
    onEditRequest: function onEditRequest() {},
    onEditEnd: _EditableText.PureEditableText.defaultProps.onEditEnd,
    icon: _TextLabel2.default.defaultProps.icon,
    basic: _TextLabel2.default.defaultProps.basic,
    align: _TextLabel2.default.defaultProps.align,
    status: _TextLabel2.default.defaultProps.status
};
exports.default = EditableTextLabel;