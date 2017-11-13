# array-move-item

A Node/browser utility for changing the position of an item in an array within
the array bounds

## Introduction

I needed a utility for updating the sort position of items in normalized data structures of my Redux store.

All array utilities I have found in the NPM registry did nothing to prevent the item
placement outside of array bounds, so I rolled out my own.

In addition to providing a convenient interface for moving array items, this
library does the following:

- If the target index is greater than the length of the array, it will place the
  item at the end of the array.

- If the target index is negative and greater than the length of the array, it
  will move the item to the start of the array.

## Installing

```
$ npm install --save array-move-item
```

## Usage Examples

```js
var moveItem = require('array-move-item');

var items = ['a', 'b', 'c'];

moveItem(items, 1, 2);
//=> ['a', 'c', 'b']

moveItem(items, -1, 0);
//=> ['c', 'a', 'b']

moveItem(items, -2, -10);
//=> ['b', 'a', 'c']
```

## API

### moveItem(array, from, to)

Returns a new array with the item moved to the new position.

## License

MIT © [Illarion Koperski](http://illarionvk.com)
