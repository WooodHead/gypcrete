import React from 'react';

/**
 * Wrap the passed-in `content` with a component if it's not a React element,
 * to make sure the result will always be a HTML tag.
 *
 * @param {Any} content
 * @param {Component} Wrapper
 *
 * @return {Element}
 */
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