// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2 
// Input: coins = [2], amount = 3
// Output: -1

// Example 3
// Input: coins = [1], amount = 0
// Output: 0




// Dynamic Programming
// Bottom up approach 

function coinChange(coins: number[], amount: number): number {

  // [1, 3, 4, 5], amount = 7
  // what's the minimum amount of coins for 0 amount 
  // what's the minimum amount of coins for summing to 1: 1 
  // what's the minimum amount of coins for summing to 2: 1, 1 = 2 

  // this fills up until amount + 1 
  // e.g. if amount is 7, it'll be [1, 2, 3, 4, 5, 6, 7, 8]
  const dynamicList = Array(amount + 1).fill(Infinity);

  dynamicList[0] = 0

  for (let i = 1; i < dynamicList.length; i++) {
    for (const coin of coins) {
      // go through each coin in coins


      if (i - coin >= 0) dynamicList[i] = Math.min(dynamicList[i], dynamicList[i - coin] + 1)
    }
  }
  return dynamicList[amount] === Infinity ? -1 : dynamicList[amount]

}















// Works in some cases

// function coinChange(coins: number[], amount: number): number {

//   if (amount === 0) return 0


//   // we need a map to keep track of WHAT COINS and the NUMBER OF COINS we use
//   // for example {5 : 15, 2 : 20} 
//   const mapOfCoins = {} as { [key: number]: number }
//   // initiate the mapOfCoins
//   for (const coin of coins) {
//     mapOfCoins[coin] = 0
//   }

//   // sort the coins from largest to smallest (descending)
//   coins.sort((a, b) => b - a)

//   // lets say amount is 4 
//   // we need to go from the LARGEST till the smallest
//   // for example, [3, 2, 1] amount 4
//   // 3 is select, remainder is 1 
//   // we then need to process 1 and see if it can be made up of anything in the smaller array [2, 1]

//   // this receives coins, amount, and mapOfCoins
//   // it removes the amount with "coins" until it gets to 0 OR -1 

//   function getCoinAmount(coins: number[], amount: number, mapOfCoins: { [key: number]: number }): number {

//     // console.log(`This is coins: ${coins}, amount: ${amount}, mapOFCoiuns: ${mapOfCoins}`)

//     // if there are no more coins, then we return (but it should be -1)
//     if (coins.length === 0) return -1

//     const currentCoin = coins.shift()

//     // if the amount is LESS than currentCoin, then we need to proceed to the next iteration
//     if (amount < currentCoin!) {
//       return getCoinAmount(coins, amount, mapOfCoins)
//     }

//     // if the amount is MORE than the currentCoin, then we can proceed to remove as much as we can from it 
//     while (amount >= 0) {
//       const minusAmount = amount - currentCoin!
//       if (minusAmount < 0) {
//         break
//       } else if (minusAmount === 0) {
//         const sumOfCoins = Object.values(mapOfCoins).reduce((prev, curr): number => {
//           return prev + curr
//         }, 0)
//         // plus 1 for the last coin used to minus 
//         return sumOfCoins + 1
//       }
//       else {
//         mapOfCoins[currentCoin!]++
//         getCoinAmount(coins, minusAmount, mapOfCoins)
//       }
//     }
//     return getCoinAmount(coins, amount, mapOfCoins)
//   }

//   const coinsTotal = getCoinAmount(coins, amount, mapOfCoins)

//   return -1
// };


// console.log(coinChange([1, 2, 3], 4))

// // amount = 10
// // this needs to be a 3, 3, 2, 2
// // if you go 3, 3, 3, it'll fail 
// // console.log(coinChange([2, 3], 10))


