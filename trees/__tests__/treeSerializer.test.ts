import { describe, expect, it } from "vitest";
import { buildTree, splitWords } from "../treeSerializer";

describe('buildTree', () => {
  it('should build a null tree from "x"', () => {
    const nodes = ["x"][Symbol.iterator]();
    const tree = buildTree(nodes, val => parseInt(val, 10));
    expect(tree).toBeNull();
  });

  it('should build a simple tree with one node', () => {
    const nodes = ["1", "x", "x"][Symbol.iterator]();
    const tree = buildTree(nodes, val => parseInt(val, 10));
    expect(tree).not.toBeNull();
    expect(tree?.val).toBe(1);
    expect(tree?.left).toBeNull();
    expect(tree?.right).toBeNull();
  });

  it('should build a complete binary tree', () => {
    const nodes = ["1", "2", "x", "x", "3", "x", "x"][Symbol.iterator]();
    const tree = buildTree(nodes, val => parseInt(val, 10));
    expect(tree?.val).toBe(1);
    expect(tree?.left?.val).toBe(2);
    expect(tree?.right?.val).toBe(3);
    expect(tree?.left?.left).toBeNull();
    expect(tree?.left?.right).toBeNull();
    expect(tree?.right?.left).toBeNull();
    expect(tree?.right?.right).toBeNull();
  });

  it('should build a more complex tree', () => {
    const nodes = ["4", "2", "1", "x", "x", "3", "x", "x", "7", "6", "x", "x", "9", "x", "x"][Symbol.iterator]();
    const tree = buildTree(nodes, val => parseInt(val, 10));
    expect(tree?.val).toBe(4);
    expect(tree?.left?.val).toBe(2);
    expect(tree?.right?.val).toBe(7);
    expect(tree?.left?.left?.val).toBe(1);
    expect(tree?.left?.right?.val).toBe(3);
    expect(tree?.right?.left?.val).toBe(6);
    expect(tree?.right?.right?.val).toBe(9);
  });

  it('should use custom transform function', () => {
    const nodes = ["10", "20", "x", "x", "30", "x", "x"][Symbol.iterator]();
    const tree = buildTree(nodes, val => parseInt(val, 10) / 10);
    expect(tree?.val).toBe(1);
    expect(tree?.left?.val).toBe(2);
    expect(tree?.right?.val).toBe(3);
  });

  it('should work with splitWords', () => {
    const treeStr = "1 2 x x 3 x x";
    const nodes = splitWords(treeStr)[Symbol.iterator]();
    const tree = buildTree(nodes, val => parseInt(val, 10));
    expect(tree?.val).toBe(1);
    expect(tree?.left?.val).toBe(2);
    expect(tree?.right?.val).toBe(3);
  });
});