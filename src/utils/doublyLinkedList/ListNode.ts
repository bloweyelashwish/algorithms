export class DLListNode {
  val: number;
  next: DLListNode | null;
  prev: DLListNode | null;

  constructor(value: number) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}
