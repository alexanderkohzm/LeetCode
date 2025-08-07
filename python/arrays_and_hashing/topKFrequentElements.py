from typing import List

def topKFrequent(nums: List[int], k: int) -> List[int]:

    # How would I try to solve this naively?
    #
    # Create a map (key = n, value = frequency)
    # Update the map
    # Return the keys of the max values
    # But this is O(n) * O(logn) = O(nlogn)
    # How do we solve this in O(n)?

    # We can use bucket sort instead
    # 1). Create an array of length unique nums
    # 2). Iterate through the array nums and increment the index position of the current number
    # 3). Return the index positions of the max value(s)

    bucket = [[] for i in range(len(nums) + 1)]

    map = {}

    for num in nums:
        map[num] = 1 + map.get(num, 0)

    # where key is the NUM
    # where value is the FREQUENCY
    for key, value in map.items():
        bucket[value].append(key)

    result = []

    for i in range(len(bucket) - 1, 0, -1):
        for num in bucket[i]:
            result.append(num)
            if len(result) == k:
                return result
    return result


array = [1,1,1,2,2,2,2,2,5,5]

print(topKFrequent(array, 2))
