/**
 *
 * classnnames is a commonly used utility in modern front end applications to conditionally join CSS class names together. If you've written React or Vue applications, you'll likely have used a library like this
 *
 */

// Examples
// classNames('foo', 'bar'); // 'foo bar'
// classNames('foo', { bar: true }); // 'foo bar'
// classNames({ 'foo-bar': true }); // 'foo-bar'
// classNames({ 'foo-bar': false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'

// note that arrays are recursively flattened
// classNames('a', ['b', { c: true, d: false }]); // 'a b c'

// and values can be mixed:
// classNames(
//   'foo',
//   {
//     bar: true,
//     duck: false,
//   },
//   'baz',
//   { quux: true },
// ); // 'foo bar baz quux'

// lastly, falsey values are ignored
// classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // 'bar 1'

/**
 * @param {...(string|Object|Array<string|Object>)} args
 * @return {string}
 */
function classNames(...args) {
  const classes = [];

  args.forEach((arg) => {
    // Ignore falsey values.
    if (!arg) {
      return;
    }

    const argType = typeof arg;

    // Handle string and numbers.
    if (argType === "string" || argType === "number") {
      classes.push(arg);
      return;
    }

    // Handle arrays.
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }

    // Handle objects.
    if (argType === "object") {
      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key);
        }
      }

      return;
    }
  });

  return classes.join(" ");
}

// NOTE This solution is imperfect - if you have nested objects two layers deep it doesnt work
// I suppose the assumption is that there are no objects that are two layers deep
console.log(
  classNames(
    "foo",
    {
      bar: true,
      duck: false,
    },
    "baz",
    { quux: true }
  )
); // 'foo bar baz quux')
