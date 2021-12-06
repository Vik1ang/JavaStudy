package array.q1004.longestOnes;

// https://leetcode-cn.com/problems/max-consecutive-ones-iii/

public class Solution1 {
    public int longestOnes(int[] nums, int k) {
        int n = nums.length;
        int[] P = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            P[i] = P[i - 1] + (1 - nums[i - 1]);
        }

        int ans = 0;
        for (int right = 0; right < n; right++) {
            int left = binarySearch(P, P[right + 1] - k);
            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }

    private int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}
