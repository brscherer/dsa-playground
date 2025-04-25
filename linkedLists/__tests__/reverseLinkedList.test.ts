import { describe, it, expect } from "vitest";
import { ListNode, reverseList } from "../reverseLinkedList";

describe("reverseList", () => {
  it("should return null when head is null", () => {
    expect(reverseList(null)).toBeNull();
  });

  it("should handle a single node list", () => {
    const node = new ListNode(1);
    const result = reverseList(node);
    expect(result?.val).toBe(1);
    expect(result?.next).toBeNull();
  });

  it("should reverse a two-node list", () => {
    const node2 = new ListNode(2);
    const node1 = new ListNode(1, node2);

    const result = reverseList(node1);

    expect(result?.val).toBe(2);
    expect(result?.next?.val).toBe(1);
    expect(result?.next?.next).toBeNull();
  });

  it("should reverse a multi-node list", () => {
    const node5 = new ListNode(5);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);

    const result = reverseList(node1);

    expect(result?.val).toBe(5);
    expect(result?.next?.val).toBe(4);
    expect(result?.next?.next?.val).toBe(3);
    expect(result?.next?.next?.next?.val).toBe(2);
    expect(result?.next?.next?.next?.next?.val).toBe(1);
    expect(result?.next?.next?.next?.next?.next).toBeNull();
  })
});
