package unclassified.q253.minMeetingRooms;

// https://leetcode-cn.com/problems/meeting-rooms-ii/

import java.util.Arrays;

public class Solution1 {
    public int minMeetingRooms(int[][] intervals) {
        int n = intervals.length;

        int[] begin = new int[n];
        int[] end = new int[n];

        // 把左端点和右端点分别拿出来
        for (int i = 0; i < n; i++) {
            begin[i] = intervals[i][0];
            end[i] = intervals[i][1];
        }

        // 排序后就是图中的红点
        Arrays.sort(begin);
        // 排序后就是图中的绿点
        Arrays.sort(end);

        int count = 0;
        int res = 0, i = 0, j = 0;
        while (i < n && j < n) {
            if (begin[i] < end[j]) {
                // 扫描到一个红点
                count++;
                i++;
            } else {
                // 扫描到一个绿点
                count--;
                j++;
            }
            // 记录扫描过程中的最大值
            res = Math.max(res, count);
        }

        return res;
    }
}
