import { describe, it, expect } from "vitest";
import { canBeValid } from "../checkParenthesis";

describe("canBeValid", () => {
  it("should return false for odd-length strings", () => {
    expect(canBeValid("(", "1")).toBe(false);
    expect(canBeValid("())", "101")).toBe(false);
  });

  it("should return true for valid unlocked strings", () => {
    expect(canBeValid("()()", "1111")).toBe(true);
    expect(canBeValid("(())", "1111")).toBe(true);
  });

  it("should handle strings with unlocked characters", () => {
    expect(canBeValid(")(", "00")).toBe(true);
    expect(canBeValid("()", "00")).toBe(true);
    expect(canBeValid("())(", "0000")).toBe(true);
  });

  it("should return false for invalid locked strings", () => {
    expect(canBeValid("())(", "1111")).toBe(false);
    expect(canBeValid("))((", "1111")).toBe(false);
  });

  it("should handle mixed locked and unlocked characters", () => {
    expect(canBeValid("()))((", "110000")).toBe(true);
    expect(canBeValid("()()()", "111111")).toBe(true);
    expect(canBeValid("(()))", "110000")).toBe(false);
    expect(canBeValid("(()))", "110001")).toBe(false);
    expect(canBeValid("((()))", "111111")).toBe(true);
    expect(canBeValid("((())", "110000")).toBe(false);
  });
  it("should handle long strings", () => {
    const longString = "(".repeat(100000) + ")".repeat(100000);
    const locked = "1".repeat(200000);
    expect(canBeValid(longString, locked)).toBe(true);
  });
  it("should handle edge cases with empty strings", () => {
    expect(canBeValid("", "")).toBe(true);
    expect(canBeValid("(", "0")).toBe(false);
    expect(canBeValid(")", "0")).toBe(false);
  });
  it("should handle strings with only locked characters", () => {
    expect(canBeValid("()", "11")).toBe(true);
    expect(canBeValid(")(", "11")).toBe(false);
    expect(canBeValid("((()))", "111111")).toBe(true);
    expect(canBeValid("(()))", "110000")).toBe(false);
  });
});
