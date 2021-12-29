package unclassified.q253.minMeetingRooms;

// https://leetcode-cn.com/problems/meeting-rooms-ii/

import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Solution {
    public int minMeetingRooms(int[][] intervals) {
        if (intervals.length == 0) {
            return 0;
        }

        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(intervals.length, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1 - o2;
            }
        });

        priorityQueue.add(intervals[0][1]);

        Arrays.sort(intervals, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[0] - o2[0];
            }
        });

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= priorityQueue.peek()) {
                priorityQueue.poll();
            }
            priorityQueue.add(intervals[i][1]);
        }

        return priorityQueue.size();
    }
}
