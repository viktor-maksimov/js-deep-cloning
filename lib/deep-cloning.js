(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.deepCloning = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  (function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.deepCloning = mod.exports;
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : void 0, function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
      value: true
    });
    _exports.deepClone = deepClone;

    function deepClone(src) {
      let target;

      if (src === null) {
        target = src;
      } else if (src instanceof Date) {
        target = new Date(src);
      } else if (typeof src === "object") {
        if (Array.isArray(src)) {
          target = [];

          for (let i = 0; i < src.length; i++) {
            if (src[i] instanceof Date) {
              target.push(new Date(src[i]));
            } else if (typeof src[i] === "object") {
              target.push(deepClone(src[i]));
            } else {
              target.push(src[i]);
            }
          }
        } else {
          target = {};

          for (const prop in src) {
            if (Object.prototype.hasOwnProperty.call(src, prop)) {
              if (src[prop] instanceof Date) {
                target[prop] = new Date(src[prop]);
              } else if (typeof src[prop] === "object") {
                target[prop] = deepClone(src[prop]);
              } else {
                target[prop] = src[prop];
              }
            }
          }
        }
      } else {
        target = src;
      }

      return target;
    }
  });
});