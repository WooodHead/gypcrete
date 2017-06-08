"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var EnhancedPropTypes = {
    isEmpty: function isEmpty(props, propName, componentName) {
        if (props[propName]) {
            return new Error("<" + componentName + "> must not contains " + propName + ".");
        }
        return undefined;
    }
};

exports.default = EnhancedPropTypes;