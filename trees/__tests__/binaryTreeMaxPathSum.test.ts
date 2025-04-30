import { describe, test, expect } from 'vitest';
import maxPathSum from '../binaryTreeMaxPathSum';
import { TreeNode } from '../model';

describe('maxPathSum', () => {
  test('returns the maximum path sum for a simple tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    
    expect(maxPathSum(root)).toBe(6);
  });

  test('handles negative values', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(3);
    
    expect(maxPathSum(root)).toBe(4);
  });

  test('returns the value of a single node tree', () => {
    const root = new TreeNode(5);
    
    expect(maxPathSum(root)).toBe(5);
  });
});