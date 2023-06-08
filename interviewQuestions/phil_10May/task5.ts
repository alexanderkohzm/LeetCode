// ---

// ## Task 5: Allow mistyped SSNs

// Sometimes people mistype their own SSN, so we don't want to log an error
// if the mismatched SSNs are off by just one character.

// ---

// ### Input example:

// js
// const inputObject = {
//   name_first: "Jane",
//   name_last: "Doe",
//   ssn: "123456789",
//   data: {
//     social_security_number: "123456788",
//     formatted: {
//       name_first: "Jane",
//       document_ssn: "123456789",
//     },
//   },
// };
