# array-move-item

> Move an array item to a different position within array bounds


## Install

```
$ npm install --save array-move-item
```

## API

### moveItem(array, fromIndex, toIndex)

Returns a new array with the item moved to the new position.

If the target index is greater than the length of the array, the item is
moved to the end of the array.

If the target index is negative and greater than the length of the array, the item is
moved to the start of the array.

## Usage

```js
var moveItem = require('array-move-item');

const items = ['a', 'b', 'c'];

moveItem(items, 1, 2);
//=> ['a', 'c', 'b']

moveItem(items, -1, 0);
//=> ['c', 'a', 'b']

moveItem(items, -2, -10);
//=> ['b', 'a', 'c']
```

## License

MIT © [Illarion Koperski](http://illarionvk.com)
