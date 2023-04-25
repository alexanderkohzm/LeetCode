// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is
// 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse
// until no cell has a fresh orange. If this is impossible, return -1.

enum State {
  Rotten = 2,
  Fresh = 1,
  Empty = 0,
}

const DIRECTIONS = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

function orangesRotting(grid: number[][]): number {
  let queue = new Array();
  const rowLength = grid.length;
  const columnHeight = grid[0].length;

  let time = 0;
  let freshOranges = 0;

  function isOutOfBounds(row: number, column: number): Boolean {
    return row < 0 || row >= rowLength || column < 0 || column >= columnHeight;
  }

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnHeight; j++) {
      const currentOrange = grid[i][j];
      if (currentOrange === State.Rotten) queue.push([i, j]);
      if (currentOrange === State.Fresh) freshOranges++;
    }
  }

  while (queue.length > 0 && freshOranges) {
    // MUST USE SIZE HERE
    const size = queue.length;
    // CAN'T USE QUEUE.LENGTH, MUST USE SIZE
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()!;

      for (const direction of DIRECTIONS) {
        const [dx, dy] = direction;
        const newRow = dx + x;
        const newColumn = dy + y;

        if (isOutOfBounds(newRow, newColumn)) continue;
        if (grid[newRow][newColumn] === State.Fresh) {
          freshOranges--;
          grid[newRow][newColumn] = State.Rotten;
          queue.push([newRow, newColumn]);
        }
      }
    }
    if (queue.length > 0) time++;
  }

  return freshOranges === 0 ? time : -1;
}

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid));

const grid2 = [[0, 2, 2]];
console.log(orangesRotting(grid2));

const gird3 = [
  [2, 1, 1],
  [1, 1, 1],
  [0, 1, 2],
];
console.log(orangesRotting(gird3));

// TIMES OUT, solves 12 out of 304 cases

// function orangesRotting(grid: number[][]): number {
//   // go through every orange
//   // if the orange is rotten already, then it's "0" minutes
//   // if the orange is Fresh, perform a breadth first search on the orange and calculate the
//   // minimum amount of steps till it finds a rotten orange
//   // if the fresh orange is not connected to any rotten oranges, then it's impossible so we return -1
//   // if it's empty, just continue

//   const rowLength = grid.length;
//   const columnHeight = grid[0].length;

//   const set = new Set<number>();

//   function isOutOfBounds(row: number, column: number): Boolean {
//     return row < 0 || row >= rowLength || column < 0 || column >= columnHeight;
//   }

//   function breadthFirstSearch(row: number, column: number): number {
//     let queue = [[row, column, 0]];

//     while (queue.length > 0) {
//       const [xCoordinate, yCoordinate, minutes] = queue.shift()!;

//       if (isOutOfBounds(xCoordinate, yCoordinate)) continue;
//       const currentOrange = grid[xCoordinate][yCoordinate];
//       if (currentOrange === State.Rotten) {
//         return minutes;
//       }
//       if (currentOrange === State.Fresh) {
//         for (const [dx, dy] of DIRECTIONS) {
//           const newX = xCoordinate + dx;
//           const newY = yCoordinate + dy;
//           queue.push([newX, newY, minutes + 1]);
//         }
//       }
//     }
//     return -1;
//   }

//   for (let i = 0; i < rowLength; i++) {
//     for (let j = 0; j < columnHeight; j++) {
//       const currentOrange = grid[i][j];
//       // if it's empty || rotten, just continue
//       if (currentOrange === State.Empty) continue;
//       if (currentOrange === State.Rotten) {
//         set.add(0);
//       }
//       // if it's fresh, perform breadth firstSearch
//       const result = breadthFirstSearch(i, j);
//       if (result === -1) return -1;
//       set.add(result);
//     }
//   }
//   return Math.max(...set);
//   // get the largest number from set
// }
