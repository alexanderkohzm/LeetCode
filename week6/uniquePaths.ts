// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 10^9.


function uniquePaths(m: number, n: number): number {

  // this feels like a graph problem 
  // there are many pathways and we need to FIND ALL UNIQUE pathways that get you from [0, 0] to [m-1, n-1]

  // I can't decide if a BFS or DFS solution makes more sense 
  // it feels like DFS + some sort of memoisation will be better 
  // we can CACHE the result (e.g. [r][c]). [r][c] we can store the NUMBER of ways we reach the destination 
  // we need to compute that for every square 

  // everything on the TOP row (m = 0) has only ONE way of getting there (as only way to get there is from the left i.e. using RIGHT: [1,0])
  // everything on the MIDDLE row has one from the left and from the top of getting there
  // everything on the BOTTOM row has one from the left and from the top of getting there

  // we want to create a matrix (array of arrays)
  // each array represents a row 
  const columns = new Array(n)
  const array = new Array(m)
  for (let i = 0; i < array.length; i++) {
    array[i] = [...columns]
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (array[i][j] !== undefined) continue
      if (i === 0) {
        array[i][j] = 1
      } else {
        const columnBefore = array[i - 1][j]
        const rowBefore = array[i][j - 1]
        const columnBeforeValue = columnBefore ? columnBefore : 0
        const rowBeforeValue = rowBefore ? rowBefore : 0
        array[i][j] = columnBeforeValue + rowBeforeValue
      }
    }
  }
  return array[m - 1][n - 1]
};

// console.log(uniquePaths(3, 7))
console.log(uniquePaths(11, 5))