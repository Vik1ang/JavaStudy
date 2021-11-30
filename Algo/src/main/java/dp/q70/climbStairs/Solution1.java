package dp.q70.climbStairs;

// https://leetcode-cn.com/problems/climbing-stairs/

import java.util.Arrays;

public class Solution1 {
    public int climbStairs(int n) {
        int[] dp = new int[n + 1];

        int[] knapsack = new int[]{1, 2};

        for (int i = 1; i <= n; i++) {
            for (int val : knapsack) {
                if (i - val < 0) {
                    continue;
                }
                dp[i] += dp[i - val] + 1;
            }
        }

        return dp[n] - dp[n - 1];
    }
}
