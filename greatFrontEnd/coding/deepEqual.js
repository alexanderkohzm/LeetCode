// https://www.youtube.com/watch?v=4JVZ-mVqJPg
// neetcode JSON Deep Equal

// example 1 -> o1 = {"x": 1, "y": 2}, o2 ={"x": 1, "y": 2} // yes
// example 2 -> o1 = {"y": 2, "x": 1}, o2 ={"x": 1, "y": 2} // yes

// o1 ={"x": null, "L":[1, 2, 3]}, o2 = {"x": null, "L": ["1", "2", "3"]} // no

// TYPES will be important here

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
function deepEqual(valueA, valueB) {
  // this function needs to be recursive
  if (valueA === null || valueB === null) {
    return Object.is(valueA, valueB);
  }

  // return early
  if (typeof valueA !== typeof valueB) {
    return false;
  }

  // we should start with our base case
  // handle primitives
  if (typeof valueA !== "object") {
    // they are primitives
    return Object.is(valueA, valueB);
  }

  // we need to go recursive now
  // case 1: are we dealing with arrays
  // case 2: are we dealing with objects

  // String(array) = undefined OR the value of the array
  // String(object) = [object Ojbect]

  // case 1
  if (Array.isArray(valueA) || Array.isArray(valueB)) {
    // if ONE of them is an array
    if (String(valueA) !== String(valueB)) {
      return false;
    }
    // but string representation is NOT enough if the elements in the array are object
    // we need to deeply check each attribute of the array
    for (let i = 0; i < valueA.length; i++) {
      if (!deepEqual(valueA[i], valueB[i])) {
        return false;
      }
    }
  } else {
    // They're both real objects (not arrays)
    // we need to check each key-value pair

    // get length
    if (Object.keys(valueA).length !== Object.keys(valueB).length) {
      return false;
    }

    for (const key in valueA) {
      // need to protect against undefined edge case
      if (valueA.hasOwnProperty(key) && !valueB.hasOwnProperty(key)) {
        return false;
      }

      if (!deepEqual(valueA[key], valueB[key])) {
        return false;
      }
    }
  }
  return true;
}

// primitives ->
// console.log(deepEqual(0, 0) === true);
// console.log(deepEqual(-0, +0) === false);
// console.log(deepEqual("foo", "foo") === true);
// console.log(deepEqual(true, 1) === false);
// console.log(deepEqual(true, true) === true);
// console.log(deepEqual(false, false) === true);
// console.log(deepEqual(undefined, null) === false);
// console.log(deepEqual(null, null) === true);
// console.log(deepEqual(undefined, undefined) === true);
// console.log(deepEqual(NaN, NaN) === true);

// numbers and strings
// console.log(deepEqual([1], [1]) === true);
// console.log(deepEqual(["1"], ["1"]) === true);
// console.log(deepEqual([1], ["1"]) === false);
// console.log(deepEqual([1, 2], [1, 2]) === true);
// console.log(deepEqual([1, 2, 3], [1, 2, 3]) === true);

// objects -> basic
// console.log(deepEqual({}, {}) === true);
// console.log(deepEqual({ foo: "bar", id: 1 }, { foo: "bar", id: 1 }) === true);
// console.log(
//   deepEqual({ foo: "bar", id: 1 }, { foo: "bar", id: "1" }) === false
// );

// nullish
// console.log(
//   deepEqual({ foo: undefined, baz: "baz" }, { bar: "bar", baz: "baz" }) ===
//     false
// );
// console.log(
//   deepEqual({ foo: undefined, baz: "baz" }, { foo: null, baz: "baz" }) === false
// );
// console.log(
//   deepEqual({ foo: undefined, bar: "baz" }, { foo: undefined, bar: "baz" }) ===
//     true
// );
// console.log(
//   deepEqual({ foo: null, bar: "baz" }, { foo: null, bar: "baz" }) === true
// );
