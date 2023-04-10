// // An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// // You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// // To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// // Return the modified image after performing the flood fill.

// // Nick White
// // https://www.youtube.com/watch?v=aehEcTEPtCs good explanation

// // helper method 
// /**
//  * 
//  * @param image the original image
//  * @param sr the starting row
//  * @param sc the starting column
//  * @param color the original color 
//  * @param newColor the new color 
//  */
function fill(image: number[][], sr: number, sc: number, originalColor: number, newColor: number) {

  console.log("this is image: ", image)
  console.log("This is sr,  sc: ", sr, sc)
  console.log("this is originalColor, newColor: ", originalColor, newColor)

  // we need to check the base case 
  // 1. If starting row is < 0, return (this means it's out of bounds)
  // 2. If starting column is < 0, return (this means it's out of bounds)
  // 3. If sr >= image.length, return (this means it's out of bounds)
  // 4. If sc >= image[0].length, return (this means it's out of bounds)
  // 5. If image[sr][sc] (this is the pixel and it's color) is not equal to the original color, then return -> this means that it's either the new color OR is a 0
  if (isOutOfBounds(image, sr, sc) || image[sr][sc] !== originalColor) {
    return
  }

  // if it passes all conditions, we should set it to the new color 
  image[sr][sc] = newColor

  // then we need to fill in the rest recursively for one to the left (column -1), right (column + 1), row above (row -1), row below (row  +1)
  fill(image, sr, sc - 1, originalColor, newColor)
  fill(image, sr, sc + 1, originalColor, newColor)
  fill(image, sr - 1, sc, originalColor, newColor)
  fill(image, sr + 1, sc, originalColor, newColor)
}

// helper methods to check the cases 
function isOutOfBounds(image: number[][], sr: number, sc: number): boolean {
  const imageRowLength = image.length;
  // note: we're just getting the first input in the matrix
  // and getting the length - this indicates how many columns there are in the matrix
  const imageColumnHeight = image[0].length
  if (sr < 0 || sc < 0 || sr >= imageRowLength || sc >= imageColumnHeight) {
    return true
  }
  return false
}



function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {


  // if the pixel is already the new color, then we just return the image 
  const startingPixelOriginalColor = image[sr][sc]
  if (startingPixelOriginalColor == color) return image
  // call fill (This will do it recursively) 
  fill(image, sr, sc, startingPixelOriginalColor, color)
  // return the image 
  return image

};

const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
const color = 2

console.log(floodFill(image, 1, 1, 2))

