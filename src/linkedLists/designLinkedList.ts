/*
  Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
  A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
  If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

  Implement the MyLinkedList class:

  MyLinkedList() Initializes the MyLinkedList object.
  int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
  void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
  void addAtTail(int val) Append a node of value val as the last element of the linked list.
  void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
  void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

*/

import { ListNode } from 'src/utils/singlyLinkedList/ListNode';

export class MyLinkedList {
  #head: ListNode | null;
  #tail: ListNode | null;
  #size: number;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.#size || index < 0) return;

    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.#size) {
      this.addAtTail(val);
    } else {
      let current = this.#head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }

      const newNode = new ListNode(val);
      newNode.next = current!.next;
      current!.next = newNode;
      this.#size++;
    }
  }

  addAtHead(val: number): void {
    const newNode = new ListNode(val);
    newNode.next = this.#head;
    this.#head = newNode;

    if (this.#size === 0) {
      this.#tail = newNode;
    }

    this.#size++;
  }

  addAtTail(val: number): void {
    const newNode = new ListNode(val);
    if (!this.#tail) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#size++;
  }

  get(index: number): number {
    if (index < 0 || index >= this.#size) return -1;

    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.val;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.#size) return;

    if (index === 0) {
      this.#head = this.#head!.next;
      if (this.#size === 1) this.#tail = this.#head?.next || null;
    } else {
      let current = this.#head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      current!.next = current!.next!.next;
      if (index === this.#size - 1) this.#tail = current;
    }

    this.#size--;
  }
}
