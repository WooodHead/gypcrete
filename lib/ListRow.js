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

import { statusPropTypes } from './mixins/withStatus';

import prefixClass from './utils/prefixClass';
import getStateClassnames from './utils/getStateClassnames';
import icBEM from './utils/icBEM';
import wrapIfNotElement from './utils/wrapIfNotElement';

import { STATUS_CODE } from './StatusIcon';

export var COMPONENT_NAME = prefixClass('list-row');
var ROOT_BEM = icBEM(COMPONENT_NAME);
export var BEM = {
    root: ROOT_BEM,
    body: ROOT_BEM.element('body'),
    footer: ROOT_BEM.element('footer')
};

var ListRow = function (_PureComponent) {
    _inherits(ListRow, _PureComponent);

    function ListRow() {
        _classCallCheck(this, ListRow);

        return _possibleConstructorReturn(this, (ListRow.__proto__ || _Object$getPrototypeOf(ListRow)).apply(this, arguments));
    }

    _createClass(ListRow, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                status: this.props.status,
                statusOptions: this.props.statusOptions
            };
        }
    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            var _props = this.props,
                desc = _props.desc,
                errorMsg = _props.errorMsg;

            var hasFooter = desc || errorMsg;

            if (!hasFooter) {
                return null;
            }

            return React.createElement(
                'div',
                { className: BEM.footer.toString() },
                wrapIfNotElement(errorMsg, { with: 'p' }),
                wrapIfNotElement(desc, { with: 'p' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                highlight = _props2.highlight,
                nestedList = _props2.nestedList,
                desc = _props2.desc,
                status = _props2.status,
                statusOptions = _props2.statusOptions,
                errorMsg = _props2.errorMsg,
                className = _props2.className,
                children = _props2.children,
                wrapperProps = _objectWithoutProperties(_props2, ['highlight', 'nestedList', 'desc', 'status', 'statusOptions', 'errorMsg', 'className', 'children']);

            var bemClass = BEM.root.modifier('highlight', highlight);

            var stateClass = getStateClassnames({
                error: status === STATUS_CODE.ERROR
            });
            var rootClassName = classNames(bemClass.toString(), stateClass, className);

            return React.createElement(
                'li',
                _extends({ className: rootClassName }, wrapperProps),
                React.createElement(
                    'div',
                    { className: BEM.body.toString() },
                    children
                ),
                this.renderFooter(),
                nestedList
            );
        }
    }]);

    return ListRow;
}(PureComponent);

ListRow.propTypes = _extends({
    highlight: PropTypes.bool,
    nestedList: PropTypes.node,
    desc: PropTypes.node

}, statusPropTypes);
ListRow.defaultProps = {
    highlight: false,
    nestedList: undefined,
    desc: undefined
};
ListRow.childContextTypes = {
    status: statusPropTypes.status,
    statusOptions: statusPropTypes.statusOptions
};


export default ListRow;