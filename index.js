/*!
 * method-names <https://github.com/jonschlinkert/method-names>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/**
 * **Example:**
 *
 * ```js
 * var methods = require('method-names');
 * console.log(methods(require('chai')));
 * //=> [ 'AssertionError', 'use', 'Assertion', 'expect', 'should', 'Should', 'assert' ]
 * ```
 *
 * **Params:**
 *
 * @param {Object} `obj` The object to inspect.
 * @returns {Array} Returns an array of property names.
 */

module.exports = function methods(obj) {
  if (obj == null) {
    return [];
  }

  obj = Object(obj);

  var len = obj.length;
  len = (typeof len === 'number' && len > 0 && Array.isArray(obj) && len) >>> 0;

  var result = Array(len);

  var i = -1;
  while ((i += 1) < len) {
    result[i] = String(i);
  }

  var isPrototype = obj.constructor && obj === obj.constructor.prototype;

  var idx;
  for (var key in obj) {
    if (!(isPrototype && key === 'constructor') && !(len > 0 && (idx = +key, idx > -1 && idx <= (len - 1) && idx % 1 === 0))) {
      if (typeof obj[key] === 'function' || false) {
        result.push(key);
      }
    }
  }
  return result;
};