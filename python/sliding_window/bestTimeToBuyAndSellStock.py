from typing import List
# You are given an array prices where prices[i] is the price of a given stock on the ith day.

#You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

#Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

def solution(prices: List):

  # keep track of the highest profit
  # On day 0, it will be 0
  # On day 1, it will be MAX(0, day 1 - day 0)
  # iterate through the list of stocks
  # return the highest profit
  highest_profit = 0

  current_lowest = prices[0]

  for i in range(len(prices)):
      if i == 0:
          continue

      current_price = prices[i]

      profit = current_price - current_lowest

      current_lowest = min(current_price, current_lowest)
      highest_profit = max(profit, highest_profit)

  return highest_profit


example_list = [6, 1, 2, 3, 4, 5, 6] # expected to be 5
print(solution(example_list))
