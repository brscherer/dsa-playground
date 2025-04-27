import { describe, it, expect } from "vitest";
import { hasCycle } from "../linkedListDetectCycle";
import { ListNode } from "../model";

describe("hasCycle", () => {
  it("should return false for an empty list", () => {
    expect(hasCycle(null)).toBe(false);
  });

  it("should return false for a single node list with no cycle", () => {
    const node = new ListNode(1);
    expect(hasCycle(node)).toBe(false);
  });

  it("should return true for a single node list with a self-cycle", () => {
    const node = new ListNode(1);
    node.next = node; // Points to itself
    expect(hasCycle(node)).toBe(true);
  });

  it("should return false for a linear linked list with multiple nodes", () => {
    const node3 = new ListNode(3);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);
    
    expect(hasCycle(node1)).toBe(false);
  });

  it("should return true for a linked list with a cycle at the end", () => {
    const node3 = new ListNode(3);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);
    node3.next = node1; // Creates a cycle
    
    expect(hasCycle(node1)).toBe(true);
  });

  it("should return true for a linked list with a cycle in the middle", () => {
    const node4 = new ListNode(4);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);
    node3.next = node2; // Creates a cycle
    
    expect(hasCycle(node1)).toBe(true);
  });

  it("should handle a long list without a cycle", () => {
    let current: ListNode | null = null;
    
    // Create a long list with 1000 nodes
    for (let i = 1000; i > 0; i--) {
      current = new ListNode(i, current);
    }
    
    expect(hasCycle(current)).toBe(false);
  });
});