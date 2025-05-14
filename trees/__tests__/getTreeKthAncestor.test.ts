import { describe, it, expect } from "vitest";
import { TreeAncestor } from "../getTreeKthAncestor";

describe("TreeAncestor", () => {
  it("should return -1 for root's parent", () => {
    const ancestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
    expect(ancestor.getKthAncestor(0, 1)).toBe(-1);
  });

  it("should return immediate parent", () => {
    const ancestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
    expect(ancestor.getKthAncestor(3, 1)).toBe(1);
    expect(ancestor.getKthAncestor(5, 1)).toBe(2);
  });

  it("should return ancestors at different levels", () => {
    const ancestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
    expect(ancestor.getKthAncestor(3, 2)).toBe(0); // Grandparent
    expect(ancestor.getKthAncestor(5, 2)).toBe(0); // Grandparent
    expect(ancestor.getKthAncestor(6, 3)).toBe(-1); // Beyond root
  });

  it("should handle larger k values", () => {
    const ancestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
    expect(ancestor.getKthAncestor(6, 1)).toBe(2);
    expect(ancestor.getKthAncestor(6, 2)).toBe(0);
    expect(ancestor.getKthAncestor(6, 3)).toBe(-1);
  });

  it("should handle complex queries", () => {
    // Tree structure:
    //        0
    //      /   \
    //     1     2
    //    / \   / \
    //   3   4 5   6
    const ancestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
    
    expect(ancestor.getKthAncestor(4, 2)).toBe(0);
    expect(ancestor.getKthAncestor(5, 2)).toBe(0);
    expect(ancestor.getKthAncestor(6, 2)).toBe(0);
    
    // Non-existent ancestors
    expect(ancestor.getKthAncestor(3, 10)).toBe(-1);
    expect(ancestor.getKthAncestor(0, 1)).toBe(-1);
  });

  it("should handle a linear tree", () => {
    // 0 <- 1 <- 2 <- 3 <- 4
    const ancestor = new TreeAncestor(5, [-1, 0, 1, 2, 3]);
    
    expect(ancestor.getKthAncestor(4, 1)).toBe(3);
    expect(ancestor.getKthAncestor(4, 2)).toBe(2);
    expect(ancestor.getKthAncestor(4, 3)).toBe(1);
    expect(ancestor.getKthAncestor(4, 4)).toBe(0);
    expect(ancestor.getKthAncestor(4, 5)).toBe(-1);
  });
});