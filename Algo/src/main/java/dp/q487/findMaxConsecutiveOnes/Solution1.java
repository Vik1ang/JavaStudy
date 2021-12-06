package dp.q487.findMaxConsecutiveOnes;

// https://leetcode-cn.com/problems/max-consecutive-ones-ii/

public class Solution1 {
    public int findMaxConsecutiveOnes(int[] nums) {
        int n = nums.length;
        // 窗口的两个边界
        int left = 0, right = 0;
        int count = 0;
        int ans = 0;

        while (right < n) {
            // 只要右边界不越界, 而且0的个数小于等于1， 那么就扩充右边界
            while (right < n && count <= 1) {
                if (nums[right] == 0) {
                    count++;
                }
                right++;
                if (count <= 1) {
                    // 更新返回值
                    ans = Math.max(right - left, ans);
                }
            }

            // 向右缩小边界， 直到0的个数小于等于1
            while (left <= right && count > 1) {
                if (nums[left] == 0) {
                    count--;
                }
                left++;
            }
        }

        return ans;
    }
}
