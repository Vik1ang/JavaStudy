package array.q1004.longestOnes;

// https://leetcode-cn.com/problems/max-consecutive-ones-iii/

public class Solution2 {
    public int longestOnes(int[] nums, int k) {
        int n = nums.length;
        int left = 0, lSum = 0, rSum = 0;
        int ans = 0;

        for (int right = 0; right < n; right++) {
            rSum += 1 - nums[right];
            while (lSum < rSum - k) {
                lSum += 1 - nums[left];
                left++;
            }
            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }
}
