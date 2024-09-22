import { test, expect, describe, beforeEach } from 'vitest';

import { MyLinkedList } from 'src/linkedLists/designLinkedList';

describe('MyLinkedList', () => {
  let myLinkedList: MyLinkedList;

  beforeEach(() => {
    myLinkedList = new MyLinkedList();
  });

  test('Should instantiate a new linked list', () => {
    expect(myLinkedList).toBeDefined();
  });

  test('Should add a node at the head of the linked list', () => {
    myLinkedList.addAtHead(1);
    expect(myLinkedList.get(0)).toBe(1);
  });

  test('Should add a node at the tail of the linked list', () => {
    myLinkedList.addAtTail(3);
    expect(myLinkedList.get(0)).toBe(3);
  });

  test('Should add a node at the specified index of the linked list', () => {
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);
    expect(myLinkedList.get(1)).toBe(2);
  });

  test('Should return the value of the node at the specified index of the linked list', () => {
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);
    expect(myLinkedList.get(1)).toBe(2);
  });

  test('Should delete the node at the specified index of the linked list', () => {
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);
    myLinkedList.deleteAtIndex(1);
    expect(myLinkedList.get(1)).toBe(3);
  });

  test('Should return -1 if the index is invalid', () => {
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);
    expect(myLinkedList.get(3)).toBe(-1);
  });

  test('Should not delete the node if the index is invalid', () => {
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);
    myLinkedList.deleteAtIndex(3);
    expect(myLinkedList.get(1)).toBe(2);
  });
});
