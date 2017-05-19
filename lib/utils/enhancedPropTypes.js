

var EnhancedPropTypes = {
    isEmpty: function isEmpty(props, propName, componentName) {
        if (props[propName]) {
            return new Error("<" + componentName + "> must not contains " + propName + ".");
        }
        return null;
    }
};

export default EnhancedPropTypes;