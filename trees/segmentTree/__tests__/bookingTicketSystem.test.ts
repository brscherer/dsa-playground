import { describe, it, expect } from 'vitest';
import { BookMyShow } from '../bookingTicketSystem'; // Adjust import path as needed


describe('BookMyShow', () => {
  it('scatter should return true when enough seats are available across rows', () => {
    const bms = new BookMyShow(3, 4);
    const result = bms.scatter(10, 2);
    expect(result).toBe(true);
  });

  it('scatter should return false when not enough seats are available', () => {
    const bms = new BookMyShow(2, 5);
    const result = bms.scatter(11, 1);
    expect(result).toBe(false);
  });

  it('should properly track remaining seats after operations', () => {
    const bms = new BookMyShow(2, 5);
    bms.gather(4, 0);
    bms.gather(2, 0);
    bms.scatter(5, 1);
    const result = bms.scatter(5, 1);
    expect(result).toBe(false);
  });
  
  it('should properly track remaining seats after more complex operations', () => {
    const bms = new BookMyShow(3, 999999999);
    const result = bms.scatter(1000000000, 2);
    expect(result).toBe(true);
  });

  it.only('should handle interleaved gather and scatter operations', () => {
    const bms = new BookMyShow(5, 9);
    bms.gather(10, 1);
    bms.scatter(3, 3);
    bms.gather(9, 1);
    bms.gather(10, 2);
    const result = bms.gather(2, 0);
    expect(result).toEqual([0, 3]);
  });
});