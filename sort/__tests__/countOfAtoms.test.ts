import { describe, it, expect } from "vitest";
import { countOfAtoms } from "../countOfAtoms";

describe("countOfAtoms", () => {
  it("should count single atoms correctly", () => {
    expect(countOfAtoms("H")).toBe("H");
    expect(countOfAtoms("O")).toBe("O");
  });

  it("should count atoms with numbers correctly", () => {
    expect(countOfAtoms("H2")).toBe("H2");
    expect(countOfAtoms("O2")).toBe("O2");
    expect(countOfAtoms("H2O")).toBe("H2O");
  });

  it("should handle atoms with parentheses correctly", () => {
    expect(countOfAtoms("(H2O)")).toBe("H2O");
    expect(countOfAtoms("(H2O)2")).toBe("H4O2");
  });

  it("should handle nested parentheses correctly", () => {
    expect(countOfAtoms("((H2O)2)")).toBe("H4O2");
    expect(countOfAtoms("((H2O)2)3")).toBe("H12O6");
  });

  it("should sort atoms alphabetically", () => {
    expect(countOfAtoms("Mg(OH)2")).toBe("H2MgO2");
    expect(countOfAtoms("K4(ON(SO3)2)2")).toBe("K4N2O14S4");
  });

  it("should handle complex chemical formulas", () => {
    expect(countOfAtoms("H2O")).toBe("H2O");
    expect(countOfAtoms("Mg(OH)2")).toBe("H2MgO2");
    expect(countOfAtoms("K4(ON(SO3)2)2")).toBe("K4N2O14S4");
    expect(countOfAtoms("Be32")).toBe("Be32");
  });

  it("should handle formulas with multiple occurrences of the same atom", () => {
    expect(countOfAtoms("H2O2")).toBe("H2O2");
    expect(countOfAtoms("H2(H2O)3")).toBe("H8O3");
  });
});
