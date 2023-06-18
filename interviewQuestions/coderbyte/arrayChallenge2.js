function ArrayChallenge(strArr) {
  // we need a hashmap to indicate what kinds of values we can add based on the shape
  const shapeMap = {
    I: [["1", "1,", "1", "1"], ["4"]],
    J: {},
    L: {},
    O: {},
    S: {},
    T: {},
    Z: {},
  };

  // if we think about it, we can imagine a potential amount of lines that can be removed
  // in the example array, we can take the difference between the smallest number in the array (0)
  // and the next smallest (3)
  // thus, we know that we can remove these 3 lines (and potentially more)
  //

  // the greatest amount that can be removed is 4 (I shape) and the smallest is 2 (O shape)

  // how would the algorithm look like?

  // I think you need to find the LOWEST number first (i.e. 0 in the example)
  // and see if you can remove horizontal rows

  // next, you need to find the NEXT lowest number and see if you can remove horizontal rows
  // you keep on doing this until you exhaust all options

  // the big question is, how do you perform the check to remove horizontal rows

  // we should abstract it out into a separate function

  const shape = strArr.shift();
  let columns = strArr;

  // to return
  let mostRowsRemoved = 0;

  const checkToRemoveHorizontalRows = (columns, shape) => {
    // see which is the lowest column, we should start from there
    let smallestColumn = undefined;
    let smallestColumnIndex = undefined;
    for (let i = 0; i < columns.length; i++) {
      const currentColumn = columns[i];

      if (smallestColumn === undefined) {
        smallestColumn = currentColumn;
      }

      if (currentColumn < smallestColumn) {
        smallestColumnIndex = i;
      }
    }

    // now we need to check based on shape
    const shape = shapeMap[shape];
  };

  // code goes here
  return mostRowsRemoved;
}

// keep this function call here
console.log(ArrayChallenge(readline()));
