export class BookMyShow {
  private readonly segSum: number[];
  private readonly segMax: number[];
  private readonly used: number[];

  constructor(private readonly n: number, private readonly m: number) {
    this.segSum = new Array(4 * n).fill(0);
    this.segMax = new Array(4 * n).fill(0);
    this.used = new Array(n).fill(0);
    this.build(1, 0, n - 1);
  }

  private build(idx: number, left: number, right: number): void {
    if (left === right) {
      this.segSum[idx] = this.segMax[idx] = this.m;
      return;
    }
    
    const mid = Math.floor((left + right) / 2);
    this.build(idx * 2, left, mid);
    this.build(idx * 2 + 1, mid + 1, right);
    this.pull(idx);
  }

  private pull(idx: number): void {
    this.segSum[idx] = this.segSum[idx * 2] + this.segSum[idx * 2 + 1];
    this.segMax[idx] = Math.max(this.segMax[idx * 2], this.segMax[idx * 2 + 1]);
  }

  // Point update at row i: decrement by val
  private update(idx: number, left: number, right: number, i: number, val: number): void {
    if (left === right) {
      this.used[i] += val;
      const remainingSeats = this.m - this.used[i];
      this.segSum[idx] = remainingSeats;
      this.segMax[idx] = remainingSeats;
      return;
    }
    
    const mid = Math.floor((left + right) / 2);
    if (i <= mid) {
      this.update(idx * 2, left, mid, i, val);
    } else {
      this.update(idx * 2 + 1, mid + 1, right, i, val);
    }
    this.pull(idx);
  }

  // Find leftmost row in [queryLeft..queryRight] with segMax >= k
  private queryMaxRow(
    idx: number, 
    left: number, 
    right: number, 
    queryLeft: number, 
    queryRight: number, 
    k: number
  ): number {
    if (queryLeft > right || queryRight < left || this.segMax[idx] < k) {
      return -1;
    }
    
    if (left === right) {
      return left;
    }
    
    const mid = Math.floor((left + right) / 2);
    const leftResult = this.queryMaxRow(idx * 2, left, mid, queryLeft, queryRight, k);
    
    return leftResult !== -1 ? leftResult : 
      this.queryMaxRow(idx * 2 + 1, mid + 1, right, queryLeft, queryRight, k);
  }

  // Sum of free seats in [queryLeft..queryRight]
  private querySum(
    idx: number, 
    left: number, 
    right: number, 
    queryLeft: number, 
    queryRight: number
  ): number {
    if (queryLeft > right || queryRight < left) {
      return 0;
    }
    
    if (queryLeft <= left && right <= queryRight) {
      return this.segSum[idx];
    }
    
    const mid = Math.floor((left + right) / 2);
    return this.querySum(idx * 2, left, mid, queryLeft, queryRight) +
           this.querySum(idx * 2 + 1, mid + 1, right, queryLeft, queryRight);
  }

  gather(k: number, maxRow: number): number[] {
    const row = this.queryMaxRow(1, 0, this.n - 1, 0, maxRow, k);
    
    if (row === -1) {
      return [];
    }
    
    const startSeat = this.used[row];
    this.update(1, 0, this.n - 1, row, k);
    
    return [row, startSeat];
  }

  scatter(k: number, maxRow: number): boolean {
    if (this.querySum(1, 0, this.n - 1, 0, maxRow) < k) {
      return false;
    }
    
    let remaining = k;
    let row = this.queryMaxRow(1, 0, this.n - 1, 0, maxRow, 1);
    
    while (remaining > 0 && row !== -1) {
      const availableSeats = this.m - this.used[row];
      const seatsToTake = Math.min(availableSeats, remaining);
      
      this.update(1, 0, this.n - 1, row, seatsToTake);
      remaining -= seatsToTake;
      
      if (remaining === 0) {
        break;
      }
      
      row = this.queryMaxRow(1, 0, this.n - 1, 0, maxRow, 1);
    }
    
    return true;
  }
}