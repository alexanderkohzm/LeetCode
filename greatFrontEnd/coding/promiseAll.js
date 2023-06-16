/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
function promiseAll(iterable) {
  // it returns a single PROMISE that resolves to an array of the results of the input promises

  // this returned promise will resolve when all of the input's promises have resolved OR
  // if the input iterable contains no promises

  // it rejects immediately upon any of the input promises rejecting or non-promises throwing an error
  // will reject with the first rejection message/error

  // use this to check for the promise
  // obj && typeof obj.then == 'function'

  return new Promise((resolve, reject) => {
    let unresolved = iterable.length;
    const returnArray = new Array(iterable.length);

    if (unresolved === 0) {
      resolve(returnArray);
      return;
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (value) => {
          returnArray[index] = value;
          unresolved -= 1;

          if (unresolved === 0) {
            resolve(returnArray);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

(async () => {
  console.log(await promiseAll([p0, p1, p2])); // [3, 42, 'foo']
})();
