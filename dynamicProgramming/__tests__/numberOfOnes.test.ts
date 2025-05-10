import { describe, it, expect } from 'vitest';
import { countDigitOne } from '../numberOfOnes';

describe('countDigitOne', () => {
  it('should return 0 for n = 0', () => {
    expect(countDigitOne(0)).toBe(0);
  });

  it('should return 1 for n = 1', () => {
    expect(countDigitOne(1)).toBe(1);
  });

  it('should return 5 for n = 13', () => {
    expect(countDigitOne(13)).toBe(6);
  });

  it('should return 21 for n = 100', () => {
    expect(countDigitOne(100)).toBe(21);
  });

  it('should return correct count for n = 1234', () => {
    expect(countDigitOne(1234)).toBe(689);
  });

  it('should handle large inputs like 9999', () => {
    expect(countDigitOne(9999)).toBe(4000);
  });
  
  it('should return correct value for powers of 10', () => {
    expect(countDigitOne(1000)).toBe(301);
    expect(countDigitOne(10000)).toBe(4001);
  });
});
