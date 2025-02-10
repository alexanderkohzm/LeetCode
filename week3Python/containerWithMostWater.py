def maxArea(height):

  current_max = 0 

  left, right = 0, len(height) - 1

  while left < right: 

      distance = right - left 
      water = min(height[right], height[left]) * distance 
      current_max = max(water, current_max)

      if height[left] < height[right]:
        left += 1
      elif height[right] < height[left]:
        right -= 1 
      else: 
        left += 1 
        right -= 1

  return current_max 

# height = [1,7,2,5,4,7,3,6] 
height = [1,8,6,2,5,4,8,3,7]
# height = [8,7,2,1]
print(maxArea(height))


