/* global describe, it */
/* jshint expr: true */

'use strict';

var expect      = require('chai').expect,
    Constructor = require(process.cwd() + '/lib/Constructor');

describe('Mocha', function () {
  it('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});
