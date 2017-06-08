
import prefixClass from './prefixClass';

function prefixState(state) {
    if (!(typeof state === 'string') || !state.length) {
        throw new Error('state should be a non-empty string.');
    }

    return prefixClass('state-' + state);
}

export default prefixState;