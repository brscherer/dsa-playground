export class TreeAncestor {
  dp: number[][];
  maxAncestor: number;

  constructor(n: number, parent: number[]) {
    this.maxAncestor = Math.ceil(Math.log2(n));
    this.dp = new Array(n)
      .fill(0)
      .map(() => new Array(this.maxAncestor + 1).fill(-1));

    for (let i = 0; i < n; i++) {
      this.dp[i][0] = parent[i];
    }

    for (let j = 1; j <= this.maxAncestor; j++) {
      for (let i = 0; i < n; i++) {
        if (this.dp[i][j - 1] !== -1) {
          this.dp[i][j] = this.dp[this.dp[i][j - 1]][j - 1];
        }
      }
    }
  }

  getKthAncestor(node: number, k: number): number {
    for (let j = 0; j <= this.maxAncestor; j++) {
      if ((k & (1 << j)) !== 0) {
        node = this.dp[node][j];
        if (node === -1) {
          return -1;
        }
      }
    }
    return node;
  }
}
