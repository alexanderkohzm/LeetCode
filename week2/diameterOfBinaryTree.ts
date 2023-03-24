
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.


class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}




function diameterOfBinaryTree(root: TreeNode | null): number {

  let currentMax = 0

  // helper function 
  function depthFirstSearch(root: TreeNode | null) {
    if (!root) return 0

    const left = depthFirstSearch(root.left)
    const right = depthFirstSearch(root.right)

    currentMax = Math.max(currentMax, left + right)
    return Math.max(left, right) + 1
  }

  depthFirstSearch(root)
  return currentMax
};

// 5 deep tree
const five = new TreeNode(5, null, null)
const four = new TreeNode(4, null, null)
const three = new TreeNode(3, null, null)
const two = new TreeNode(2, four, five)
const one = new TreeNode(1, two, three)


console.log(diameterOfBinaryTree(one))



// This solution DOES NOT WORK for all cases (5 test cases failed out of 104)
// The reason is because it only counts from the root. 
// there MIGHT be a diameter that's longer than the one that starts from the root 

// // helper function 
// function traverseTillEndOfTree(root: TreeNode | null, edgesVisited: number): number {

//   if (!root?.left && !root?.right) {
//     return edgesVisited + 1
//   }

//   const left = traverseTillEndOfTree(root.left, edgesVisited)
//   const right = traverseTillEndOfTree(root.right, edgesVisited)

//   // we also need to compare the edges. Because we might go down one side but not be the longest side

//   return left > right ? left + 1 : right + 1
// }

// function diameterOfBinaryTree(root: TreeNode | null): number {

//   // if we think about it, the longest route is 
//   // from the deepest on the LEFT of the root 
//   // and the deepest on the RIGHT of the root 

//   // so if we recursively go down the LEFT side 
//   // and sum up how many edges we go down 
//   // and do the same for the RIGHT and add the two together
//   // we should get the largest diameter of the binary tree 

//   if (root && !root.left && !root.right) {
//     return 0
//   }

//   // if both exist
//   if (root && root.left && root.right) {
//     // traverse down the left side 
//     const leftSide = traverseTillEndOfTree(root?.left, 0)

//     // traverse down the right
//     const rightSide = traverseTillEndOfTree(root?.right, 0)

//     // add the two
//     const sum = leftSide + rightSide

//     return sum
//   } else if (root && root.left && !root.right) {
//     // traverse down the left side 
//     return traverseTillEndOfTree(root?.left, 0)
//   } else {
//     return traverseTillEndOfTree(root!.right, 0)
//   }
// };