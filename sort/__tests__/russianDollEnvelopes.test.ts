import { describe, it, expect } from "vitest";
import { maxEnvelopes } from "../russianDollEnvelopes";

describe("maxEnvelopes", () => {
  it("should return 1 for a single envelope", () => {
    expect(maxEnvelopes([[5, 4]])).toBe(1);
  });

  it("should handle case where width is the same but height is different", () => {
    expect(
      maxEnvelopes([
        [1, 1],
        [1, 2],
        [1, 3],
      ])
    ).toBe(1);
  });

  it("should handle complex nesting case", () => {
    expect(
      maxEnvelopes([
        [5, 4],
        [6, 4],
        [6, 7],
        [2, 3],
      ])
    ).toBe(3);
  });

  it("should handle the LeetCode example", () => {
    expect(
      maxEnvelopes([
        [5, 4],
        [6, 4],
        [6, 7],
        [2, 3],
      ])
    ).toBe(3);
  });

  it("should handle another complex example", () => {
    expect(
      maxEnvelopes([
        [4, 5],
        [4, 6],
        [6, 7],
        [2, 3],
        [1, 1],
        [1, 2],
        [1, 3],
      ])
    ).toBe(4);
  });

  it("should handle case with no valid nesting", () => {
    expect(
      maxEnvelopes([
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(1);
  });
});
