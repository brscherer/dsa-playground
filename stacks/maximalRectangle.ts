export function maximalRectangle(matrix: string[][]): number {
    if (matrix.length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Update heights array
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        // Calculate the maximal rectangle area for the current row (histogram)
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
}

function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    let maxArea = 0;
    heights.push(0); // Sentinel to ensure all heights are processed
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()!];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    
    return maxArea;
}