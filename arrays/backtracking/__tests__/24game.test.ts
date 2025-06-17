import { describe, it, expect } from 'vitest';
import { judgePoint24 } from '../24game';

describe('judgePoint24', () => {
  it('should return true for input [8, 1, 6, 6]', () => {
    expect(judgePoint24([8, 1, 6, 6])).toBe(true);
  });

  it('should return true for input [4, 1, 8, 7]', () => {
    expect(judgePoint24([4, 1, 8, 7])).toBe(true);
  });

  it('should return false for input [1, 1, 1, 1]', () => {
    expect(judgePoint24([1, 1, 1, 1])).toBe(false);
  });

  it('should return true for input [3, 3, 8, 8]', () => {
    expect(judgePoint24([3, 3, 8, 8])).toBe(true);
  });

  it('should return false for input [2, 2, 2, 2]', () => {
    expect(judgePoint24([2, 2, 2, 2])).toBe(false);
  });

  it('should return true for input [1, 3, 4, 6]', () => {
    expect(judgePoint24([1, 3, 4, 6])).toBe(true);
  });

  it('should return true for input [7, 7, 3, 3]', () => {
    expect(judgePoint24([7, 7, 3, 3])).toBe(true);
  });

  it('should return true for input [1, 2, 1, 8]', () => {
    expect(judgePoint24([1, 2, 1, 8])).toBe(true);
  });

  it('should return false for input with impossible configuration [0, 0, 0, 0]', () => {
    expect(judgePoint24([0, 0, 0, 0])).toBe(false);
  });
});
