import { describe, it, expect } from "vitest";
import { largestMultipleOfThree } from "../largestMultipleOfThree";

describe("largestMultipleOfThree", () => {
  it("should return the largest multiple of three", () => {
    expect(largestMultipleOfThree([8, 1, 9])).toBe("981");
    expect(largestMultipleOfThree([8, 6, 7, 1, 0])).toBe("8760");
    expect(largestMultipleOfThree([1])).toBe("");
    expect(largestMultipleOfThree([0, 0, 0])).toBe("0");
  });


  it("should handle edge cases", () => {
    expect(largestMultipleOfThree([])).toBe("");
    expect(largestMultipleOfThree([0])).toBe("0");
    expect(largestMultipleOfThree([0, 0])).toBe("0");
    expect(largestMultipleOfThree([3, 6, 9])).toBe("963");
  });
});