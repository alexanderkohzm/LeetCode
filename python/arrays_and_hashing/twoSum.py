from typing import List

def twoSum(nums: List[int], target: int) -> List[int]:

    map = {}

    for i in range(len(nums)):
        current = nums[i]

        diff = target - current

        if map.get(diff, "") == "":
            map[current] = i
        else:
            return [i, map[diff]]

    return []

nums = [3,4,5,6,7]
nums2 = [4,5,6]

print(twoSum(nums2,10))
