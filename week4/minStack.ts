/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
  public normalStack = [] as Array<number>;
  public minStack = [] as Array<number>;

  constructor() {
    this.normalStack = [];
    this.minStack = [];
  }

  push(val: number): void {
    // if it's length 0, we just need to push
    if (this.normalStack.length === 0 && this.minStack.length === 0) {
      this.normalStack.push(val);
      this.minStack.push(val);
      return;
    }

    // if not, we push it into the normal stack
    this.normalStack.push(val);

    // and we need to compare the minimum with the min stack
    const minimum = this.minStack[this.minStack.length - 1];

    // if the CURRENT min is smaller than val, we can push in min
    if (minimum < val) {
      this.minStack.push(minimum);
      // if not, we push in val
    } else {
      this.minStack.push(val);
    }
    return;
  }

  pop(): void {
    this.minStack.pop();
    this.normalStack.pop();
  }

  top(): number {
    return this.normalStack[this.normalStack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // should be -3
minStack.pop();
console.log(minStack.top()); // should be 0
console.log(minStack.getMin()); // should be -2
