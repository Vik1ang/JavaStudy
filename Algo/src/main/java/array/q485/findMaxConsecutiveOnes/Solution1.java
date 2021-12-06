package array.q485.findMaxConsecutiveOnes;

// https://leetcode-cn.com/problems/max-consecutive-ones/

public class Solution1 {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxCount = 0;
        int count = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                count = 0;
            }
        }

        maxCount = Math.max(maxCount, count);
        return maxCount;
    }
}
