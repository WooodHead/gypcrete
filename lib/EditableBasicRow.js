import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';

import BasicRow from './BasicRow';

export var COMPONENT_NAME = prefixClass('editable-basic-row');
var ROOT_BEM = icBEM(COMPONENT_NAME);

export var BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    basicLabel: ROOT_BEM.element('basic-label')
};

var TAG_INPUT = 'input';
var TAG_TEXTAREA = 'textarea';
export var ROW_INPUT_TAGS = {
    INPUT: TAG_INPUT,
    TEXTAREA: TAG_TEXTAREA
};

var EditableBasicRow = function (_PureComponent) {
    _inherits(EditableBasicRow, _PureComponent);

    function EditableBasicRow() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EditableBasicRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableBasicRow.__proto__ || _Object$getPrototypeOf(EditableBasicRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentValue: _this.props.value || _this.props.defaultValue || '',
            focused: false
        }, _this.handleInputFocus = function (event) {
            _this.setState({ focused: true });
            _this.props.onFocus(event);
        }, _this.handleInputBlur = function (event) {
            _this.setState({ focused: false });
            _this.props.onBlur(event);
        }, _this.handleInputChange = function (event) {
            if (!_this.props.value) {
                _this.setState({ currentValue: event.currentTarget.value });
            }

            _this.props.onChange(event);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EditableBasicRow, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.props.value) {
                this.setState({ currentValue: nextProps.value });
            }

            if (this.inputNode && nextProps.status !== this.props.status) {
                this.inputNode.blur();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                InputTag = _props.inputTag,
                placeholder = _props.placeholder,
                readOnly = _props.readOnly,
                disabled = _props.disabled,
                onChange = _props.onChange,
                onFocus = _props.onFocus,
                onBlur = _props.onBlur,
                status = _props.status,
                statusIcon = _props.statusIcon,
                className = _props.className,
                basic = _props.basic,
                tag = _props.tag,
                inputProps = _objectWithoutProperties(_props, ['inputTag', 'placeholder', 'readOnly', 'disabled', 'onChange', 'onFocus', 'onBlur', 'status', 'statusIcon', 'className', 'basic', 'tag']);

            var _state = this.state,
                currentValue = _state.currentValue,
                focused = _state.focused;


            var bemClass = BEM.root.modifier('empty', !currentValue).modifier('focused', focused).modifier('disabled', disabled);
            var rootClassName = classNames(bemClass.toString(), className);

            var inputType = InputTag === TAG_INPUT ? 'text' : undefined;
            var inputTabIndex = readOnly || disabled ? -1 : undefined;

            var basicLabel = React.createElement(
                'span',
                { className: BEM.basicLabel },
                currentValue || placeholder,
                InputTag === TAG_TEXTAREA && '\n'
            );

            return React.createElement(
                BasicRow,
                {
                    className: rootClassName,
                    basic: basicLabel,
                    statusIcon: statusIcon },
                React.createElement(InputTag, _extends({
                    ref: function ref(_ref2) {
                        _this2.inputNode = _ref2;
                    },
                    type: inputType,
                    value: currentValue,
                    placeholder: placeholder,
                    className: BEM.input.toString(),
                    readOnly: readOnly,
                    disabled: disabled,
                    tabIndex: inputTabIndex,
                    onChange: this.handleInputChange,
                    onFocus: this.handleInputFocus,
                    onBlur: this.handleInputBlur
                }, inputProps))
            );
        }
    }]);

    return EditableBasicRow;
}(PureComponent);

EditableBasicRow.propTypes = {
    inputTag: PropTypes.oneOf(_Object$values(ROW_INPUT_TAGS)),

    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,

    status: PropTypes.string,
    statusIcon: PropTypes.element
};
EditableBasicRow.defaultProps = {
    inputTag: TAG_INPUT,
    value: undefined,
    defaultValue: undefined,
    placeholder: 'Unset',
    readOnly: false,
    disabled: false,
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    status: undefined,
    statusIcon: undefined
};


export default EditableBasicRow;