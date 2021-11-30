package array.prefixSum.q560.subarraySum;

// https://leetcode-cn.com/problems/subarray-sum-equals-k/

public class Solution1 {
    public int subarraySum(int[] nums, int k) {
        int n = nums.length;

        // 构造前缀和
        int[] preSum = new int[n + 1];

        for (int i = 0; i < n; i++) {
            preSum[i + 1] = preSum[i] + nums[i];
        }

        int res = 0;

        // 穷举所有子数组
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                // 子数组 nums[j..i-1] 的元素和
                if (preSum[i] - preSum[j] == k) {
                    res++;
                }
            }
        }

        return res;
    }
}
