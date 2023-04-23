// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const left = [] as Array<Array<number>>;
  const right = [] as Array<Array<number>>;

  for (const interval of intervals) {
    console.log(`I am the interval now: ${interval}`);
    console.log(`This is newInterval: ${newInterval}`);

    if (interval[1] < newInterval[0]) {
      left.push(interval);
    } else if (interval[0] > newInterval[1]) {
      right.push(interval);
    } else {
      // create the new interval
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
    }
  }

  return [...left, newInterval, ...right];
}

// const intervals = [
//   [1, 2],
//   [3, 5],
//   [6, 7],
//   [8, 10],
//   [12, 16],
// ];

// console.log(insert(intervals, [4, 8]));

const intervals2 = [
  [1, 3],
  [6, 9],
];

console.log(insert(intervals2, [2, 5]));
