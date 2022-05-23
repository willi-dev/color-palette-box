import "react";
import $26Zo0$emotionstyledbase from "@emotion/styled/base";
import {jsxs as $26Zo0$jsxs, jsx as $26Zo0$jsx, Fragment as $26Zo0$Fragment} from "react/jsx-runtime";

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a69491ea5a126553$exports = {};
var $2d3a98b6bb9e0141$exports = {};

$parcel$export($2d3a98b6bb9e0141$exports, "ColorPaletteGroup", () => $2d3a98b6bb9e0141$export$85630d8e696a6125);



function $2d3a98b6bb9e0141$var$_EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const $2d3a98b6bb9e0141$var$WrapperColorGroup = $26Zo0$emotionstyledbase("div", {
    target: "e1gcvfzb0"
})({
    name: "1tha15v",
    styles: "font-family:Arial,Helvetica,sans-serif;padding:0 0 40px;.title{font-size:14px;font-weight:700;color:rgba(51,51,51,0.4);margin:0;margin-bottom:10px;}.grouping-list{display:flex;flex-wrap:wrap;row-gap:10px;column-gap:10px;}"
});
const $2d3a98b6bb9e0141$export$85630d8e696a6125 = ({ title: title , children: children  })=>{
    return /*#__PURE__*/ $26Zo0$jsxs($2d3a98b6bb9e0141$var$WrapperColorGroup, {
        children: [
            typeof title !== 'undefined' && /*#__PURE__*/ $26Zo0$jsx($26Zo0$Fragment, {
                children: /*#__PURE__*/ $26Zo0$jsx("h3", {
                    className: "title",
                    children: title
                })
            }),
            /*#__PURE__*/ $26Zo0$jsx("div", {
                className: "grouping-list",
                children: children
            })
        ]
    });
};


var $1b92b613d23dc996$exports = {};

$parcel$export($1b92b613d23dc996$exports, "ColorPaletteGroupItem", () => $1b92b613d23dc996$export$f4d33b70e25852b8);



function $1b92b613d23dc996$var$_EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const $1b92b613d23dc996$var$WrapperColorGroupItem = $26Zo0$emotionstyledbase("div", {
    target: "ezuz5170"
})({
    name: "mea9ou",
    styles: "box-sizing:border-box;border:1px solid rgba(0,0,0,.1);box-shadow:rgb(0 0 0 / 10%) 0 1px 3px 0;display:flex;flex-direction:column;height:200px;width:135px;font-size:12px;border-radius:4px;overflow:hidden;.color-box,.color-desc{height:100px;box-sizing:border-box;}.color-desc{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:10px 3px 0;background:#FFFFFF;}.color-name,.color-code,.desc{color:rgba(51,51,51,0.6);padding:4px;}.color-name{font-weight:600;}.color-code{font-size:11px;text-align:center;}"
});
const $1b92b613d23dc996$export$f4d33b70e25852b8 = ({ name: name , bgColor: bgColor , desc: desc  })=>{
    return /*#__PURE__*/ $26Zo0$jsxs($1b92b613d23dc996$var$WrapperColorGroupItem, {
        children: [
            /*#__PURE__*/ $26Zo0$jsx("div", {
                className: "color-box",
                style: {
                    background: `${bgColor}`
                }
            }),
            /*#__PURE__*/ $26Zo0$jsxs("div", {
                className: "color-desc",
                children: [
                    /*#__PURE__*/ $26Zo0$jsx("div", {
                        className: "color-name",
                        children: name
                    }),
                    /*#__PURE__*/ $26Zo0$jsx("div", {
                        className: "color-code",
                        children: bgColor
                    }),
                    /*#__PURE__*/ $26Zo0$jsx("div", {
                        className: "desc",
                        children: desc
                    })
                ]
            })
        ]
    });
};


$parcel$exportWildcard($a69491ea5a126553$exports, $2d3a98b6bb9e0141$exports);
$parcel$exportWildcard($a69491ea5a126553$exports, $1b92b613d23dc996$exports);




export {$2d3a98b6bb9e0141$export$85630d8e696a6125 as ColorPaletteGroup, $1b92b613d23dc996$export$f4d33b70e25852b8 as ColorPaletteGroupItem};
//# sourceMappingURL=index.js.map
