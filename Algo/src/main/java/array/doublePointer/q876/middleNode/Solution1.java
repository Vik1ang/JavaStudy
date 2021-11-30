package array.doublePointer.q876.middleNode;

// https://leetcode-cn.com/problems/middle-of-the-linked-list/

import dataStructure.ListNode;

public class Solution1 {
    public ListNode middleNode(ListNode head) {
        ListNode fast, slow;
        fast = slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // slow 就在中间位置
        return slow;
    }
}
