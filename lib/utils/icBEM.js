import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

import isNonEmptyString from './isNonEmptyString';

var ELEMENT_SEPARATOR = '__';
var MODIFIER_SEPARATOR = '--';

export var BEMFactory = function () {
    function BEMFactory(_ref) {
        var block = _ref.block,
            element = _ref.element,
            _ref$modifiers = _ref.modifiers,
            modifiers = _ref$modifiers === undefined ? [] : _ref$modifiers,
            _ref$nonBemClasses = _ref.nonBemClasses,
            nonBemClasses = _ref$nonBemClasses === undefined ? [] : _ref$nonBemClasses;

        _classCallCheck(this, BEMFactory);

        if (!block) {
            throw new Error('block is required.');
        }

        this._block = block;
        this._element = element;
        this._modifiers = modifiers;
        this._nonBemClasses = nonBemClasses;

        return this;
    }

    _createClass(BEMFactory, [{
        key: 'element',
        value: function element(elementIdentifier) {
            if (isNonEmptyString(elementIdentifier)) {
                return new BEMFactory(_extends({}, this.toHash(), {
                    element: elementIdentifier
                }));
            }
            return this;
        }
    }, {
        key: 'modifier',
        value: function modifier(modifierIdentifier) {
            var isOn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (isOn && isNonEmptyString(modifierIdentifier)) {
                return new BEMFactory(_extends({}, this.toHash(), {
                    modifiers: [].concat(_toConsumableArray(this._modifiers), [modifierIdentifier])
                }));
            }
            return this;
        }
    }, {
        key: 'add',
        value: function add(className) {
            if (isNonEmptyString(className)) {
                return new BEMFactory(_extends({}, this.toHash(), {
                    nonBemClasses: [].concat(_toConsumableArray(this._nonBemClasses), [className])
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

            var classes = [baseClass].concat(_toConsumableArray(_modifiers.map(function (modifier) {
                return '' + baseClass + MODIFIER_SEPARATOR + modifier;
            })), _toConsumableArray(_nonBemClasses));

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

export default icBEM;