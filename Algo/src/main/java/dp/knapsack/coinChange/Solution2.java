package dp.knapsack.coinChange;

// https://leetcode-cn.com/problems/coin-change/

import java.util.Arrays;

public class Solution2 {

    int[] memo;

    public int coinChange(int[] coins, int amount) {
        memo = new int[amount + 1];

        // dp 数组全部都初始化为特殊值
        Arrays.fill(memo, -666);

        return dp(coins, amount);
    }

    private int dp(int[] coins, int amount) {

        if (amount == 0) {
            return 0;
        }

        if (amount < 0) {
            return -1;
        }

        int res = Integer.MAX_VALUE;

        for (int coin : coins) {
            // 计算子问题的结果
            int subProblem = dp(coins, amount - coin);
            // 子问题无解则跳过
            if (subProblem == -1) {
                continue;
            }

            res = Math.min(res, subProblem + 1);
        }

        // 把计算结果存入备忘录
        memo[amount] = (res == Integer.MAX_VALUE) ? -1 : res;

        return memo[amount];

    }

}
