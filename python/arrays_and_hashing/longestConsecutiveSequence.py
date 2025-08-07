from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:

        # naive approach
        # sort the list
        # and then count the consecutive sequence
        # But sorting is logn so that means we don't meet the O(n) requirement

        # let's create a list with length max nums
        if len(nums) == 0:
            return 0

        max_nums = max(nums)
        array = [False] * (max_nums + 1)

        # iterate through nums

        for num in nums:
            array[num] = True

        # Iterate through array
        max_consecutive = 0

        current_consecutive = 0

        for index in array:
            if index == True:
                current_consecutive += 1
                if current_consecutive > max_consecutive:
                    max_consecutive = current_consecutive
            else:
                current_consecutive = 0

        return max_consecutive


solution = Solution()

nums = [2,20,4,10,3,4,5] # 4
nums2 = [0,3,2,5,4,6,1,1]
print(solution.longestConsecutive(nums))
