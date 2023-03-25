import { ListNode } from "../types/node";
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.



/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// Space complexity 
// O(n) - we just need to make a stack that's the length of the listNode 

// Time complexity
// O(n) - we need to go through the list ONCE and then perform a single function


function middleNode(head: ListNode | null): ListNode | null {


  // if the list is ODD long (e.g. 3, 5, 23), then tehre is ONE middle node

  // if the list is EVEN long (e.g. 6, 48, 96), then there are TWO middle nodes
  // and we should return the second one 

  // we could create a stack 
  // and push the nodes into the stack
  // we then get the length of the stack and return the middle node (according to if the stack is odd or even length) 


  const stack = [] as Array<ListNode>

  // traverse the node
  while (head) {
    stack.push(head)
    head = head.next
  }

  // get the length of the stack
  const stackLength = stack.length

  if (stackLength % 2 === 0) {
    // if it can be divided by two, that means it's an even length 
    // so we should find the middle and get the SECOND one 
    const middleIndex = (stackLength / 2)

    // if the length is 6, then we get the THIRD index
    // we return this because we the SECOND and THIRD index are the middle
    // remember, we start from 0 
    return stack[middleIndex]

  } else {
    const middleIndex = Math.floor(stackLength / 2)

    // if it's odd, we return Math.floor
    return stack[middleIndex]
  }
};

// there's also another way to do it (fast and slow pointer) 

// this doesn't require you to create another data structure 

function middleNodeWithPointers(head: ListNode | null): ListNode | null {

  let slowPointer = head
  let fastPointer = head

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer?.next!
    fastPointer = fastPointer.next?.next!
  }
  return slowPointer
}