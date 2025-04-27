import { ListNode } from "./model";

export function hasCycle(head: ListNode | null): boolean {
  let fastPointer = head;
  let slowPointer = head;
  
  while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer?.next ?? null;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) {
        return true;
      }
  }

  return false;
}
