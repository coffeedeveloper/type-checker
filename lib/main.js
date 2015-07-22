let tc = {};

const toString = (v) => Object.prototype.toString.call(v);

/**
 * 判断变量是否是指定类型
 * @function
 * @name isType
 * @param {*} v 任何数据类型的变量
 * @param {string} t 需要判断的类型
 * @return {bool} 是否与需要判断的类型一致
 */
tc.isType = (v, t) => toString(v) === `[object ${t}]`;

/**
 * 获取变量类型
 * @function
 * @name getType
 * @param  {*} v 任意类型的变量
 * @return {string} 类型的变量（首字母大写）
 */
tc.getType = (v) => toString(v).replace('[object ', '').replace(']', '');

['String', 'Date', 'Number', 'Function', 'RegExp', 'Null', 'Undefined', 'Object', 'Error'].map((t) => {
  tc[`is${t}`] = (v) => tc.isType(v, t);
});

tc.isArray = (() => 'isArray' in Array ? Array.isArray : (v) => tc.isType(v, 'Array'))();

/**
 * 类型检查器，能够适用于node.js / browser
 * @module type-checker
 */
export default tc;
