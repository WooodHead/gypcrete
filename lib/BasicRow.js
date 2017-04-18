import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';

import FlexCell from './FlexCell';
import Tag from './Tag';
import TextEllipsis from './TextEllipsis';

import wrapIfNotElement from './utils/wrapIfNotElement';

function BasicRow(_ref) {
    var basic = _ref.basic,
        tag = _ref.tag,
        statusIcon = _ref.statusIcon,
        otherProps = _objectWithoutProperties(_ref, ['basic', 'tag', 'statusIcon']);

    return React.createElement(
        'div',
        otherProps,
        React.createElement(
            FlexCell,
            { shrink: true },
            React.createElement(
                TextEllipsis,
                null,
                basic
            )
        ),
        tag && wrapIfNotElement(tag, { with: Tag }),
        statusIcon && wrapIfNotElement(statusIcon, { with: 'span' })
    );
}

BasicRow.propTypes = {
    basic: PropTypes.node.isRequired,
    tag: PropTypes.node,
    statusIcon: PropTypes.node
};

BasicRow.defaultProps = {
    tag: null,
    statusIcon: null
};

export default BasicRow;