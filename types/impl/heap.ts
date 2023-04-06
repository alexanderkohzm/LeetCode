/**
 * This is the class for a heap
 */

import { IHeap } from "../iHeap";


export class MinHeap implements IHeap {

  private heap = [null] as Array<number | null>

  /**
   * inserts the number at the top of the heap 
   * push the number into the last index of the heap (this represents it being at the bottom of the heap)
   * if heap length is more than 2 
   *   let index = heap.length - 1
   *   while(heap[index] < heap[parent])
   *   if index is more than 1
   *   - swap the number with it's parent 
   *   - if parent is > 1, index will have to be updated and to its parent 
   *      - if not, break 
   * 
   * @param data 
   */
  insert(data: number): void {
    this.heap.push(data)

    if (this.heap.length > 2) {
      let index = this.heap.length - 1
      let parentIndex = Math.floor(index / 2)

      while (this.heap[index] && this.heap[parentIndex] && (this.heap[index]! < this.heap[parentIndex]!)) {
        if (index > 1) {
          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
          if (parentIndex > 1) {
            // go to parent
            index = Math.floor(index / 2)
            parentIndex = Math.floor(index / 2)
          }
        } else {
          break
        }
      }
    }
  }

  /**
   * let the smallest be the 1st index in the array heap[1]
   * if heap length > 2, 
   * place the last element at the TOP of the heap 
   * and remove the last element 
   * 
   * if heap's length is == 3 
   *  IF heap[1] > heap[2], then swap position
   * return smallest
   * 
   * now we need to percolate down 
   * 
   * let index = i, 
   * get left and right children 
   * while heap[index] >= heap[left] OR heap[index] >= heap[right]
   *  IF heap[left] < heap[right]
   *    swap heap[index] with heap[left]
   *    index is now left's index (2 * i)
   * 
   *  ELSE 
   *    swap heap[index] with heap[right]
   *    index is now right's index (2 * 1 + 1)
   * 
   *  left is now 2 * 1
   *  right is now 2 * i + 1 
   * 
   *  if heap[left] === undefined OR heap[right] === undefined
   *    break
   * 
   * ELSE if (heap.length == 2). splice(1 ,1)
   * 
   * ELSE return null
   * 
   * no matter what, always return smallest
   *  
   */
  remove() {
    let smallest = this.heap[1]

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1]
      this.heap.splice(this.heap.length - 1)

      if (this.heap.length === 3) {
        if (this.heap[1] && this.heap[2] && this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
        }
        return smallest
      }

      let index = 1
      let left = 2 * index;
      let right = 2 * index + 1;

      while (this.heap[index] && this.heap[left] && this.heap[right] && this.heap[index]! >= this.heap[left]! || this.heap[index]! >= this.heap[right]!) {
        if (this.heap[left]! < this.heap[right]!) {
          [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]]
          index = 2 * index
        } else {
          [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]]
          index = 2 * index + 1
        }
        left = 2 * index
        right = 2 * index + 1

        // if we are at the end of the tree, break 
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1)
    } else {
      return null
    }
    return smallest
  }


  /**
   * Sorting 
   * 
   * we create a new array 
   * 
   * while heap.length is more than 1, 
   * we push this.remove INTO result
   * 
   * return result 
   */
  sort(): Array<number> {
    const result = new Array()

    while (this.heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }
}