// ---

// ## Task 4: Warn on different SSNs

// If we have a person with multiple, different SSNs attached to them, we want
// to log a warning since this is suspicious.

// ---

// ### Input example:

// js
// const inputObject = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "123456789",
//   data: {
//     social_security_number: "987654321",
//     formatted: {
//       name_first: "Jane",
//       document_ssn: "123456789",
//     },
//   },
// };

import { DataObjectType } from "./task3";


const maskSSN4 = (
  dataObject: { [key: string]: string | DataObjectType },
  maskType: string
): { [key: string]: string | DataObjectType } => {
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

  let ssn = ""


  const depthFirstSearch = (key: string, dataObject: { [key: string]: string | DataObjectType }) => {
    // now we know that it's an object 
    // so we need to get the object Keys again 
    const currentNestedDataObject = dataObject[key] as DataObjectType// -> it could either be a string OR an Object. But we know it's object because that's why we're here in this function
    const keysInObjectNested = Object.keys(currentNestedDataObject)
    for (const key of keysInObjectNested) {
      if (typeof currentNestedDataObject[key] === "string") {
        // i perform the check to see what the key is 
        // if the key is SSN or variants of it, then perform the masking 
        if (arrayOfSSNKeys.includes(key)) {
          // perform the mask depending on what the type is 
          if (ssn === "") {
            ssn = currentNestedDataObject[key] as string
          } else {
            if (ssn !== currentNestedDataObject[key]) {
              console.log(`There is an error: ssn do not match. First SSN: ${ssn}, CurrentSSN: ${currentNestedDataObject[key]}`)
            }
          }
          currentNestedDataObject[key] = generateMaskedSSN4(maskType, currentNestedDataObject[key] as string)
        }
      } else {
        depthFirstSearch(key, currentNestedDataObject)
      }
    }
  }


  // NOTE FOR MYSELF -> try to think of a way to simplify 
  for (const key of keysInObject) {
    if (typeof dataObject[key] === "string") {
      // i perform the check to see what the key is 
      // if the key is SSN or variants of it, then perform the masking 
      if (arrayOfSSNKeys.includes(key)) {
        if (ssn === "") {
          ssn = dataObject[key] as string
        } else {
          if (ssn !== dataObject[key] as string) {
            console.log(`There is an error: ssn do not match. First SSN: ${ssn}, CurrentSSN: ${dataObject[key]}`)
          }
        }
        // perform the mask depending on what the type is 
        dataObject[key] = generateMaskedSSN4(maskType, dataObject[key] as string)
      }
    } else {
      // if it's NOT a string, then it means it's an object and we need to perform the depthFirstSearch for it 
      depthFirstSearch(key, dataObject)
    }
  }
  return dataObject
};


const generateMaskedSSN4 = (maskType: string, ssnString: string): string => {
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

const inputObject = {
  name_first: "Jane",
  name_last: "Doe",
  ssn: "123456789",
  data: {
    social_security_number: "987654321",
    formatted: {
      name_first: "Jane",
      document_ssn: "123456789",
    },
  },
};

console.log(maskSSN4(inputObject, 'partial-mask'))

