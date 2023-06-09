/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers: Array<number>, sum: number) {
  // Your code goes here

  // apparently it needs to be efficient with time used
  // so we should use a hashMap 
  const hashMap = {} as { [key: number]: number }

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]

    const difference = sum - currentNumber
    if (hashMap[difference]) {
      return [hashMap[difference], i]
    } else {
      hashMap[currentNumber] = i
    }
  }
  return null
}

const indices = findTwoSum([3, 1, 5, 7, 5, 9], 10);
console.log(indices);