from typing import List
from collections import defaultdict

def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

    # naive approach
    # 1). iterate through list.
    # 2). SORT the string
    # 3). then perform the map check
    # Problem with this is that it is O(n) * O(logn) because we need to
    # sort through each string

    # Better approach:
    # 1). Iterate through list
    # 2). COUNT the occurance of letter for each string
    # 3). Store the COUNT in an array
    # 4). SAVE the array of count as a tuple in the dictionary

    map = defaultdict(list)

    for i in range(len(strs)):
        current = strs[i]

        count = [0] * 26

        for j in range(len(current)):
            count[ord(current[j]) - ord("a")] += 1

        map[tuple(count)].append(current)

    return list(map.values())
