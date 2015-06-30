'use strict';
var assert = require('assert');
var Sorter = require('../lib/sorter.js');

var aSimpleArray = [2,6,5,1,4,3];

describe('Sorter Properties', function () {
  it('Should return the array elements inserted on the sorter object', function () {
      var sorter = new Sorter(aSimpleArray);

      for (var i = 0; i < sorter.getElements().length; i++) {
        assert.equal(sorter.getElements()[i], aSimpleArray[i]);
      }
  });
});
