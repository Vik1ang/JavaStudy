package stack.q503.nextGreaterElements;

// https://leetcode-cn.com/problems/next-greater-element-ii/

import java.util.Deque;
import java.util.LinkedList;

public class Solution2 {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        Deque<Integer> stack = new LinkedList<>();
        int[] res = new int[n];

        for (int i = n * 2 - 1; i >= 0; i--) {
            int num = nums[i % n];
            while (!stack.isEmpty() && stack.peek() <= num) {
                stack.pop();
            }
            res[i % n] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(num);
        }

        return res;
    }
}
