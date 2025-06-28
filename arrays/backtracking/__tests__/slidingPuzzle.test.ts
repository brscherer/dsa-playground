import { describe, it, expect } from "vitest";
import { slidingPuzzle } from "../slidingPuzzle";

describe("slidingPuzzle", () => {
  it("solves a simple 1-move puzzle", () => {
    const board = [
      [1, 2, 3],
      [4, 0, 5],
    ];
    expect(slidingPuzzle(board)).toBe(1);
  });

  it("solves a 4-move puzzle", () => {
    const board = [
      [4, 1, 2],
      [5, 0, 3],
    ];
    expect(slidingPuzzle(board)).toBe(5);
  });

  it("solves a 0-move puzzle (already solved)", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 0],
    ];
    expect(slidingPuzzle(board)).toBe(0);
  });

  it("returns -1 for an unsolvable puzzle", () => {
    const board = [
      [1, 2, 3],
      [5, 4, 0],
    ];
    expect(slidingPuzzle(board)).toBe(-1);
  });

  it("solves a puzzle in multiple steps", () => {
    const board = [
      [3, 2, 4],
      [1, 5, 0],
    ];
    expect(slidingPuzzle(board)).toBe(14);
  });
});
