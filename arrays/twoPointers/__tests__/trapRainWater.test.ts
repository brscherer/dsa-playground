import { describe, it, expect } from "vitest";
import { trap } from "../trapRainWater";

describe("trap", () => {
  it("should return 0 for an empty array", () => {
    expect(trap([])).toBe(0);
  });

  it("should return 0 for an array with one element", () => {
    expect(trap([5])).toBe(0);
  });

  it("should return 0 when no water is trapped", () => {
    expect(trap([1, 2, 3, 4])).toBe(0);
    expect(trap([4, 3, 2, 1])).toBe(0);
  });

  it("should calculate trapped water for a typical case", () => {
    // Example from a common rain water trap problem.
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  it("should calculate trapped water for complex terrain", () => {
    // A known test case where the trapped water is 9.
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  it("should calculate trapped water for valley shape", () => {
    // Simple valley: water trapped equals the difference between the bounds.
    expect(trap([2, 0, 2])).toBe(2);
  });

  it("should calculate trapped water for plateau and multiple depressions", () => {
    // More complex landscape test.
    expect(trap([3, 0, 0, 2, 0, 4])).toBe(10);
  });
});