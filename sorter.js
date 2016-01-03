'use strict';
var Sorter = function(array) {
  // May contain a simple array or an array made of objects
  var _elements = array.slice(0);

  // This indicates if sorter contains a simple array.
  // Based on this 'var' the module will decide which sort
  // function it should use.
  var _simpleArray = true;

  this.getElements = function() {
    return _elements;
  };

  this.fillWith = function(newArray) {
    _elements = newArray.slice(0);
    _simpleArray = true
  };

  // Returns the sorter object itself containing [full_object, key_value] for each item.
  // Toggles the _simpleArray variable so the module knows it needs to run the
  // specific function to sort this new data structure ([key_value, full_object] pairs).
  this.sortBy = function(path) {
    var elements = [];
    for (var i = 0; i < _elements.length; i++) {
      var significantElement = [];
      significantElement.push(_elements[i]);
      significantElement.push(eval('_elements['+i+']'+path));
      elements.push(significantElement);
    }
    _elements = elements;
    _simpleArray = false;
    return this;
  };

  // Clears the key_value element on the sorter object for arrays made of objects
  function _clearObjectArray(objectArray) {
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
    _elements = _clearObjectArray(_elements);
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
  };

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
    _elements = _clearObjectArray(_elements);
    return _elements;
  }

  this.selectionSort = function() {
    if (_simpleArray) {
      return _selectionSortArray();
    } else {
      return _selectionSort();
    }
  };

  function _insertionSortArray() {
    for (var i = 0; i < _elements.length; i++) {
      var k = _elements[i];
      for (var j = i; j > 0 && k < _elements[j - 1]; j--) {
        _elements[j] = _elements[j - 1];
      }
      _elements[j] = k;
    }
   return _elements;
  }

  function _insertionSort() {
    for (var i = 0; i < _elements.length; i++) {
      var k = _elements[i];
      for (var j = i; j > 0 && k[1] < _elements[j - 1][1]; j--) {
        _elements[j] = _elements[j - 1];
      }
      _elements[j] = k;
    }
    _elements = _clearObjectArray(_elements);
    return _elements;
  }

  this.insertionSort = function() {
    if (_simpleArray) {
      return _insertionSortArray();
    } else {
      return _insertionSort();
    }
  };

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
      _elements = _clearObjectArray(_elements);
      return _elements;
    }
  };

  function _heapifyArray(index, heapSize) {
    var left = 2 * index + 1;
    var right = 2 * index + 2;
    var largest = index;

    if (left < heapSize && _elements[left] > _elements[index]) {
      largest = left;
    }

    if (right < heapSize && _elements[right] > _elements[largest]) {
      largest = right;
    }

    if (largest !== index) {
      var temp = _elements[index];
      _elements[index] = _elements[largest];
      _elements[largest] = temp;
      _heapifyArray(largest, heapSize);
    }
  }

  function _heapify(index, heapSize) {
    var left = 2 * index + 1;
    var right = 2 * index + 2;
    var largest = index;

    if (left < heapSize && _elements[left][1] > _elements[index][1]) {
      largest = left;
    }

    if (right < heapSize && _elements[right][1] > _elements[largest][1]) {
      largest = right;
    }

    if (largest !== index) {
      var temp = _elements[index];
      _elements[index] = _elements[largest];
      _elements[largest] = temp;
      _heapify(largest, heapSize);
    }
  }

  function _buildMaxHeap() {
    for (var i = Math.floor(_elements.length / 2); i >= 0; i--) {
      _heapifyArray(i, _elements.length);
    }
  }

  function _heapSort(heapify) {
    var size = _elements.length;
    var temp;

    _buildMaxHeap();

    for (var i = _elements.length - 1; i > 0; i--) {
      temp = _elements[0];
      _elements[0] = _elements[i];
      _elements[i] = temp;
      size--;
      heapify(0, size);
    }
    return _elements;
  }

  this.heapSort = function() {
    if (_simpleArray) {
      return _heapSort(_heapifyArray);
    } else {
      _elements = _clearObjectArray(_heapSort(_heapify));
      return _elements;
    }
  };

  function _partitionArray(left, right) {
    var pivot = _elements[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;

    while (i <= j) {
      while (_elements[i] < pivot) {
        i++;
      }

      while (_elements[j] > pivot) {
        j--;
      }

      if (i <= j) {
        var tmp = _elements[i];
        _elements[i] = _elements[j];
        _elements[j] = tmp;
        i++;
        j--;
      }
    }

    return i;
  }

  function _quickSortArray(left, right) {
    var index;

    if (_elements.length > 1) {
      index = _partitionArray(left, right);

      if (left < index - 1) {
        _quickSortArray(left, index - 1);
      }

      if (index < right) {
        _quickSortArray(index, right);
      }
    }

    return _elements;
  }

  function _partition(left, right) {
    var pivot = _elements[Math.floor((right + left) / 2)][1];
    var i = left;
    var j = right;

    while (i <= j) {
      while (_elements[i][1] < pivot) {
        i++;
      }

      while (_elements[j][1] > pivot) {
        j--;
      }

      if (i <= j) {
        var tmp = _elements[i];
        _elements[i] = _elements[j];
        _elements[j] = tmp;
        i++;
        j--;
      }
    }

    return i;
  }

  function _quickSort(left, right) {
    var index;

    if (_elements.length > 1) {
      index = _partition(left, right);

      if (left < index - 1) {
        _quickSort(left, index - 1);
      }

      if (index < right) {
        _quickSort(index, right);
      }
    }

    return _elements;
  }

  this.quickSort = function() {
    if (_simpleArray) {
      return _quickSortArray(0, _elements.length - 1);
    } else {
      _elements = _clearObjectArray(_quickSort(0, _elements.length - 1));
      return _elements;
    }
  };

};

module.exports = Sorter;
