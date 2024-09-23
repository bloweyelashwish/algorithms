/*
  Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

  Implement the MyStack class:

  void push(int x) Pushes element x to the top of the stack.
  int pop() Removes the element on the top of the stack and returns it.
  int top() Returns the element on the top of the stack.
  boolean empty() Returns true if the stack is empty, false otherwise.
*/

class MyStack {
  #queue1: number[] = [];
  #queue2: number[] = [];

  push(x: number): void {
    this.#queue1.push(x);
  }

  pop(): number {
    this.reverseSwap(this.#queue1, this.#queue2);
    const popped = this.#queue2.shift();
    this.reverseSwap(this.#queue2, this.#queue1);
    return popped!;
  }

  top(): number {
    this.reverseSwap(this.#queue1, this.#queue2);
    const top = this.#queue2[0];
    this.reverseSwap(this.#queue2, this.#queue1);

    return top;
  }

  reverseSwap(source: number[], target: number[]): void {
    const len = source.length;

    for (let i = 0; i < len; i++) {
      target.push(source.pop() as number);
    }
  }

  empty(): boolean {
    return this.#queue1.length === 0;
  }
}
