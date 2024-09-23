/*
Given the head of a singly linked list, reverse the list recursively, and return the reversed list.
*/

import { ListNode } from 'src/utils/singlyLinkedList/ListNode';

function reverseLinkedList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const reversed = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;

  return reversed;
}
