(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.main = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  var tc = {};

  var toString = function toString(v) {
    return Object.prototype.toString.call(v);
  };

  /**
   * 判断变量是否是指定类型
   * @function
   * @name isType
   * @param {*} v 任何数据类型的变量
   * @param {string} t 需要判断的类型
   * @return {bool} 是否与需要判断的类型一致
   */
  tc.isType = function (v, t) {
    return toString(v) === '[object ' + t + ']';
  };

  /**
   * 获取变量类型
   * @function
   * @name getType
   * @param  {*} v 任意类型的变量
   * @return {string} 类型的变量（首字母大写）
   */
  tc.getType = function (v) {
    return toString(v).replace('[object ', '').replace(']', '');
  };

  ['String', 'Date', 'Number', 'Function', 'RegExp', 'Null', 'Undefined', 'Object', 'Error'].map(function (t) {
    tc['is' + t] = function (v) {
      return tc.isType(v, t);
    };
  });

  tc.isArray = (function () {
    return 'isArray' in Array ? Array.isArray : function (v) {
      return tc.isType(v, 'Array');
    };
  })();

  /**
   * 类型检查器，能够适用于node.js / browser
   * @module type-checker
   */
  module.exports = tc;
});

//# sourceMappingURL=type-checker.js.map