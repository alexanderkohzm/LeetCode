import math

class Solution:
    def minEatingSpeed(self, piles: list[int], h: int) -> int:
        
        # if you think about it, the minimum integer k is on a flat line
        # it could range from 1 (1 banana per hour) to Infinity bananas per hour 

        # for [3, 6, 7, 11], the target hours is 8 
        # Let's start with 1 banana per hour. She will take (3 + 6 + 7 + 11) = 27 hours X 
        # Let's start with 11 bananas per hour. She will take (1 + 1 + 1 + 1) = 4 hours
        # But 11 bananas per hour is the MAX 

        left = 1
        right = max(piles)

        optimal_k = right

        # need to figure out how to calculate the time taken to eat 
        while left <= right: 
            middle = (left + right) // 2 

            total_time = 0 
            for i in range(len(piles)):
                time_taken = math.ceil((piles[i]/middle)) 
                total_time += time_taken
                if total_time > h:
                    break 
            if total_time > h:
                # then we need to move LEFT up 
                left = middle + 1
            elif total_time <= h: 
                optimal_k = middle
                right = middle - 1
            else: 
              break
        
        return optimal_k
        

# nums = [3,6,7,11]
# h = 8
# nums = [30, 11, 23, 4, 20]
# h = 5
# nums = [30, 11, 23, 4, 20]
# h = 6
nums = [312884470]
h = 312884469

solution = Solution() 

print(solution.minEatingSpeed(nums, h))