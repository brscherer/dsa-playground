import { describe, it, expect } from "vitest";
import { validPalindrome } from "../validPalindrome";

describe("validPalindrome", () => {
  it.each([
    ["", true],
    ["a", true],
    ["aba", true],
    ["racecar", true],
    ["deeee", true],
    ["abca", true],
    ["ab", true],
    ["abc", false],
    ["abecbea", false],
    ["Aba", false],
  ])("validPalindrome(%j) should return %s", (input, expected) => {
    expect(validPalindrome(input)).toBe(expected);
  });
});
