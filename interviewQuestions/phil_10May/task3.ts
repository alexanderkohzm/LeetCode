
// ---

// ## Task 3: Nested object

// Our SSN (using all keys from the previous task) could be deeply nested within the
// object, not just at the top level. We need to mask it no matter where it is.

// ---

// ### Input example:

// js
// const inputObject = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "123456789",
//   data: {
//     social_security_number: "123456789",
//     formatted: {
//       name_first: "Jane",
//       document_ssn: "123456789",
//     },
//   },
// };


// ### Output example:

// js
// const outputObject = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "12345****",
//   data: {
//     social_security_number: "12345****",
//     formatted: {
//       name_first: "Jane",
//       document_ssn: "12345****",
//     },
//   },
// };

export type DataObjectType = {
  [key: string]: string | DataObjectType
}



const maskSSN3 = (
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
          currentNestedDataObject[key] = generateMaskedSSN3(maskType, dataObject[key] as string)
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
        // perform the mask depending on what the type is 
        dataObject[key] = generateMaskedSSN3(maskType, dataObject[key] as string)
      }
    } else {
      // if it's NOT a string, then it means it's an object and we need to perform the depthFirstSearch for it 
      depthFirstSearch(key, dataObject)
    }
  }
  return dataObject
};


const generateMaskedSSN3 = (maskType: string, ssnString: string): string => {
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
  maskSSN3(
    {
      name_first: "Jane",
      name_last: "Doe",
      ssn: "123456789",
      social_security_number: "123456789",
    },
    "full-mask"
  )
); // should be "*********"

console.log(
  maskSSN3(
    {
      name_first: "Jane",
      name_last: "Doe",
      ssn: "123456789",
      document_ssn: "123456789",
      data: {
        document_ssn: "123456789"
      }
    },
    "partial-mask"
  )
); // last 4
