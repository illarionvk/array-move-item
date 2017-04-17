'use strict'

var test = require('tape')
var moveItem = require('./index.js')

test('moveItem', function (t) {
  t.deepEqual(
    moveItem(['a', 'b', 'c'], 0, 1),
    ['b', 'a', 'c'],
    'should move first item to the second position')

  t.deepEqual(
    moveItem(['a', 'b', 'c'], -1, 0),
    ['c', 'a', 'b'],
    'should move last item to the first position')

  t.deepEqual(
    moveItem(['a', 'b', 'c'], -1, 1),
    ['a', 'c', 'b'],
    'should move last item to the second position')

  t.deepEqual(
    moveItem(['a', 'b', 'c'], -1, -2),
    ['a', 'c', 'b'],
    'should move last item to the second to last position')

  t.deepEqual(
    moveItem(['a', 'b', 'c'], 0, 5),
    ['b', 'c', 'a'],
    'should handle target index that is greater than array length')

  t.deepEqual(
    moveItem(['a', 'b', 'c'], 1, -10),
    ['b', 'a', 'c'],
    'should handle negative target index that is greater than array length')

  t.deepEqual(
    moveItem(['a', 'b', 'c'], -10, 1),
    ['b', 'a', 'c'],
    'should handle negative source index that is greater than array length')

  t.end()
})
