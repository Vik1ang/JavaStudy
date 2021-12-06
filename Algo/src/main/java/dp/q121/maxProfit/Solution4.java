package dp.q121.maxProfit;

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

public class Solution4 {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        // base case: dp[-1][0] = 0, dp[-1][1] = -infinity
        int dp_i_0 = 0, dp_i_1 = Integer.MIN_VALUE;

        for (int i = 0; i <n ; i++) {
            dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
            dp_i_1 = Math.max(dp_i_1, -prices[i]);
        }
        return dp_i_0;
    }
}
