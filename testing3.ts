function solution(words: string[], l: number): string[] {


  // we have a list of words

  // each word is made out of X characters
  // we want to squeeze as many words (made out of X characters) into each line 

  // for example, if we have the words "Small", "Bottle", "Cat" -> 5, 6, 3 = 14 characters
  // l = 16. This means that they fit perfectly with Small + " " + Bottle + " " + Cat all in one line to 
  // form 16 characters

  // if we replace Bottle with "Smart", there's be space for 3 blank spaces. So we assign the blank spaces to the left first

  const results = [] as Array<string>

  const tempResults = [] as Array<Array<string>>

  let currentCharacterCount = 0;

  while (words.length > 0) {

    let currentArrayOfWords = [] as Array<string>

    while (currentCharacterCount < l) {
      console.log("This is words: ", words)
      console.log("this is tempResults: ", tempResults)
      console.log(currentArrayOfWords)

      const currentWord = words.shift();

      // we've reached the end
      if (!currentWord) {
        tempResults.push(currentArrayOfWords);
        break;
      }

      // add the characterCount    
      const newCharacterCount = currentCharacterCount + currentWord!.length;
      console.log("This is currentWord, newCharacterCount: ", [currentWord, newCharacterCount])

      if (newCharacterCount == l) {
        currentArrayOfWords.push(currentWord!)
        currentCharacterCount = 0
        tempResults.push(currentArrayOfWords);
        break;
      } else if (newCharacterCount < l) {
        currentArrayOfWords.push(currentWord!)
        // add the word length and account for the space needed
        currentCharacterCount += currentWord!.length + 1

        if (currentCharacterCount == l) {
          currentCharacterCount = 0
          tempResults.push(currentArrayOfWords)
          break;
        }
      } else {
        // if not, we need to break
        currentCharacterCount = 0
        words.unshift(currentWord!)
        tempResults.push(currentArrayOfWords)
        break;
      }
    }
  }
  // now we should have an array of words that satisfy the condition
  // where the total number of characters is less than l 



  for (let i = 0; i < tempResults.length; i++) {
    const currentArray = tempResults[i]

    let justified = ""
    if (currentArray.length === 1) {
      // account if the array length is only one
      results.push(`${currentArray[0]}`)
    }

    // if it's the last line
    if (i === tempResults.length - 1) {
      for (let i = 0; i < currentArray.length; i++) {
        if (i == 0) {
          justified += currentArray[i]
        }
        justified += ` ${currentArray[i]}`
      }
    }

    // now we need to justify 
    // get number of characters for current words
    const numberOfCharacters = currentArray.reduce((prev, curr) => {
      return prev + curr.length
    }, 0)

    const numberOfSpaces = l - numberOfCharacters

    const spacesBetweenWords = Math.floor(numberOfSpaces / (currentArray.length - 1))
    const extraSpace = numberOfSpaces % (currentArray.length - 1);

    justified = currentArray.join(" ".repeat(spacesBetweenWords + 1))
    justified += " ".repeat(extraSpace)

    results.push(justified)
  }

  return ['hihi']
}

console.log(solution(["This", "is", "an", "example", "of", "text", "justification."], 16))