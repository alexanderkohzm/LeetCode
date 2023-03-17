// Given the root of a binary tree, invert the tree, and return its root.

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

function invertNodes(root: TreeNode | null) {
  const temporary = root?.right!
  root!.right = root!.left
  root!.left = temporary
}

function invertTree(root: TreeNode | null): TreeNode | null {

  // do this recursively 
  if (root) {
    invertNodes(root)
    invertTree(root!.left)
    invertTree(root!.right)
  }

  return root
};

const root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)

console.log(invertTree(root))