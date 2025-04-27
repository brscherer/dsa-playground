import { describe, it, expect } from "vitest";
import { ListNode, mergeInBetween } from "../mergeInBetweenLinkedLists";

describe("mergeInBetween", () => {
  it("should return list2 when list1 is null", () => {
    const list2 = new ListNode(4, new ListNode(5));
    expect(mergeInBetween(null, 1, 2, list2)).toBe(list2);
  });

  it("should insert list2 between specific nodes in list1", () => {
    // Create list1: 1->2->3->4->5
    const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    
    // Create list2: 10->11->12
    const list2 = new ListNode(10, new ListNode(11, new ListNode(12)));
    
    // Merge list2 between positions 1 and 3 of list1 (replace nodes 2->3->4)
    const result = mergeInBetween(list1, 1, 3, list2);
    
    // Expected: 1->10->11->12->5
    expect(result?.val).toBe(1);
    expect(result?.next?.val).toBe(10);
    expect(result?.next?.next?.val).toBe(11);
    expect(result?.next?.next?.next?.val).toBe(12);
    expect(result?.next?.next?.next?.next?.val).toBe(5);
    expect(result?.next?.next?.next?.next?.next).toBeNull();
  });
})