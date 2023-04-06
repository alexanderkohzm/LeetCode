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

  const set = new Set();

  let left = 0;
  let maxSize = 0;

  if (s.length === 1) return 1

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left])
      left++
    }
    set.add(s[i])
    maxSize = Math.max(maxSize, i - left + 1)
  }

  return maxSize

};

// console.log(lengthOfLongestSubstring('bbbbbbbb'))


// console.log(lengthOfLongestSubstring('abcabcbb'))

console.log(lengthOfLongestSubstring('pwwkew'))

console.log(lengthOfLongestSubstring('dvdf'))

console.log(lengthOfLongestSubstring("abcabcbb"))

console.log(lengthOfLongestSubstring("jbpnbwwd"))