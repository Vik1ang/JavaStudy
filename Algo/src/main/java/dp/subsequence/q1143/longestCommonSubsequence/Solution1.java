package dp.subsequence.q1143.longestCommonSubsequence;

// https://leetcode-cn.com/problems/longest-common-subsequence/

import java.util.Arrays;

public class Solution1 {

    int[][] memo;

    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();

        memo = new int[m][n];

        for (int[] row : memo) {
            // 备忘录值为-1, 代表未曾计算
            Arrays.fill(row, -1);
        }

        return dp(text1, 0, text2, 0);
    }

    // 定义: 计算 s1[i..] 和 s2[j..] 的最长公共子序列长度
    private int dp(String s1, int i, String s2, int j) {
        // base case
        if (i == s1.length() || j == s2.length()) {
            return 0;
        }

        // 如果之前计算过, 直接返回
        if (memo[i][j] != -1) {
            return memo[i][j];
        }

        if (s1.charAt(i) == s2.charAt(j)) {
            // s1[i] 和 s2[j] 必然在LCS中
            memo[i][j] = 1 + dp(s1, i + 1, s2, j + 1);
        } else {
            // s1[i] 和 s2[j] 至少有一个不在LCS中
            memo[i][j] = Math.max(
                    dp(s1, i + 1, s2, j),
                    dp(s1, i, s2, j + 1)
            );
        }

        return memo[i][j];
    }
}
