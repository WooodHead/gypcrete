import _Object$values from 'babel-runtime/core-js/object/values';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import icBEM from './utils/icBEM';


import Icon from './Icon';

var LOADING = 'loading';
var SUCCESS = 'success';
var ERROR = 'error';
export var STATUS_CODE = { LOADING: LOADING, SUCCESS: SUCCESS, ERROR: ERROR };

var INLINE = 'inline';
var CORNER = 'corner';
export var STATUS_POSITION = { INLINE: INLINE, CORNER: CORNER };

var COMPONENT_NAME = 'ic-status-icon';
var ROOT_BEM = icBEM(COMPONENT_NAME);

var ICON_HIDE_TIMEOUT = 2 * 1000;

var StatusIcon = function (_PureComponent) {
    _inherits(StatusIcon, _PureComponent);

    function StatusIcon() {
        var _ref;

        _classCallCheck(this, StatusIcon);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = StatusIcon.__proto__ || _Object$getPrototypeOf(StatusIcon)).call.apply(_ref, [this].concat(args)));

        _this.autoHideTimeout = null;

        _this.state = {
            hideIcon: false
        };
        return _this;
    }

    _createClass(StatusIcon, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.autoToggleStatusIcon(this.props.status);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.status !== this.props.status) {
                this.autoToggleStatusIcon(nextProps.status);
            }

            if (nextProps.autohide !== this.props.autohide) {
                if (this.state.hideIcon) {
                    this.setState({ hideIcon: false });
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.hideIconTimeout);
        }
    }, {
        key: 'autoToggleStatusIcon',
        value: function autoToggleStatusIcon() {
            var _this2 = this;

            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.status;

            if (!this.props.autohide) {
                return;
            }

            if (status === SUCCESS) {
                this.hideIconTimeout = setTimeout(function () {
                    _this2.setState({ hideIcon: true });
                    _this2.hideIconTimeout = null;
                }, ICON_HIDE_TIMEOUT);

                return;
            }

            clearTimeout(this.hideIconTimeout);
            this.setState({ hideIcon: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var rootClassName = ROOT_BEM.modifier(this.props.position);
            var icon = null;

            switch (this.props.status) {
                case LOADING:
                    icon = React.createElement(Icon, { type: 'inline-loading', color: 'gray', spinning: true });
                    break;
                case SUCCESS:
                    if (!this.state.hideIcon) {
                        icon = React.createElement(Icon, { type: 'inline-success', color: 'blue' });
                    }
                    break;
                case ERROR:
                    icon = React.createElement(Icon, { type: 'inline-error', color: 'red' });
                    break;
                default:
                    break;
            }

            return icon && React.createElement(
                'span',
                { className: rootClassName },
                icon
            );
        }
    }]);

    return StatusIcon;
}(PureComponent);

StatusIcon.propTypes = {
    status: PropTypes.oneOf(_Object$values(STATUS_CODE)).isRequired,
    position: PropTypes.oneOf(_Object$values(STATUS_POSITION)),
    autohide: PropTypes.bool
};
StatusIcon.defaultProps = {
    status: null,
    position: INLINE,
    autohide: true
};


export default StatusIcon;