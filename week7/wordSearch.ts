// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


function exist(board: string[][], word: string): boolean {

  let found = false;
  const boardRow = board.length;
  const boardColumn = board[0].length;
  const total = word.length;

  const findLetter = (row: number, column: number, currentIndex: number) => {
    if (currentIndex === total) {
      found = true;
      return;
    }

    if (row >= boardRow || column >= boardColumn || row < 0 || column < 0) return

    if (board[row][column] !== word[currentIndex]) return

    const storedValue = board[row][column]

    board[row][column] = '*'

    findLetter(row + 1, column, currentIndex + 1)
    findLetter(row - 1, column, currentIndex + 1)
    findLetter(row, column + 1, currentIndex + 1)
    findLetter(row, column - 1, currentIndex + 1)

    board[row][column] = storedValue
  }

  for (let i = 0; i < boardRow; i++) {
    for (let j = 0; j < boardColumn; j++) {
      findLetter(i, j, 0)
    }
  }
  return found
}



// Doesn't backtrack properly 
// function exist(board: string[][], word: string): boolean {

//   // this feels like a recursion problem 
//   // you traverse the board until you find the starting letter 
//   // following from that, you move in all directions to see if any of the letters adjacent to the block is the next letter in the word 

//   // if it is, you keep going
//   // if not, you return false 

//   const DIRECTIONS = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0]
//   ]

//   const getLetter = (row: number, column: number, usedCells: Array<Array<number>>): { letter: string, coordinates: number[] } | undefined => {
//     if (isOutOfBounds(row, column) || cellHasBeenUsed(row, column, usedCells)) return undefined;
//     return { letter: board[row][column], coordinates: [row, column] }
//   }

//   const cellHasBeenUsed = (row: number, column: number, usedCells: Array<Array<number>>) => {
//     for (const cells of usedCells) {
//       const [x, y] = cells;
//       if (row === x && column === y) return true
//     }
//     return false
//   }

//   const isOutOfBounds = (row: number, column: number): boolean => {
//     if (row < 0 || row >= board.length || column < 0 || column >= board[0].length) return true;
//     return false;
//   }

//   const recursiveSearch = (remainingWord: Array<string>, currentRow: number, currentColumn: number, cellsUsed: Array<Array<number>>): boolean => {
//     if (remainingWord.length === 0) {
//       return true;
//     }

//     // search in all directions
//     const nextLetterToSearch = remainingWord.shift();

//     // get all letters around
//     const cellsAround: Array<{ letter: string, coordinates: number[] } | undefined> = []
//     for (const direction of DIRECTIONS) {
//       const [x, y] = direction
//       cellsAround.push(getLetter(x + currentRow, y + currentColumn, cellsUsed))
//     }

//     // if one of them matches, then add that cell to the cell used and keep searching
//     for (const cell of cellsAround) {
//       if (!cell) continue
//       const { letter, coordinates } = cell
//       const [x, y] = coordinates
//       if (letter === nextLetterToSearch) {
//         const cellsUsedToPass = [...cellsUsed, [x, y]]
//         return recursiveSearch([...remainingWord],
//           x,
//           y,
//           cellsUsedToPass
//         )
//       }
//     }
//     return false
//   }

//   const [firstLetter, ...rest] = word

//   let wordFound: boolean = false;

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       const currentLetter = board[i][j]
//       if (currentLetter === firstLetter) {
//         // initiate search 
//         const newCellsUsed = [[i, j]]
//         wordFound = recursiveSearch([...rest], i, j, newCellsUsed)
//         if (wordFound === true) return true
//       }
//     }
//   }
//   return wordFound
// };



// // Example 1
// // Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// // Output: true

// // Example 2 
// // Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// // Output: true

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"
))

console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB"))