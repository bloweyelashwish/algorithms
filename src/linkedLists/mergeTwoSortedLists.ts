/*
  You are given the heads of two sorted linked lists list1 and list2.

  Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

  Return the head of the merged linked list.
*/

import { ListNode } from 'src/utils/singlyLinkedList/ListNode';

export function mergeTwoLists(
  list1Head: ListNode | null,
  list2Head: ListNode | null
): ListNode | null {
  if (list1Head === null) {
    return list2Head;
  }

  if (list2Head === null) {
    return list1Head;
  }

  if (list1Head.val < list2Head.val) {
    list1Head.next = mergeTwoLists(list1Head.next, list2Head);
    return list1Head;
  }

  list2Head.next = mergeTwoLists(list1Head, list2Head.next);
  return list2Head;
}
