import { test, expect } from 'vitest';
import { reverseList } from '../../linkedLists/reverseLinkedList';
import { createLinkedList } from '../__helpers__/singlyLinkedList';

test('reverseLinkedList', () => {
  const arr = [1, 2, 3, 4, 5];
  const reverseArr = [...arr].reverse();

  const testList = createLinkedList(arr);
  const expectedList = createLinkedList(reverseArr);

  const result = reverseList(testList);
  expect(result).toEqual(expectedList);
});
