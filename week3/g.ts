function groupAnagrams(strs: string[]): string[][] {

  // we should go through all the strings 
  // and sort them 

  const resultArray = [] as string[][]

  const hashMap = {} as { [key: string]: string[] }

  for (const string of strs) {
    const splitString = string.split("")
    const sortedSplitString = splitString.sort()
    const combinedSortedSplitString = sortedSplitString.join("")

    if (hashMap[combinedSortedSplitString] !== undefined) {
      hashMap[combinedSortedSplitString].push(string)
    } else {
      hashMap[combinedSortedSplitString] = [string]
    }
  }

  // now we can loop through the hashMap and just push it into the result list 
  for (const key in hashMap) {
    resultArray.push(hashMap[key])
  }

  return resultArray

};