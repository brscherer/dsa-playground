import { ListNode } from "./model";

export function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;

  let preCut: ListNode | null = list1;
  let postCut: ListNode | null = list1;

  while (preCut && --a > 0) {
    preCut = preCut.next;
  }

  while (postCut && b-- > 0) {
    postCut = postCut.next;
  }

  if (preCut && postCut) {
    preCut.next = list2;

    let current = list2;

    while (current && current.next) {
      current = current.next;
    }

    if (current) {
      current.next = postCut.next;
    }
  }

  return list1;
}
