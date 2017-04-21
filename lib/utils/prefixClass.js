export var PREFIX = 'gyp';

function prefixClass(className) {
    if (!(typeof className === 'string') || !className.length) {
        throw new Error('className should be a non-empty string.');
    }

    return PREFIX + '-' + className;
}

export default prefixClass;