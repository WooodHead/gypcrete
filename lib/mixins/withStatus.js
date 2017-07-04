import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$values from 'babel-runtime/core-js/object/values';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getComponentName from '../utils/getComponentName';

import StatusIcon, { STATUS_CODE } from '../StatusIcon';

export { STATUS_CODE };

export var statusPropTypes = {
    status: PropTypes.oneOf(_Object$values(STATUS_CODE)),
    statusOptions: PropTypes.object,
    errorMsg: PropTypes.string
};

export var withStatusPropTypes = {
    status: statusPropTypes.status,
    statusIcon: PropTypes.node,
    errorMsg: statusPropTypes.errorMsg
};

var withStatus = function withStatus() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref$withRef = _ref.withRef,
        withRef = _ref$withRef === undefined ? false : _ref$withRef,
        _ref$withRawStatus = _ref.withRawStatus,
        withRawStatus = _ref$withRawStatus === undefined ? false : _ref$withRawStatus,
        defaultStatusOptions = _objectWithoutProperties(_ref, ['withRef', 'withRawStatus']);

    return function (WrappedComponent) {
        var componentName = getComponentName(WrappedComponent);

        var WithStatus = function (_Component) {
            _inherits(WithStatus, _Component);

            function WithStatus() {
                _classCallCheck(this, WithStatus);

                return _possibleConstructorReturn(this, (WithStatus.__proto__ || _Object$getPrototypeOf(WithStatus)).apply(this, arguments));
            }

            _createClass(WithStatus, [{
                key: 'getRenderedComponent',
                value: function getRenderedComponent() {
                    return this.renderedComponentRef;
                }
            }, {
                key: 'getOptionalProps',
                value: function getOptionalProps() {
                    var props = {};

                    if (withRawStatus) {
                        props.status = this.context.status;
                    }

                    return props;
                }
            }, {
                key: 'render',
                value: function render() {
                    var _this2 = this;

                    var _context = this.context,
                        status = _context.status,
                        _context$statusOption = _context.statusOptions,
                        statusOptions = _context$statusOption === undefined ? {} : _context$statusOption,
                        errorMsg = _context.errorMsg;


                    var statusIcon = status && React.createElement(StatusIcon, _extends({
                        status: status
                    }, defaultStatusOptions, statusOptions));

                    var refProps = !withRef ? {} : {
                        ref: function ref(_ref2) {
                            _this2.renderedComponentRef = _ref2;
                        }
                    };
                    var optionalProps = this.getOptionalProps();

                    return React.createElement(WrappedComponent, _extends({}, refProps, this.props, optionalProps, {
                        statusIcon: statusIcon,
                        errorMsg: errorMsg }));
                }
            }]);

            return WithStatus;
        }(Component);

        WithStatus.displayName = 'withStatus(' + componentName + ')';
        WithStatus.contextTypes = _extends({}, statusPropTypes);


        return WithStatus;
    };
};

export default withStatus;