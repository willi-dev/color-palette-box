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
  exports.ColorPaletteGroup = undefined;

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

  const WrapperColorGroup = _styled2.default.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 0 40px;
  .title {
    font-size: 14px;
    font-weight: 700;
    color: rgba(51,51,51,0.4);
    margin: 0;
    margin-bottom: 10px;
  }
  .grouping-list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
  }
`;
  /**
   * ColorPaletteGroup
   * @param param0 
   * @returns 
   */

  const ColorPaletteGroup = exports.ColorPaletteGroup = ({
    title,
    children
  }) => {
    return /*#__PURE__*/React.createElement(WrapperColorGroup, null, typeof title !== 'undefined' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
      className: "title"
    }, title)), /*#__PURE__*/React.createElement("div", {
      className: "grouping-list"
    }, children));
  };

  ColorPaletteGroup.propTypes = {
    title: _propTypes2.default.string,
    children: _propTypes2.default.node
  };
});
//# sourceMappingURL=index.js.map