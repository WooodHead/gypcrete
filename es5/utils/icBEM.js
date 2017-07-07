'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BEMFactory = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _isNonEmptyString = require('./isNonEmptyString');

var _isNonEmptyString2 = _interopRequireDefault(_isNonEmptyString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ELEMENT_SEPARATOR = '__';
var MODIFIER_SEPARATOR = '--';

var BEMFactory = exports.BEMFactory = function () {
    function BEMFactory(_ref) {
        var block = _ref.block,
            element = _ref.element,
            _ref$modifiers = _ref.modifiers,
            modifiers = _ref$modifiers === undefined ? [] : _ref$modifiers,
            _ref$nonBemClasses = _ref.nonBemClasses,
            nonBemClasses = _ref$nonBemClasses === undefined ? [] : _ref$nonBemClasses;
        (0, _classCallCheck3.default)(this, BEMFactory);

        if (!block) {
            throw new Error('block is required.');
        }

        this._block = block;
        this._element = element;
        this._modifiers = modifiers;
        this._nonBemClasses = nonBemClasses;

        return this;
    }

    (0, _createClass3.default)(BEMFactory, [{
        key: 'element',
        value: function element(elementIdentifier) {
            if ((0, _isNonEmptyString2.default)(elementIdentifier)) {
                return new BEMFactory((0, _extends3.default)({}, this.toHash(), {
                    element: elementIdentifier
                }));
            }
            return this;
        }
    }, {
        key: 'modifier',
        value: function modifier(modifierIdentifier) {
            var isOn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (isOn && (0, _isNonEmptyString2.default)(modifierIdentifier)) {
                return new BEMFactory((0, _extends3.default)({}, this.toHash(), {
                    modifiers: [].concat((0, _toConsumableArray3.default)(this._modifiers), [modifierIdentifier])
                }));
            }
            return this;
        }
    }, {
        key: 'add',
        value: function add(className) {
            if ((0, _isNonEmptyString2.default)(className)) {
                return new BEMFactory((0, _extends3.default)({}, this.toHash(), {
                    nonBemClasses: [].concat((0, _toConsumableArray3.default)(this._nonBemClasses), [className])
                }));
            }
            return this;
        }
    }, {
        key: 'toString',
        value: function toString() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$stripBlock = _ref2.stripBlock,
                stripBlock = _ref2$stripBlock === undefined ? false : _ref2$stripBlock;

            var _block = this._block,
                _element = this._element,
                _modifiers = this._modifiers,
                _nonBemClasses = this._nonBemClasses;


            var baseClass = typeof _element !== 'undefined' ? '' + _block + ELEMENT_SEPARATOR + _element : _block;

            var classes = [baseClass].concat((0, _toConsumableArray3.default)(_modifiers.map(function (modifier) {
                return '' + baseClass + MODIFIER_SEPARATOR + modifier;
            })), (0, _toConsumableArray3.default)(_nonBemClasses));

            if (stripBlock) classes.shift();

            return classes.join(' ');
        }
    }, {
        key: 'toHash',
        value: function toHash() {
            return {
                block: this._block,
                element: this._element,
                modifiers: this._modifiers.slice(0),
                nonBemClasses: this._nonBemClasses.slice(0)
            };
        }
    }, {
        key: 'valueOf',
        value: function valueOf() {
            return this.toString();
        }
    }]);
    return BEMFactory;
}();

function icBEM(blockName) {
    if (typeof blockName === 'string') {
        return new BEMFactory({ block: blockName });
    }
    throw new Error('blockName should be a non-empty String.');
}

exports.default = icBEM;