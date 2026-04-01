class TrieNode {
  children: Map<string, TrieNode>;
  isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      let child = node.children.get(char);

      if (!child) {
        child = new TrieNode();
        node.children.set(char, child);
      }

      node = child;
    }

    node.isWord = true;
  }

  search(word: string): boolean {
    const node = this.findNode(word);
    return node?.isWord ?? false;
  }

  startsWith(prefix: string): boolean {
    return this.findNode(prefix) !== null;
  }

  private findNode(prefix: string): TrieNode | null {
    let node = this.root;

    for (const char of prefix) {
      const child = node.children.get(char);

      if (!child) {
        return null;
      }

      node = child;
    }

    return node;
  }
}
