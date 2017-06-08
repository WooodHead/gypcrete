import _defineProperty from 'babel-runtime/helpers/defineProperty';

import React from 'react';

function wrapIfNotElement(content, _ref) {
    var Wrapper = _ref.with,
        _ref$via = _ref.via,
        prop = _ref$via === undefined ? 'children' : _ref$via;

    if (React.isValidElement(content)) {
        return content;
    }

    var wrapperProps = _defineProperty({}, prop, content);

    return React.createElement(Wrapper, wrapperProps);
}

export default wrapIfNotElement;