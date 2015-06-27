'use strict';
var assert = require('assert');
var Sorter = require('../lib/sorter.js');

var aSimpleArray = [2,6,5,1,4,3];
var aSimpleArraySorted = [1, 2, 3, 4, 5, 6];

var objectArray = [{
    name: 'Vin Diesel',
    age: 28,
    userId: 78,
    height: 1.80,
    yearsUntilGraduation: 7
  },
  {
    name: 'Addy Osmani',
    age: 23,
    userId: 94,
    height: 1.90,
    yearsUntilGraduation: 9
  },
  {
    name: 'Paul Walker',
    age: 666,
    userId: 22,
    height: 1.85,
    yearsUntilGraduation: 0
}];

describe('Bubble Sorting', function () {
  it('Should sort the simple array correctly', function () {
    var sorter = new Sorter(aSimpleArray);
    assert.equal(sorter.bubbleSort().length, 6);
    for (var i = 0; i < sorter.getElements().length; i++) {
      assert.equal(sorter.getElements()[i], aSimpleArraySorted[i]);
    }
  });

  it('Should sort the object array by the selected property path', function () {
    var sorter = new Sorter(objectArray);
    sorter.sortBy('.age').bubbleSort();
    console.log(sorter.getElements());
    assert.equal(sorter.getElements()[0], objectArray[0]);
  });
});
