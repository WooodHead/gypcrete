import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import prefixClass from './utils/prefixClass';
import icBEM from './utils/icBEM';

export var COMPONENT_NAME = prefixClass('list-row');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    body: ROOT_BEM.element('body')
};

var ListRow = function (_PureComponent) {
    _inherits(ListRow, _PureComponent);

    function ListRow() {
        _classCallCheck(this, ListRow);

        return _possibleConstructorReturn(this, (ListRow.__proto__ || _Object$getPrototypeOf(ListRow)).apply(this, arguments));
    }

    _createClass(ListRow, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                nestedList = _props.nestedList,
                className = _props.className,
                children = _props.children,
                wrapperProps = _objectWithoutProperties(_props, ['nestedList', 'className', 'children']);

            var bemClass = BEM.root;
            var rootClassName = classNames(bemClass.toString(), className);

            return React.createElement(
                'li',
                _extends({ className: rootClassName }, wrapperProps),
                React.createElement(
                    'div',
                    { className: BEM.body.toString() },
                    children
                ),
                nestedList
            );
        }
    }]);

    return ListRow;
}(PureComponent);

ListRow.propTypes = {
    nestedList: PropTypes.node
};
ListRow.defaultProps = {
    nestedList: undefined
};


export default ListRow;