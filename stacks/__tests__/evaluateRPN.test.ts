import { describe, it, expect } from "vitest";
import { evalRPN } from "../evaluateRPN";

describe("evalRPN", () => {
  it("should evaluate a simple addition", () => {
    expect(evalRPN(["2", "3", "+"])).toBe(5);
  });

  it("should evaluate a simple subtraction", () => {
    expect(evalRPN(["5", "3", "-"])).toBe(2);
  });

  it("should evaluate a simple multiplication", () => {
    expect(evalRPN(["4", "5", "*"])).toBe(20);
  });

  it("should evaluate a simple division", () => {
    expect(evalRPN(["6", "3", "/"])).toBe(2);
  });

  it("should handle division with negative result", () => {
    expect(evalRPN(["10", "-3", "/"])).toBe(-3);
  });
});
