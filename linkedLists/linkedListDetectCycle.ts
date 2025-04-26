export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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
