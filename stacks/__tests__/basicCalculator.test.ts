import { describe, it, expect } from "vitest";
import { calculate } from "../basicCalculator";

describe("calculate", () => {
  it("should return 0 for an empty string", () => {
    expect(calculate("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(calculate("42")).toBe(42);
    expect(calculate("0")).toBe(0);
  });

  it("should handle basic addition and subtraction", () => {
    expect(calculate("1+1")).toBe(2);
    expect(calculate("2-1")).toBe(1);
    expect(calculate("3+2-1")).toBe(4);
    expect(calculate("10-5-3")).toBe(2);
  });

  it("should handle multi-digit numbers", () => {
    expect(calculate("123+456")).toBe(579);
    expect(calculate("999-888")).toBe(111);
  });

  it("should ignore spaces in the expression", () => {
    expect(calculate("1 + 1")).toBe(2);
    expect(calculate(" 3 + 5 - 2 ")).toBe(6);
  });

  it("should handle parentheses", () => {
    expect(calculate("(1+2)")).toBe(3);
    expect(calculate("2+(1+2)")).toBe(5);
    expect(calculate("(2+3)-(4+5)")).toBe(-4);
  });

  it("should handle nested parentheses", () => {
    expect(calculate("(1+(2+3))")).toBe(6);
    expect(calculate("((1+2)+3)")).toBe(6);
    expect(calculate("(1+2)+(3+4)")).toBe(10);
    expect(calculate("((1+2)+(3+4))")).toBe(10);
  });

  it("should handle negative numbers", () => {
    expect(calculate("-1")).toBe(-1);
    expect(calculate("-(1)")).toBe(-1);
    expect(calculate("-(1+2)")).toBe(-3);
    expect(calculate("5+(-3)")).toBe(2);
  });
});
