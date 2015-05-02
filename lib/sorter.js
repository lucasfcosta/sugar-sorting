'use strict';
var Sorter = function(array) {
  // May contain a simple array or an array made of objects
  var _elements = array;

  // This indicates if sorter contains a simple array.
  // Based on this 'var' the module will decide which sort
  // function it should use.
  var _simpleArray = true;

  this.getElements = function() {
    return _elements;
  }

  this.fillWith = function(newArray) {
    _elements = newArray;
    _simpleArray = true;
  }

  this.toggleSimpleArray = function() {
    _simpleArray = !_simpleArray;
    return _simpleArray;
  }

  this.sortBy = function(path) {
    var elements = [];
    for (var i = 0; i < _elements.length; i++) {
      var significantElement = []
      significantElement.push(_elements[i]);
      significantElement.push(eval('_elements['+i+']'+path));
      elements.push(significantElement);
    }
    var sorter = new Sorter(elements);
    sorter.toggleSimpleArray();
    return sorter;
  }

  function _bubbleSort() {
    var swapped = true;
    while(swapped) {
      swapped = false;
      for (var i = 0; i < _elements.length -1; i++) {
        if (_elements[i][1] > _elements[i+1][1]) {
          var bigger = _elements[i];
          _elements[i] = _elements[i+1];
          _elements[i+1] = bigger;
          swapped = true;
        }
      }
    }
    return _elements;
  }

  function _bubbleSortArray() {
    var swapped = true;
    while(swapped) {
      swapped = false;
      for (var i = 0; i < _elements.length - 1; i++) {
        if (_elements[i] > _elements[i+1]) {
          var bigger = _elements[i];
          _elements[i] = _elements[i+1];
          _elements[i+1] = bigger;
          swapped = true;
        }
      }
    }
    return _elements;
  }

  this.bubbleSort = function() {
    if (_simpleArray) {
      return _bubbleSortArray();
    } else {
      return _bubbleSort();
    }
  }

}

module.exports = Sorter;
