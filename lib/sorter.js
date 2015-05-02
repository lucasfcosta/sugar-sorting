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

  function clearObjectArray(objectArray) {
    var finalArray = [];
    for (var i = 0; i < objectArray.length; i++) {
      finalArray.push(objectArray[i][0]);
    }
    return finalArray;
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
    _elements = clearObjectArray(_elements);
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

  function _selectionSortArray() {
    for (var i = 0; i < _elements.length; i++) {
      var k = i;
      for (var j = i + 1; j < _elements.length; j++) {
        if (_elements[j] < _elements[k]) {
          var bigger = _elements[k];
          _elements[k] = _elements[j];
          _elements[j] = bigger;
        }
      }
    }
    return _elements;
  }

  function _selectionSort() {
    for (var i = 0; i < _elements.length; i++) {
      var k = i;
      for (var j = i + 1; j < _elements.length; j++) {
        if (_elements[j][1] < _elements[k][1]) {
          var bigger = _elements[k];
          _elements[k] = _elements[j];
          _elements[j] = bigger;
        }
      }
    }
    _elements = clearObjectArray(_elements);
    return _elements;
  }

  this.selectionSort = function() {
    if (_simpleArray) {
      return _selectionSortArray();
    } else {
      return _selectionSort();
    }
  }

  function _insertionSortArray() {
    for (var i = 2; i < _elements.length; i++) {
      for (var k = i; k > 1 && _elements[k] < _elements[k-1]; k--) {
        var bigger = _elements[k-1];
        _elements[k-1] = _elements[k];
        _elements[k] = bigger;
      }
    }
    return _elements;
  }

  function _insertionSort() {
    for (var i = 2; i < _elements.length; i++) {
      for (var k = i; k > 1 && _elements[k][1] < _elements[k-1][1]; k--) {
        var bigger = _elements[k-1];
        _elements[k-1] = _elements[k];
        _elements[k] = bigger;
      }
    }
    _elements = clearObjectArray(_elements);
    return _elements;
  }

  this.insertionSort = function() {
    if (_simpleArray) {
      return _insertionSortArray();
    } else {
      return _insertionSort();
    }
  }

}

module.exports = Sorter;
