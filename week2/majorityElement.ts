// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Follow-up: Could you solve the problem in linear time and in O(1) space?


function majorityElement(nums: number[]): number {

  // // we can create a hashmap
  // const hashMap = {} as { [key: number]: number }

  // for (const number of nums) {
  //   if (hashMap[number]) {
  //     hashMap[number]++
  //   } else {
  //     hashMap[number] = 1
  //   }
  // }

  // const majorityThreshold = nums.length / 2

  // let majority: number = 0
  // for (const number in hashMap) {
  //   if (hashMap[number] > majorityThreshold) {
  //     majority = parseInt(number)
  //   }
  // }
  // return majority


  // let's try to do this in linear time and in O(1) space

  // we should only loop through the array once 

  const majorityThreshold = nums.length / 2

  let currentMajority = nums[0]
  let currentMajorityCount = 1

  for (const number of nums) {
    if (currentMajorityCount === 0) {
      currentMajority++
      currentMajority = number
    } else if (currentMajority = number) {
      currentMajorityCount++
    } else currentMajorityCount--
  }
};

const nums = [2, 2, 1, 1, 1, 2, 2]

console.log(majorityElement(nums))