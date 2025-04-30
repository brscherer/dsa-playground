import { TreeNode } from "./model";

export default function maxPathSum(root: TreeNode | null): number {
  let maxPathSumValue = -Infinity;
  
  function maxPathSumDfs(node: TreeNode | null): number {
    if (!node) return 0;
  
    const leftMax = Math.max(0, maxPathSumDfs(node.left));
    const rightMax = Math.max(0, maxPathSumDfs(node.right));
  
    maxPathSumValue = Math.max(maxPathSumValue, leftMax + rightMax + node.val);
  
    return Math.max(leftMax, rightMax) + node.val;
  }
  
  maxPathSumDfs(root);
  return maxPathSumValue;
}
