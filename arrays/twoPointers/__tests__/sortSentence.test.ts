import { describe, it, expect } from 'vitest';
import { sortSentence } from '../sortSentence';

describe('sortSentence', () => {
  it('should correctly sort a simple sentence with numbers', () => {
    expect(sortSentence('is2 sentence4 This1 a3')).toBe('This is a sentence');
  });

  it('should handle a single word with number', () => {
    expect(sortSentence('Word1')).toBe('Word');
  });

  it('should handle words with same length but different positions', () => {
    expect(sortSentence('Myself4 Me1 I2 and3')).toBe('Me I and Myself');
  });

  it('should correctly sort words with numbers 1-9', () => {
    expect(sortSentence('nine9 eight8 seven7 six6 five5 four4 three3 two2 one1')).toBe('one two three four five six seven eight nine');
  });

  it('should handle words with special characters', () => {
    expect(sortSentence('world!2 Hello,1')).toBe('Hello, world!');
  });

  it('should maintain proper spacing between words', () => {
    expect(sortSentence('sentence4 a3 is2 This1')).toBe('This is a sentence');
  });
});