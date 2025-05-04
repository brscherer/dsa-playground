function partition<T>(arr: T[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  
  swap(arr, i + 1, high);
  return i + 1;
}

function swap<T>(arr: T[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSortInternal<T>(arr: T[], low: number, high: number): void {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    
    quickSortInternal(arr, low, pivotIndex - 1);
    quickSortInternal(arr, pivotIndex + 1, high);
  }
}

export function quickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }
  
  quickSortInternal(arr, 0, arr.length - 1);
  return arr;
}
