// Many times, we need to re-implement basic functions without using any standard library functions
// already implemented. For example, when designing a chip that requires very little memory space.

// In this question we’ll implement a function root that calculates the n’th root of a number.
// The function takes a nonnegative number x and a positive integer n,
// and returns the positive n’th root of x within an error of
// 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

// Don’t be intimidated by the question.
// While there are many algorithms to calculate roots that require prior knowledge in numerical analysis
// (some of them are mentioned here), there is also an elementary method
// which doesn’t require more than guessing-and-checking.
// Try to think more in terms of the latter.

// Make sure your algorithm is efficient, and analyze its time and space complexities.

// example 1
// x = 7, n = 3
// output = 1.913

// example 2
// x = 9, n = 2
// output = 3

// constraints
// x --> 0 <= x
// 0 < n

function root(x: number, n: number): number {
  if (x === 0) return 0;

  let start = 0;
  let end = Math.max(1, x);

  // note: you can't use math.floor -> we need the floating points
  let approximateRoot = (end + start) / 2;

  // we're narrowing the band of start and end towards the root
  // when the approximate root is 0.001 less than start we exit
  while (approximateRoot - start >= 0.001) {
    // if n^approximate root is MORE than x, we need to lower the "end" range
    if (Math.pow(approximateRoot, n) > x) {
      end = approximateRoot;
      // if n^approximate root is LESS than x, we need to increase the "start" range
    } else if (Math.pow(approximateRoot, n) < x) {
      start = approximateRoot;
    } else {
      break;
    }
    // after either increasing (start = approximateRoot) or lowering the boundaries
    // we need to update the approximateRoot
    approximateRoot = (end + start) / 2;
  }

  return Number.isInteger(approximateRoot)
    ? approximateRoot
    : parseFloat(approximateRoot.toFixed(3));
}

console.log("This is root: ", root(10, 3));
console.log("this is root: ", root(1, 3));
console.log("this is root: ", root(0, 100));
console.log("this is root: ", root(27, 3));

// Time complexity:
// Time complexity -> everytime we run the loop, we get closer to the approximateRoot
// It'll be similar to binary search which is O(log n) where n is equal to x (the initial number we're starting with)
// 2^(-k) < (0.001/x)

// Space complexity:
// Space complexity is O(1) because only need to store the variables start, end, approximateRoot
