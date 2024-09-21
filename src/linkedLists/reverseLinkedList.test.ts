// Given the head of a singly linked list, reverse the list, and return the reversed list.

import { test, expect } from 'vitest';
import { reverseList } from './reverseLinkedList';
import { ListNode } from 'src/utils/singlyLinkedList/ListNode';

function createLinkedList(input: number[]) {
  const head = new ListNode(input[0]);
  let current = head;

  for (let i = 1; i < input.length; i++) {
    current.next = new ListNode(input[i]);
    current = current.next;
  }

  return head;
}

test('reverseLinkedList', () => {
  const arr = [1, 2, 3, 4, 5];
  const reverseArr = [...arr].reverse();

  const testList = createLinkedList(arr);
  const expectedList = createLinkedList(reverseArr);

  const result = reverseList(testList);
  expect(result).toEqual(expectedList);
});
