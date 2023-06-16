import React, { useState } from "react";

const app = ({ input }) => {
  // Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  // Note that you must do this in-place without making a copy of the array.

  // Input: nums = [0,1,0,3,12]Output: [1,3,12,0,0]

  // Time Complexity
  // O()
  //

  // [0, 1, 0, 3, 12]
  //           ^

  // let howManyZeroesInArray = 0
  // let currentIndexThatNeedsToBeReplaced = 0 -> initialise this as 0
  // increment currentIndexNeedsToBeReplaced = 1 // for now, I'll just put 0, but I will want to watch out to make sure I don't double count

  // increment howManyZeroesInArray, it becomes 2
  // currentIndexNeedsToBeReplaced === 1

  // array[currentIndexNeedsToBeReplaced] = 3
  // currentIndexNeedsToBeReplaced++

  // O(2n)

  // Space Complexity
  // O(1) -> const, let

  // let's first initialise the variables
  let howManyZeroesInArray = 0;
  let currentIndexThatNeedsToBeReplaced = 0;

  for (let i = 0; i < input.length; i++) {
    const currentNumber = input[i];

    if (currentNumber === 0) {
      howManyZeroesInArray++;
    } else {
      input[currentIndexThatNeedsToBeReplaced] = currentNumber;
      currentIndexThatNeedsToBeReplaced++;
    }
  }

  while (howManyZeroesInArray > 0) {
    // howManyZeroesInArray can also act as the length - X value

    input[currentIndexThatNeedsToBeReplaced] = 0;
    currentIndexThatNeedsToBeReplaced++;
    howManyZeroesInArray--;
  }

  return <div>This is main app</div>;
};
