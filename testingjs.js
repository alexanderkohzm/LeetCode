/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
  // newly created array
  const returnArray = [];

  const depthFirstSearch = (input) => {
    console.log("this is input: ", input);
    for (const element of input) {
      if (typeof element !== "object" || element == null) {
        returnArray.push(element);
      } else {
        depthFirstSearch(element);
      }
    }
  };

  // we should loop through the array
  for (let i = 0; i < value.length; i++) {
    const currentValue = value[i];
    if (typeof currentValue !== "object" || currentValue == null) {
      returnArray.push(currentValue);
    } else {
      depthFirstSearch(currentValue);
    }
  }

  return returnArray;
}

// important lesson -> null's type is an object type

console.log(flatten([1, 2, 3, [4, 5]]));

console.log(flatten([1, 2, 3, 4, 5]));

console.log(flatten([null, true, undefined]));
