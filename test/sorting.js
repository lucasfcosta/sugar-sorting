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

    assert.equal(sorter.bubbleSort().length, 6);
    for (var i = 0; i < sorter.getElements().length; i++) {
      assert.equal(sorter.getElements()[i], aSimpleArraySorted[i]);
    }
  });

  it('Should sort the object array by the selected property path', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.age').bubbleSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[2]);

    assert.equal(sorter.sortBy('.userId').bubbleSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.height').bubbleSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[0]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.yearsUntilGraduation').bubbleSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);
  });

  it('Should sort nested properties', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.family.numberOfChildren').bubbleSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[0]);
  });
});

describe.skip('Selection Sort', function () {
  it('Should sort the simple array correctly', function () {
    var sorter = new Sorter(aSimpleArray);

    assert.equal(sorter.selectionSort().length, 6);

    for (var i = 0; i < sorter.getElements().length; i++) {
      assert.equal(sorter.getElements()[i], aSimpleArraySorted[i]);
    }
  });

  it('Should sort the object array by the selected property path', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.age').selectionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[2]);

    assert.equal(sorter.sortBy('.userId').selectionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.height').selectionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[0]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.yearsUntilGraduation').selectionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);
  });

  it('Should sort nested properties', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.family.numberOfChildren').selectionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[0]);
  });
});

describe.skip('Insertion Sort', function () {
  it('Should sort the simple array correctly', function () {
    var sorter = new Sorter(aSimpleArray);

    assert.equal(sorter.insertionSort().length, 6);

    for (var i = 0; i < sorter.getElements().length; i++) {
      assert.equal(sorter.getElements()[i], aSimpleArraySorted[i]);
    }
  });

  it('Should sort the object array by the selected property path', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.age').insertionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[2]);

    assert.equal(sorter.sortBy('.userId').insertionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.height').insertionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[0]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.yearsUntilGraduation').insertionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);
  });

  it('Should sort nested properties', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.family.numberOfChildren').insertionSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[0]);
  });
});

describe.skip('Merge Sort', function () {
  it('Should sort the simple array correctly', function () {
    var sorter = new Sorter(aSimpleArray);

    assert.equal(sorter.mergeSort().length, 6);

    for (var i = 0; i < sorter.getElements().length; i++) {
      assert.equal(sorter.getElements()[i], aSimpleArraySorted[i]);
    }
  });

  it('Should sort the object array by the selected property path', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.age').mergeSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[2]);

    assert.equal(sorter.sortBy('.userId').mergeSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.height').mergeSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[0]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.yearsUntilGraduation').mergeSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);
  });

  it('Should sort nested properties', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.family.numberOfChildren').mergeSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[0]);
  });
});

describe.skip('Heap Sort', function () {
  it('Should sort the simple array correctly', function () {
    var sorter = new Sorter(aSimpleArray);

    assert.equal(sorter.heapSort().length, 6);

    for (var i = 0; i < sorter.getElements().length; i++) {
      assert.equal(sorter.getElements()[i], aSimpleArraySorted[i]);
    }
  });

  it('Should sort the object array by the selected property path', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.age').heapSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[2]);

    assert.equal(sorter.sortBy('.userId').heapSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.height').heapSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[0]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.yearsUntilGraduation').heapSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);
  });

  it('Should sort nested properties', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.family.numberOfChildren').heapSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[0]);
  });
});

describe.skip('Quick Sort', function () {
  it('Should sort the simple array correctly', function () {
    var sorter = new Sorter(aSimpleArray);

    assert.equal(sorter.quickSort().length, 6);

    for (var i = 0; i < sorter.getElements().length; i++) {
      assert.equal(sorter.getElements()[i], aSimpleArraySorted[i]);
    }
  });

  it('Should sort the object array by the selected property path', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.age').quickSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[2]);

    assert.equal(sorter.sortBy('.userId').quickSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.height').quickSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[0]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[1]);

    assert.equal(sorter.sortBy('.yearsUntilGraduation').quickSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[2]);
    assert.equal(sorter.getElements()[1], objectArray[0]);
    assert.equal(sorter.getElements()[2], objectArray[1]);
  });

  it('Should sort nested properties', function () {
    var sorter = new Sorter(objectArray);

    assert.equal(sorter.sortBy('.family.numberOfChildren').quickSort().length, 3);
    assert.equal(sorter.getElements()[0], objectArray[1]);
    assert.equal(sorter.getElements()[1], objectArray[2]);
    assert.equal(sorter.getElements()[2], objectArray[0]);
  });
});
