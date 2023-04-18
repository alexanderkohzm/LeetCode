// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



function productExceptSelf(nums: number[]): number[] {

  let leftArray = [] as Array<number>
  let leftMultiplication = 1

  for (let i = 0; i < nums.length; i++) {
    leftArray[i] = leftMultiplication
    leftMultiplication *= nums[i]
  }

  let rightArray = [] as Array<number>
  let rightMultiplication = 1

  for (let j = nums.length - 1; j >= 0; j--) {
    rightArray[j] = rightMultiplication
    rightMultiplication *= nums[j]
    rightArray[j] *= leftArray[j]
  }

  return rightArray
};