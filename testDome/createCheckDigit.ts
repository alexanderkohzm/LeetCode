/**
 * 
 * Your company assigns each customer a membership ID and you are implementing a check digit for those IDs 
 * 
 * The check digit should be calculated by adding up all digits in each membership ID. IF the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should be repeated until a single-digit number is calculated
 * 
 * For example, for the membership ID "5555", the sum of all digits is 25. Because this is not a single digit number, 2 and 5 would be added and the result 7 would be the check digit 
 */


function createCheckDigit(membershipId: string) {
  // Write the code that goes here.


  // add up all digits in each membershipId

  let total = 0

  for (const digit of membershipId) {
    total += parseInt(digit)
  }

  console.log("THis is total in the first pass: ", total)

  // if result of sum is > than a single digit (e.g. 9, 4 ,6) then another iteration is required   
  while (total >= 10) {
    console.log("this is total in the loop: ", total)
    // the digits of the result should be added together 

    // parse string
    const totalString: string = total.toString()

    let newTotal = 0
    for (const digit of totalString) {
      newTotal += parseInt(digit)
    }

    total = newTotal
  }

  return total
}

// console.log(createCheckDigit("55555"));

console.log(createCheckDigit("77777777"));