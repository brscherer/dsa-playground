function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  const m = nums1.length, n = nums2.length;
  let left = 0, right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const Aleft  = (i > 0) ? nums1[i - 1] : Number.NEGATIVE_INFINITY;
    const Aright = (i < m) ? nums1[i]     : Number.POSITIVE_INFINITY;
    const Bleft  = (j > 0) ? nums2[j - 1] : Number.NEGATIVE_INFINITY;
    const Bright = (j < n) ? nums2[j]     : Number.POSITIVE_INFINITY;

    // Found correct partition
    if (Aleft <= Bright && Bleft <= Aright) {
      if ((m + n) % 2 === 1) {
        return Math.max(Aleft, Bleft);
      }
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
    }

    // Move partition pointers
    if (Aleft > Bright) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }

  // Fallback (should never reach here for valid input)
  throw new Error("Input arrays are not sorted");
}
