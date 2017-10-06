import _defineProperty from 'babel-runtime/helpers/defineProperty';

import classNames from 'classnames';
import prefixClass from './prefixClass';

var PREFIX = 'state';

var CLASS_ACTIVE = prefixClass(PREFIX + '-active');
var CLASS_HIGHLIGHT = prefixClass(PREFIX + '-highlight');
var CLASS_ERROR = prefixClass(PREFIX + '-error');
var CLASS_DISABLED = prefixClass(PREFIX + '-disabled');
var CLASS_UNTOUCHABLE = prefixClass(PREFIX + '-untouchable');

function getStateClassnames(stateProps) {
    var _classNames;

    var results = classNames((_classNames = {}, _defineProperty(_classNames, CLASS_ACTIVE, stateProps.active), _defineProperty(_classNames, CLASS_HIGHLIGHT, stateProps.highlight), _defineProperty(_classNames, CLASS_ERROR, stateProps.error), _defineProperty(_classNames, CLASS_DISABLED, stateProps.disabled), _defineProperty(_classNames, CLASS_UNTOUCHABLE, stateProps.untouchable), _classNames));

    return results;
}

export default getStateClassnames;