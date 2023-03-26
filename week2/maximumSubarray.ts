// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.


// Example 1
// Input = nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output = 6
// Explanation - the subarray [4, -1, 2, 1] has the largest sum 6 

// there are two solutions to this
// you can check the sum of index 0 till end, index 1 till end, index 2 till end etc
// but this is O(n^2) time 

// the optimal solution is Kadane's algorithm 

function maxSubArray(nums: number[]): number {

  // early return if length is 1
  if (nums.length === 1) {
    return nums[0]
  }

  let maxSum = nums[0]


  for (let i = 0; i < nums.length; i++) {
    let sum = 0

    for (let j = i; j < nums.length; j++) {
      sum += nums[j]

      if (sum > maxSum) {
        maxSum = sum
      }
    }
  }

  return maxSum
}

// O(n) time complexity 
function maxSubArrayKadaneAlgo(nums: number[]): number {


  // let maxSum = nums[0]
  // let currentSum = maxSum

  // for (let i = 1; i < nums.length; i++) {
  //   currentSum = Math.max(nums[i] + currentSum, nums[i])
  //   maxSum = Math.max(currentSum, maxSum)
  // }
  // return maxSum

  let maxSum = nums[0]
  let currentSum = 0

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0
    }
    currentSum += nums[i]
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
}



const nums23123 = [5, 4, -1, 7, 8]

const nums213912903 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// console.log(maxSubArray(nums23123))
// console.log(maxSubArray(nums213912903))

console.log(maxSubArrayKadaneAlgo(nums23123))

console.log(maxSubArrayKadaneAlgo(nums213912903))