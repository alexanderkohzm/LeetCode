// Given a string s, find the length of the longest substring
// without repeating characters.

// example,
// s = "abcabcbb"
// answer = 3
// answer is "abc" with the length of 3

// example 2
// s = 'bbbbbb'
// answer is 1
// The answer is b, with the length of 1

// example 3
// input s = 'pwwkew
// output = 3
// Answer is 'wke' with the length of 3
// the answer MUST be a substring. pwke is a subsequence BUT not a substring

// constraints
// 0 <= s.length <= 5 * 10 ** 4

// s consists of English letters, digits, symbols, and spaces

// function lengthOfLongestSubstring(s: string): number {
//   if (s.length === 0) return 0;
//   if (s.length === 1) return 1;

//   // starting index of current window substring
//   let leftOfCurrentWindow = 0;

//   // length of longest substring
//   let longestSubStringLength = 0;

//   // length of currentSubString (Size of window)
//   let currentSubStringLength = 0;

//   // starting index of longest substring
//   let startingIndexOfLongestSubstring = 0;

//   // hashmap to store the elemnt as key and index last seen as value
//   const lastSeenAt = {} as { [key: string]: number };

//   for (let index = 0; index < s.length; index++) {
//     const currentString = s[index];

//     // if the current element is not present in the hashMap
//     // then store it in the hashMap with the value as the current index

//     if (!(currentString in lastSeenAt)) {
//       lastSeenAt[currentString] = index;
//     } else {
//       // If the current element is present in the haspMap
//       // it means we've seen ti before
//       // check if the current element occurs before or after leftOfWindow
//       if (lastSeenAt[currentString] >= leftOfCurrentWindow) {
//         currentSubStringLength = index - leftOfCurrentWindow;

//         if (longestSubStringLength < currentSubStringLength) {
//           longestSubStringLength = currentSubStringLength;
//           startingIndexOfLongestSubstring = leftOfCurrentWindow;
//         }

//         // the next substring will start after the last
//         // occurance of the current element
//         leftOfCurrentWindow = lastSeenAt[currentString] + 1;
//       }

//       // Update the last occurance of the element in the haspMap
//       lastSeenAt[currentString] = index;
//     }
//   }

//   return longestSubStringLength;
// }

// console.log(lengthOfLongestSubstring('bbbbbbbb'))

// console.log(lengthOfLongestSubstring('abcabcbb'))

// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("dvdf"));

// console.log(lengthOfLongestSubstring("abcabcbb"));

// console.log(lengthOfLongestSubstring("jbpnbwwd"));

const lengthOfLongestSubstringWithSet = (s: string) => {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // two pointers
  // start for the start of the window
  // end for the end of the window
  let startingPointer = 0;
  let endingPointer = 0;

  let hashMap = new Set();

  let max = 0;

  while (endingPointer < s.length) {
    const currentString = s[endingPointer];
    if (!hashMap.has(currentString)) {
      // then we add it to the hashMap
      hashMap.add(currentString);
      endingPointer++;
      max = Math.max(hashMap.size, max);
    } else {
      // that means we've seen the string before
      // we need to move the starting window
      // and we should remove from the set
      hashMap.delete(s[startingPointer]);
      startingPointer++;
    }
  }
  return max;
};
