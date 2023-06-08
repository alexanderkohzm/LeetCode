// ## Task 1: Masking SSNs

// Write a function that takes in an object and a mask type (string) and
// returns an object with the "ssn" property masked according to the provided mask type.
// The possible mask types: ['full-mask', 'partial-mask', 'no-mask'].

// ---

// ### Input example:

// js
// const inputObject = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "123456789",
// };

// ### Output examples:
// #### In the case of full-mask mask all digits:
// js
// const output = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "*********",
// };

// #### In the case of partial-mask mask last 4 digits:

// js
// const output = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "12345****",
// };

// #### In the case of no-mask keep as is:

// js
// const output = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "123456789",
// };

const maskSSN = (
  dataObject: {
    name_first: string;
    name_last: string;
    ssn: string;
  },
  maskType: string
): { name_first: string; name_last: string; ssn: string } => {
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

  // now we need to manipulate the SSN string

  const { ssn } = dataObject;

  if (maskType === MaskTypes.PARTIAL) {
    // we can use an array
    const ssnSplit = ssn.split("");

    // we can create a variable for the number of digits we want to mask
    const maskedDigits = 4;
    const lengthOfSSN = ssnSplit.length;
    ssnSplit.splice(lengthOfSSN - maskedDigits, maskedDigits);

    for (let i = 0; i < maskedDigits; i++) {
      ssnSplit.push("*");
    }

    const combinedSSN = ssnSplit.join("");
    return {
      ...dataObject,
      ssn: combinedSSN,
    };
  } else {
    // return all *
    const fullyMaskedSSN = [] as Array<string>;
    for (let i = 0; i < ssn.length; i++) {
      fullyMaskedSSN.push("*");
    }
    const combinedSSN = fullyMaskedSSN.join("");
    return {
      ...dataObject,
      ssn: combinedSSN,
    };
  }
};

console.log(
  maskSSN(
    {
      name_first: "Jane",
      name_last: "Doe",
      ssn: "123456789",
    },
    "full-mask"
  )
); // should be "*********"

console.log(
  maskSSN(
    {
      name_first: "Jane",
      name_last: "Doe",
      ssn: "123456789",
    },
    "partial-mask"
  )
); // last 4

console.log(
  maskSSN(
    {
      name_first: "Jane",
      name_last: "Doe",
      ssn: "123456789",
    },
    "no-mask"
  )
); // should be as is
