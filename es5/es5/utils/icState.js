'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Prefix anything passed-in with 'ic-state-'.
 *
 * @param {String} state
 * @return {String} className
 */
function icState(state) {
    if (!(typeof state === 'string') || !state.length) {
        throw new Error('state should be a non-empty string.');
    }

    return 'ic-state-' + state;
}

exports.default = icState;