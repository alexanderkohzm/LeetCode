// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


function search(nums: number[], target: number): number {


  let startingIndex = 0;
  let endingIndex = nums.length - 1

  while (startingIndex <= endingIndex) {
    // length of array
    const middleIndex = startingIndex + Math.floor((endingIndex - startingIndex) / 2)
    const numberToCompare = nums[middleIndex]

    if (target === numberToCompare) {
      return middleIndex
    } else if (numberToCompare < target) {
      // check left side 
      startingIndex = middleIndex + 1
    } else {
      endingIndex = middleIndex - 1
    }
  }

  return -1
};

const numsTarget9 = [-1, 0, 3, 5, 9, 12]
// target 9
console.log(search(numsTarget9, 9))

const numsTarget2 = [-1, 0, 3, 5, 9, 12]
// taget 2

const noNumber = [1, 2, 3, 4, 5]
// target 6

function binarySearch2(nums: number[], target: number): number {

  // start is 0 and end 
  // see middle
  // if middle is MORE than target, then move to the left 
  // if middle is LESS than target, move to the right 
  // return -1 if not found 
  let start = 0;
  let end = nums.length - 1

  while (start <= end) {
    const middle = start + Math.floor((end - start) / 2)
    const middleNumber = nums[middle]

    if (middleNumber == target) {
      return middle
    }

    // if not, go left or right 
    if (middleNumber < target) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return -1
}

console.log(binarySearch2(numsTarget2, 2))
console.log(binarySearch2(numsTarget9, 9))
console.log(binarySearch2(noNumber, 6))


/**
 * this is another way to do binarySearch. But you can't retain the original array's positioning
 * So it does not solve this current prompt
 */

// function search(nums: number[], target: number): number {

//   // binary search means that we would like to split the 
//   // array every time it's not present 
//   // we can do this recursively 

//   console.log("I am here with nums: ", nums)

//   // we need a break point. If nums.length is 1 && number is NOT target, return -1
//   if (nums.length <= 1 && nums[0] !== target) {
//     return -1
//   }

//   // get the midPoint
//   const midPointIndex = Math.floor(nums.length / 2)

//   const numberToCompare = nums[midPointIndex]

//   // if numberToCompare is target, return the index

//   if (numberToCompare === target) {
//     return midPointIndex
//   } else if (numberToCompare > target) {
//     // if less, search left half 

//     const numsLeftSide = nums.slice(undefined, midPointIndex)
//     return search(numsLeftSide, target)
//   } else {
//     // if more, search right half 
//     const numsRightSide = nums.slice(midPointIndex, nums.length)
//     return search(numsRightSide, target)
//   }
// };
