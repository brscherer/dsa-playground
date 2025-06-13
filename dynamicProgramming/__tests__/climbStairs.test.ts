import { describe, it, expect } from 'vitest';
import { climbStairs } from '../climbStairs';

describe('climbStairs', () => {
    it('should return 1 for n=0', () => {
        expect(climbStairs(0)).toBe(1);
    });

    it('should return 1 for n=1', () => {
        expect(climbStairs(1)).toBe(1);
    });

    it('should return 2 for n=2', () => {
        expect(climbStairs(2)).toBe(2);
    });

    it('should return 3 for n=3', () => {
        expect(climbStairs(3)).toBe(3);
    });

    it('should return 5 for n=4', () => {
        expect(climbStairs(4)).toBe(5);
    });

    it('should return 8 for n=5', () => {
        expect(climbStairs(5)).toBe(8);
    });

    it('should return 13 for n=6', () => {
        expect(climbStairs(6)).toBe(13);
    });

    it('should handle larger inputs', () => {
        expect(climbStairs(10)).toBe(89);
        expect(climbStairs(20)).toBe(10946);
    });

    it('should maintain performance for larger inputs', () => {
        // This should execute quickly even for larger n
        expect(climbStairs(30)).toBe(1346269);
    });
});