import { describe, expect, it } from "vitest";
import { quickSort } from "../quickSort";

describe('quickSort', () => {
  it('should return an empty array when given an empty array', () => {
    const arr: number[] = [];
    expect(quickSort(arr)).toEqual([]);
  });

  it('should return the same array for a single element array', () => {
    const arr = [5];
    expect(quickSort(arr)).toEqual([5]);
  });

  it('should correctly sort an array of numbers', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    expect(quickSort(arr)).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  it('should correctly sort an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort a reverse-sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort an array with duplicate values', () => {
    const arr = [3, 3, 1, 1, 2, 2];
    expect(quickSort(arr)).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('should correctly sort an array of strings', () => {
    const arr = ['banana', 'apple', 'cherry', 'date'];
    expect(quickSort(arr)).toEqual(['apple', 'banana', 'cherry', 'date']);
  });

  it('should modify the original array', () => {
    const arr = [3, 1, 4, 2];
    const result = quickSort(arr);
    expect(result).toBe(arr); // Check if same reference
    expect(arr).toEqual([1, 2, 3, 4]); // Check if modified
  });

  it('should handle an array with negative numbers', () => {
    const arr = [3, -1, 4, -2, 0];
    expect(quickSort(arr)).toEqual([-2, -1, 0, 3, 4]);
  });

  it('should handle larger arrays', () => {
    const size = 100;
    const arr = Array.from({ length: size }, () => Math.floor(Math.random() * size));
    const sortedArr = [...arr].sort((a, b) => a - b);
    expect(quickSort(arr)).toEqual(sortedArr);
  });
});