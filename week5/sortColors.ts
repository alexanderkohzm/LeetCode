// Given an array nums with n objects colored red, white, or blue,
// sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2
// Input: nums = [2,0,1]
// Output: [0,1,2]

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // so this sounds like a sorting algorithm.

  // we can use a quickSort algorithm

  if (nums.length === 0 || nums.length === 1) return;

  // we can also use bucket sort

  let zero = 0;
  let one = 0;
  let two = 0;
  let index = 0;

  for (const number of nums) {
    if (number === 0) {
      zero++;
    } else if (number === 1) {
      one++;
    } else {
      two++;
    }
  }
  // now populate
  while (zero > 0) {
    nums[index] = 0;
    index++;
    zero--;
  }

  while (one > 0) {
    nums[index] = 1;
    index++;
    one--;
  }

  while (two > 0) {
    nums[index] = 2;
    index++;
    two--;
  }

  //   // quick sort
  //   function swap(index: number, toSwap: number): void {
  //     [nums[index], nums[toSwap]] = [nums[toSwap], nums[index]];
  //   }
  //   // we need an index point to the start and ending element
  //   // as well as the currentIndex
  //   let start = 0;
  //   let end = nums.length - 1;
  //   let currentIndex = 0;

  //   while (currentIndex <= end) {
  //     const currentNumber = nums[currentIndex];
  //     if (currentNumber === 0) {
  //       swap(currentIndex, start);
  //       start++;
  //       currentIndex++;
  //     } else if (currentNumber === 2) {
  //       swap(currentIndex, end);
  //       end--;
  //     } else {
  //       currentIndex++;
  //     }
  //   }
}

const nums = [2, 0, 1];
sortColors(nums);
console.log(nums);
