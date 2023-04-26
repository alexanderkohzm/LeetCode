// There is an integer array nums sorted in
// ascending order (with distinct values).

// Prior to being passed to your function,
// nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an
// integer target, return the index of target if it is in nums
// or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

function search(nums: number[], target: number): number {
  // handle cases of 1 and 0
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middlePoint = left + Math.floor((right - left) / 2);

    const currentNumber = nums[middlePoint];
    if (target === currentNumber) return middlePoint;

    // when dividing the rotated array into two halves, one must be sorted

    if (nums[left] <= currentNumber) {
      if (nums[left] <= target && target <= currentNumber) {
        // go to the left
        right = middlePoint + 1;
      } else {
        // go to the right
        left = middlePoint + 1;
      }
    } else {
      if (currentNumber <= target && target <= nums[right]) {
        // go to the right
        left = middlePoint + 1;
      } else {
        // go to the left
        right = middlePoint + 1;
      }
    }
  }
  return -1;
}

// WRONG WAY
// I would have gotten stuck at tryign to find K

// function search(nums: number[], target: number): number {
//   // handle cases of 1 and 0
//   if (nums.length === 0) return -1;
//   if (nums.length === 1) return nums[0] === target ? 0 : -1;

//   // a naive way of doing this is sorting nums first and storing it in another array
//   // after sorting nums, we see if the target is in the array
//   // if yes, we return the index in the original array
//   // if no, we return -1

//   // but this sounds kinda dumb - it defeats the whole purpose of the exercise
//   // and it probably doesn't follow O(log n) runtime complexity

//   // another idea might be to start with a binarySearch
//   // this is a simple way of searching and it definitely works if the array is NOT rotated

//   // so we need a way to know if the array IS or IS NOT rotated
//   // Since we know it's in ascending order, we can check to see if index 0 is less than index[n-1]
//   // if index 0 is greater than index[n-1], then we know that it has been rotated

//   // if it has been rotated, then we know that index[n-1] is equal to [k-1] and index[0] is k

//   // we know that everything from index[0] (now index[k]) till [k-1] (now index[n-1]) is ascending
//   // and everything from index[k] (now index[0]) till index[n-1] (now index[k]) is ascending

//   // set up binarySearch
//   /**
//    * returns either the target index position OR -1
//    * @param nums
//    * @param target
//    */
//   function binarySearch(nums: number[], target: number): number {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//       let midPoint = start + Math.floor((end - start) / 2);
//       const currentNumber = nums[midPoint];

//       if (currentNumber === target) return midPoint;

//       if (currentNumber < target) {
//         // go right
//         start = midPoint + 1;
//       } else {
//         // if currentNumber is larger, go left
//         end = midPoint - 1;
//       }
//     }
//     // return -1 if it cannot be found
//     return -1;
//   }

//   const firstIndexNumber = nums[0];
//   const lengthOfNums = nums.length;
//   const lastIndexNumber = nums[lengthOfNums - 1];

//   const isRotated = firstIndexNumber > lastIndexNumber;

//   // if it's normal
//   if (!isRotated) return binarySearch(nums, target);

//   // if it's rotated, see what K is

//   // if the array IS ROTATED, then we need to do the special binary search
//   // if target is LESS Than
// }
