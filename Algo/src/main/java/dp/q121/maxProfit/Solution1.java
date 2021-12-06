package dp.q121.maxProfit;

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

public class Solution1 {
    public int maxProfit(int[] prices) {
        int res = 0;

        for (int i = 1; i < prices.length; i++) {
            for (int j = 0; j < i; j++) {
                res = Math.max(res, prices[i] - prices[j]);
            }
        }

        return res;
    }
}
