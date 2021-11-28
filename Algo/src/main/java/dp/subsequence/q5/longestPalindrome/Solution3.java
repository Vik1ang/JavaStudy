package dp.subsequence.q5.longestPalindrome;

// https://leetcode-cn.com/problems/longest-palindromic-substring/

public class Solution3 {
    public String longestPalindrome(String s) {
        if (s == null || s.length() < 1) {
            return "";
        }

        int len = s.length();
        int maxLen = 1;
        int begin = 0;

        char[] charArray = s.toCharArray();

        // 枚举所有长度大于1的子串
        for (int i = 0; i < len - 1; i++) {
            for (int j = i + 1; j < len ; j++) {
                if (j - i + 1 > maxLen && validPalindromic(charArray, i, j)) {
                    maxLen = j - i + 1;
                    begin = i;
                }
            }
        }

        return s.substring(begin, begin + maxLen);
    }

    private boolean validPalindromic(char[] charArray, int left, int right) {
        while (left < right) {
            if (charArray[left] != charArray[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
