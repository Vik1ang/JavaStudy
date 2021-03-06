package dp.subsequence.q509.fibonacciNumber;

// https://leetcode-cn.com/problems/fibonacci-number/

public class Solution3 {
    public int fib(int n) {
        if (n == 0) {
            return 0;
        }
        int[] dp = new int[n + 1];

        // base case
        dp[0] = 0;
        dp[1] = 1;

        // 状态转移
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}
