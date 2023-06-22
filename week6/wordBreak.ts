// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// class WordBreakTrieNode {
//   public children = {} as { [key: string]: Array<WordBreakTrieNode> }
// }

// time limit exceeded
// function wordBreak(s: string, wordDict: string[]): boolean {

//   const ableToBreakUpWord = (string: string): boolean => {
//     if (string.length === 0) {
//       return true
//     }
//     for (const word of wordDict) {
//       console.log("current word, string: ", word, string)
//       const lengthOfCurrentWord = word.length;
//       // get the first few letters of string;
//       const subString = string.substring(0, lengthOfCurrentWord)
//       if (subString === word) {
//         // and we need to recurse through it 
//         const remainingString = string.substring(lengthOfCurrentWord, string.length)
//         if (ableToBreakUpWord(remainingString)) return true
//       }
//     }
//     return false
//   }

//   return ableToBreakUpWord(s)

// };

// console.log(wordBreak("leetcode", ["leet", "code"]))

function wordBreak(s: string, wordDict: string[]): boolean {

  const lookUp = new Set(wordDict);
  const memoArray = new Array(s.length)

  const dp = (startIndex: number): boolean => {
    //  this is the base case -> if we can get to the last index we can return true
    if (startIndex === s.length) {
      return true;
    }

    if (memoArray[startIndex] !== undefined) {
      return memoArray[startIndex]
    }

    let found = false;
    for (let i = startIndex + 1; i <= s.length; i++) {
      if (lookUp.has(s.substring(startIndex, i))) {
        if (dp(i)) {
          found = true;
        }
      }
    }
    memoArray[startIndex] = found;
    return found
  }
  return dp(0)
}

// console.log(wordBreak('cars', ['car', 'ca', 'rs']))
// console.log(wordBreak('LeetCode', ['Leet', 'Code']))
console.log(wordBreak('dgdg', ['d', 'g']))