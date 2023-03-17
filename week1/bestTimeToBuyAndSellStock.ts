// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {

  // initiate profit
  let maxProfit = 0;

  let currentLowestPrice = prices[0]

  // start on the 2nd day (index 1) and compare to currentLowestPrice
  for (let i = 1; i < prices.length; i++) {

    const currentProfit = prices[i] - currentLowestPrice
    if (prices[i] < currentLowestPrice) {
      currentLowestPrice = prices[i]
    }

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
    }
  }

  return maxProfit
};

const prices1 = [7, 1, 5, 3, 6, 4]
const prices2 = [7, 6, 4, 3, 1]

console.log(maxProfit(prices1))

console.log(maxProfit(prices2))