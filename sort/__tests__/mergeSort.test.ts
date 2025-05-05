import { describe, it, expect } from "vitest";
import { merge, mergeSort } from "../mergeSort";

describe("merge function", () => {
  it("should merge two sorted halves of an array", () => {
    const arr = [4, 7, 1, 3];
    merge(arr, 0, 1, 3);
    expect(arr).toEqual([1, 3, 4, 7]);
  });

  it("should handle arrays with duplicate elements", () => {
    const arr = [5, 8, 2, 5];
    merge(arr, 0, 1, 3);
    expect(arr).toEqual([2, 5, 5, 8]);
  });

  it("should merge subarrays correctly", () => {
    const arr = [3, 6, 9, 1, 4, 8];
    merge(arr, 0, 2, 5);
    expect(arr).toEqual([1, 3, 4, 6, 8, 9]);
  });

  it("should handle already sorted arrays", () => {
    const arr = [1, 3, 5, 7];
    merge(arr, 0, 1, 3);
    expect(arr).toEqual([1, 3, 5, 7]);
  });

  it("should handle arrays with a single element", () => {
    const arr = [5];
    merge(arr, 0, 0, 0);
    expect(arr).toEqual([5]);
  });

  it("should handle empty arrays", () => {
    const arr: number[] = [];
    merge(arr, 0, 0, 0);
    expect(arr).toEqual([]);
  });

  it("should work with the full mergeSort algorithm", () => {
    const arr = [38, 27, 43, 3, 9, 82, 10];
    mergeSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([3, 9, 10, 27, 38, 43, 82]);
  });
});