/*!
 * method-names <https://github.com/jonschlinkert/method-names>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

/* deps:mocha */
var should = require('should');
var methods = require('./');

describe('method-names:', function () {
  it('should return a list of methods from the given module.', function () {
    var res = methods(require('should'));

    res.should.eql([
      'AssertionError',
      'Assertion',
      'format',
      'type',
      'extend',
      'noConflict',
      'use',
      'fail',
      'ok',
      'equal',
      'notEqual',
      'deepEqual',
      'notDeepEqual',
      'strictEqual',
      'notStrictEqual',
      'throws',
      'doesNotThrow',
      'ifError',
      'exists',
      'exist'
    ]);
  });
});
