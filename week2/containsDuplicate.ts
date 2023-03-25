// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



function containsDuplicate(nums: number[]): boolean {

  // use a hashMap 
  // can just pass through once

  // Space complexity 
  // O(2n) worst case scenario (we have to create a separate hashmap size of nums)

  // Time complexity 
  // O(n) worst case scenario (we have to go through the entire list)

  // generate Set 
  const set = new Set<number>()

  for (const num of nums) {
    if (set.has(num)) {
      return true
    } else {
      set.add(num)
    }
  }
  return false
};