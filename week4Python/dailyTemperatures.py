class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        
        length = len(temperatures)

        res = [0] * length

        stack = [] # pair: [temp ,index]

        for i, t in enumerate(temperatures): 

          while stack and t > stack[-1][0]:
            stackT, stackInd = stack.pop() 
            res[stackInd] = (i - stackInd) 
          
          stack.append([t, i])
        
        return res



