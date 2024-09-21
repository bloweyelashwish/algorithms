import { ListNode } from 'src/utils/singlyLinkedList/ListNode';

export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current !== null) {
    prev = new ListNode(current.val, prev);
    current = current.next;
  }

  return prev;
}
