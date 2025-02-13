class Solution:
    def search(self, nums: list[int], target: int) -> int:
        
        left, right = 0, len(nums) - 1 

        while left <= right: 
            middle = (left + right) // 2 
            selected = nums[middle]
            if selected == target: 
                return middle 
            elif selected < target:
                left = middle + 1
            else:
                right = middle - 1
        return -1


nums = [-1,0,3,5,9,12] 
# nums = [2]
target = 9

solution = Solution() 

print(solution.search(nums, target))