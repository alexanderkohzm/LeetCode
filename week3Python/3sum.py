def threeSum(nums: list[int]) -> list[list[int]]:
         
        nums.sort()
        results_array = []
        for i in range(len(nums)):

            if i > 0 and (nums[i] == nums[i-1]):
               continue
            
            left = i + 1 
            right = len(nums) - 1

            while left < right:
                total = nums[i] + nums[left] + nums[right] 
                if total == 0:
                    results_array.append([nums[i], nums[left], nums[right]])

                    left += 1 
                    while nums[left] == nums[left - 1] and left < right: 
                      l += 1
                elif total < 0:
                    left += 1
                else:
                    right -=1 
        return results_array

# input = [-1,0,1,2,-1,-4]
# input = [-1,0,1,2,-1,-4]
input = [0,0,0]
print(threeSum(input))
