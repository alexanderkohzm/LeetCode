// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s: string, t: string): boolean {


  // if s.length !== t.length, it can't be an anagram
  if (s.length !== t.length) {
    return false
  }

  const hashMap = {}

  // we need to loop through the first string and create a map. 
  // if there is no key, add it to the map and add the value (e.g. + 1)
  // if the key exists, add 1 to it 
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i]

    if (hashMap[currentLetter]) {
      hashMap[currentLetter] = hashMap[currentLetter] + 1
    } else {
      hashMap[currentLetter] = 1
    }
  }

  // now we need to loop through the second string and compare 
  for (let j = 0; j < t.length; j++) {
    const currentLetter = t[j]

    // if currentLEtter does not exist, it means it's not an anagram
    if (!hashMap[currentLetter]) {
      return false
    }

    // if it does, then we minus 
    if (hashMap[currentLetter]) {
      hashMap[currentLetter] = hashMap[currentLetter] - 1
    }

    // if it ever goes below 0, it's not an anagram
    if (hashMap[currentLetter] < 0) {
      return false
    }
  }

  // now we have a hashMap 
  // we need to check the values. If any of them are >0, it means 
  // there are too many letters and it's not an anagram 
  const values = Object.values(hashMap)
  for (const value of values) {
    if (value !== 0) {
      return false
    }
  }
  return true
};