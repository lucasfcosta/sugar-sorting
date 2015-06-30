[![Build Status](https://travis-ci.org/lucasfcosta/sugar-sorting.svg)](https://travis-ci.org/lucasfcosta/sugar-sorting) [![Coverage Status](https://coveralls.io/repos/lucasfcosta/sugar-sorting/badge.svg)](https://coveralls.io/r/lucasfcosta/sugar-sorting)

Sugar-sorting
===========
Sorting made sweet.

[![NPM](https://nodei.co/npm/sugar-sorting.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/sugar-sorting/)

## What is sugar-sorting?
Sugar-sorting is a NPM Module for sorting arrays. It's main goal is to provide a simple sorting API and many different sorting methods for the user to choose from.
Sugar-sorting can make it easy for you to sort simple arrays and arrays of objects.


## Getting Started

The first thing you should do is install the sugar-sorting module.

```sh
$ npm install -g sugar-sorting
```

Now you can use `require()` to assign this module to a variable and start calling the module's methods.

```js
var Sorter = require('sugar-sorting');

var simpleArray = [2, 4, 6, 3, 1, 5];
var sorter = new Sorter(simpleArray);

console.log(sorter.bubbleSort());
// --> [1, 2, 3, 4, 5, 6]
```


## Sorting Arrays of Objects

Sugar-sorting also makes it easier for you to sort your arrays of objects by any property you want to. You just need to call the `sortBy('.propertyPath')` method.

```js
var Sorter = require('sugar-sorting');

var students = [{
    name: 'Stanley Kubrick',
    age: 50,
    grades: {
      highestGrade: 10,
      lowestGrade: 8
    }
  }, {
    name: 'Christopher Nolan',
    age: 31,
    grades: {
      highestGrade: 8.5,
      lowestGrade: 6
    }
  }, {
      name: 'Michael Bay',
      age: 37,
      grades: {
        highestGrade: 2,
        lowestGrade: 0
      }
  }];

var studentsSorter = new Sorter(students);

var studentsByAge = studentsSorter.sortBy('.age').insertionSort();
var studentsByHighestGrade = studentsSorter.sortBy('.grades.highestGrade').bubbleSort();
```


## Sorting methods

These are the sorting methods on sugar-sorting. The ones marked with an X are the ones available for use.

- [x] bubbleSort()
- [x] selectionSort()
- [x] insertionSort()
- [x] mergeSort()
- [x] heapSort()
- [ ] quickSort()
- [ ] shellSort()

If you want to learn more about sorting algorithms and the best and worst case scenarios for each one, you can check these amazing links:
* http://sorting.at
* http://sorting-algorithms.com


## How sugar-sorting Works

When using sugar-sorting, imagine the Sorter object as a magic box in which you put in your array and then tell the box the way you want it to be sorted. After telling the box what you want it will sort your array. Now all you need to do is get the new sorted array from inside the box.


These are some basic steps to follow:
* Fill your sorter object using `var sorter = new Sorter(yourArray)` or `sorter.fillWith(yourArray)`
* Tell the sorter object how you want it to be sorted. For example: `sorter.sortBy('.salary').heapSort()`
* Retrieve the sorted array from the sorter object using `sorter.getElements()`

## Contributing

You can contribute to sugar-sorting by writing tests, improving our algorithms or even creating new ones.
Any improvement on the project's docs are welcome too!

To start developing just clone this repository and run the `npm install` command on your terminal to download all the dev-dependencies.

If you find any bug  or have any suggestion please tell us using our [Issue Tracker](https://github.com/lucasfcosta/sugar-sorting/issues).

After changing any line of code please run tests using `npm test` or `grunt`.

## License

Use it as you want to. No worries.

MIT © [Lucas Fernandes da Costa](http://github.com/lucasfcosta)
