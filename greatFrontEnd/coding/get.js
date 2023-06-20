// Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

const john = {
  profile: {
    name: { firstName: "John", lastName: "Doe" },
    age: 20,
    gender: "Male",
  },
};

const jane = {
  profile: {
    age: 19,
    gender: "Female",
  },
};

function getFirstName(user) {
  return user.profile.name.firstName;
}

// getFirstName(john) will work but getFirstName(jane) will not

// lodash's _.get method was a solution
// let's write our own get function - the function gets the value at path of object
// if the resolved value is undefined, the defaultValue is returned in its place
// the function signature is as such: get(object, path, [defaultValue])

// object -> the object to query
// path -> the path of the property to get. It can be a string with . as the sperator between fields OR an array of path strings
// defaultValue -> optional parameter. The value returned if the resolved value is undefined

/**
 * @param {Object} object
 * @param {string|Array<string>} path
 * @param {*} [defaultValue]
 * @return {*}
 */
function get(object, path, defaultValue) {
  // ok so something interesting is that the path is EITHER an array or a string
  // we should have a way to convert the string into an array of path strings
  let pathArray = [];

  if (typeof path === "string") {
    const splitPath = path.split(".");
    pathArray = [...splitPath];
  } else {
    pathArray = [...path];
  }

  // now we need to get the keys of the object
  const keys = Object.keys(object);

  // and we loop over the keys
  // we get the first value in paths
  const firstValue = pathArray.shift();

  if (pathArray.length === 0) {
    if (keys.includes(firstValue)) {
      return object[firstValue];
    }
  }

  if (!keys.includes(firstValue)) {
    return defaultValue ? defaultValue : undefined;
  } else {
    if (object[firstValue] === null || object[firstValue] === undefined) {
      return defaultValue ? defaultValue : undefined;
    }
    return get(object[firstValue], pathArray, defaultValue);
  }
}

// test cases
// works with array
// console.log(get(john, ["profile", "name", "firstName"], "hi")); // John
// // works with string
// console.log(get(john, "profile.name.firstName", "hi")); // John

// // returns defaultValue (hi) if not present
// console.log(get(jane, ["profile", "name", "firstName"], "hi"));
// // returns undefined if no defaultValue and not present
// console.log(get(jane, ["profile", "name", "firstName"]));

// // returns undefined if empty object
// console.log(get({}, ["profile", "name", "firstName"]));

// // path contains multiple segments
// const multipleSegmentObject = { a: { b: 2, c: { d: { e: { foo: 3 } } } } };
// console.log(get(multipleSegmentObject, "a.c.d.e")); // foo: 3
// console.log(get({ a: { b: 2, c: { d: 0 } }, c: 1 }, "a.c.d")); // should be 2
// console.log(get({ a: { b: 2 }, c: 1 }, "a.c.e.f"));

// access index of non-primitives

// console.log(get({ a: { b: true } }, "a.b.c")); // undefined
// console.log(get({ a: { b: null } }, "a.b.c")); // undefined
// console.log(get({ a: { b: undefined } }, "a.b.c")); // undefined
// console.log(get({ a: { b: 2 } }, "a.b.c")); // undefined
// console.log(get({ a: { b: "foo" } }, "a.b.c")); // undefined

// cleaner solution

function getCleanerVersion(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let index = 0;
  let length = path.length;
  let object = objectParam;

  while (object !== null && index < length) {
    object = object[String(path[index])];
    index++;
  }

  const value = index && index === length ? object : undefined;
  return value !== undefined ? value : defaultValue;
}
