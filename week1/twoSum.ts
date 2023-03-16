// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


const twoSum = (nums: number[], target: number): Array<number> => {

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]
    const remainder = target - currentNumber

    // if it's the same element, then we don't want it
    const isSameElement = nums.indexOf(remainder) === i

    const hasPair = nums.indexOf(remainder)

    if (!isSameElement && hasPair !== -1) {
      return [i, hasPair]
    }
  }
  return []
}

const twoSumWithHash = (nums: number[], target: number): Array<number> => {
  const hash = {} as { [key: number]: number }

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    const complement = target - element

    if (hash[complement] !== undefined) {
      return [hash[complement], i]
    } else {
      hash[element] = i
    }
  }
  return []
}

const nums = [2, 7, 11, 15]
const target = 9

const nums2 = [56, 7, 24, 56]
const target2 = 112

const nums3 = [3, 3]
const target3 = 6

console.log(twoSum(nums, target)) // [0, 1]
console.log(twoSum(nums2, target2)) // [0, 3]
console.log(twoSum(nums3, target3)) // [0, 1]

console.log(twoSumWithHash(nums, target)) // [0, 1]
console.log(twoSumWithHash(nums2, target2)) // [0, 3]
console.log(twoSumWithHash(nums3, target3)) // [0, 1]