'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _getComponentName = require('../utils/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEscapeListener = function createEscapeListener(callback) {
    return function (event) {
        if (event.keyCode === (0, _keycode2.default)('Escape')) {
            callback(event);
        }
    };
};

function escapable(WrappedComponent) {
    var _class, _temp;

    var componentName = (0, _getComponentName2.default)(WrappedComponent);

    return _temp = _class = function (_Component) {
        (0, _inherits3.default)(_class, _Component);

        function _class() {
            (0, _classCallCheck3.default)(this, _class);
            return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
        }

        (0, _createClass3.default)(_class, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.keyUpListener = createEscapeListener(this.props.onEscape);
                document.addEventListener('keyup', this.keyUpListener);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                document.removeEventListener('keyup', this.keyUpListener);
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props,
                    onEscape = _props.onEscape,
                    otherProps = (0, _objectWithoutProperties3.default)(_props, ['onEscape']);

                return _react2.default.createElement(WrappedComponent, otherProps);
            }
        }]);
        return _class;
    }(_react.Component), _class.displayName = 'escapable(' + componentName + ')', _class.propTypes = {
        onEscape: _propTypes2.default.func
    }, _class.defaultProps = {
        onEscape: function onEscape() {}
    }, _temp;
}

exports.default = escapable;