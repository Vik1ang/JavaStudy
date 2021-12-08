package unclassified.q252.canAttendMeetings;

// https://leetcode-cn.com/problems/meeting-rooms/

public class Solution2 {
    public boolean canAttendMeetings(int[][] intervals) {

        for (int i = 0; i < intervals.length; i++) {
            for (int j = i + 1; j < intervals.length; j++) {
                if (overlap(intervals[i], intervals[j])) {
                    return false;
                }
            }
        }

        return true;
    }

    private boolean overlap(int[] i1, int[] i2) {
        return (Math.min(i1[1], i2[1]) > Math.max(i1[0], i2[0]));
    }
}
