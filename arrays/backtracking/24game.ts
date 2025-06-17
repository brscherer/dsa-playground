export function judgePoint24(nums: number[]): boolean {
  // Convert the input array of numbers to an array of doubles (in JS/TS, all numbers are floating point).
  const numList: number[] = nums.map((num) => num);
  // Initiate depth-first search to evaluate all possible results.
  return dfs(numList);
}

// Recursive function to perform depth-first search.
function dfs(numList: number[]): boolean {
  // If there are no numbers, we cannot perform any operations; return false.
  if (numList.length === 0) {
    return false;
  }
  // If there is only one number left, check if it's approximately 24.
  if (numList.length === 1) {
    return Math.abs(numList[0] - 24) < 1e-6;
  }
  // Try all pairs of numbers with all operations.
  for (let i = 0; i < numList.length; i++) {
    for (let j = i + 1; j < numList.length; j++) {
      // Check if the result of any operation on these two numbers
      // combined with the remaining numbers can result in 24.
      for (let operation = 0; operation < 6; operation++) {
        const nextList = getNextList(numList, i, j, operation);
        if (nextList.length > 0 && dfs(nextList)) {
          return true;
        }
      }
    }
  }
  // If no combination resulted in 24, return false.
  return false;
}

// Function to create a new list by applying an operation to a pair of numbers.
function getNextList(
  numList: number[],
  firstIndex: number,
  secondIndex: number,
  operation: number
): number[] {
  let nextNumList: number[] = [];
  // Add all numbers except the pair we're operating on.
  for (let k = 0; k < numList.length; k++) {
    if (k !== firstIndex && k !== secondIndex) {
      nextNumList.push(numList[k]);
    }
  }

  // Perform the operation based on the operation index.
  switch (operation) {
    case 0: // Addition
      nextNumList.push(numList[firstIndex] + numList[secondIndex]);
      break;
    case 1: // Subtraction (first - second)
      nextNumList.push(numList[firstIndex] - numList[secondIndex]);
      break;
    case 2: // Subtraction (second - first)
      nextNumList.push(numList[secondIndex] - numList[firstIndex]);
      break;
    case 3: // Multiplication
      nextNumList.push(numList[firstIndex] * numList[secondIndex]);
      break;
    case 4: // Division (first / second), ensure no division by zero.
      if (numList[secondIndex] !== 0) {
        nextNumList.push(numList[firstIndex] / numList[secondIndex]);
      } else {
        // If division by zero would occur, return an empty list.
        return [];
      }
      break;
    case 5: // Division (second / first), ensure no division by zero.
      if (numList[firstIndex] !== 0) {
        nextNumList.push(numList[secondIndex] / numList[firstIndex]);
      } else {
        // If division by zero would occur, return an empty list.
        return [];
      }
      break;
  }

  // Return the new list of numbers to continue the search.
  return nextNumList;
}
