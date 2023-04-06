// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// example

// Matrix = 
// [[0, 0, 0],
// [0, 1, 0]
// [0, 0, 0]]

// output should be 
// [[0, 0, 0],
// [0, 1, 0]
// [0, 0, 0]]

// Matrix = 
// [[0, 0, 0],
// [0, 1, 0]
// [1, 1, 1]]

// output should be 
// [[0, 0, 0],
// [0, 1, 0]
// [1, 2, 1]]

export type QueueAndMatrixType = {
  queue: Array<Array<number>>;
  newMatrix: Array<Array<number>>;
}

function initialiseNewMatrixAndQueue(mat: number[][]): QueueAndMatrixType {
  let queue = [] as Array<Array<number>>
  let newMatrix = new Array(mat.length)

  for (let i = 0; i < mat.length; i++) {

    newMatrix[i] = new Array(mat[i].length)

    for (let j = 0; j < mat[0].length; j++) {



      // if mat[i][j] === 0, add that to the newMatrix
      // if not, make it infinity 
      if (mat[i][j] === 0) {
        queue.push([i, j])
        newMatrix[i][j] = 0
      } else {
        newMatrix[i][j] = Number.POSITIVE_INFINITY
      }

    }
  }

  return { queue, newMatrix }
}

function isValidPos(row: number, col: number, mat: number[][], newMat: number[][], currDistance: number) {
  return row > -1 && row < mat.length && col > -1 && col < mat[row].length && currDistance < newMat[row][col];
}


function updateMatrix(mat: number[][]): number[][] {


  // we need a queue 
  // we also need something to keep track of how many loops of the queue we've gone through 


  // we need to loop through the length and breadth of the matrix 
  const { queue, newMatrix } = initialiseNewMatrixAndQueue(mat)

  let travelPositions = [[1, 0], [0, 1], [0, -1], [-1, 0]] // Down, Right, Left, Up

  let distance = 1 // initialise distance

  while (queue.length !== 0) {
    let currentQueueSize = queue.length;

    for (let i = 0; i < currentQueueSize; i++) {

      // search out from current distance
      let [currentRow, currentColumn] = queue.shift()!;

      for (let [movementRow, movementColumn] of travelPositions) {

        // for each travel position, check if the index containing a 1 has a greater distance than the current
        // if so, then update the distance for that one value
        movementRow = currentRow + movementRow;
        movementColumn = currentColumn + movementColumn

        if (isValidPos(movementRow, movementColumn, mat, newMatrix, distance)) {
          newMatrix[movementRow][movementColumn] = distance
          queue.push([movementRow, movementColumn])
        }
      }
    }
    distance++
  }
  return newMatrix
};

const mat = [[0, 0, 0],
[0, 1, 0],
[1, 1, 1]]
console.log(updateMatrix(mat))