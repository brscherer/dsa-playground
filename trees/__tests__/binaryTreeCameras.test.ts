import { describe, it, expect } from 'vitest';
import { minCameraCover } from '../binaryTreeCameras';
import { TreeNode } from '../model';

describe('minCameraCover', () => {
  it('should return 0 for null tree', () => {
    expect(minCameraCover(null)).toBe(0);
  });

  it('should return 1 for a single node tree', () => {
    const root = new TreeNode(1);
    expect(minCameraCover(root)).toBe(1);
  });

  it('should handle a simple tree with root and left child', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(minCameraCover(root)).toBe(1);
  });

  it('should handle a simple tree with root and right child', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    expect(minCameraCover(root)).toBe(1);
  });

  it('should handle a tree with three nodes in a line', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    expect(minCameraCover(root)).toBe(1);
  });

  it('should handle a tree with two children', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(minCameraCover(root)).toBe(1);
  });
})