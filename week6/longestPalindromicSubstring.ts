// Given a string s, return the longest 
// palindromic

// substring
//  in s.


// Input s = "babad"
// Output = "bab"
// Explanation = "aba" is also a valid answer

// Example 2:
// Input s = "cbbd"
// Output = "bb"


function longestPalindrome(s: string): string {


  // we should go through each element in the string
  // we will need to expand outwards to the left and right

  // if left === right, we can keep on going (left --, right++)
  // if it's out of bounds (e.g. left is < 0, right > string.length, then we stop)


  let currentLongest = ''

  const checkPalindrome = (left: number, right: number, currentSubString: string) => {
    while (left >= 0 && right < s.length) {
      const leftString = s[left]
      const rightString = s[right]
      if (leftString === rightString) {
        const newSubString = s.substring(left, right + 1)
        currentSubString = newSubString
      } else {
        break
      }
      left--
      right++
    }
    if (currentSubString.length > currentLongest.length) {
      return currentSubString
    } else {
      return currentLongest
    }
  }


  for (let i = 0; i < s.length; i++) {
    const currentString = s[i]
    let left = i - 1;
    let right = i + 1;

    const odd = checkPalindrome(left, right, currentString)
    const even = checkPalindrome(left + 1, right, currentString)

    const longerString = odd.length > even.length ? odd : even
    if (longerString.length > currentLongest.length) {
      currentLongest = longerString
    }
  }
  return currentLongest
}

// this solves the happy path of bab / aba
console.log(longestPalindrome('babad'))

// what if it's even (e.g. cbbd)

console.log(longestPalindrome('cbbd'))

console.log(longestPalindrome("aacabdkacaa"))
