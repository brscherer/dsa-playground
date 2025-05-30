export function trap(height: number[]): number {
  let total = 0;
  let l = 0
  let r = height.length - 1;
  let lmax = 0
  let rmax = height[r];

  while (l < r) {
    if (height[l] <= height[r]) {
      if (height[l] < lmax) {
        total += lmax - height[l];
      } else {
        lmax = height[l];
      }
      l++;
    } else {
      if (height[r] < rmax) {
        total += rmax - height[r];
      } else {
        rmax = height[r];
      }
      r--;
    }
  }
  return total;
}
