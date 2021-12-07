package dp.subsequence.q64.minPathSum;

// https://leetcode-cn.com/problems/minimum-path-sum/

import java.util.Arrays;

public class Solution2 {
    public int[][] memo;

    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        // 构造备忘录， 初始值全部设为 -1
        memo = new int[m][n];

        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }

        return dp(grid, m - 1, n - 1);
    }

    private int dp(int[][] grid, int i, int j) {
        // base case
        if (i == 0 && j == 0) {
            return grid[0][0];
        }
        if (i < 0 || j < 0) {
            return Integer.MAX_VALUE;
        }

        if (memo[i][j] != -1) {
            return memo[i][j];
        }

        memo[i][j] = Math.min(
                dp(grid, i - 1, j),
                dp(grid, i, j - 1)
        ) + grid[i][j];

        return memo[i][j];
    }
}
