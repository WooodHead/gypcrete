import _extends from 'babel-runtime/helpers/extends';
import _Object$values from 'babel-runtime/core-js/object/values';
import React from 'react';
import PropTypes from 'prop-types';

import getComponentName from '../utils/getComponentName';

import StatusIcon, { STATUS_CODE } from '../StatusIcon';

export var statusPropTypes = {
    status: PropTypes.oneOf(_Object$values(STATUS_CODE)),
    statusOptions: PropTypes.object,
    errorMsg: PropTypes.string
};

export var withStatusPropTypes = {
    statusIcon: PropTypes.node,
    errorMsg: PropTypes.string
};

var withStatus = function withStatus() {
    var defaultOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (WrappedComponent) {
        var componentName = getComponentName(WrappedComponent);

        function WithStatus(props, context) {
            var status = context.status,
                _context$statusOption = context.statusOptions,
                statusOptions = _context$statusOption === undefined ? {} : _context$statusOption,
                errorMsg = context.errorMsg;


            var statusIcon = status && React.createElement(StatusIcon, _extends({
                status: status
            }, defaultOptions, statusOptions));

            return React.createElement(WrappedComponent, _extends({}, props, {
                statusIcon: statusIcon,
                errorMsg: errorMsg }));
        }
        WithStatus.displayName = 'withStatus(' + componentName + ')';

        WithStatus.contextTypes = _extends({}, statusPropTypes);

        return WithStatus;
    };
};

export default withStatus;