import { describe, it, expect } from "vitest";
import { calculateMinimumHP } from "../dungeonGame";

describe("calculateMinimumHP", () => {
  it("should handle a simple 1x1 dungeon with positive value", () => {
    expect(calculateMinimumHP([[5]])).toBe(1);
  });

  it("should handle a simple 1x1 dungeon with negative value", () => {
    expect(calculateMinimumHP([[-5]])).toBe(6);
  });

  it("should handle a dungeon where the knight loses health", () => {
    expect(
      calculateMinimumHP([
        [-2, -3, 3],
        [-5, -10, 1],
        [10, 30, -5],
      ])
    ).toBe(7);
  });

  it("should handle a dungeon with all positive values", () => {
    expect(
      calculateMinimumHP([
        [1, 2],
        [3, 4],
      ])
    ).toBe(1);
  });

  it("should handle a dungeon with all negative values", () => {
    expect(
      calculateMinimumHP([
        [-1, -2],
        [-3, -4],
      ])
    ).toBe(8);
  });

  it("should handle a 1-row dungeon", () => {
    expect(calculateMinimumHP([[1, -2, 3, -4]])).toBe(3);
  });

  it("should handle a 1-column dungeon", () => {
    expect(calculateMinimumHP([[1], [-2], [3], [-4]])).toBe(3);
  });
});
