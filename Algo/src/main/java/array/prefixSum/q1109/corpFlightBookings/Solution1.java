package array.prefixSum.q1109.corpFlightBookings;

// https://leetcode-cn.com/problems/corporate-flight-bookings/

public class Solution1 {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] diff = new int[n];

        for (int[] booking : bookings) {
            int first = booking[0] - 1;
            int last = booking[1] - 1;
            int seats = booking[2];
            diff[first] += seats;
            if (last + 1 < diff.length) {
                diff[last + 1] -= seats;
            }
        }

        int[] res = new int[diff.length];
        res[0] = diff[0];

        for (int i = 1; i < diff.length; i++) {
            res[i] = res[i - 1] + diff[i];
        }

        return res;
    }
}
