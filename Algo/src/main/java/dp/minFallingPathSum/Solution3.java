package dp.minFallingPathSum;

// https://leetcode-cn.com/problems/minimum-falling-path-sum/

public class Solution3 {
    public int minFallingPathSum(int[][] matrix) {

        int n = matrix.length;

        if (n == 1) {
            return matrix[0][0];
        }
        int[][] dp = new int[n][n];

        int res = Integer.MAX_VALUE;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0) {
                    dp[i][j] = matrix[i][j];
                } else if (j == 0) {
                    dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1]);
                } else if (j == n - 1) {
                    dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
                } else {
                    dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], Math.min(dp[i - 1][j - 1], dp[i - 1][j + 1]));
                }

                if (i == n - 1) {
                    res = Math.min(res, dp[i][j]);
                }
            }
        }

        return res;
    }


}
