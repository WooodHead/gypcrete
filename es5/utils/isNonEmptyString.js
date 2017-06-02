'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function isNonEmptyString(checkingString) {
    return typeof checkingString === 'string' && checkingString.length > 0;
}

exports.default = isNonEmptyString;