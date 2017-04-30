[![Build Status](https://travis-ci.org/scsiva1991/array-filter.svg?branch=master)](https://travis-ci.org/scsiva1991/array-filter)
[![Coverage Status](https://coveralls.io/repos/github/scsiva1991/array-filter/badge.svg?branch=master)](https://coveralls.io/github/scsiva1991/array-filter?branch=master)

## Array Filter

An array filter is a simple library to filter two array of objects

## Installation

`npm install @scsiva1991/array-filter`

## Usage

====== TO Filter array of objects ======

```javascript

    var filter = require('@scsiva1991/array-filter');

    var array1 = [{id:1},{id:2},{id:3}];
    var array2 = [{id:1}];
    var key = 'id';

    // To get objects that are present in both array1 and array2
    var result1 = filter.getIncludedObjs( array1, array2, key );
    console.log( result1 ); //[{id:1}]

    // To get objects that are present only in array1
    var result2 = filter.getExcludedObjs( array1, array2, key );
    console.log( result2 ); //[{id:2},{id:3}]

```

====== To Filter array of items ======

```javascript

    var filter = require('@scsiva1991/array-filter');

    var array1 = [1, 2, 3];
    var array2 = [3, 4, 5];

    // To get items that are present in both array1 and array2
    var result1 = filter.getIncludedItems( array1, array2 );
    console.log( result1 ); //[3]

    // To get items that are present only in array1
    var result2 = filter.getExcludedItems( array1, array2 );
    console.log( result2 ); //[1, 2]

```

## Tests

npm test
