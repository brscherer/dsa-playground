import { describe, it, expect } from 'vitest';
import { maxCoins } from '../burstBaloons';

describe('maxCoins', () => {
    it('should return 0 for empty array', () => {
        expect(maxCoins([])).toBe(0);
    });

    it('should return the value itself for single balloon', () => {
        expect(maxCoins([5])).toBe(5);
        expect(maxCoins([1])).toBe(1);
    });

    it('should return correct value for two balloons', () => {
        expect(maxCoins([3, 1])).toBe(6);
        expect(maxCoins([1, 5])).toBe(10);
    });

    it('should return correct value for three balloons', () => {
        expect(maxCoins([3, 1, 5])).toBe(35);
    });

    it('should return correct value for [3,1,5,8]', () => {
        expect(maxCoins([3, 1, 5, 8])).toBe(167);
    });

    it('should return correct value for [1,5]', () => {
        expect(maxCoins([1, 5])).toBe(10);
    });

    it('should return correct value for [7,9,8,0,7,1,3,5,5,2,3]', () => {
        expect(maxCoins([7,9,8,0,7,1,3,5,5,2,3])).toBe(1654);
    });

    it('should handle zeros in the array', () => {
        expect(maxCoins([0,1,2,0])).toBe(4);
    });
});