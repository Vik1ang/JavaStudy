package stack.q503.nextGreaterElements;

// https://leetcode-cn.com/problems/next-greater-element-ii/

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class Solution1 {
    public int[] nextGreaterElements(int[] nums) {
        Deque<Integer> stack = new ArrayDeque<>();

        int n = nums.length;
        int[] res = new int[n];
        Arrays.fill(res, -1);

        for (int i = 0; i < n * 2 - 1; i++) {
            while (!stack.isEmpty() && nums[stack.peek()] < nums[i % n]) {
                res[stack.pop()] = nums[i % n];
            }
            stack.push(i % n);
        }

        return res;
    }
}
