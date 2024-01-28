function solution(operations: string[][]): string[][] {



  type cardHolderType = {
    cardHolder: string;
    cardNumber: string;
    balance: string;
    limit: string;
  }

  const cardHoldersMap = {} as { [key: string]: cardHolderType }



  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i]
    const [command] = operation

    switch (command) {
      case "Add":
        const [, cardHolder, cardNumber, limit] = operation
        handleAdd(cardHolder, cardNumber, limit)
        break;
      case "Charge":
        const [, cardHolder2, amount] = operation
        handleCharge(cardHolder2, amount)
        break;
      case "Credit":
        const [, cardHolder3, amount3] = operation
        handleCredit(cardHolder3, amount3)
        break;
      default:
        throw new Error('Error, command not recognised')
    }
  }

  function handleAdd(cardHolder: string, cardNumber: string, limit: string) {
    // creates a new credit card

    // validate card number with Luhn 10 algorithm 
    const isValid = applyLuhn10Algorithm(cardNumber)

    if (!isValid) {
      return [cardHolder, "error"]
    } else {
      cardHoldersMap[cardHolder] = {
        cardHolder,
        cardNumber,
        balance: "$0",
        limit,
      }
      return [cardHolder, "$0"]
    }
  }

  function handleCharge(cardHolder: string, amount: string) {

    const cardHolderFound = cardHoldersMap[cardHolder]

    // is an invalid card
    if (!cardHolderFound) {
      return [cardHolder, "error"]
    } else {
      const { balance } = cardHolderFound
      const balanceToNumber = balance.match(/-?\d+/g);
      const amountToNumber = amount.match(/-?\d+/g)

      const newBalance = parseInt(balanceToNumber[0]) - parseInt(amountToNumber[0])
      const newBalanceString = newBalance > 0 ? `$${newBalance}` : `$-${newBalance}`

      cardHoldersMap[cardHolder][balance] = newBalanceString;
    }
  }

  function handleCredit(cardHolder: string, amount: string) {
    const cardHolderFound = cardHoldersMap[cardHolder]

    if (!cardHolderFound) {
      return [cardHolder, "error"]
    } else {
      const { balance } = cardHolderFound
      const balanceToNumber = balance.match(/-?\d+/g);
      const amountToNumber = amount.match(/-?\d+/g)

      const newBalance = parseInt(balanceToNumber[0]) + parseInt(amountToNumber[0])
      const newBalanceString = newBalance > 0 ? `$${newBalance}` : `$-${newBalance}`

      cardHoldersMap[cardHolder][balance] = newBalanceString;
    }
  }

  function applyLuhn10Algorithm(creditCardNumber: string): boolean {
    const split = creditCardNumber.split("")

    // go from right to left
    const allDigits = [] as Array<number>
    for (let i = split.length - 1; i > 0; i--) {
      const currentNumber = split[i]

      // everyOtherNumber
      if (i !== 0 && i % 2 == 0) {
        const doubledNumber = parseInt(currentNumber) * 2

        // if doubled is MORE than 9
        if (doubledNumber > 9) {
          // add the numbers
          const string = doubledNumber.toString()
          allDigits.push(parseInt(string[0] + parseInt(string[1])))
        } else {
          allDigits.push(doubledNumber)
        }
      }
      allDigits.push(parseInt(currentNumber))
    }
    const sum = allDigits.reduce((prev, curr) => {
      return prev + curr
    }, 0)

    // if module of 10, then the number is valid
    return sum % 10 == 0
  }

  // now we need to sort the return object 
  const sortedMap = Object.values(cardHoldersMap).sort((a, b) => {
    const cardHolderA = a.cardHolder.toLowerCase();
    const cardHolderB = b.cardHolder.toLowerCase();

    if (cardHolderA < cardHolderB) {
      return -1;
    } else if (cardHolderA > cardHolderB) {
      return 1;
    } else {
      return 0
    }
  })

  const resultsArray = []

  for (let i = 0; i < sortedMap.length; i++) {
    resultsArray.push([sortedMap[i]["cardHolder"], sortedMap[i]["balance"]])
  }

  return resultsArray
}
