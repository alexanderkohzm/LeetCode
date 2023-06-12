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
    // ignore falsey values
    if (!arg) {
      return;
    }

    // get the type of arg
    const argType = typeof arg;

    // if string or number
    if (argType === "string" || argType === "number") {
      classes.push(arg);
      return;
    }

    // handle array
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }

    // handle objects
    if (arg === "object") {
      for (const key in arg) {
        if (Object.hasown(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
      return;
    }
  });
  return classes.join(" ");
}

console.log(
  classNames(
    "foo",
    {
      bar: true,
      duck: false,
      car: {
        happyBar: true,
      },
    },
    "baz",
    { quux: true }
  )
); // 'foo bar baz quux')
