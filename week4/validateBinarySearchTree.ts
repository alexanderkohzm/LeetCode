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

import { TreeNode } from "../types/impl/node";

// helper function to see if children are appropriate

function validateNode(
  node: TreeNode | null,
  left: number,
  right: number
): boolean {
  if (!node) return true;

  if (node.val <= left) return false;
  if (node.val >= right) return false;

  return (
    validateNode(node.left, left, node.val) &&
    validateNode(node.right, node.val, right)
  );
}

function isValidBST(root: TreeNode | null): boolean {
  // validBST
  // left subtree of a node = contains only nodes with keys LESS than node's key
  // right subtree = contains only nodes GREATER than node's key
  // both left and right subtree MUST also be binarySearchTrees
  // we need to recursively go down the tree

  if (!root) return true;

  return validateNode(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

const threeRootNode = new TreeNode(3, null, null);
const sixRootNode = new TreeNode(6, null, null);
const fourRootNode = new TreeNode(4, threeRootNode, sixRootNode);

const oneRootNode = new TreeNode(1, null, null);
const rootNode = new TreeNode(5, oneRootNode, fourRootNode);
console.log(isValidBST(rootNode));
