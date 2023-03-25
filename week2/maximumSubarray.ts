// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.


// Example 1
// Input = nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output = 6
// Explanation - the subarray [4, -1, 2, 1] has the largest sum 6 

function maxSubArray(nums: number[]): number {

  // early return if length is 1
  if (nums.length === 1) {
    return nums[0]
  }
  let currentLargestSubArray = [nums[0]]

  let nextSubArray = [] as Array<number>

  for (let i = 1; i < nums.length; i++) {

    const number = nums[i]

    const currentLargestSum = currentLargestSubArray.reduce((prev, curr) => {
      // console.log(`prev: ${prev}, curr: ${curr}`)
      return prev + curr
    }, 0)

    const nextSubArraySum = nextSubArray.reduce((prev, curr) => {
      // console.log(`prev: ${prev}, curr: ${curr}`)
      return prev + curr
    }, 0)

    const contenderSum = currentLargestSum + number
    const nextSubArrayAndCurr = nextSubArraySum + number

    console.log(`ContenderSum: ${contenderSum}, nextSub: ${nextSubArrayAndCurr}`)

    if (currentLargestSum < contenderSum && contenderSum > nextSubArrayAndCurr) {
      currentLargestSubArray.push(number)
    } else if (currentLargestSum > contenderSum) {
      currentLargestSubArray.push(number)
      nextSubArray.push(number)
    } else if (nextSubArrayAndCurr > currentLargestSum) {
      currentLargestSubArray = nextSubArray
      nextSubArray = []
    }
  }
  return currentLargestSubArray.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}

// for (const number of nums) {

//   // reduce the currentLargestSubArray 
//   const currentLargestSum = currentLargestSubArray.reduce((prev, curr) => {
//     console.log(`prev: ${prev}, curr: ${curr}`)
//     return prev + curr
//   }, 0)

//   const nextSubArraySum = nextSubArray.reduce((prev, curr) => {
//     console.log(`prev: ${prev}, curr: ${curr}`)
//     return prev + curr
//   }, 0)

//   console.log(`CurrentLargestSum: ${currentLargestSum}, nextSubArraySum: ${nextSubArraySum}`)

//   const contenderSum = currentLargestSum + number
//   const nextSubArrayAndCurr = nextSubArraySum + number

//   console.log(`ContenderSum: ${contenderSum}, nextSub: ${nextSubArrayAndCurr}`)

//   if (currentLargestSum < contenderSum && contenderSum > nextSubArrayAndCurr) {
//     currentLargestSubArray.push(number)
//   } else if (currentLargestSum > contenderSum) {
//     nextSubArray.push(number)
//   } else if (nextSubArrayAndCurr > currentLargestSum) {
//     currentLargestSubArray = nextSubArray
//   }
// }



// const nums23123 = [5, 4, -1, 7, 8]

const nums213912903 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// console.log(maxSubArray(nums23123))
console.log(maxSubArray(nums213912903))
