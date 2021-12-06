package array.q1004.longestOnes;

// https://leetcode-cn.com/problems/max-consecutive-ones-iii/

public class Solution5 {
    public int longestOnes(int[] nums, int k) {
        int n = nums.length;
        int left = 0, right = 0;
        int count = 0;
        int ans = 0;

        while (right < n) {
            while (right < n && count <= k) {
                if (nums[right] == 0) {
                    count++;
                }
                right++;
                if (count <= k) {
                    ans = Math.max(ans, right - left);
                }
            }

            while (left <= right && count > k) {
                if (nums[left] == 0) {
                    count--;
                }
                left++;
            }
        }
        return ans;
    }
}
