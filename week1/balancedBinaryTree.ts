// Given a binary tree, determine if it is 
// height-balanced
// .

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

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// https://www.youtube.com/watch?v=LU4fGD-fgJQ


// RULE :
// The difference between left and right subtree height must be < or = 1 
// Math.abs(leftHeight - rightHeight) <= 1

// if it's a null node, it's a balanced tree (empty tree is balanced) 


// helper function to get height 

function getHeight(root: TreeNode | null): number {

  // if no root, return 0 
  if (!root) {
    return 0
  }

  // need to add one to include the root node 
  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  // if either is unbalanced, return -1
  if (leftHeight === -1 || rightHeight === -1) return -1

  // if heights differ by more than 1, return -1 (unbalanced)
  if (Math.abs(leftHeight - rightHeight) > 1) return -1

  // otherwise return the height of the subtree as max (leftHeight, rightHeight)
  // need to +1 to include parent node
  return Math.max(leftHeight, rightHeight) + 1
}

function isBalanced(root: TreeNode | null): boolean {

  // if there is no root, return true immediately 
  if (!root) {
    return true
  }

  if (getHeight(root) === -1) return false;
  return true
}
