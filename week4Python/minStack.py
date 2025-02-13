class MinStack:

    def __init__(self):
        self.stack = []
        self.min = [] 

    def push(self, val: int) -> None:
        self.stack.append(val)

        if self.min == None:
            self.min.append(val)
        else:
            self.min.append(self.min)
        
        return None 

    def pop(self) -> None:
        self.stack.pop()
        self.min.pop()



    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min

solution = Solution() 



