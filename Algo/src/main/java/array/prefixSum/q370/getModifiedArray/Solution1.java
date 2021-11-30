package array.prefixSum.q370.getModifiedArray;

// https://leetcode-cn.com/problems/range-addition/

public class Solution1 {
    public int[] getModifiedArray(int length, int[][] updates) {
        int[] diff = new int[length];

        for (int[] update : updates) {
            int start = update[0];
            int end = update[1];
            int val = update[2];
            diff[start] += val;
            if (end + 1 < diff.length) {
                diff[end + 1] -= val;
            }
        }

        int[] res = new int[diff.length];
        res[0] = diff[0];
        for (int i = 1; i < diff.length; i++) {
            res[i] = res[i - 1] + diff[i];
        }

        return res;
    }
}
