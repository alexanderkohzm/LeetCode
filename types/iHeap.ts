

export interface IHeap {

  /**
   * Inserts data into Heap. It should be a number
   * @param data 
   */
  insert(data: number): void


  /**
   * Removes the smallest or largest number (depends if it's a min or max heap)
   */
  remove(): any

  /**
   * Sorts the heap 
   */
  sort(): Array<number>
}