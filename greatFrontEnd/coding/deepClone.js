// The term "deep clone" is not formally defined in JavaScript's language specification, but is generally well understood in the community. A deep clone makes a copy of JavaScript value, leading to a completely new value that has no references pointing back to the properties in the original object (if it's an object). Any changes made to the deep-copied object will not affect the original object.

// Implement a deepClone function that performs a deep clone operation on JavaScript objects. You can assume the input object only contains JSON-serializable values, i.e. null, boolean, number, string, and will not contain any other built-in objects such as Date, Regex, Map or Set.

/**
 * @param {*} value
 * @return {*}
 */
function deepClone(value) {
  /**
   * Method 1
   *
   * You could just stringify the object and then return a parsed version of it.
   * This will create a new object
   * However, the downsides are that unsupported data types would be ignored and you could get unexpected
   * behaviour like converting a Date object to ISO timestamps and NaN and Infinity becoming null
   */

  /**
   * Method 2
   *
   * You could iterate over the object
   * if the value is NOT an object and NOT null, return the value
   *
   * if the value IS an array, then you'll need to iterate over it and return the deep clone
   *
   * lastly, you'll use Object.fromEntries to create a new Object.
   * This will be done by iterating over the Object (value).
   */

  if (typeof value !== "object" || value === null) return value;

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)])
  );
}

const originalObject = {
  name: "John",
  age: 25,
  hobbies: ["reading", "painting"],
  address: {
    city: "New York",
    country: "USA",
  },
};

console.log(Object.entries(originalObject));
