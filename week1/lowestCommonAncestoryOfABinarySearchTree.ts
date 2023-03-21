// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


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

// 1. Start at the root of the tree
// 2. If both nodes are less than the current node, go to the left subtree of the current node 
// 3. If both nodes are greater than the current node, go ot the right subtree of the current node
// 4. If one node is less than the current node and the other is greater than the current node, then the current node is the LCA 
// 5. If one or both of the nodes are equal to the current node, then the current node is the LCA 

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

  if (root && p && q && root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root?.right, p, q)
  }


  if (root && p && q && root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root?.left, p, q)
  }

  return root
};

