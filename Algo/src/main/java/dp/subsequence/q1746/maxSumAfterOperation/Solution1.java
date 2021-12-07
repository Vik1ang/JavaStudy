package dp.subsequence.q1746.maxSumAfterOperation;

// https://leetcode-cn.com/problems/maximum-subarray-sum-after-one-operation/

public class Solution1 {
    public int maxSumAfterOperation(int[] nums) {
        int n = nums.length;
        int[][] dp = new int[n][2];

        // base case
        dp[0][0] = nums[0];
        dp[0][1] = nums[0] * nums[0];

        int res = dp[0][1];
        for (int i = 1; i < n; i++) {
            dp[i][0] = Math.max(dp[i - 1][0] + nums[i], nums[i]);
            dp[i][1] = Math.max(
                    Math.max(dp[i - 1][1] + nums[i], dp[i - 1][0] + nums[i] * nums[i]),
                    nums[i] * nums[i]
            );

            res = Math.max(res, dp[i][1]);
        }


        return res;
    }
}
