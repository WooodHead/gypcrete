'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _anchored = require('./mixins/anchored');

var _anchored2 = _interopRequireDefault(_anchored);

var _renderToLayer = require('./mixins/renderToLayer');

var _renderToLayer2 = _interopRequireDefault(_renderToLayer);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnchoredTooltip = (0, _anchored2.default)({
    defaultPlacement: _anchored.ANCHORED_PLACEMENT.TOP,
    padding: 0
})(_Tooltip2.default);

exports.default = (0, _renderToLayer2.default)(AnchoredTooltip);