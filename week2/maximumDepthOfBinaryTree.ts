
// Given the root of a binary tree, return its maximum depth.

import { TreeNode } from "../types/node";

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// helper function 
// function traverseDown(node: TreeNode | null, currentLength: number): number {
//   if (node) {
//     return Math.max(traverseDown(node.left, currentLength + 1), traverseDown(node.right, currentLength + 1))
//   } else {
//     return 0
//   }
// }

// 

function getHeight(root: TreeNode | null): number {

  // if no root, return 0 
  if (!root) {
    return 0
  }

  // need to add one to include the root node 
  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  // otherwise return the height of the subtree as max (leftHeight, rightHeight)
  // need to +1 to include parent node
  return Math.max(leftHeight, rightHeight) + 1
}



function maxDepth(root: TreeNode | null): number {

  // early return if just one root 
  if (root && !root.left && !root?.right) {
    return 1
  }

  function getHeight(root: TreeNode | null): number {

    // if no root, return 0 
    if (!root) {
      return 0
    }

    // need to add one to include the root node 
    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)

    // otherwise return the height of the subtree as max (leftHeight, rightHeight)
    // need to +1 to include parent node
    return Math.max(leftHeight, rightHeight) + 1
  }

  return getHeight(root)
};


const five = new TreeNode(5, null, null)
const four = new TreeNode(4, null, null)
const three = new TreeNode(3, null, null)
const two = new TreeNode(2, four, five)
const one = new TreeNode(1, two, three)


console.log(maxDepth(one))
