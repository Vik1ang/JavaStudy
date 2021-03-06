package dp.q152.maxProduct;

// https://leetcode-cn.com/problems/maximum-product-subarray/

public class Solution1 {
    public int maxProduct(int[] nums) {
        int[] dp = new int[nums.length];

        int max = Integer.MIN_VALUE;
        int imax = 1;
        int imin = 1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < 0) {
                int temp = imax;
                imax = imin;
                imin = temp;
            }

            imax = Math.max(imax * nums[i], nums[i]);
            imin = Math.min(imin * nums[i], nums[i]);

            max = Math.max(max, imax);
        }

        return max;
    }
}
