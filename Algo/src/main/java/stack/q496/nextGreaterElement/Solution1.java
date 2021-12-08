package stack.q496.nextGreaterElement;

// https://leetcode-cn.com/problems/next-greater-element-i/

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;

public class Solution1 {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = nums2.length - 1; i >= 0 ; i--) {
            int num = nums2[i];
            while (!stack.isEmpty() && num >= stack.peek()) {
                stack.pop();
            }
            hashMap.put(num, stack.isEmpty() ? -1 : stack.peek());
            stack.push(num);
        }

        int[] res = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            res[i] = hashMap.get(nums1[i]);
        }

        return res;
    }
}
