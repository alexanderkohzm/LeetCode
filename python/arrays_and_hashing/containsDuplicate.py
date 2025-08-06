def containsDuplicate(nums):
    map = {}

    for i in range(len(nums)):
        current = nums[i]

        if map.get(current, "") != "":
            return False
        else:
            map[current] = 1

    return True

list = [1,2,3,4,5]
print(containsDuplicate(list))
