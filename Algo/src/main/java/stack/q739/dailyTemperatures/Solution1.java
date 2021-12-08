package stack.q739.dailyTemperatures;

// https://leetcode-cn.com/problems/daily-temperatures/

import java.util.Deque;
import java.util.LinkedList;

public class Solution1 {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] res = new int[n];
        Deque<Integer> stack = new LinkedList<>();

        for (int i = temperatures.length - 1; i >= 0; i--) {
            int temperature = temperatures[i];
            while (!stack.isEmpty() && temperatures[stack.peek()] <= temperature) {
                stack.pop();
            }
            res[i] = stack.isEmpty() ? 0 : (stack.peek() - i);
            stack.push(i);
        }

        return res;
    }
}
