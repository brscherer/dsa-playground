import { describe, it, expect } from "vitest";
import { maxProfit } from "../bestTimeToBuyStock";

describe("maxProfit", () => {
  it("should return 0 when prices array is empty", () => {
    expect(maxProfit(2, [])).toBe(0);
  });
  it("should return 0 when k is 0", () => {
    expect(maxProfit(0, [3, 2, 6, 5, 0, 3])).toBe(0);
  });
  it("should return the maximum profit for unlimited transactions", () => {
    expect(maxProfit(10, [3, 2, 6, 5, 0, 3])).toBe(7);
  });
  it("should return the maximum profit for k = 2", () => {
    expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toBe(7);
  });
  it("should return the maximum profit for k = 1", () => {
    expect(maxProfit(1, [3, 2, 6, 5, 0, 3])).toBe(4);
  });
  it("should return 0 when prices are in descending order", () => {
    expect(maxProfit(2, [7, 6, 4, 3, 1])).toBe(0);
  });
  it("should return the correct profit for a single transaction", () => {
    expect(maxProfit(1, [1, 2, 3, 4, 5])).toBe(4);
  });
  it("should handle edge case with one price", () => {
    expect(maxProfit(2, [5])).toBe(0);
  });
  it("should handle edge case with two prices", () => {
    expect(maxProfit(2, [1, 5])).toBe(4);
  });
  it("should handle large k with small prices array", () => {
    expect(maxProfit(100, [1, 2, 3, 4, 5])).toBe(4);
  });
});
