import { describe, it, expect } from 'vitest';
import { canCross } from '../frogJump';

describe('canCross', () => {
  it('should return true for [0,1,3,5,6,8,12,17]', () => {
    expect(canCross([0,1,3,5,6,8,12,17])).toBe(true);
  });

  it('should return false for [0,1,2,3,4,8,9,11]', () => {
    expect(canCross([0,1,2,3,4,8,9,11])).toBe(false);
  });

  it('should return true for [0,1]', () => {
    expect(canCross([0,1])).toBe(true);
  });

  it('should return false for [0,2]', () => {
    expect(canCross([0,2])).toBe(false);
  });

  it('should return true for [0,1,3,6,10,13,15,18]', () => {
    expect(canCross([0,1,3,6,10,13,15,18])).toBe(true);
  });

  it('should return true for [0]', () => {
    expect(canCross([0])).toBe(true);
  });

  it('should return false for [0,1,4,5,6]', () => {
    expect(canCross([0,1,4,5,6])).toBe(false);
  });
});