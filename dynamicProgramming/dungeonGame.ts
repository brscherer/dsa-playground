export function calculateMinimumHP(dungeon: number[][]): number {
    const m: number = dungeon.length;
    const n: number = dungeon[0].length;
    let dp: number[][] = Array.from(Array(m + 1), () => new Array(n + 1).fill(Infinity));

    dp[m][n - 1] = 1; 
    dp[m - 1][n] = 1; 

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]);
        }
    }

    return dp[0][0];
}