export function getSubarrayBeauty(nums: number[], windowSize: number, beautyRank: number): number[] {
  const numLength: number = nums.length;

  const count: number[] = new Array(101).fill(0);
  const result: number[] = new Array(numLength - windowSize + 1);

  for (let i = 0; i < windowSize; ++i) {
    count[nums[i] + 50]++;
  }

  const calculateBeauty = (rank: number): number => {
    let sum = 0;
    for (let i = 0; i < 50; ++i) {
      sum += count[i];
      if (sum >= rank) {
        return i - 50;
      }
    }
    return 0;
  };

  result[0] = calculateBeauty(beautyRank);

  for (let i = windowSize, j = 1; i < numLength; ++i, ++j) {
    count[nums[i] + 50]++;
    count[nums[i - windowSize] + 50]--;
    result[j] = calculateBeauty(beautyRank);
  }

  return result;
}
