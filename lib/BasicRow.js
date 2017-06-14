import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';

import React from 'react';
import PropTypes from 'prop-types';


import FlexCell from './FlexCell';
import Tag from './Tag';

import wrapIfNotElement from './utils/wrapIfNotElement';

function BasicRow(_ref) {
    var basic = _ref.basic,
        tag = _ref.tag,
        statusIcon = _ref.statusIcon,
        children = _ref.children,
        otherProps = _objectWithoutProperties(_ref, ['basic', 'tag', 'statusIcon', 'children']);

    if (!basic) {
        return null;
    }

    return React.createElement(
        'div',
        otherProps,
        React.createElement(
            FlexCell,
            { shrink: true },
            basic
        ),
        tag && wrapIfNotElement(tag, { with: Tag }),
        statusIcon && wrapIfNotElement(statusIcon, { with: 'span' }),
        children
    );
}

BasicRow.propTypes = {
    basic: PropTypes.node,
    tag: PropTypes.node,
    statusIcon: PropTypes.node
};

BasicRow.defaultProps = {
    basic: undefined,
    tag: undefined,
    statusIcon: undefined
};

export default BasicRow;