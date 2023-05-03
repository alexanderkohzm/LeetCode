// Given an array of INTERVALS where INTERVALS[i] = [starti, endi], merge all
// overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input 



// example 1:
// input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// output = [[1, 6], [8, 10], [15, 18]]
// As intervals [1, 3] and [2, 6] overlap, we need to merge them into [1, 6]

// constraints 
// interval length is MORE than 1
// intervals[i].length = 2

function merge(intervals: number[][]): number[][] {


  // we probably need to loop through ALL the array of numbers in intervals: number[][]


  // [n1, m1], [n2, m2], [n3, m3] 
  // if m1 is MORE than n2, then we need to start merging them 
  // we progressively go down the array until we get to a scenario where
  // m2 is < n3

  const resultsArray = [] as Array<Array<number>>

  const [start, end] = [0, 1]

  intervals.sort((a, b) => a[start] != b[start] ? a[start] - b[start] : a[end] - b[end])

  for (const currentInterval of intervals) {
    if ((resultsArray.length === 0) || (resultsArray[resultsArray.length - 1][end] < currentInterval[start])) {
      resultsArray.push(currentInterval)
    } else {
      // this has overlapping
      // merge with previous interval
      resultsArray[resultsArray.length - 1][end] = Math.max(resultsArray[resultsArray.length - 1][end], currentInterval[end])
    }

  }
  return resultsArray
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
const intervals2 = [[1, 4], [4, 5]]
const intervals3 = [[1, 4], [0, 4]]
const intervals4 = [[1, 4], [2, 3]]

console.log(merge(intervals))
console.log(merge(intervals2))
console.log(merge(intervals3))
console.log(merge(intervals4)) // should be [[1, 4]]

