def isAnagram(s: str, t: str) -> bool:

    map = {}

    if len(s) != len(t):
        return False

    for i in range(len(s)):
        current = s[i]
        if map.get(current, "") == "":
            map[current] = 1
        else:
            map[current] += 1

    for i in range(len(t)):
        current = t[i]

        if map.get(current, "") == "":
            return False
        else:
            map[current] -=1
            if map[current] < 0:
                return False

    return True

s = "test"
t = "sett"

print(isAnagram(s, t))
