package dp.stock.q188.maxProfit;

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/

public class Solution1 {
    public int maxProfit(int k, int[] prices) {
        int n = prices.length;
        if (n <= 0) {
            return 0;
        }
        int[][][] dp = new int[n][k + 1][2];

        for (int i = 0; i < n; i++) {
            for (int j = k; j >= 1; j--) {
                if (i - 1 < 0) {
                    dp[i][j][0] = 0;
                    dp[i][j][1] = -prices[i];
                    continue;
                }
                dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
                dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
            }
        }

        return dp[n - 1][k][0];
    }
}
