class Solution:
    def isValid(self, s: str) -> bool:
        
        stack = [] 

        for i in range(len(s)):
            char = s[i]
            if char == '(' or char == '[' or char == '{':
                stack.append(char)
            elif (char == ')' or char == ']' or char == '}') and len(stack) == 0:
                return False
            elif char == ')' and stack[-1] == '(':
                stack.pop()
            elif char == ']' and stack[-1] == '[':
                stack.pop()
            elif char == '}' and stack[-1] == '{':
                stack.pop()
            else: 
                return False 

        if len(stack) != 0:
            return False
        
        return True 



solution = Solution() 

string = '()'
print(solution.isValid(string))
