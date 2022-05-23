require("react");
var $b8jNC$emotionstyledbase = require("@emotion/styled/base");
var $b8jNC$reactjsxruntime = require("react/jsx-runtime");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5dcc767f924b770d$exports = {};
var $968ad0bf0d57a76e$exports = {};

$parcel$export($968ad0bf0d57a76e$exports, "ColorPaletteGroup", () => $968ad0bf0d57a76e$export$85630d8e696a6125);



function $968ad0bf0d57a76e$var$_EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const $968ad0bf0d57a76e$var$WrapperColorGroup = ($parcel$interopDefault($b8jNC$emotionstyledbase))("div", {
    target: "e1gcvfzb0"
})({
    name: "1tha15v",
    styles: "font-family:Arial,Helvetica,sans-serif;padding:0 0 40px;.title{font-size:14px;font-weight:700;color:rgba(51,51,51,0.4);margin:0;margin-bottom:10px;}.grouping-list{display:flex;flex-wrap:wrap;row-gap:10px;column-gap:10px;}"
});
const $968ad0bf0d57a76e$export$85630d8e696a6125 = ({ title: title , children: children  })=>{
    return /*#__PURE__*/ $b8jNC$reactjsxruntime.jsxs($968ad0bf0d57a76e$var$WrapperColorGroup, {
        children: [
            typeof title !== 'undefined' && /*#__PURE__*/ $b8jNC$reactjsxruntime.jsx($b8jNC$reactjsxruntime.Fragment, {
                children: /*#__PURE__*/ $b8jNC$reactjsxruntime.jsx("h3", {
                    className: "title",
                    children: title
                })
            }),
            /*#__PURE__*/ $b8jNC$reactjsxruntime.jsx("div", {
                className: "grouping-list",
                children: children
            })
        ]
    });
};


var $15d70907e9234fcd$exports = {};

$parcel$export($15d70907e9234fcd$exports, "ColorPaletteGroupItem", () => $15d70907e9234fcd$export$f4d33b70e25852b8);



function $15d70907e9234fcd$var$_EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const $15d70907e9234fcd$var$WrapperColorGroupItem = ($parcel$interopDefault($b8jNC$emotionstyledbase))("div", {
    target: "ezuz5170"
})({
    name: "mea9ou",
    styles: "box-sizing:border-box;border:1px solid rgba(0,0,0,.1);box-shadow:rgb(0 0 0 / 10%) 0 1px 3px 0;display:flex;flex-direction:column;height:200px;width:135px;font-size:12px;border-radius:4px;overflow:hidden;.color-box,.color-desc{height:100px;box-sizing:border-box;}.color-desc{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:10px 3px 0;background:#FFFFFF;}.color-name,.color-code,.desc{color:rgba(51,51,51,0.6);padding:4px;}.color-name{font-weight:600;}.color-code{font-size:11px;text-align:center;}"
});
const $15d70907e9234fcd$export$f4d33b70e25852b8 = ({ name: name , bgColor: bgColor , desc: desc  })=>{
    return /*#__PURE__*/ $b8jNC$reactjsxruntime.jsxs($15d70907e9234fcd$var$WrapperColorGroupItem, {
        children: [
            /*#__PURE__*/ $b8jNC$reactjsxruntime.jsx("div", {
                className: "color-box",
                style: {
                    background: `${bgColor}`
                }
            }),
            /*#__PURE__*/ $b8jNC$reactjsxruntime.jsxs("div", {
                className: "color-desc",
                children: [
                    /*#__PURE__*/ $b8jNC$reactjsxruntime.jsx("div", {
                        className: "color-name",
                        children: name
                    }),
                    /*#__PURE__*/ $b8jNC$reactjsxruntime.jsx("div", {
                        className: "color-code",
                        children: bgColor
                    }),
                    /*#__PURE__*/ $b8jNC$reactjsxruntime.jsx("div", {
                        className: "desc",
                        children: desc
                    })
                ]
            })
        ]
    });
};


$parcel$exportWildcard($5dcc767f924b770d$exports, $968ad0bf0d57a76e$exports);
$parcel$exportWildcard($5dcc767f924b770d$exports, $15d70907e9234fcd$exports);


$parcel$exportWildcard(module.exports, $5dcc767f924b770d$exports);


//# sourceMappingURL=index.js.map
