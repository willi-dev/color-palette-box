(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./colorgrouplist", "./colorgroupitem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./colorgrouplist"), require("./colorgroupitem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.colorgrouplist, global.colorgroupitem);
    global.undefined = mod.exports;
  }
})(this, function (exports, _colorgrouplist, _colorgroupitem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_colorgrouplist).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _colorgrouplist[key];
      }
    });
  });
  Object.keys(_colorgroupitem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _colorgroupitem[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map