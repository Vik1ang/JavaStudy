package array.prefixSum.q303.sumRange;

// https://leetcode-cn.com/problems/range-sum-query-immutable/

public class Solution1 {

    private int[] nums;

    public Solution1(int[] nums) {
        this.nums = nums;
    }

    public int sumRange(int left, int right) {
        int res = 0;
        for (int i = left; i <= right; i++) {
            res += nums[i];
        }
        return res;
    }
}
