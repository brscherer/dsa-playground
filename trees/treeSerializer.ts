import { TreeNode } from "./model";

export function serializeDFS(root: TreeNode | null, res: string[]): void {
  if (!root) {
    res.push("x");
    return;
  }
  res.push(String(root.val));
  serializeDFS(root.left, res);
  serializeDFS(root.right, res);
}

export function serialize(root: TreeNode | null): string {
  const res: string[] = [];
  serializeDFS(root, res);
  return res.join(" ");
}

export function deserializeDFS(nodes: Iterator<string>): TreeNode | null {
  const val = nodes.next().value;
  if (val === "x") return null;
  const cur = new TreeNode(parseInt(val, 10));
  cur.left = deserializeDFS(nodes);
  cur.right = deserializeDFS(nodes);
  return cur;
}

export function deserialize(s: string): TreeNode | null {
  // create an iterator that returns a token each time we call `next`
  return deserializeDFS(s.split(" ")[Symbol.iterator]());
}

export function buildTree<T extends number | undefined>(nodes: Iterator<string>, f: (val: string) => T): TreeNode | null {
  const val = nodes.next().value;
  if (val === "x") return null;
  const left = buildTree(nodes, f);
  const right = buildTree(nodes, f);
  return new TreeNode(f(val), left, right);
}

export function* printTree(root: TreeNode | null): Generator<string> {
  if (!root) {
    yield "x";
  } else {
    yield String(root.val);
    yield* printTree(root.left);
    yield* printTree(root.right);
  }
}

export function splitWords(s: string): string[] {
  return s === "" ? [] : s.split(" ");
}
