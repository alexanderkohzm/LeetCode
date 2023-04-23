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

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // starting index of current window substring
  let leftOfCurrentWindow = 0;

  // length of longest substring
  let longestSubStringLength = 0;

  // length of currentSubString (Size of window)
  let currentSubStringLength = 0;

  // starting index of longest substring
  let startingIndexOfLongestSubstring = 0;

  // hashmap to store the elemnt as key and index last seen as value
  const lastSeenAt = {} as { [key: string]: number };

  for (let index = 0; index < s.length; index++) {
    const currentString = s[index];

    // if the current element is not present in the hashMap
    // then store it in the hashMap with the value as the current index

    if (!(currentString in lastSeenAt)) {
      lastSeenAt[currentString] = index;
    } else {
      // If the current element is present in the haspMap
      // it means we've seen ti before
      // check if the current element occurs before or after leftOfWindow
      if (lastSeenAt[currentString] >= leftOfCurrentWindow) {
        currentSubStringLength = index - leftOfCurrentWindow;

        if (longestSubStringLength < currentSubStringLength) {
          longestSubStringLength = currentSubStringLength;
          startingIndexOfLongestSubstring = leftOfCurrentWindow;
        }

        // the next substring will start after the last
        // occurance of the current element
        leftOfCurrentWindow = lastSeenAt[currentString] + 1;
      }

      // Update the last occurance of the element in the haspMap
      lastSeenAt[currentString] = index;
    }
  }

  return longestSubStringLength;
}

// console.log(lengthOfLongestSubstring('bbbbbbbb'))

// console.log(lengthOfLongestSubstring('abcabcbb'))

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(practiceLengthOfLongestSubString("pwwkew"));

console.log(lengthOfLongestSubstring("dvdf"));

console.log(lengthOfLongestSubstring("abcabcbb"));

console.log(lengthOfLongestSubstring("jbpnbwwd"));

function practiceLengthOfLongestSubString(s: string): number {
  //initiate variables

  let currentWindowStartingIndex = 0;
  let currentSubStringLength = 0;

  let longestSubStringStartingIndex = 0;
  let longestSubStringLength = 0;

  // this hashMap has a key of the string (e.g. 'a', 'j', '%') and its value is the index position in the string (e.g. 5, 6, 10)
  const lastSeenAt = {} as { [key: string]: number };

  // we need to loop through the string

  for (let index = 0; index < s.length; index++) {
    const currentString = s[index];

    // if we have not seen this before
    if (!(currentString in lastSeenAt)) {
      // then we just add it to the lastSeenAt and proceed
      lastSeenAt[currentString] = index;
    } else {
      // if we HAVE seen it before

      // then we should see if lastSeenAt is >= leftOfCurrentWindow
      if (lastSeenAt[currentString] >= currentWindowStartingIndex) {
        currentSubStringLength = index - currentWindowStartingIndex;

        // if the currentSubStringLength is > longestSubStringLength
        if (currentSubStringLength > longestSubStringLength) {
          // then we need to swap
          longestSubStringLength = currentSubStringLength;
          // we set the longestSubStringStartingIndex
          longestSubStringStartingIndex = currentWindowStartingIndex;
        }

        // if the currentSubStringLength is smaller than longest
        // then just the currentWindow needs to be updated
        // this is because we've seen a duplicate and need to move it
        currentWindowStartingIndex = lastSeenAt[currentString] + 1;
      }

      // we need to update the lastSeenAt with the currentString's latest index
      lastSeenAt[currentString] = index;
    }
  }

  return longestSubStringLength;
}
