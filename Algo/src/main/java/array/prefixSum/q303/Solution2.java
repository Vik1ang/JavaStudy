package array.prefixSum.q303;

// https://leetcode-cn.com/problems/range-sum-query-immutable/

public class Solution2 {
    private int[] preSum;

    public Solution2(int[] nums) {
        // preSum[0] = 0, 便于计算累加积
        preSum = new int[nums.length + 1];
        // 计算 nums 的累加积
        for (int i = 1; i < preSum.length; i++) {
            preSum[i] = preSum[i - 1] + nums[i - 1];
        }
    }

    public int sumRange(int left, int right) {
        return preSum[right + 1] - preSum[left];
    }
}
