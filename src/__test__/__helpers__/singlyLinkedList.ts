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

export { createLinkedList };
