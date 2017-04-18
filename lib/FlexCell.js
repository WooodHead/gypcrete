import React from 'react';
import PropTypes from 'prop-types';

import icBEM from './utils/icBEM';


var COMPONENT_NAME = 'ic-flex-cell';
var ROOT_BEM = icBEM(COMPONENT_NAME);

function FlexCell(_ref) {
    var shrink = _ref.shrink,
        grow = _ref.grow,
        basis = _ref.basis,
        children = _ref.children;

    var flexStyles = {
        flexShrink: Number(shrink),
        flexGrow: Number(grow),
        flexBasis: basis
    };

    return React.createElement(
        'div',
        { className: ROOT_BEM, style: flexStyles },
        children
    );
}

FlexCell.propTypes = {
    shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    basis: PropTypes.string
};

FlexCell.defaultProps = {
    shrink: false,
    grow: false,
    basis: 'auto'
};

export default FlexCell;