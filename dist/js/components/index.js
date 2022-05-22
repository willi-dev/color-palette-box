"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorgrouplist = require("./colorgrouplist");

Object.keys(_colorgrouplist).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colorgrouplist[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colorgrouplist[key];
    }
  });
});

var _colorgroupitem = require("./colorgroupitem");

Object.keys(_colorgroupitem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colorgroupitem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colorgroupitem[key];
    }
  });
});
//# sourceMappingURL=index.js.map