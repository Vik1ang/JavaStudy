package dp.minFallingPathSum;

// https://leetcode-cn.com/problems/minimum-falling-path-sum/

import java.util.Arrays;

public class Solution2 {

    int[][] memo;

    public int minFallingPathSum(int[][] matrix) {

        int n = matrix.length;
        int res = Integer.MAX_VALUE;

        // 初始化备忘录
        memo = new int[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(memo[i], Integer.MAX_VALUE);
        }

        // 终点
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

        // 查找备忘录
        if (memo[i][j] != Integer.MAX_VALUE) {
            return memo[i][j];
        }

        // 状态转移
        memo[i][j] = matrix[i][j] + min(dp(matrix, i - 1, j), dp(matrix, i - 1, j - 1), dp(matrix, i - 1, j + 1));

        return memo[i][j];
    }

    private int min(int a, int b, int c) {
        return Math.min(a, Math.min(b, c));
    }
}
