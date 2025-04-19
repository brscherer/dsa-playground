type Partition = { left: number; right: number };

function getPartitionValues(arr: number[], idx: number): Partition {
  return {
    left: idx > 0 ? arr[idx - 1] : Number.NEGATIVE_INFINITY,
    right: idx < arr.length ? arr[idx] : Number.POSITIVE_INFINITY,
  };
}

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const [smallArr, largeArr] =
    nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];

  const m = smallArr.length;
  const n = largeArr.length;
  const totalLength = m + n;
  const halfLength = Math.floor((totalLength + 1) / 2);

  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = halfLength - i;

    const { left: aLeft, right: aRight } = getPartitionValues(smallArr, i);
    const { left: bLeft, right: bRight } = getPartitionValues(largeArr, j);

    if (aLeft <= bRight && bLeft <= aRight) {
      if (totalLength % 2 === 1) {
        return Math.max(aLeft, bLeft);
      }
      return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
    }

    if (aLeft > bRight) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }

  throw new Error(
    "findMedianSortedArrays: both input arrays must be sorted in ascending order."
  );
}
