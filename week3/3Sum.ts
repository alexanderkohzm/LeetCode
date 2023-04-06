// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints
//  3 <= nums.length <= 3000
//  -10^5 <= nums[i] <= 10^5

function threeSum(nums: number[]): number[][] {


  // a brute force algorithm is to perform a triple for loop 
  // this would loop through the array 3 times with n, n+1, and n+2 as the starting index 
  // we will then calculate to see if the sum of the numbers = 0 
  // const arrayToKeepTrack = [] as Array<Array<number>>

  // for (let i = 0; i < nums.length; i++) {

  //   // first loop for index 0

  //   for (let j = i + 1; j < nums.length; j++) {
  //     // second loop for i + 1

  //     for (let k = j + 1; k < nums.length; k++) {
  //       // third loop
  //       if (nums[j] === undefined || nums[k] === undefined) {
  //         continue
  //       }
  //       if (nums[i] + nums[j] + nums[k] === 0) {
  //         arrayToKeepTrack.push([nums[i], nums[j], nums[k]])
  //       }
  //     }
  //   }
  // }

  // there's quite a few issues with this method.
  // (1) We will need to sort through the triplets and remove any duplicates
  // (2) Space and time complexity is a huge problem. Time complexity is n^3 + n^2

  const resultsArray = [] as Array<Array<number>>

  nums.sort((a, b) => a - b)


  // // the issue with this method is that it exceeds the timeLimit when nums.length === 3000
  // // we then loop through it (triple loop)
  // // we only want numbers that are different (bigger) than what we have used before 

  // // e.g. k > kLastUsed
  // let iLastUsed = Infinity
  // let jLastUsed = Infinity
  // let kLastUsed = Infinity

  // for (let i = 0; i < nums.length - 2; i++) {
  //   // first loop for index 0
  //   if (nums[i] === iLastUsed) {
  //     continue
  //   }

  //   for (let j = i + 1; j < nums.length - 1; j++) {
  //     // second loop for i + 1

  //     for (let k = j + 1; k < nums.length; k++) {
  //       // third loop
  //       if (nums[i] === iLastUsed && nums[j] === jLastUsed && nums[k] === kLastUsed) {
  //         continue
  //       }
  //       if (nums[i] === 0 && nums[j] === 0 && nums[k] !== 0) {
  //         break
  //       }
  //       if (nums[i] + nums[j] + nums[k] === 0) {
  //         iLastUsed = nums[i]
  //         jLastUsed = nums[j]
  //         kLastUsed = nums[k]
  //         resultsArray.push([nums[i], nums[j], nums[k]])
  //       }
  //     }
  //   }
  // }
  let target = 0

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]

      if (sum === 0) {
        resultsArray.push([nums[i], nums[j], nums[k]])

        // move to next unique 
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k + 1]) k--

        j++
        k--
      } else if (sum < target) {
        j++
      } else {
        k--
      }
    }
  }


  return resultsArray
};

const testForThis = [-1, 0, 1, 2, -1, -4]
const secondTest = [0, 1, 1]

const thirdTest = [0, 0, 0]

const fourthTest = [-1, 0, 1, 0]

const fifthTest = [3, 0, -2, -1, 1, 2]

// console.log(threeSum(testForThis))

// console.log(threeSum(thirdTest))

console.log(threeSum(fifthTest))

