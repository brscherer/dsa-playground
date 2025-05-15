function compareEnvelopes(env1: number[], env2: number[]): boolean {
  return env1[0] < env2[0] || (env1[0] === env2[0] && env1[1] > env2[1]);
}

function binarySearch(sequence: number[], targetHeight: number): number {
  let start = 0;
  let end = sequence.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sequence[mid] < targetHeight) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}

export function maxEnvelopes(envelopes: number[][]): number {
  envelopes.sort((a, b) => (compareEnvelopes(a, b) ? -1 : 1));
  const heightSequence: number[] = [envelopes[0][1]];

  for (let i = 1; i < envelopes.length; ++i) {
    const currentHeight = envelopes[i][1];

    if (currentHeight > heightSequence[heightSequence.length - 1]) {
      heightSequence.push(currentHeight);
    } else {
      const indexToReplace = binarySearch(heightSequence, currentHeight);
      heightSequence[indexToReplace] = currentHeight;
    }
  }
  return heightSequence.length;
}
