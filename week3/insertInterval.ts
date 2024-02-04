// // You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// // Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// // Return intervals after the insertion.

// function insert(intervals: number[][], newInterval: number[]): number[][] {
//   const left = [] as Array<Array<number>>;
//   const right = [] as Array<Array<number>>;

//   for (const interval of intervals) {
//     console.log(`I am the interval now: ${interval}`);
//     console.log(`This is newInterval: ${newInterval}`);

//     if (interval[1] < newInterval[0]) {
//       left.push(interval);
//     } else if (interval[0] > newInterval[1]) {
//       right.push(interval);
//     } else {
//       // create the new interval
//       newInterval = [
//         Math.min(interval[0], newInterval[0]),
//         Math.max(interval[1], newInterval[1]),
//       ];
//     }
//   }

//   return [...left, newInterval, ...right];
// }

// // const intervals = [
// //   [1, 2],
// //   [3, 5],
// //   [6, 7],
// //   [8, 10],
// //   [12, 16],
// // ];

// // console.log(insert(intervals, [4, 8]));

// const intervals2 = [
//   [1, 3],
//   [6, 9],
// ];

// console.log(insert(intervals2, [2, 5]));

function insert(intervals: number[][], newInterval: number[]): number[][] {

  // ok i think one way to think about it is that 
  // you have to merge all intervals regardless
  // this is because of example 2 
  // as you can see, [6,7] got merged in

  // so how would you merge

  const resultsArray = [] as Array<Array<number>>
  for (let i = 0; i < intervals.length; i++) {
    const [x, y] = intervals[i]

    if (newInterval[1] < x) {
      resultsArray.push(newInterval)
      const remainingIntervals = intervals.splice(i, intervals.length)
      resultsArray.push(...remainingIntervals)
      return resultsArray
    } else if (newInterval[0] > y) {
      resultsArray.push(intervals[i])
    } else {
      newInterval = [
        Math.min(newInterval[0], x),
        Math.max(newInterval[1], y)
      ]
    }
  }



  resultsArray.push(newInterval)
  return resultsArray
};

console.log(insert([[1, 3], [6, 9]], [2, 5]))