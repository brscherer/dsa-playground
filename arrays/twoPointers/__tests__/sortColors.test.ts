import { describe, it, expect } from 'vitest';
import { sortColors } from '../sortColors';

describe('sortColors', () => {
  it('should sort mixed array of 0s, 1s and 2s', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it('should handle already sorted array', () => {
    const nums = [0, 0, 1, 1, 2, 2];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it('should handle reverse sorted array', () => {
    const nums = [2, 2, 1, 1, 0, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it('should handle array with only 0s', () => {
    const nums = [0, 0, 0, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 0, 0]);
  });

  it('should handle array with only 1s', () => {
    const nums = [1, 1, 1, 1];
    sortColors(nums);
    expect(nums).toEqual([1, 1, 1, 1]);
  });

  it('should handle array with only 2s', () => {
    const nums = [2, 2, 2, 2];
    sortColors(nums);
    expect(nums).toEqual([2, 2, 2, 2]);
  });

  it('should handle array with 0s and 1s only', () => {
    const nums = [1, 0, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1]);
  });

  it('should handle array with 1s and 2s only', () => {
    const nums = [1, 2, 1, 2];
    sortColors(nums);
    expect(nums).toEqual([1, 1, 2, 2]);
  });

  it('should handle array with 0s and 2s only', () => {
    const nums = [0, 2, 0, 2];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 2, 2]);
  });

  it('should handle empty array', () => {
    const nums: number[] = [];
    sortColors(nums);
    expect(nums).toEqual([]);
  });
});