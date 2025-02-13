class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:

        if len(heights) == 1: 
          return heights[0] * 1
        
        # iterate through the heights 
        max_area = 0 
        stack = [] # pair: [index, height]

        for i, h in enumerate(heights):
          start = i 

          while stack and stack[-1][1] > h: 
            index, height = stack.pop() 
            max_area = max(max_area, height * (i - index))

            start = index 
       
          stack.append([start, h])

        for i, h in stack: 
          max_area = max(max_area, h * (len(heights) - i))
         
        return max_area 

# heights = [2,1,5,6,2,3]
# heights = [2,4]
# heights = [1,1]
heights =[4,2]

solution = Solution() 
print(solution.largestRectangleArea(heights))

          

    #       class Solution:
    # def largestRectangleArea(self, heights: list[int]) -> int:

    #   maxArea = 0

    #   stack = [] # pair: (index, height)

    #   for i, h in enumerate(heights):
    #     start = i 

    #     while stack and stack[-1][1] > h: 
    #       index, height = stack.pop() 

    #       maxArea = max(maxArea, height * (i - index))
    #       start = index 
    #     stack.append((start, h))

    #   for i, h in stack: 
    #     maxArea = max(maxArea, h * (len(heights) - i))
      
    #   return maxArea