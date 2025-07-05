import { describe, it, expect } from 'vitest'
import { generateBitonicSequence } from '../bitonicSequence'

describe('generateBitonicSequence', () => {
  it('returns [-1] when N exceeds the maximum possible length', () => {
    // maxLen = 2*(3-1)+1 = 5, so N=6 is impossible
    expect(generateBitonicSequence(6, 1, 3)).toEqual([-1])
    // also impossible when L == R and N > 1
    expect(generateBitonicSequence(2, 5, 5)).toEqual([-1])
  })

  it('builds the full bitonic sequence when N equals maxLen', () => {
    // maxLen = 2*(4-1)+1 = 7
    expect(generateBitonicSequence(7, 1, 4)).toEqual([1, 2, 3, 4, 3, 2, 1])
  })

  it('generates a shorter bitonic subsequence when N < maxLen', () => {
    // example from documentation: N=5, L=3, R=10
    // descCount = min(8, 4) = 4 => [10,9,8,7]; then unshift 9 => [9,10,9,8,7]
    expect(generateBitonicSequence(5, 3, 10)).toEqual([9, 10, 9, 8, 7])

    // another small example: N=3, L=0, R=2 => [2,1] then unshift 1 => [1,2,1]
    expect(generateBitonicSequence(3, 0, 2)).toEqual([1, 2, 1])
  })

  it('handles the minimal case N = 1', () => {
    // when L == R, no value can be prepended => empty array
    expect(generateBitonicSequence(1, 5, 5)).toEqual([])
    // when R - L >= 1, one value gets prepended
    // descCount = 0, then unshift R-1 => [4]
    expect(generateBitonicSequence(1, 2, 5)).toEqual([4])
  })

  it('works with negative ranges', () => {
    // L = -2, R = 2, N = 5
    // descCount = min(5,4) = 4 => [2,1,0,-1]; then unshift 1 => [1,2,1,0,-1]
    expect(generateBitonicSequence(5, -2, 2)).toEqual([1, 2, 1, 0, -1])
  })

  it('generates correct sequence for N = 2 and L < R', () => {
    // descCount = min(3,1) = 1 => [7]; then unshift 6 => [6,7]
    expect(generateBitonicSequence(2, 5, 7)).toEqual([6, 7])
  })
})
