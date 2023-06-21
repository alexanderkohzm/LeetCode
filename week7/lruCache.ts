// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

// The functions get and put must each run in O(1) average time complexity.

// what's interesting is that get and put must run in O(1) time complexity 
// what data structures can we use to implement this? 
// put means that we're trying to store key-value pairs. This is similar to a hashmap and it satisfies the condition of O(1) time complexity 

// the next interesting thing is the get method and it being O(1) time complexity 
// we need some sort of reference to the index position of the key/value pair in the data structure we want to store it in

// on initial thought, it makes sense to use a List to store our key-value pairs 
// a hashmap can be used to store the index position of the key whenever we try to access it
// this will help us satisfy the O(1) average time complexity of get 

// however, the issue is that we need to evict the least recently used key and perform this in O(1) time. Arrays do not satisfy this criteria because moving elements around in arrays take O(n) complexity 

// LinkedLists can do this in O(1) complexity IF it knows where the element is, O(n) if it needs to search the linkedList 

// so let's try to implement the LinkedList 


class NodeLinkedList {
  public next: NodeLinkedList | undefined;
  public prev: NodeLinkedList | undefined;
  public key: number;
  public value: number;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class DoublyLinkedList {
  public length: number = 0;
  public head: NodeLinkedList | undefined;
  public tail: NodeLinkedList | undefined


  public add(key: number, value: number): NodeLinkedList {
    // if there is no head
    const newNode = new NodeLinkedList(key, value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++
      return newNode;
    }
    // if not, just add
    const currentHead = this.head;
    currentHead.prev = newNode;
    newNode.next = currentHead
    this.head = newNode
    this.length++
    return newNode
  }

  public remove(node: NodeLinkedList): void {

    // if there is only one node
    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else if (node.key === this.tail?.key) {
      // if node is equal to tail
      const beforeTail = this.tail?.prev
      beforeTail!.next = undefined;
      this.tail = beforeTail;
    } else if (node.key === this.head?.key) {
      // if node is equal to head
      const afterHead = this.head.next;
      this.head = afterHead;
      this.head!.prev = undefined
    } else {
      const previousNode = node.prev;
      const nextNode = node.next;
      previousNode!.next = nextNode
      nextNode!.prev = previousNode
    }
    this.length--
  }

}



class LRUCache {

  private hashMap = {} as { [key: number]: NodeLinkedList }
  private capacity: number;
  private doublyLinkedList: DoublyLinkedList

  constructor(capacity: number) {
    this.capacity = capacity;
    this.doublyLinkedList = new DoublyLinkedList()
  }

  get(key: number): number {

    if (this.hashMap[key] == undefined) return -1;

    const node = this.hashMap[key]
    const value = node.value
    // remove and add the node
    this.doublyLinkedList.remove(node)
    // IMPORTANT !! Need to reassign the pointer to the right node after every get
    this.hashMap[key] = this.doublyLinkedList.add(key, value);
    return value
  }

  put(key: number, value: number): void {

    // if NOT present in hashmap 

    if (this.hashMap[key] === undefined) {
      this.hashMap[key] = this.doublyLinkedList.add(key, value)
    } else {
      const node = this.hashMap[key]
      this.doublyLinkedList.remove(node)
      this.hashMap[key] = this.doublyLinkedList.add(key, value)
    }

    // if linkedList length is more than capacity
    if (this.doublyLinkedList.length > this.capacity) {
      const tail = this.doublyLinkedList.tail
      const key = tail?.key!
      delete this.hashMap[key]
      this.doublyLinkedList.remove(tail!)
    }
  }
}

const newLRUCache = new LRUCache(3)

// console.log(newLRUCache.get(1)) // -1 
// newLRUCache.put(1, 1)
// console.log(newLRUCache.get(1)) // 1
// // console.log(newLRUCache.get(1)) // 1
// // console.log(newLRUCache.get(1)) // 1
// // add more
// newLRUCache.put(2, 2)
// console.log(newLRUCache.get(2))//2
// newLRUCache.put(3, 3)
// console.log(newLRUCache.get(3))// 3


// newLRUCache.put(1, 1)
// newLRUCache.put(2, 2)
// console.log(newLRUCache.get(1))
// newLRUCache.put(3, 3)
// console.log(newLRUCache.get(2))
// newLRUCache.put(4, 4)
// console.log(newLRUCache.get(3))
// console.log(newLRUCache.get(4))

newLRUCache.put(1, 1)
newLRUCache.put(2, 2)
newLRUCache.put(3, 3)
newLRUCache.put(4, 4)
console.log(newLRUCache.get(4))
console.log(newLRUCache.get(3))
console.log(newLRUCache.get(2))
console.log(newLRUCache.get(1)) // -1
newLRUCache.put(5, 5)
console.log(newLRUCache.get(1)) // -1
console.log(newLRUCache.get(2)) // should be 2
// console.log(newLRUCache.get(3))
