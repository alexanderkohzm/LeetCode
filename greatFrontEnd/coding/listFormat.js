// Given a list of strings, implement a function listFormat
// that returns the items concatenated into a single string
// a common use case would be in summarizing the reactions for social media posts

// options in the second param -> sorted, length, unique

/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
function listFormat(items, options) {
  if (!items && !options) {
    return "";
  }

  if (items.length === 0) {
    return "";
  }

  // to handle missing data (e.g. "") in the array
  const tempItems = [...items];
  items.length = 0;
  for (const item of tempItems) {
    if (!item) continue;
    items.push(item);
  }

  function parseString(items) {
    if (items.length === 1) {
      return `${items.pop()}`;
    }

    const lastItem = items.pop();

    const returnString = items.join(", ");

    return returnString + ` and ${lastItem}`;
  }

  if (options === undefined) {
    return parseString(items);
  }

  if (options.sorted) {
    items.sort();
  }

  if (options.unique) {
    // we can create a set
    const set = new Set(items);
    // and we want to return this as an array
    const uniqueItems = Array.from(set);
    items.length = 0; // Clear the original items array
    items.push(...uniqueItems); // Push the unique items back into the array
  }

  if (options.length) {
    const length = options.length;
    if (length >= items.length || length === 0 || length < 0) {
      items = items;
    } else {
      const itemsCopy = [...items];
      // we want the last one too, so that's why we add 1
      const names = itemsCopy.slice(0, length);

      if (names.length === 1) {
        items = [...names];
      } else {
        const numberOfPeopleRemoved = items.length - names.length;

        const otherOrOthers = numberOfPeopleRemoved === 1 ? "other" : "others";
        const remaining = `${numberOfPeopleRemoved} ${otherOrOthers}`;

        items = [...names, `${remaining}`];
      }
    }
  }

  return parseString(items);
}

const listOfOne = ["Bob"];
const listOfTwo = ["Bob", "Alice"];

// console.log(listFormat());

// console.log(listFormat(listOfOne, { length: 1 }));
// console.log(listFormat(listOfTwo));

const listOfMany = ["Bob", "Ben", "Tim", "Jane", "John"];
console.log(listFormat(listOfMany, { length: 5 })); // Bob, Ben, Tim, Jane, John

// // length 3
// console.log(listFormat(listOfMany, { length: 3 }));

// length 4

// sorted

// unique
// console.log(listFormat([...listOfMany, "Tim"], { unique: true }));
