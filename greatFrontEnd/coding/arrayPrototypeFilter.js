/**
 * @template T
 * @param { (value: T) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    const currentValue = this[i];

    if (
      Object.hasOwn(this, i) &&
      callbackFn.call(thisArg, currentValue, i, this)
    ) {
      results.push(currentValue);
    }
  }

  return results;
};

const testingArray = [1, 2, 3, 4, 5];

console.log(testingArray.myFilter((value) => value > 3));
