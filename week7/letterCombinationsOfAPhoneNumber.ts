/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

// Example 1
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2
// Input: digits = ""
// Output: []

// Example 3
// Input: digits = "2"
// Output: ["a", "b", "c"]

const keyMapping = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
} as { [key: string]: Array<string> }


function letterCombinations(digits: string): string[] {

  // early return if digits is empty 
  if (digits.length === 0) {
    return [];
  }

  const arrayToReturn = [] as string[];


  // we can do this recursively or iteratively 

  // recursive approach 
  // imagine we have "2"
  // we want to go through keyMapping[2] and iterate over the array
  // stringToReturn = "a", "b", "c" etc 
  // if it's "23"
  // keyMapping[2] -> "a", "b", "c"
  // keyMapping[3] -> "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"
  // when digits length is 0, we push the stringToReturn to the array

  /**
   * params: 
   */
  const addDigits = (digits: string[], stringToReturn: string) => {
    // base case -> digits length is 0
    if (digits.length === 0) {
      arrayToReturn.push(stringToReturn)
      return;
    }
    const currentDigit = digits.shift()!
    const digitsToAdd = keyMapping[currentDigit]
    for (const digit of digitsToAdd) {
      const newString = stringToReturn + digit
      addDigits([...digits], newString)
    }
  }

  const digitsToCalculate = digits.split("")

  addDigits(digitsToCalculate, "")

  return arrayToReturn
};

console.log(letterCombinations("234"))