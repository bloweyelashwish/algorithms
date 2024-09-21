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
  let fillNode = new ListNode();
  let current = fillNode;

  if (list1Head === null) {
    current.next = list2Head;
  }

  if (list2Head === null) {
    current.next = list1Head;
  }

  while (list1Head !== null && list2Head !== null) {
    if (list1Head.val < list2Head.val) {
      current.next = list1Head;
      list1Head = list1Head.next;
    } else {
      current.next = list2Head;
      list2Head = list2Head.next;
    }

    current = current.next;
  }

  if (list1Head !== null) {
    current.next = list1Head;
  } else {
    current.next = list2Head;
  }

  return fillNode.next;
}
