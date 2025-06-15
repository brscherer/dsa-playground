import { describe, it, expect } from 'vitest';
import { isScramble } from '../scrambleString'; 

describe('isScramble', () => {
  it('returns true for identical strings', () => {
    expect(isScramble('great', 'great')).toBe(true);
  });

  it('returns true for scrambled strings', () => {
    expect(isScramble('great', 'rgeat')).toBe(true);
    expect(isScramble('abcde', 'caebd')).toBe(false);
    expect(isScramble('a', 'a')).toBe(true);
    expect(isScramble('abc', 'bca')).toBe(true);
  });

  it('returns false for strings with different characters', () => {
    expect(isScramble('abc', 'def')).toBe(false);
  });

  it('returns false for different lengths', () => {
    expect(isScramble('abc', 'ab')).toBe(false);
  });

  it('handles complex scramble with multiple valid splits', () => {
    expect(isScramble('great', 'eatrg')).toBe(true);
  });

  it('handles single character mismatch', () => {
    expect(isScramble('a', 'b')).toBe(false);
  });
});
