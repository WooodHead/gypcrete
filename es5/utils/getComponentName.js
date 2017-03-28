'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function getComponentName(Component) {
    if (!Component) {
        throw new Error('Cannot read name. Please pass in a valid React Component.');
    }
    var componentName = Component.displayName || Component.name || 'Component';

    return componentName;
}

exports.default = getComponentName;