'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var PREFIX = exports.PREFIX = 'gyp';

function prefixClass(className) {
    if (!(typeof className === 'string') || !className.length) {
        throw new Error('className should be a non-empty string.');
    }

    return PREFIX + '-' + className;
}

exports.default = prefixClass;