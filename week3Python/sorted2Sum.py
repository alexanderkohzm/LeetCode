

def twoSum(numbers: list[int], target: int) -> list[int]:
        
        left, right = 0, len(numbers) - 1

        while left < right: 
            sum = numbers[left] + numbers[right]

            if sum < target:
                left += 1 
            elif sum > target:
                right -= 1
            else:
                return [left + 1, right + 1]


input = [3,24,50,79,88,150,345] 
print(twoSum(input, 200))