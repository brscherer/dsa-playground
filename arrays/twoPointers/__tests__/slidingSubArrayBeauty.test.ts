import { describe, it, expect } from 'vitest';
import { getSubarrayBeauty } from '../slidingSubArrayBeauty';

describe('findMedianSortedArrays', () => {

  it('should handle when beautyRank is 1', () => {
    expect(getSubarrayBeauty([1, -1, -3, -2, 3], 3, 1)).toEqual([-3, -3, -3]);
  });

  it('should return 0 when there are not enough negative numbers', () => {
    expect(getSubarrayBeauty([1, 2, 3, 4, 5], 3, 1)).toEqual([0, 0, 0]);
  });

  it('should handle window size equal to array length', () => {
    expect(getSubarrayBeauty([-1, -2, -3, -4, -5], 5, 3)).toEqual([-3]);
  });

  it('should handle large negative numbers', () => {
    expect(getSubarrayBeauty([-50, -45, -30, -25, -20], 3, 2)).toEqual([-45, -30, -25]);
  });

  it('should handle a mix of positive and negative numbers', () => {
    expect(getSubarrayBeauty([-3, 1, 2, -3, 0, -3], 2, 1)).toEqual([-3, 0, -3, -3, -3]);
  });

  it('should return 0 when all numbers in window are non-negative', () => {
    expect(getSubarrayBeauty([5, 3, 1, 0, 2, 4], 3, 1)).toEqual([0, 0, 0, 0]);
  });

  it('should work with the minimum window size of 1', () => {
    expect(getSubarrayBeauty([-2, -1, 0, 1, 2], 1, 1)).toEqual([-2, -1, 0, 0, 0]);
  });
});