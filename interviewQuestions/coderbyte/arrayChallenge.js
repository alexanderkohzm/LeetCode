function ArrayChallenge(strArr) {
  // we need to split the first element (e.g. baseball)
  // into strings of increasing lengths
  // for example
  // 'b', 'ba', 'bas', 'base', 'baseb', 'baseba', 'basebal'
  // it will be from index 0 till the second last string

  // we will then need to find the string MINUS that string
  // e.g. b and aseball, ba and seball, bas and eball, base and ball etc

  const hashmap = {};

  const elementToCheck = strArr[0];

  for (let i = 1; i < elementToCheck.length; i++) {
    const substring1 = elementToCheck.substring(0, i);
    const substring2 = elementToCheck.substring(i);

    hashmap[i] = [substring1, substring2];
  }

  const arrayToCheck = strArr[1].split(",");

  for (const entries in hashmap) {
    const [firstString, secondString] = hashmap[entries];

    if (
      arrayToCheck.includes(firstString) &&
      arrayToCheck.includes(secondString)
    ) {
      // ok now we need to take the final output string and
      // concatenate it with the challenge tkoen
      // and then replace every third character with an X

      const challengeToken = "l18fm49bd";

      const answerString = `${firstString},${secondString}`;
      const concatenated = answerString + challengeToken;

      // function to replace every third
      function replaceEveryThirdWithX(string) {
        const splitString = string.split("");
        for (let i = 0; i < string.length; i++) {
          const plusOne = i + 1;

          if (plusOne % 3 === 0) {
            splitString[i] = "X";
          }
        }

        return splitString.join("");
      }

      return replaceEveryThirdWithX(concatenated);
    }
  }

  return `not possible`;
}

// keep this function call here
console.log(ArrayChallenge(readline()));
