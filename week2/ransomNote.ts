// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



function canConstruct(ransomNote: string, magazine: string): boolean {

  // magazine length must be more than ransom note

  if (magazine.length < ransomNote.length) {
    return false
  }

  const hashMap = {} as {
    [key: string]: number
  }
  // fill up the hash table with magazine 
  for (const letter of magazine) {
    if (hashMap[letter]) {
      // increment by one
      hashMap[letter] += 1
    } else {
      hashMap[letter] = 1
    }
  }

  // now try to construct the ransomNote. 


  for (const letter of ransomNote) {
    // if no letter or negative, means we can't create
    if (!hashMap[letter] || hashMap[letter] < 0) {
      return false
    } else {
      hashMap[letter] -= 1
    }
  }

  return true
};

const ransomNote = 'aa'
const magazine = 'aab'

console.log(canConstruct(ransomNote, magazine))