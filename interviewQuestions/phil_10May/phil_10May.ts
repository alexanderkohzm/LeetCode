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


// ---

// ## Task 6: Warn on shared SSNs

// When we process multiple people in our system, we want to log a warning
// if 2 (or more) people share the same SSN.

// ---

// ### Input example:

// js
// const inputArray = [
//   {
//     name_first: "Jane",
//     name_last: "Doe",
//     ssn: "123456789",
//     data: {
//       social_security_number: "123456789",
//       formatted: {
//         name_first: "Jane",
//         document_ssn: "123456789",
//       },
//     },
//   },
//   {
//     name_first: "Leslie",
//     name_last: "Knope",
//     ssn: "112233445",
//     data: {
//       social_security_number: "112233445",
//       formatted: {
//         name_first: "Leslie",
//         document_ssn: "112233445",
//       },
//     },
//   },
//   {
//     name_first: "Ann",
//     name_last: "Perkins",
//     ssn: "123456789",
//     data: {
//       social_security_number: "123456789",
//       formatted: {
//         name_first: "Ann",
//         document_ssn: "123456789",
//       },
//     },
//   },
// ];