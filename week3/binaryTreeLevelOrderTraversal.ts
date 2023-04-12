// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, 


// Example 1: 

// Input: root = [3, 9, 20, null, null, 15, 7]
// Output = [[3], [9, 20], [15, 7]]

// Input root = [1]
// Output = [[1]]

// Root = []
// output = []

import { TreeNode } from "../types/impl/node";


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

function levelOrder(root: TreeNode | null): number[][] {

  // we need to create a queue 

  // for example, if we're at level 0, the next one is the root (3). We add it to the holding array and add taht to result array. we add the root's children to the queue ([9, 20])

  // the queue now has the children (9, 20). Add the children to the array. Add that array to the result array. Check if 9 and 20 have children. If they do, add 9 and 20's children to the queue ([null, null, 15, 7])


  // the queue now has 4 ([null, null, 15, 7]). If queue[0] is null, pop it AND do not add it's children to the queue. We get to 15 and 7 and add it to the result array. We add it's children to the queue ([null, null, null, null])

  // we go through it and pop 

  // the queue is now empty, we can return 


  // if there is no root, then we return
  if (!root) {
    return [[]]
  }

  let queue = [] as Array<TreeNode>

  // initialise
  queue.push(root)

  const resultArray = [] as Array<Array<number>>

  while (queue.length > 0) {

    let holdingArray = [] as Array<number>

    let nextQueue = [] as Array<TreeNode>

    // loop through the queue 
    for (const node of queue) {
      // if node is empty, then continue

      holdingArray.push(node.val)

      // we need to add the children to the queue
      // if the children is null, don't 
      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)
    }
    // now we push the holdingArray into resultARray

    resultArray.push(holdingArray)

    // delete everything in holdingArray
    holdingArray = []

    // so we have now have gone through all of queue 

    // we need to then add nextQueue to queue

    // if the nextqueue.length is 0, it means everything is null 
    // and we should just break
    if (nextQueue.length === 0) break

    // if not, we need to add it to queue
    queue = [...nextQueue]
  }

  return resultArray
};

// set up the tree


const fifteenNode = new TreeNode(15, null, null)
const sevenNode = new TreeNode(7, null, null)

const twentyNode = new TreeNode(20, fifteenNode, sevenNode)

const nineNode = new TreeNode(9, null, null)
const threeNode = new TreeNode(3, nineNode, twentyNode)

console.log(levelOrder(threeNode))