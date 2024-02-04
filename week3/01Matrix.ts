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


// ok this doesnt work
// function updateMatrix(mat: number[][]): number[][] {

//   // create a new matrix
//   // need to make sure it's NOT a static 
//   const newMatrix = new Array(mat.length)

//   for (let z = 0; z < mat.length; z++) {
//     newMatrix[z] = new Array(mat[0].length).fill(Number.POSITIVE_INFINITY)
//   }

//   // we want to go through each element in the matrix

//   // if element == 0, then we set the newMatrix position to 0
//   // if not, we start to do a BFS 
//   // let distance be 1 

//   // if we see a 0, then we know that the distance to a 0 is just 1
//   // and we can set the newMatrix position to 1
//   // if not, we set distance to 2, and add the distances to the queue 

//   const rows = mat.length;
//   const columns = mat[0].length;

//   const isOutOfBounds = (row: number, column: number): boolean => {
//     if (row < 0 || row >= rows || column < 0 || column >= columns) return true
//     return false
//   }

//   const coordinates = [
//     [0, 1],
//     [1, 0],
//     [-1, 0],
//     [0, -1]
//   ]

//   const generateQueue = (queue: Array<Array<number>>, distance: number): Array<Array<number>> => {
//     const coordinatesToReturn = coordinates.map((coordinate) => {
//       const [x, y] = coordinate
//       return [x * distance, y * distance];
//     })
//     return coordinatesToReturn
//   }



//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       // if the number is 0, then we can just set and continue 
//       const currentElement = mat[i][j]
//       if (currentElement === 0) {
//         newMatrix[i][j] = 0
//         continue
//       }

//       // if not, we need to go search 

//       // initiate a queue for each number
//       let distance = 1;
//       let queue = generateQueue([] as Array<Array<number>>, distance)
//       while (queue.length !== 0) {
//         const [newX, newY] = queue.pop()!
//         const [directionX, directionY] = [i + newX, j + newY]

//         // if is outOfBounds, then we just continue
//         if (isOutOfBounds(directionX, directionY) && queue.length > 0) {
//           continue
//         } else if (isOutOfBounds(directionX, directionY) && queue.length == 0) {
//           queue = generateQueue(queue, distance + 1)
//           distance++
//           continue
//         }

//         const targetElement = mat[directionX][directionY]
//         // if (i == 0 && j == 4) {
//         //   console.log("targetElement: ", targetElement)
//         // }
//         if (targetElement === 0) {
//           newMatrix[i][j] = distance
//           // exit 
//           break;
//         }
//         // if last in queue AND still can't find
//         if (queue.length == 0) {
//           queue = generateQueue(queue, distance + 1)
//           distance++
//         }
//       }
//     }
//   }
//   return newMatrix
// }

// const mat = [[0, 0, 0],
// [0, 1, 0],
// [1, 1, 1]]
// const mat = [[0, 1, 0, 1, 1], [1, 1, 0, 0, 1], [0, 0, 0, 1, 0], [1, 0, 1, 1, 1], [1, 0, 0, 0, 1]]

const mat =
  [[0, 0, 1, 0, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 0, 0, 1, 1], [1, 0, 1, 0, 1, 1, 1, 0, 1, 1], [0, 0, 1, 1, 1, 0, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 0, 0, 1, 0, 0, 1, 1], [1, 1, 1, 0, 1, 1, 0, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 0]]
console.log(updateMatrix(mat))