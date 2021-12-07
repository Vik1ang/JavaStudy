package dp.subsequence.q64.minPathSum;

// https://leetcode-cn.com/problems/minimum-path-sum/

public class Solution1 {
    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        // 计算从左上角走到右下角的最小路径和
        return dp(grid, m - 1, n - 1);
    }

    private int dp(int[][] grid, int i, int j) {
        // base case
        if (i == 0 && j == 0) {
            return grid[0][0];
        }

        // 如果索引出界，返回一个很大的值
        // 保存在取 min 的时候不会被取到
        if (i < 0 || j < 0) {
            return Integer.MAX_VALUE;
        }

        // 左边和上面的最小路径和加上 grid[i][j]
        // 就是到达 (i, j) 的最小路径和
        return Math.min(
                dp(grid, i - 1, j),
                dp(grid, i, j - 1)
        ) + grid[i][j];
    }
}
