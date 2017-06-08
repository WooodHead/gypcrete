'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function randId() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$length = _ref.length,
        length = _ref$length === undefined ? 10 : _ref$length,
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === undefined ? 'node' : _ref$prefix;

    var randHash = Math.random().toString(16).substr(2, length);
    return prefix + '-' + randHash;
}

exports.default = randId;