package dp.subsequence.q509.fibonacciNumber;

// https://leetcode-cn.com/problems/fibonacci-number/

public class Solution1 {
    public int fib(int n) {

        if (n == 1 || n == 2) {
            return 1;
        }

        return fib(n - 1) + fib(n - 2);

    }
}
