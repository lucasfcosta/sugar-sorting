#sugar-sorting
Sorting made sweet.


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
- [ ] heapSort()
- [ ] quickSort()
- [ ] shellSort()

If you want to learn more about sorting algorithms and the best and worst case scenarios for each one, you can check these amazing links:
* http://sorting.at
* http://sorting-algorithms.com

## How sugar-sorting Works

```js
// TODO
```

## Contributing

You can contribute to sugar-sorting by writing tests, improving our algorithms or even creating new ones.
Any improvement on the project's docs are welcome too!

If you find any bug  or have any suggestion please tell us using our [Issue Tracker](https://github.com/lucasfcosta/sugar-sorting/issues).

## License

Use it as you want to. No worries.

MIT © [Lucas Fernandes da Costa](http://github.com/lucasfcosta)
