import { ListNode } from "./model";

export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return head;

  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
