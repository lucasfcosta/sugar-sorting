'use strict';
var assert = require('assert');
var Sorter = require('../lib/sorter.js');

var aSimpleArray = [2,6,5,1,4,3];

describe('Sorter Properties', function () {
  it('Should return the array elements inserted on the sorter object', function () {
      var sorter = new Sorter(aSimpleArray);
      assert.equal(sorter.getElements(), aSimpleArray);
  });

  it('Should toggle simpleArray property and check if was really done', function () {
      var sorter = new Sorter(aSimpleArray);
      assert.equal(sorter.toggleSimpleArray(), false);
      assert.equal(sorter.toggleSimpleArray(), true);
  });
});
