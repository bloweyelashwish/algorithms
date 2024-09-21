/*
  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

  Implement the MinStack class:

  MinStack() initializes the stack object.
  void push(int val) pushes the element val onto the stack.
  void pop() removes the element on the top of the stack.
  int top() gets the top element of the stack.
  int getMin() retrieves the minimum element in the stack.
  You must implement a solution with O(1) time complexity for each function.
*/

export class MinStack {
  #stack: number[] = [];
  #minStack: number[] = [];

  push(val: number): void {
    this.#stack.push(val);
    if (
      !this.#minStack.length ||
      val <= this.#minStack[this.#minStack.length - 1]
    ) {
      this.#minStack.push(val);
    }
  }

  pop(): void {
    let val = this.#stack.pop();
    if (val === this.#minStack[this.#minStack.length - 1]) {
      this.#minStack.pop();
    }
  }

  top(): number {
    return this.#stack[this.#stack.length - 1];
  }

  getMin(): number {
    return this.#minStack[this.#minStack.length - 1];
  }
}
