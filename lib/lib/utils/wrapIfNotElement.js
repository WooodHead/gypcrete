import React from 'react';

function wrapIfNotElement(content, _ref) {
    var Wrapper = _ref.with;

    if (React.isValidElement(content)) {
        return content;
    }
    return React.createElement(
        Wrapper,
        null,
        content
    );
}

export default wrapIfNotElement;