// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// example: 
// input: nums = [1,2,3]
// output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3 ,1], [3, 1 ,2], [3, 2, 1]]

// example 2:
// input = [0, 1]
// output = [[0, 1], [1, 0]]

// example 3:
// input = [1]
// output = [[1]]

// 1 <= nums.length <= 6

function permute(nums: number[]): number[][] {

  // cover for the case where nums.length === 1
  if (nums.length === 1) {
    return [[nums[0]]]
  }

  // it seems like we can do this recursively OR iteratively 

  // for example for [1, 2, 3]
  //  [1] this is the starting. Remaining = [2, 3]
  // [1, 2], remaining = [3]
  // [1, 3], remaining = [2]
  // [1, 2, 3]
  // [1, 3, 2]

  // it's quite like a DEPTH FIRST SEARCH for EACH number in the array 
  const resultArray = [] as Array<Array<number>>

  function depthFirstSearch(nums: number[], currentPermutation: number[]): void {
    // this receives an array of numbers (What's left in the array)
    // and the currentPermutation (array of numbers)

    // base case
    if (nums.length === 0) {
      resultArray.push(currentPermutation)
    }

    // if nums.length === 1, we need to add and call an empty nums
    if (nums.length === 1) {
      return depthFirstSearch([], [...currentPermutation, nums[0]])
    }



    // for the nums, we need to call depthFirstSearch for EACH number. And we add it to the currentPermutation. And then we remove that number in nums and pass in the new nums
    for (let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i]
      // new nums 
      const index = nums.indexOf(currentNumber)
      // problem with this is that you create a new array everytime. 
      // But let's just go with it since I'm not sure if nums will get mutated across different recursions -> we don't want that 
      const newNums = [...nums]
      newNums.splice(index, 1)
      const newPermutation = [...currentPermutation]
      newPermutation.push(currentNumber)
      depthFirstSearch(newNums, newPermutation)
    }

  }


  depthFirstSearch(nums, [])
  return resultArray
};

const testPermute1 = [0, 1]
console.log("This is permute: ", permute(testPermute1))