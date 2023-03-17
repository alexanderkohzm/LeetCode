// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


function isPalindrome(s: string): boolean {

  // remove all alphanumberic
  // need to reduce everything to lowercase
  const cleanedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  for (let i = 0; i < cleanedString.length; i++) {
    //go from the front and back 
    const lastIndex = cleanedString.length - 1

    const currentString = cleanedString[i]
    const opposingString = cleanedString[lastIndex - i]

    if (currentString !== opposingString) {
      return false
    }
  }

  return true
};

const string = "A man, a plan, a canal: Panama"
console.log(isPalindrome(string))