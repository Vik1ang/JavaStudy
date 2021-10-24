package dp.minFallingPathSum;

// https://leetcode-cn.com/problems/minimum-falling-path-sum/

public class Solution1 {
    public int minFallingPathSum(int[][] matrix) {

        int n = matrix.length;
        int res = Integer.MAX_VALUE;

        // 终点可能在最后一行中的任意一列
        for (int j = 0; j < n; j++) {
            res = Math.min(res, dp(matrix, n - 1, j));
        }

        return res;
    }

    private int dp(int[][] matrix, int i, int j) {

        // 检查非法索引
        if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
            // 返回一个特殊值
            return Integer.MAX_VALUE;
        }

        // base case
        if (i == 0) {
            return matrix[i][j];
        }

        // 状态转移
        return matrix[i][j] + min(dp(matrix, i - 1, j), dp(matrix, i - 1, j - 1), dp(matrix, i - 1, j + 1));
    }

    private int min(int a, int b, int c) {
        return Math.min(a, Math.min(b, c));
    }
}
