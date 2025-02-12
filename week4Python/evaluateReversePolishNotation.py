class Solution:
    def evalRPN(self, tokens: list[str]) -> int:

      stack = [] 

      for i in range(len(tokens)):
        current = tokens[i]

        print('Current: ', current)
        print('Stack: ', stack)

        if current == "+":
          first = stack.pop() 
          second = stack.pop() 
          stack.append(first + second) 
        elif current == "-":
          first = stack.pop() 
          second = stack.pop() 
          stack.append(second - first)
        elif current == "*":
          first = stack.pop() 
          second = stack.pop() 
          stack.append(first * second)
        elif current == "/":
          first = stack.pop() 
          second = stack.pop() 
          stack.append(int(second / first))
        else: 
          stack.append(int(current))

      return stack.pop()

        

solution = Solution() 

# tokens = ["2","1","+","3","*"]
# tokens = ["4","13","5","/","+"]
# tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

print(solution.evalRPN(tokens))