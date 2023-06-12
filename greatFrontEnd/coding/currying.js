/**
 * Currying is the technique of converting a function that takes multiple arguments
 * into a sequence of functions that each take a single argument
 *
 *
 * Implement the curry function which accepts a function as the only argument and returns
 * a function that accepts single arguments and can be repeatedly called until at least the minimum number of arguments have been provided
 * This is determined by how many arguments the original function accepts
 *
 * The initial function argument is then invoked with the provided arguments
 *
 *
 * https://www.youtube.com/watch?v=psmu_VAuiag
 */

// currying is NOT commonly used in real-world development but is moderately common question for interviews as it tests the candidate's understanding of certain JavaScript fundamentals like arity and closures

function curry(func) {
  // what value types will curry expect?
  // shoudl the function expect values of different types

  // arity = number of arguments or operands taken by a function
  // closure = a closure is the combination of a function bundled together with references to its lexical environment (surrounding state)

  // the curried function will STOP accepting arguments after the number of arguments that have been passed into the curried function equals the arity of the original function

  // we can keep a record of the curried function arguments so far via closures. Each time the curried function is called, we compare the number of arguments so far with the arity of the original function
  // if they are the same, we call the original function with the arguments
  // if more arguments are needed, we will return a function taht accepts more arguments and invokes the curried function with the new arguments

  return function curried(...args) {
    // if the lengths are the same, it means we can finally call the original function
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    // if not, we need to return the curried function but with the additional args
    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

// const add = (a, b, c) => {
//   return a + b + c;
// };
// const curriedAdd = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(add(1, 2, 3));
// console.log(curriedAdd(1)(2)(3));

const totalNum = (x, y, z) => {
  return x + y + z;
};

const curriedTotal = curry(totalNum);

// what happens if we only pass in TWO args
// console.log(curriedTotal(10)(20)); // will return a Function (anonymous)
// console.log(curriedTotal(10)(20)(30)); // will return expected, which is 60

const curry2 = (fn) => {
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};

const totalNumber = (x, y, z) => {
  return x + y + z;
};
const curriedTotal2 = curry2(totalNumber);
// what happens if we only pass in 2
// console.log(curriedTotal2(10)(20)); // it's the same as above, we get function bound curried
// console.log(curriedTotal2(10)(20)(30));
