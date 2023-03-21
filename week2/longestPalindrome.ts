// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// https://www.youtube.com/watch?v=a_3XDW9P47E

function longestPalindrome(s: string): number {

  const set = new Set();

  let count = 0
  // what we can do is loop through the string 
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {

      // add 2 everytime we see the string
      count += 2
      // and now we delete it. This will take out two characters, the first
      // that was used to add to the set and the second one to identify 
      set.delete(s[i])
    } else {
      set.add(s[i])
    }
  }
  if (set.size > 0) {
    count += 1
  }

  return count
};


const palindromTest = 'bananas'

console.log(longestPalindrome(palindromTest))