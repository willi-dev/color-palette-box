"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPaletteGroupItem = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var React = _interopRequireWildcard(require("react"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperColorGroupItem = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  border: 1px solid rgba(0,0,0,.1);\n  box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n  width: 135px;\n  font-size: 12px;\n  border-radius: 4px;\n  overflow: hidden;\n  .color-box, .color-desc {\n    height: 100px;\n    box-sizing: border-box;\n  }\n  .color-desc {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 10px 3px 0;\n  }\n  .color-name, .color-code, .desc {\n    color: rgba(51,51,51,0.6);\n    padding: 4px;\n  }\n  .color-name {\n    font-weight: 600;\n  }\n  .color-code {\n    font-size: 11px;\n    text-align: center;\n  }\n"])));
/**
 * ColorPaletteGroupItem
 * @param param0 
 * @returns 
 */


var ColorPaletteGroupItem = function ColorPaletteGroupItem(_ref) {
  var name = _ref.name,
      bgColor = _ref.bgColor,
      desc = _ref.desc;
  return /*#__PURE__*/React.createElement(WrapperColorGroupItem, null, /*#__PURE__*/React.createElement("div", {
    className: "color-box",
    style: {
      background: "".concat(bgColor)
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "color-desc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "color-name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "color-code"
  }, bgColor), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, desc)));
};

exports.ColorPaletteGroupItem = ColorPaletteGroupItem;
ColorPaletteGroupItem.propTypes = {
  name: _propTypes.default.string.isRequired,
  bgColor: _propTypes.default.string.isRequired,
  desc: _propTypes.default.string.isRequired
};
//# sourceMappingURL=index.js.map