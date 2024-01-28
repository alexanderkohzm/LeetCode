function sewers(n, m, h, v) {
  // Write your code here

  // n = number of rows
  // m = numbers of columns

  // h = which row has been removed
  // v = which column has been removed

  // there must be a calculation for this
  // for example
  // if h === 1, then we know that ALL of the area from column 0 - 1 is freed up
  // and can be added to the hole

  // ok previous approach was wrong - it needs to be a regular shape

  // acutally, if we look at the "Gaps" -> it's formed by the largest difference between
  // the rows (3, 1) and column (5, 3)
  // we then get that and multiply it together (2 x 2) = 4
  const rows = new Set();
  const columns = new Set();

  for (let i = 0; i <= n + 1; i++) {
    rows.add(i);
  }

  for (let j = 0; j <= m + 1; j++) {
    columns.add(j);
  }

  // now we need to remove H and V
  for (let i = 0; i < h.length; i++) {
    const elementToRemove = h[i];
    if (rows.has(elementToRemove)) {
      rows.delete(elementToRemove);
    }
  }

  for (let j = 0; j < v.length; j++) {
    const elementToRemove = v[j];
    if (columns.has(elementToRemove)) {
      columns.delete(elementToRemove);
    }
  }

  // now we need to get the largest difference between the elements in the rows
  // and the largest difference between the elements in the columns
  const listOfRowsLeft = [...rows];
  const listOfColumnsLeft = [...columns];

  console.log(listOfRowsLeft);

  let largestRowDiff = 0;
  let largestColumnDiff = 0;

  // we just need to get to the second last one
  for (let i = 0; i < listOfRowsLeft.length - 1; i++) {
    const currentDiff = listOfRowsLeft[i + 1] - listOfRowsLeft[i];
    largestRowDiff = Math.max(currentDiff, largestRowDiff);
  }

  for (let j = 0; j < listOfColumnsLeft.length - 1; j++) {
    const currentDiff = listOfColumnsLeft[j + 1] - listOfColumnsLeft[j];
    largestColumnDiff = Math.max(currentDiff, largestColumnDiff);
  }

  return largestColumnDiff * largestRowDiff;
}

console.log(sewers(3, 2, [1, 2, 3], [1, 2]));
