package dp.subsequence.q1230.probabilityOfHeads;

// https://leetcode-cn.com/problems/toss-strange-coins/

public class Solution1 {
    public double probabilityOfHeads(double[] prob, int target) {
        int n = prob.length;
        double[][] dp = new double[n + 1][target + 1];
        
        // base case
        dp[0][0] = 1;
        for (int i = 1; i <= n; i++) {
            dp[i][0] = dp[i - 1][0] * (1 - prob[i - 1]);
        }

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= target; j++) {
                dp[i][j] = dp[i - 1][j - 1] * prob[i - 1] + dp[i - 1][j] * (1 - prob[i - 1]);
            }
        }

        return dp[n][target];
    }
}
