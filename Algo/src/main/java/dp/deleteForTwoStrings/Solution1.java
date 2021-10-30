package dp.deleteForTwoStrings;

// https://leetcode-cn.com/problems/delete-operation-for-two-strings/

// 题目让我们计算将两个字符串变得相同的最少删除次数
// 删除的结果就是他们两的最长公共子序列

public class Solution1 {
    public int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(
                            dp[i - 1][j],
                            dp[i][j - 1]
                    );
                }
            }
        }

        int lcs = dp[m][n];

        return m - lcs + n - lcs;
    }
}
