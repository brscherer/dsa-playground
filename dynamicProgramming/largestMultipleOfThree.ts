export function largestMultipleOfThree(digits: number[]): string {
  const digitCounts = new Array<number>(10).fill(0);
  let sum = 0;
  
  for (const digit of digits) {
    digitCounts[digit]++;
    sum += digit;
  }

  const remainder = sum % 3;
  
  if (remainder !== 0) {
    const removeRemainder = (target: 1 | 2): boolean => {
      for (const possibleDigit of [target, target + 3, target + 6]) {
        if (digitCounts[possibleDigit] > 0) {
          digitCounts[possibleDigit]--;
          return true;
        }
      }
      return false;
    };

    if (remainder === 1) {
      if (!removeRemainder(1) && 
        (!removeRemainder(2) || !removeRemainder(2))) {
        return '';
      }
    } else {
      if (!removeRemainder(2) && 
        (!removeRemainder(1) || !removeRemainder(1))) {
        return '';
      }
    }
  }

  const result: string[] = [];
  for (let digit = 9; digit >= 0; digit--) {
    if (digitCounts[digit] > 0) {
      result.push(digit.toString().repeat(digitCounts[digit]));
    }
  }

  const answer = result.join('');
  
  return answer[0] === '0' ? '0' : answer;
}