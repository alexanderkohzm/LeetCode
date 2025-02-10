def trap(height): 

  if not height: return 0 
  
  left, right = 0, len(height) - 1

  left_max, right_max = height[left], height[right]

  res = 0

  while left < right:

    if left_max < right_max:
      left += 1
      left_max = max(left_max, height[left])

      res += left_max - height[left]
    else:
      right -= 1
      right_max = max(right_max, height[right])

      res += right_max - height[right]

  return res

  total_water = 0 



  return total_water 

test_cases = [
  [4,2,3],
  [4,2,0,3,2,5],
  [0,1,0,2,1,0,1,3,2,1,2,1]
]
# height = [4,2,0,3,2,5]
# height = [0,1,0,2,1,0,1,3,2,1,2,1]

for test in test_cases:
  print(trap(test), test)


  
