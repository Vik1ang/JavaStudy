package dp.subsequence.q53.maxSubArray;

// https://leetcode-cn.com/problems/maximum-subarray/

public class Solution1 {
    public int maxSubArray(int[] nums) {

        int n = nums.length;
        if (n == 0) {
            return 0;
        }

        int[] dp = new int[n];

        // base case
        // 第一个元素前面没有子数组
        dp[0] = nums[0];

        // 状态转移
        for (int i = 1; i < n; i++) {
            dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
        }

        // 得到nums的最大子数组
        int res = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            res = Math.max(res, dp[i]);
        }

        return res;
    }
}
