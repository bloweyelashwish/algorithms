import { describe, test, expect } from 'vitest';

import { mergeTwoLists } from 'src/linkedLists/mergeTwoSortedLists';
import { createLinkedList } from '../__helpers__/singlyLinkedList';
import { ListNode } from 'src/utils/singlyLinkedList/ListNode';

describe('Merge 2 sorted linked lists', () => {
  test('Merges 2 empty linked lists', () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([]);

    const result = mergeTwoLists(list1, list2);

    expect(result).toEqual(new ListNode());
  });

  test('Merges 1 filled and 1 empty linked lists', () => {
    const arr = [0];
    const list1 = createLinkedList([]);
    const list2 = createLinkedList(arr);

    const result = mergeTwoLists(list1, list2);

    expect(result).toEqual(createLinkedList(arr));
  });

  test('Merges 2 filled linked lists', () => {
    const arr1 = [1, 2, 4];
    const arr2 = [1, 3, 4];
    const list1 = createLinkedList(arr1);
    const list2 = createLinkedList(arr2);

    const expectedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    const expectedList = createLinkedList(expectedArr);

    const result = mergeTwoLists(list1, list2);
    expect(result).toEqual(expectedList);
  });

  test('Merges 2 empty linked lists', () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([]);
    const expectedList = createLinkedList([]);

    const result = mergeTwoLists(list1, list2);
    expect(result).toEqual(expectedList);
  });

  test('Merges 1 filled and 1 empty linked lists', () => {
    const arr = [0];
    const list1 = createLinkedList([]);
    const list2 = createLinkedList(arr);
    const expectedList = createLinkedList(arr);

    const result = mergeTwoLists(list1, list2);
    expect(result).toEqual(expectedList);
  });
});
