## Array Filter

An array filter is a simple library to filter two array of objects

## Installation

`npm install @scsiva1991/array-filter`

## Usage


```javascript

    var filter = require('@scsiva1991/array-filter');

    var array1 = [{id:1},{id:2},{id:3}];
    var array2 = [{id:1}];
    var key = 'id';

    var result1 = filter.getIncludedObjs( array1, array2, key );
    console.log( result1 ); //[{id:1}]

    var result1 = filter.getExcludedObjs( array1, array2, key );
    console.log( result1 ); //[{id:2},{id:3}]

```

## Tests

npm test
