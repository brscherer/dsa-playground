import { describe, it, expect } from 'vitest';
import { findMedianSortedArrays } from '../medianOfTwoSortedArrays'

describe('findMedianSortedArrays', () => {
	it('should find the median of two arrays of equal length', () => {
		expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5);
	});

	it('should find the median of two arrays of different lengths', () => {
		expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
	});

	it('should find the median when one array is empty', () => {
		expect(findMedianSortedArrays([], [1, 2, 3])).toBe(2);
	});

	it('should handle arrays with repeated elements', () => {
		expect(findMedianSortedArrays([1, 2, 2], [3, 3, 4])).toBe(2.5);
	});

	it('should handle negative numbers', () => {
		expect(findMedianSortedArrays([-5, -3, -1], [-2, 0, 2])).toBe(-1.5);
	});

	it('should handle large arrays', () => {
		const arr1 = Array.from({ length: 1000 }, (_, i) => i * 2);
		const arr2 = Array.from({ length: 1000 }, (_, i) => i * 2 + 1);
		expect(findMedianSortedArrays(arr1, arr2)).toBe(999.5);
	});

	it('should handle arrays with different ranges', () => {
		expect(findMedianSortedArrays([1, 2], [10, 20, 30, 40, 50])).toBe(20);
	});

	it('should handle odd total length', () => {
		expect(findMedianSortedArrays([1, 3, 5], [2, 4])).toBe(3);
	});

	it('should handle even total length', () => {
		expect(findMedianSortedArrays([1, 2, 3], [4, 5, 6])).toBe(3.5);
	});
});