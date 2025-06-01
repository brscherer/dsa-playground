export function sortColors(nums: number[]): void {
  let zeroIndex = -1;
  let twoIndex = nums.length;
  let currentIndex = 0;

  while (currentIndex < twoIndex) {
    if (nums[currentIndex] === 0) {
      zeroIndex++;
      [nums[zeroIndex], nums[currentIndex]] = [
        nums[currentIndex],
        nums[zeroIndex],
      ];
      currentIndex++;
    } else if (nums[currentIndex] === 2) {
      twoIndex--;
      [nums[twoIndex], nums[currentIndex]] = [
        nums[currentIndex],
        nums[twoIndex],
      ];
    } else {
      currentIndex++;
    }
  }
}
