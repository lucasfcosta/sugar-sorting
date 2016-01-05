'use strict';
const assert = require('chai').assert;
var Sorter = require('../lib/sorter.js');

var aSimpleArray = [2,6,5,1,4,3];
var aSimpleArraySorted = [1, 2, 3, 4, 5, 6];

var objectArray = [{
    name: 'Vin Diesel',
    age: 28,
    userId: 78,
    height: 1.80,
    yearsUntilGraduation: 7,
    family: {
      numberOfChildren: 3
    }
  },
  {
    name: 'Addy Osmani',
    age: 23,
    userId: 94,
    height: 1.90,
    yearsUntilGraduation: 9,
    family: {
      numberOfChildren: 0
    }
  },
  {
    name: 'Paul Walker',
    age: 666,
    userId: 22,
    height: 1.85,
    yearsUntilGraduation: 0,
    family: {
      numberOfChildren: 1
    }
}];

describe.skip('Bubble Sort', function () {
  it('Should sort the simple array correctly', function () {
    var sorter = new Sorter(aSimpleArray);

    assert.strictEqual(sorter.bubbleSort().length, 6);
    assert.strictEqual(sorter.getElements(), aSimpleArraySorted);
  });

  it('Should sort the object array by the selected property path', function () {
    var sorter = new Sorter(objectArray);

    assert.strictEqual(sorter.sortBy('.age').bubbleSort().length, 3);
    assert.deepEqual(sorter.getElements()[0], objectArray[1]);
    assert.deepEqual(sorter.getElements()[1], objectArray[0]);
    assert.deepEqual(sorter.getElements()[2], objectArray[2]);

    assert.strictEqual(sorter.sortBy('.userId').bubbleSort().length, 3);
    assert.deepEqual(sorter.getElements()[0], objectArray[2]);
    assert.deepEqual(sorter.getElements()[1], objectArray[0]);
    assert.deepEqual(sorter.getElements()[2], objectArray[1]);

    assert.strictEqual(sorter.sortBy('.height').bubbleSort().length, 3);
    assert.deepEqual(sorter.getElements()[0], objectArray[0]);
    assert.deepEqual(sorter.getElements()[1], objectArray[2]);
    assert.deepEqual(sorter.getElements()[2], objectArray[1]);

    assert.strictEqual(sorter.sortBy('.yearsUntilGraduation').bubbleSort().length, 3);
    assert.deepEqual(sorter.getElements()[0], objectArray[2]);
    assert.deepEqual(sorter.getElements()[1], objectArray[0]);
    assert.deepEqual(sorter.getElements()[2], objectArray[1]);
  });

  it('Should sort nested properties', function () {
    var sorter = new Sorter(objectArray);

    assert.strictEqual(sorter.sortBy('.family.numberOfChildren').bubbleSort().length, 3);
    assert.deepEqual(sorter.getElements()[0], objectArray[1]);
    assert.deepEqual(sorter.getElements()[1], objectArray[2]);
    assert.deepEqual(sorter.getElements()[2], objectArray[0]);
  });
});
