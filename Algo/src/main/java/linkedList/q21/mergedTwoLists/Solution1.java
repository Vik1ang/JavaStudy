package linkedList.q21.mergedTwoLists;

// https://leetcode-cn.com/problems/merge-two-sorted-lists/

import linkedList.ListNode;

public class Solution1 {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {

        // 虚拟头结点
        ListNode dummy = new ListNode(-1);
        ListNode p = dummy;

        ListNode p1 = l1;
        ListNode p2 = l2;

        while (p1 != null && p2 != null) {
            if (p1.val > p2.val) {
                p.next = p2;
                p2 = p2.next;
            } else {
                p.next = p1;
                p1 = p1.next;
            }

            // p 指针不断向前
            p = p.next;
        }

        if (p1 != null) {
            p.next = p1;
        }

        if (p2 != null) {
            p.next = p2;
        }

        return dummy.next;
    }
}
