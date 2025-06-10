import { describe, expect, it } from 'vitest';
import { maximalRectangle } from '../maximalRectangle';

describe('maximalRectangle', () => {
  it('should return 0 for an empty matrix', () => {
    expect(maximalRectangle([])).toBe(0);
  });

  it('should return 0 for a matrix with all zeros', () => {
    const matrix = [
      ['0', '0', '0'],
      ['0', '0', '0'],
      ['0', '0', '0']
    ];
    expect(maximalRectangle(matrix)).toBe(0);
  });

  it('should return the area of the whole matrix for a matrix with all ones', () => {
    const matrix = [
      ['1', '1', '1'],
      ['1', '1', '1'],
      ['1', '1', '1']
    ];
    expect(maximalRectangle(matrix)).toBe(9);
  });

  it('should handle a matrix with a single row', () => {
    const matrix = [
      ['1', '0', '1', '1', '1']
    ];
    expect(maximalRectangle(matrix)).toBe(3);
  });

  it('should handle a matrix with a single column', () => {
    const matrix = [
      ['1'],
      ['1'],
      ['0'],
      ['1']
    ];
    expect(maximalRectangle(matrix)).toBe(2);
  });
})