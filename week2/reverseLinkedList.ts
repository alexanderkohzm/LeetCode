// Given the head of a singly linked list, reverse the list, and return the reversed list.

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// https://www.youtube.com/watch?v=NhapasNIKuQ


function reverseList(head: ListNode | null): ListNode | null {

  // if linkedList is just one, return early   
  if (!head || !head.next) {
    return head
  }

  // next we need to loop through the linkedList 
  let currentNode: ListNode | null = head
  let previousNode: ListNode | null = null
  let nextNode: ListNode | null = null

  while (currentNode) {
    nextNode = currentNode.next
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }
  head = previousNode
  return head
};

function reverseListRecursive(head: ListNode | null): ListNode | null {

  if (head === null || head.next === null) return head

  const headOfList = reverseListRecursive(head.next)

  // head.next.next as head node 
  head.next.next = head;

  // set head's next to null 
  head.next = null

  return headOfList
}


const fifthNode = new ListNode(5, null)
const fourthNode = new ListNode(4, fifthNode)
const thirdNode = new ListNode(3, fourthNode)
const secondNode = new ListNode(2, thirdNode)
const firstNode = new ListNode(1, secondNode)

console.log(reverseList(firstNode))

console.log(fourthNode, thirdNode, secondNode, firstNode, fifthNode)

console.log(reverseListRecursive(fifthNode))