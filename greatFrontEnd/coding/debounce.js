/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */

function debounce(func, wait) {
  let timeoutID = null;

  return function (...args) {
    const context = this;
    clearTimeout(timeoutID);

    timeoutID = setInterval(() => {
      timeoutID = null;

      func.apply(context, args);
    }, wait);
  };
}
