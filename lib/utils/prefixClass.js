
import isNonEmptyString from './isNonEmptyString';

export var PREFIX = 'gyp';

function prefixClass(className) {
    if (!isNonEmptyString(className)) {
        throw new Error('className should be a non-empty string.');
    }
    return PREFIX + '-' + className;
}

export default prefixClass;