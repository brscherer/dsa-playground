export function isScramble(s1: string, s2: string): boolean {
  const n = s1.length;

  // 3D memoization table: dp[i][j][k] stores whether s1[i..i+k) is a scramble of s2[j..j+k)
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Array(n + 1).fill(-1))
  );

  /**
   * Recursively checks if s1[i..i+len) is a scramble of s2[j..j+len)
   */
  const isScrambleRec = (i: number, j: number, len: number): boolean => {
    // Return memoized result if available
    if (dp[i][j][len] !== -1) {
      return dp[i][j][len] === 1;
    }

    // Base case: compare single characters
    if (len === 1) {
      dp[i][j][len] = s1[i] === s2[j] ? 1 : 0;
      return dp[i][j][len] === 1;
    }

    // Try all possible splits
    for (let split = 1; split < len; ++split) {
      // Case 1: No swap
      if (
        isScrambleRec(i, j, split) &&
        isScrambleRec(i + split, j + split, len - split)
      ) {
        dp[i][j][len] = 1;
        return true;
      }

      // Case 2: Swap
      if (
        isScrambleRec(i + split, j, len - split) &&
        isScrambleRec(i, j + len - split, split)
      ) {
        dp[i][j][len] = 1;
        return true;
      }
    }

    // No valid scramble found
    dp[i][j][len] = 0;
    return false;
  };

  return isScrambleRec(0, 0, n);
}
