"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPaletteGroup = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var React = _interopRequireWildcard(require("react"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperColorGroup = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 0 40px;\n  .title {\n    font-size: 14px;\n    font-weight: 700;\n    color: rgba(51,51,51,0.4);\n    margin: 0;\n    margin-bottom: 10px;\n  }\n  .grouping-list {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 10px;\n    column-gap: 10px;\n  }\n"])));
/**
 * ColorPaletteGroup
 * @param param0 
 * @returns 
 */


var ColorPaletteGroup = function ColorPaletteGroup(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(WrapperColorGroup, null, typeof title !== 'undefined' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "grouping-list"
  }, children));
};

exports.ColorPaletteGroup = ColorPaletteGroup;
ColorPaletteGroup.propTypes = {
  title: _propTypes.default.string,
  children: _propTypes.default.node
};
//# sourceMappingURL=index.js.map