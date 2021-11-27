package dp.subsequence.q72.editDistance;

// https://leetcode-cn.com/problems/edit-distance/

public class Solution1 {
    public int minDistance(String word1, String word2) {
        return dp(word1, word2, word1.length() - 1, word2.length() - 1);
    }

    // 定义: dp(i, j) 返回 s1[0..i] 和 s2[0..j] 的最小编辑距离
    private int dp(String word1, String word2, int i, int j) {

        // base case
        if (i == -1) {
            return j + 1;
        }
        if (j == -1) {
            return i + 1;
        }

        if (word1.charAt(i) == word2.charAt(j)) {
            return dp(word1, word2, i - 1, j - 1); // 啥都不做
        } else {
            return min(
                    dp(word1, word2, i, j - 1) + 1, // 插入
                    dp(word1, word2, i - 1, j) + 1, // 删除
                    dp(word1, word2, i - 1, j - 1) + 1 // 替换
            );
        }
    }

    private int min(int a, int b, int c) {
        return Math.min(a, Math.min(b, c));
    }
}
