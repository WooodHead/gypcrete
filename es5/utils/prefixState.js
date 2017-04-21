'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prefixClass = require('./prefixClass');

var _prefixClass2 = _interopRequireDefault(_prefixClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixState(state) {
    if (!(typeof state === 'string') || !state.length) {
        throw new Error('state should be a non-empty string.');
    }

    return (0, _prefixClass2.default)('state-' + state);
}

exports.default = prefixState;