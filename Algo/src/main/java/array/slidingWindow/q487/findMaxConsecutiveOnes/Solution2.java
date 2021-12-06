package array.slidingWindow.q487.findMaxConsecutiveOnes;

// https://leetcode-cn.com/problems/max-consecutive-ones-ii/

public class Solution2 {
    public int findMaxConsecutiveOnes(int[] nums) {
        int n = nums.length;
        int[][] dp = new int[n][2];

        int max = 1;

        // base case
        dp[0][0] = nums[0];
        dp[0][1] = 1;

        for (int i = 1; i < n; i++) {
            if (nums[i] == 0) {
                dp[i][0] = 0;
                dp[i][1] = dp[i - 1][0] + 1;
            } else {
                dp[i][0] = dp[i - 1][0] + 1;
                dp[i][1] = dp[i - 1][1] + 1;
            }

            max = Math.max(max, dp[i][1]);
        }

        return max;
    }
}
