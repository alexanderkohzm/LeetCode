class Solution:
    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:

      sorted = [[index, value] for index, value in enumerate(position)]
      sorted.sort(key=lambda x: x[1])

      stack = [] 

      while(len(sorted) > 0):
        latest = sorted.pop() 

        originalIndex, position = latest 
        car_speed = speed[originalIndex] 

        time_taken = (target - position) / car_speed 

        if len(stack) == 0 or time_taken > stack[-1]:
          stack.append(time_taken)
      
      return len(stack)
      


      



target = 12
position = [10,8,0,5,3]
speed = [2,4,1,1,3]



solution = Solution() 
print(solution.carFleet(target, position, speed))
