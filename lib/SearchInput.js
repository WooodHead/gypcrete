import _Object$values from 'babel-runtime/core-js/object/values';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import icBEM from './utils/icBEM';
import rowComp from './mixins/rowComp';


import Icon from './Icon';
import RowCompBody from './RowCompBody';

import { STATUS_CODE } from './StatusIcon';

var COMPONENT_NAME = 'ic-search-input';
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    input: ROOT_BEM.element('input'),
    resetBtn: ROOT_BEM.element('reset-button')
};

var SearchInput = function (_Component) {
    _inherits(SearchInput, _Component);

    function SearchInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchInput.__proto__ || _Object$getPrototypeOf(SearchInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            inputValue: _this.props.defaultValue
        }, _this.handleInputChange = function (event) {
            _this.setState({ inputValue: event.target.value });
        }, _this.handleResetButtonClick = function () {
            _this.setState({ inputValue: '' });
        }, _this.handleInputBlur = function () {
            _this.notifySearch();
        }, _this.handleInputKeyup = function (event) {
            if (event.key === 'Enter') {
                _this.notifySearch();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SearchInput, [{
        key: 'notifySearch',
        value: function notifySearch() {
            this.props.onSearch(this.state.inputValue);
        }
    }, {
        key: 'renderResetButton',
        value: function renderResetButton() {
            return React.createElement(
                'button',
                {
                    type: 'button',
                    className: '' + BEM.resetBtn,
                    'aria-label': 'Reset',
                    tabIndex: '-1',
                    onClick: this.handleResetButtonClick },
                React.createElement(Icon, { type: 'delete', color: 'gray' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                inputProps = _props.input,
                placeholder = _props.placeholder,
                className = _props.className;
            var inputValue = this.state.inputValue;


            var rootClassName = classNames(className, '' + BEM.root);
            var isLoading = this.context.status === STATUS_CODE.LOADING;

            return React.createElement(
                'div',
                { className: rootClassName },
                React.createElement(
                    RowCompBody,
                    null,
                    React.createElement(Icon, { type: 'search' }),
                    React.createElement('input', _extends({
                        type: 'text',
                        className: '' + BEM.input,
                        placeholder: placeholder,
                        value: inputValue,
                        onChange: this.handleInputChange,
                        onBlur: this.handleInputBlur,
                        onKeyUp: this.handleInputKeyup
                    }, inputProps)),
                    isLoading && React.createElement(Icon, { type: 'loading', spinning: true, color: 'gray' }),
                    inputValue && !isLoading && this.renderResetButton()
                )
            );
        }
    }]);

    return SearchInput;
}(Component);

SearchInput.propTypes = {
    input: PropTypes.object,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onSearch: PropTypes.func
};
SearchInput.defaultProps = {
    input: {},
    placeholder: 'Search',
    defaultValue: '',
    onSearch: function onSearch() {}
};
SearchInput.contextTypes = {
    status: PropTypes.oneOf(_Object$values(STATUS_CODE))
};


export default rowComp()(SearchInput);
export { SearchInput as PureSearchInput };