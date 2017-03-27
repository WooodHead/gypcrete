import React from 'react';


import { ROW_COMP_BODY } from './mixins/rowComp';

function RowCompBody(_ref) {
    var children = _ref.children;

    return React.createElement(
        'div',
        { className: ROW_COMP_BODY },
        children
    );
}

export default RowCompBody;