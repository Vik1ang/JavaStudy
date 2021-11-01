package dp.minimumDeleteSum;

// https://leetcode-cn.com/problems/minimum-ascii-delete-sum-for-two-strings/

import java.util.Arrays;

public class Solution1 {

    int[][] memo;

    public int minimumDeleteSum(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();

        memo = new int[m][n];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }

        return dp(s1, 0, s2, 0);
    }

    // 定义: 将 s1[i..] 和 s2[j..] 删除成相同字符串
    // 最小的ASCII码之和为 dp(s1, i, s2, j)
    private int dp(String s1, int i, String s2, int j) {
        int res = 0;

        // base case
        if (i == s1.length()) {
            // 如果 s1 到头了, 那么 s2 剩下的都得删除
            for (; j < s2.length(); j++) {
                res += s2.charAt(j);
            }
            return res;
        }

        if (j == s2.length()) {
            // 如果 s2 到头了, 那么 s1 剩下的都得删除
            for (; i < s1.length(); i++) {
                res += s1.charAt(i);
            }
            return res;
        }

        if (memo[i][j] != -1) {
            return memo[i][j];
        }

        if (s1.charAt(i) == s2.charAt(j)) {
            memo[i][j] = dp(s1, i + 1, s2, j + 1);
        } else {
            memo[i][j] = Math.min(
                    s1.charAt(i) + dp(s1, i + 1, s2, j),
                    s2.charAt(j) + dp(s1, i, s2, j + 1)
            );
        }

        return memo[i][j];
    }
}
