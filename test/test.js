/*!
 * method-names <https://github.com/jonschlinkert/method-names>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var methods = require('../');


describe('method-names:', function () {
  it('should return the specified range.', function () {
    expect(methods(require('chai'))).to.eql([
      'AssertionError',
      'use',
      'Assertion',
      'expect',
      'should',
      'Should',
      'assert'
    ]);
  });
});