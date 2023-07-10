// this is a file to quickly work on something and test assumptions

/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
  // edge cases
  if (value.length === 0) {
    return [];
  }

  // I assume that the values will only be numbers

  // It is a recursive problem -> if we encounter an array, we need to keep traversing until we get to the end

  const returnArray = [];

  const dfs = (currentElement) => {
    // if currentElement is an array, call dfs on it
    if (typeof currentElement === "object" && currentElement !== null) {
      for (let i = 0; i < currentElement.length; i++) {
        dfs(currentElement[i]);
      }
    } else {
      // if it's not an array, we push it into the return array
      returnArray.push(currentElement);
    }
  };

  for (let i = 0; i < value.length; i++) {
    const currentElement = value[i];
    dfs(currentElement);
  }

  return returnArray;
}

// important lesson -> null's type is an object type
console.log(flatten([[[], []]]));

console.log(flatten([1, 2, 3, [4, 5]]));

console.log(flatten([1, 2, 3, 4, 5]));

console.log(flatten([null, true, undefined]));
