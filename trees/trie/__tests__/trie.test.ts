import { describe, expect, it } from "vitest";
import { Trie } from "../trie";

describe("Trie", () => {
  it("stores and finds inserted words", () => {
    const trie = new Trie();

    trie.insert("cat");
    trie.insert("car");
    trie.insert("dog");

    expect(trie.search("cat")).toBe(true);
    expect(trie.search("car")).toBe(true);
    expect(trie.search("dog")).toBe(true);
  });

  it("does not treat prefixes as complete words unless inserted", () => {
    const trie = new Trie();

    trie.insert("cart");

    expect(trie.search("car")).toBe(false);
    expect(trie.startsWith("car")).toBe(true);
    expect(trie.search("cart")).toBe(true);
  });

  it("returns false for words and prefixes that do not exist", () => {
    const trie = new Trie();

    trie.insert("apple");

    expect(trie.search("app")).toBe(false);
    expect(trie.search("apply")).toBe(false);
    expect(trie.startsWith("aq")).toBe(false);
  });

  it("supports inserting the same word multiple times", () => {
    const trie = new Trie();

    trie.insert("repeat");
    trie.insert("repeat");

    expect(trie.search("repeat")).toBe(true);
    expect(trie.startsWith("rep")).toBe(true);
  });

  it("handles the empty string consistently", () => {
    const trie = new Trie();

    expect(trie.search("")).toBe(false);
    expect(trie.startsWith("")).toBe(true);

    trie.insert("");

    expect(trie.search("")).toBe(true);
    expect(trie.startsWith("")).toBe(true);
  });
});
