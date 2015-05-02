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

  // Returns a new sorter object containing [full_object, key_value] for each item.
  // Toggles the _simpleArray variable so the module knows it needs to run the
  // specific function for this new data structure ([key_value, full_object] pairs).
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

  // Clears the key_value element on the sorter object for arrays made of objects
  function clearObjectArray(objectArray) {
    var finalArray = [];
    for (var i = 0; i < objectArray.length; i++) {
      finalArray.push(objectArray[i][0]);
    }
    return finalArray;
  }

  // Every sorting algorithm has two versions.
  // One is for simple arrays and ends with 'Array', the other
  // is for arrays made of full_object/key value pairs.
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

  // This is public and calls the corresponding private function for each situation.
  // This is the pattern for all the sorting algorithms.
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

  // Merges two lists that are already sorted.
  // Works only for simple arrays.
  function _mergeArray(left, right) {

    var result = [];

    // Left and Right iterators, respectively
    var il = 0;
    var ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

  // Merges two lists that are already sorted
  function _merge(left, right) {
    var result = [];

    // Left and Right iterators, respectively
    var il = 0;
    var ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il][1] < right[ir][1]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

  function _mergeSort(el) {
    if (el.length < 2) {
      return el;
    }

    var middle = Math.floor(el.length / 2);
    var left = el.slice(0, middle);
    var right = el.slice(middle);

    // Decides which merge function to use according to array kind
    if (_simpleArray) {
      return _mergeArray(_mergeSort(left), _mergeSort(right));
    } else {
      return _merge(_mergeSort(left), _mergeSort(right));
    }
  }

  this.mergeSort = function() {
    _elements = _mergeSort(_elements);
    if (_simpleArray) {
      return _elements;
    } else {
      _elements = clearObjectArray(_elements);
      return _elements;
    }
  }

}

module.exports = Sorter;
