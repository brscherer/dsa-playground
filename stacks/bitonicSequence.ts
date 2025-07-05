// bitonicSequence.ts

/**
 * Generates a bitonic sequence of length N using integers in [L, R].
 * A bitonic sequence strictly increases then strictly decreases.
 * If it's not possible, returns [-1].
 */
export function generateBitonicSequence(
  N: number,
  L: number,
  R: number
): number[] {
  const maxLen = 2 * (R - L) + 1
  if (N > maxLen) {
    return [-1]
  }

  const result: number[] = []
  // Build the descending part from R down to at most L,
  // but use at most N-1 elements so we can prepend later.
  const descCount = Math.min(R - L + 1, N - 1)
  for (let i = 0; i < descCount; i++) {
    result.push(R - i)
  }

  // Prepend the remaining elements from R-1 down to L
  let offset = 1
  while (result.length < N && R - offset >= L) {
    result.unshift(R - offset)
    offset++
  }

  return result
}
