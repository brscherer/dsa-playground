import { describe, it, expect } from "vitest";
import { maxTaskAssign } from "../maxTaskAssign";

describe("maxTaskAssign", () => {
  it("should handle empty arrays", () => {
    expect(maxTaskAssign([], [], 0, 0)).toBe(0);
  });

  it("should handle no pills available", () => {
    expect(maxTaskAssign([1, 2, 3], [1, 2, 3], 0, 5)).toBe(3);
    expect(maxTaskAssign([3, 4, 5], [1, 2], 0, 5)).toBe(0);
    expect(maxTaskAssign([1, 2], [3, 4, 5], 0, 5)).toBe(2);
  });

  it("should handle zero pill strength", () => {
    expect(maxTaskAssign([1, 2, 3], [1, 2, 3], 3, 0)).toBe(3);
    expect(maxTaskAssign([3, 4, 5], [1, 2], 3, 0)).toBe(0);
  });

  it("should assign tasks when all workers can complete all tasks without pills", () => {
    expect(maxTaskAssign([1, 2, 3], [3, 4, 5], 0, 0)).toBe(3);
  });

  it("should assign tasks when no worker can complete any task even with pills", () => {
    expect(maxTaskAssign([10, 20, 30], [1, 2, 3], 3, 1)).toBe(0);
  });

  it("should assign tasks when some workers need pills to complete tasks", () => {
    expect(maxTaskAssign([3, 4, 5], [1, 2, 3], 2, 3)).toBe(3);
  });

  it("should calculate max assignment with limited pills", () => {
    expect(maxTaskAssign([5, 4, 3, 2, 1], [1, 2, 3, 4, 5], 2, 3)).toBe(5);
    expect(maxTaskAssign([5, 4, 3, 2, 1], [1, 2, 3], 2, 3)).toBe(3);
  });

  it("should handle more pills than workers", () => {
    expect(maxTaskAssign([5, 4, 3], [1, 2], 5, 3)).toBe(2);
  });

  it("should handle complex scenarios", () => {
    expect(maxTaskAssign([7, 6, 5, 4, 3], [2, 3, 5], 1, 3)).toBe(3);
    
    expect(maxTaskAssign([8, 7, 5], [2, 3, 4, 5, 6], 2, 4)).toBe(3);
  });
});
