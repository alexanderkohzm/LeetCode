class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:


      def binary_search(array, target):
         left, right = 0, len(array) - 1
         while left <= right: 
           middle = (left + right) // 2 
           if array[middle] == target: 
             return True 
           elif array[middle] < target: 
             left = left + 1
           else: 
             right = right - 1
         return False

      # can we not just do a binary search on each level 
      # log n = search the array
      # m = the number of rows 
      for i in range(len(matrix)):
        row = matrix[i]
        answer = binary_search(row, target)
        if answer == True:
          return True 
      
      return False


        

# nums =[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
nums = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 13

solution = Solution() 

print(solution.searchMatrix(nums, target))