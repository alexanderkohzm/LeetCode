// Given a binary tree, find the lowest common ancestor (LCA)
// of two given nodes in the tree.

// According to the definition of LCA on Wikipedia:
// “The lowest common ancestor is defined between two nodes p and q
// as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”

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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;
  if (root == p || root == q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // the currentNode we're at is root IF both are non-null
  // if ONE is null, we need to return the right/left (Whichever is not null)

  if (left && right) {
    return root;
  } else {
    return left || right;
  }
}

// Example 1
/* 

root = [3, 5, 1, 6, 2, 0, 8, null, null, 7 ,4], p = 5, q =1
output = 3 


root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p  = 5, q =4
output = 5

// */

// this works for 29 out of 31 test cases
// however, we run into javascript out of memory

// // this returns the array of numbers (node parents)
// function findNode(
//   node: TreeNode | null,
//   target: number,
//   arrayOfParents: Array<TreeNode>
// ): Array<TreeNode> | undefined {
//   if (!node) return undefined;

//   const newArrayOfParents = [...arrayOfParents, node];

//   if (node.val === target) {
//     return newArrayOfParents;
//   }

//   // if not, go down left and right
//   const left = findNode(node.left, target, newArrayOfParents);
//   const right = findNode(node.right, target, newArrayOfParents);

//   // we assume that it MUST be there
//   if (!left) return right;
//   if (!right) return left;
// }

// function lowestCommonAncestor(
//   root: TreeNode | null,
//   p: TreeNode | null,
//   q: TreeNode | null
// ): TreeNode | null {
//   // this feels like a depth first search problem
//   // we get to a node and we keep on going down until we find p or q

//   // once we find p and q we need to slowly backtrack to find the lowest commonAncestor

//   // actually we could have two arrays to store the lowest commonAncestor (aka the parent)
//   // everytime we go through the recursion

//   // once we've found the p and q, we look through the list and see when there's a match

//   const pNodeParents = findNode(root, p!.val, []);
//   const qNodeParents = findNode(root, q!.val, []);

//   // now we should get two arrays of numbers
//   // e.g. [5, 4], [5, 4]

//   // we should find the one with the LONGEST (we want to get the deepestNode)
//   // and we iterate through from the end to the front
//   // once we find a match, we return the node

//   while (qNodeParents!.length > 0 && pNodeParents!.length > 0)
//     if (qNodeParents!.length > pNodeParents!.length) {
//       // compare
//       const latestQ = qNodeParents![qNodeParents!.length - 1];
//       const latestP = pNodeParents![pNodeParents!.length - 1];

//       if (latestP!.val === latestQ!.val) {
//         return latestQ;
//       } else {
//         // since Q is LONGER, we should pop Q
//         qNodeParents?.pop();
//       }
//     } else {
//       const latestQ = qNodeParents![qNodeParents!.length - 1];
//       const latestP = pNodeParents![pNodeParents!.length - 1];
//       if (latestP!.val === latestQ!.val) {
//         return latestQ;
//       } else {
//         // since Q is LONGER, we should pop Q
//         pNodeParents?.pop();
//       }
//     }
//   return null;
// }

// // const threeRootNode = new TreeNode(3, null, null);
// // const sixRootNode = new TreeNode(6, null, null);
// // const fourRootNode = new TreeNode(4, threeRootNode, sixRootNode);

// // const oneRootNode = new TreeNode(1, null, null);
// // const rootNode = new TreeNode(5, oneRootNode, fourRootNode);
// // console.log(lowestCommonAncestor(rootNode, threeRootNode, sixRootNode));

// const secondTreeNode = new TreeNode(2, null, null);
// const rootNode = new TreeNode(1, secondTreeNode, null);

// // should return 1
// console.log(lowestCommonAncestor(rootNode, secondTreeNode, rootNode));
