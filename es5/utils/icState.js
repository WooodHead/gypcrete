'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function icState(state) {
    if (!(typeof state === 'string') || !state.length) {
        throw new Error('state should be a non-empty string.');
    }

    return 'ic-state-' + state;
}

exports.default = icState;