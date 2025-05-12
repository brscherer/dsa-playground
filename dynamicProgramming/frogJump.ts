export function canCross(stones: number[]): boolean {
  const jumpMap = new Map<number, Set<number>>();

  for (const stone of stones) {
    jumpMap.set(stone, new Set<number>());
  }
  jumpMap.get(0)!.add(0);

  for (const stone of stones) {
    const jumpSizes = jumpMap.get(stone)!;

    for (const jumpSize of jumpSizes) {
      for (
        let nextJumpSize = jumpSize - 1;
        nextJumpSize <= jumpSize + 1;
        nextJumpSize++
      ) {
        if (nextJumpSize > 0 && jumpMap.has(stone + nextJumpSize)) {
          jumpMap.get(stone + nextJumpSize)!.add(nextJumpSize);
        }
      }
    }
  }

  return jumpMap.get(stones[stones.length - 1])!.size > 0;
}
