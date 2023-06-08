// ---

// ## Task 2: Additional SSN keys

// We might have to handle cases where SSN is present under additional keys.
// Instead of just 'ssn', we need to be able to mask SSNs under the keys
// document_ssn and social_security_number.

// ### Input example:

// js
// const inputObject = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "123456789",
//   social_security_number: "123456789",
// };

// ### Output example:

// js
// const outputObject = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "12345****",
//   social_security_number: "12345****",
// };

// ---
const maskSSN2 = (
  dataObject: { [key: string]: string },
  maskType: string
): { [key: string]: string } => {
  //  The possible mask types: ['full-mask', 'partial-mask', 'no-mask'].

  enum MaskTypes {
    FULL = "full-mask",
    PARTIAL = "partial-mask",
    NO_MASK = "no-mask",
  }

  // if full mask, return all digits as *. There are NINE digits
  // if partial mask, just mask the last 4 digits
  // if it's no-mask, just keep as is

  if (maskType === MaskTypes.NO_MASK) return dataObject;

  // Abstract out the creation of the mask

  const keysInObject = Object.keys(dataObject)

  const arrayOfSSNKeys = ["ssn", "social_security_number", "document_ssn"]

  for (const key of keysInObject) {
    if (arrayOfSSNKeys.includes(key)) {
      // perform the mask depending on what the type is 
      dataObject[key] = generateMaskedSSN(maskType, dataObject[key])
    }
  }
  return dataObject
};


const generateMaskedSSN = (maskType: string, ssnString: string): string => {


  enum MaskTypes {
    FULL = "full-mask",
    PARTIAL = "partial-mask",
    NO_MASK = "no-mask",
  }

  if (maskType === MaskTypes.PARTIAL) {
    // we can use an array
    const ssnSplit = ssnString.split("");

    // we can create a variable for the number of digits we want to mask
    const maskedDigits = 4;
    const lengthOfSSN = ssnSplit.length;
    ssnSplit.splice(lengthOfSSN - maskedDigits, maskedDigits);

    for (let i = 0; i < maskedDigits; i++) {
      ssnSplit.push("*");
    }

    const combinedSSN = ssnSplit.join("");
    return combinedSSN
  } else {
    // return all *
    const fullyMaskedSSN = [] as Array<string>;
    for (let i = 0; i < ssnString.length; i++) {
      fullyMaskedSSN.push("*");
    }
    const combinedSSN = fullyMaskedSSN.join("");
    return combinedSSN
  }
}

console.log(
  maskSSN2(
    {
      name_first: "Jane",
      name_last: "Doe",
      ssn: "123456789",
      social_security_number: "123456789"
    },
    "full-mask"
  )
); // should be "*********"

console.log(
  maskSSN2(
    {
      name_first: "Jane",
      name_last: "Doe",
      ssn: "123456789",
      document_ssn: "123456789"
    },
    "partial-mask"
  )
); // last 4
