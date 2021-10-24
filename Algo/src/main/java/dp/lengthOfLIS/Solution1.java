package dp.lengthOfLIS;

// https://leetcode-cn.com/problems/longest-increasing-subsequence/

import java.util.Arrays;

public class Solution1 {
    public int lengthOfLIS(int[] nums) {
        int[] dp = new int[nums.length];

        // base case: dp数组全都初始化为1
        Arrays.fill(dp, 1);

        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        int res = 0;
        for (int i = 0; i < nums.length; i++) {
            res = Math.max(res, dp[i]);
        }

        // return Arrays.stream(dp).max().getAsInt();

        return res;
    }
}
