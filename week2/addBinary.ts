// Given two binary strings a and b, return their sum as a binary string.

// This is how binary works 
// to display the number 3 it's 
// 11 

// why? 

// the first 1 is worth 1 (2^0) 
// the second 1 is worth 2 (2^1)


// so 10101
// is  (2^0 *1) + (2^1 * 0) + (2^2 *1) + (2^3 * 0) + (2^4 * 1) = 2 + 0 + 4 + 0 + 16 = 22

function addBinary(a: string, b: string): string {

  if (a === '0' && b === '0') {
    return '0'
  }


  let aIndex = a.length - 1;
  let bIndex = b.length - 1

  let carry = 0
  let stringToReturn = ""

  while (aIndex >= 0 || bIndex >= 0) {

    let sum = 0

    if (aIndex >= 0) sum += parseInt(a[aIndex])
    if (bIndex >= 0) sum += parseInt(b[bIndex])

    sum += carry

    stringToReturn = stringToReturn + (sum % 2)
    carry = Math.floor(sum / 2)

    aIndex--
    bIndex--
  }

  if (carry != 0) {
    stringToReturn = stringToReturn + carry.toString()
  }

  return stringToReturn.split("").reverse().join("")
};

console.log(addBinary("1010", "1011"))

console.log(addBinary("11", "1"))