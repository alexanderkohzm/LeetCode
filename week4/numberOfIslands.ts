// Given an m x n 2D binary grid grid which represents
// a map of '1's (land) and '0's (water),
// return the number of islands.

// An island is surrounded by water and is formed
// by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all
// surrounded by water.

export enum Location {
  WATER = "0",
  LAND = "1",
}

const DIRECTIONS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function wrongNumIslands(grid: string[][]): number {
  if (grid.length == 0) return 0;

  const gridRows = grid.length;
  const gridColumns = grid[0].length;

  let numberOfIslands = 0;

  // we need to go through each location and change it to water
  function breadthFirstSearch(grid: string[][], row: number, column: number) {
    const queue = new Array();

    queue.push([row, column]);
    while (queue.length > 0) {
      const [row, column] = queue.pop()!;
      // if it's water, just continue
      if (grid[row][column] === Location.WATER) continue;
      // if it's land
      // we need to add all the potential directions to the queue
      for (const direction of DIRECTIONS) {
        const [directionRow, directionColumn] = direction;
        const newRow = row + directionRow;
        const newColumn = column + directionColumn;

        // check if it's out of bounds
        if (isOutOfBounds(newRow, newColumn)) continue;
        if (grid[newRow][newColumn] === Location.LAND) {
          // if it's land, push
          queue.push([newRow, newColumn]);
        }
      }
      // convert it to WATER so we don't go back to it
      grid[row][column] = Location.WATER;
    }
  }

  function isOutOfBounds(row: number, column: number): boolean {
    return row < 0 || row >= gridRows || column < 0 || column >= gridColumns;
  }

  for (let i = 0; i < gridRows; i++) {
    for (let j = 0; j < gridColumns; j++) {
      const location = grid[i][j];
      if (location === Location.LAND) {
        breadthFirstSearch(grid, i, j);
        numberOfIslands++;
      }
    }
  }
  return numberOfIslands;
}
