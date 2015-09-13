'use strict';
var assert = require('assert');
var Sorter = require('../sorter.js');

var aSimpleArray = [2,6,5,1,4,3];
var newArray = [9,10,8];

describe('Sorter Properties', function () {
  it('Should return the array elements inserted on the sorter object', function () {
      var sorter = new Sorter(aSimpleArray);

      for (var i = 0; i < sorter.getElements().length; i++) {
        assert.equal(sorter.getElements()[i], aSimpleArray[i]);
      }
  });

  it('Should return the elements inserted using fillWith()', function () {
      var sorter = new Sorter(aSimpleArray);

      for (var i = 0; i < sorter.getElements().length; i++) {
        assert.equal(sorter.getElements()[i], aSimpleArray[i]);
      }

      sorter.fillWith(newArray);

      for (var j = 0; j < sorter.getElements().length; j++) {
        assert.equal(sorter.getElements()[j], newArray[j]);
      }
  });

  it('Should not change the array used to fill the sorter after sorting', function () {
      var sorter = new Sorter(aSimpleArray);

      // Creates a new array with the state of aSimpleArray before the sorting method call
      var beforeSorting = aSimpleArray.slice(0);
      sorter.bubbleSort();

      // Checks if aSimpleArray is still the same as before sorting it
      for (var i = 0; i < aSimpleArray.length; i++) {
        assert.equal(beforeSorting[i], aSimpleArray[i]);
      }

      // Fills with a new array and checks if it references it or duplicates it
      sorter.fillWith(newArray);
      beforeSorting = newArray.slice(0);
      sorter.bubbleSort();
      for (var j = 0; j < aSimpleArray.length; j++) {
        assert.equal(beforeSorting[j], newArray[j]);
      }
  });
});
