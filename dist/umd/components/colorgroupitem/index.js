(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "@emotion/styled", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("@emotion/styled"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.styled, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _styled, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ColorPaletteGroupItem = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _styled2 = _interopRequireDefault(_styled);

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const WrapperColorGroupItem = _styled2.default.div`
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 135px;
  font-size: 12px;
  border-radius: 4px;
  overflow: hidden;
  .color-box, .color-desc {
    height: 100px;
    box-sizing: border-box;
  }
  .color-desc {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 3px 0;
  }
  .color-name, .color-code, .desc {
    color: rgba(51,51,51,0.6);
    padding: 4px;
  }
  .color-name {
    font-weight: 600;
  }
  .color-code {
    font-size: 11px;
    text-align: center;
  }
`;
  /**
   * ColorPaletteGroupItem
   * @param param0 
   * @returns 
   */

  const ColorPaletteGroupItem = exports.ColorPaletteGroupItem = ({
    name,
    bgColor,
    desc
  }) => {
    return /*#__PURE__*/React.createElement(WrapperColorGroupItem, null, /*#__PURE__*/React.createElement("div", {
      className: "color-box",
      style: {
        background: `${bgColor}`
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

  ColorPaletteGroupItem.propTypes = {
    name: _propTypes2.default.string.isRequired,
    bgColor: _propTypes2.default.string.isRequired,
    desc: _propTypes2.default.string.isRequired
  };
});
//# sourceMappingURL=index.js.map