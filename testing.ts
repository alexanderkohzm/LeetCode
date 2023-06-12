class OrderedList<T extends { id: string }> {
  private itemIds: string[] = []
  private itemById: Record<string, T> = {};


  add(item: T) {
    this.itemIds.push(item.id);
    this.itemById[item.id] = item
  }

  /**
   * returns the array item at the nth position
   */
  getNthElement(n: number) {
    return this.itemById[this.itemIds[n]]
  }
}