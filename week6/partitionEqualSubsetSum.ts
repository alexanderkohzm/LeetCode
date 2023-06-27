// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

function canPartition(nums: number[]): boolean {

  // numsTotal
  const numsTotal = nums.reduce((prev, current) => {
    return prev + current
  }, 0)
  // target = half of numsTotal
  const target = numsTotal / 2
  // -> this satisfy the sum of the elements in both subsets being equal 

  // if target is odd, then we know that it's not achievable and we early return
  if (numsTotal % 2 === 1) return false

  // imagine we have an array [1, 2, 3, 4, 5, 6, 7]

  // each element has several permutations of being grouped together with other elements
  // for example, 1 can be [1], [1, 2], [1, 2, 3], [1, 2, 3, 4] and so on...
  // each permutation's sum could potentially be half of the total (target)

  // we need to go through each element and it's permutation to figure out if we're able to
  // get the target number
  // if we can, then we can early return true 

  // if we go through the entire array and we don't get target number, then we can return false

  // Brute Force
  // nestedLoop. For each element we go through the entire array (except self) and see if the sum is equal to target

  // is there a way we can memoise this? 

  let dp = new Set<number>();
  dp.add(0)

  for (let i = 0; i < nums.length; i++) {

    const newDp = new Set<number>();

    for (let sum of dp) {
      if (sum + nums[i] === target) return true
      newDp.add(sum)
      newDp.add(sum + nums[i])
    }
    dp = newDp
  }
  return false
};

// console.log(canPartition([1, 5, 11, 5]))

console.log(canPartition([14, 9, 8, 4, 3, 2]))