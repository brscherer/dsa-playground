import { describe, it, expect } from "vitest";
import { largestMultipleOfThree } from "../largestMultipleOfThree";

describe("largestMultipleOfThree", () => {
  it("should return the largest multiple of three", () => {
    expect(largestMultipleOfThree([8, 1, 9])).toBe("981");
    expect(largestMultipleOfThree([8, 6, 7, 1, 0])).toBe("8760");
    expect(largestMultipleOfThree([1])).toBe("");
    expect(largestMultipleOfThree([0, 0, 0])).toBe("0");
  });

  it("should handle removing digits to make sum divisible by 3", () => {
    expect(largestMultipleOfThree([8, 1, 9, 4])).toBe("984");
    expect(largestMultipleOfThree([8, 6, 7, 1, 0, 5])).toBe("87510");
    expect(largestMultipleOfThree([1, 1, 1])).toBe("111");
    expect(largestMultipleOfThree([1, 2])).toBe("");
  });

  it("should handle edge cases", () => {
    expect(largestMultipleOfThree([])).toBe("");
    expect(largestMultipleOfThree([0])).toBe("0");
    expect(largestMultipleOfThree([0, 0])).toBe("0");
    expect(largestMultipleOfThree([3, 6, 9])).toBe("963");
  });

  it("should handle removal of multiple digits with remainder 1", () => {
    expect(largestMultipleOfThree([1, 1, 1, 2])).toBe("21");
    expect(largestMultipleOfThree([4, 4, 1, 7])).toBe("744");
  });

  it("should handle removal of multiple digits with remainder 2", () => {
    expect(largestMultipleOfThree([2, 2, 2, 1])).toBe("21");
    expect(largestMultipleOfThree([5, 5, 2, 8])).toBe("855");
  });
});