'use strict'

var clamp = require('lodash/fp/clamp')

function normalize (arrayLength, index = 0) {
  var clampedIndex

  if (index == null) {
    index = 0
  }

  clampedIndex = clamp(
    arrayLength * -1,
    arrayLength - 1 || 0
  )(index)

  if (clampedIndex < 0) {
    return clampedIndex + arrayLength
  }

  return clampedIndex
}

module.exports = function (array, fromIndex, toIndex) {
  var items

  if (array == null) {
    array = []
  }

  items = array.slice(0) // Clone array

  items.splice(normalize(items.length, toIndex), 0, items.splice(normalize(items.length, fromIndex), 1)[0])
  return items
}
