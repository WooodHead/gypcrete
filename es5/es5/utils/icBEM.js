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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------
//   icBEM Helper
//   @ref https://github.com/14islands/bem-helper-js
//
//   Usage:
//   const bem = icBEM('ic-list');
//   const bem2 = bem.element('item');
//   const bem3 = bem2.modifier('highlight');
//
//   bem.toString();   // => 'ic-list'
//   bem2.toString();  // => 'ic-list__item'
//   bem3.toString();  // => 'ic-list__item ic-list__item--highlight'
// -------------------------------------

/* eslint-disable no-underscore-dangle */

var ELEMENT_SEPARATOR = '__';
var MODIFIER_SEPARATOR = '--';

function stringNotEmpty(string) {
    return typeof string === 'string' && string.length;
}

var BEMFactory = exports.BEMFactory = function () {
    function BEMFactory() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            block = _ref.block,
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

    /**
     * Set element scope
      * @param {String}
     * @return {BEMFactory}
     */


    (0, _createClass3.default)(BEMFactory, [{
        key: 'element',
        value: function element(elementIdentifier) {
            if (stringNotEmpty(elementIdentifier)) {
                return new BEMFactory((0, _extends3.default)({}, this.toHash(), {
                    element: elementIdentifier
                }));
            }
            return this;
        }

        /**
         * Add BEM modifier
          * @param {String}
         * @return {BEMFactory}
         */

    }, {
        key: 'modifier',
        value: function modifier(modifierIdentifier) {
            var isOn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (isOn && stringNotEmpty(modifierIdentifier)) {
                return new BEMFactory((0, _extends3.default)({}, this.toHash(), {
                    modifiers: [].concat((0, _toConsumableArray3.default)(this._modifiers), [modifierIdentifier])
                }));
            }
            return this;
        }

        /**
         * Add other non-BEM classname to the mix
          * @param {String}
         * @return {BEMFactory}
         */

    }, {
        key: 'add',
        value: function add(className) {
            if (stringNotEmpty(className)) {
                return new BEMFactory((0, _extends3.default)({}, this.toHash(), {
                    nonBemClasses: [].concat((0, _toConsumableArray3.default)(this._nonBemClasses), [className])
                }));
            }
            return this;
        }

        /**
         * Render BEM chain as full class name string
         *
         * @return {String}
         */

    }, {
        key: 'toString',
        value: function toString() {
            var _block = this._block,
                _element = this._element,
                _modifiers = this._modifiers,
                _nonBemClasses = this._nonBemClasses;


            var baseClass = typeof _element !== 'undefined' ? '' + _block + ELEMENT_SEPARATOR + _element : _block;

            var classes = [baseClass].concat((0, _toConsumableArray3.default)(_modifiers.map(function (modifier) {
                return '' + baseClass + MODIFIER_SEPARATOR + modifier;
            })), (0, _toConsumableArray3.default)(_nonBemClasses));

            return classes.join(' ');
        }

        /**
         * Export internal properties to a new Hash
         *
         * @return {Hash}
         */

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
    }]);
    return BEMFactory;
}();

// Creates BEM chain based on context type


function icBEM(blockName) {
    if (typeof blockName === 'string') {
        return new BEMFactory({ block: blockName });
    }
    throw new Error('blockName should be a non-valid String.');
}

exports.default = icBEM;