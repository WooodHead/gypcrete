
function getComponentName(Component) {
    if (!Component) {
        throw new Error('Cannot read name. Please pass in a valid React Component.');
    }
    var componentName = Component.displayName || Component.name || 'Component';

    return componentName;
}

export default getComponentName;