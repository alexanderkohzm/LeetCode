// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value?: number, next?: ListNode | null) {
    this.value = value === undefined ? 0 : value,
      this.next = next === undefined ? null : next
  }
}

// Iterative approach 
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

  // first get the head 


  const headOfLinkedList = new ListNode()

  // traverse both lists
  // we can use a while loop (e.g. while list1 is not at end and list 2 is not at end)
  // compare the value from list 1 and list 2

  let current = headOfLinkedList;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next
  }
  // when you exit the while loop, you need to add list1 or list2 
  current.next = list1 || list2;

  return headOfLinkedList.next
};


// Recursive approach
function mergeTwoListsRecursive(list1: ListNode | null, list2: ListNode | null): ListNode | null {

  if (!list1) {
    return list2
  } else if (!list2) {
    return list1
  } else if (list1.value <= list2.value) {
    list1.next = mergeTwoListsRecursive(list1.next, list2)
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}