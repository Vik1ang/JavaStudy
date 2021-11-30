package array.prefixSum.q1094.carPooling;

// https://leetcode-cn.com/problems/car-pooling/

public class Solution1 {
    public boolean carPooling(int[][] trips, int capacity) {

        // 最多有 1000 个车站
        int[] diff = new int[1001];

        for (int[] trip : trips) {
            // 乘客数量
            int num = trip[0];
            // 第 trip[1] 站乘客上车
            int start = trip[1];
            // 第 trip[2] 站乘客已经下车，
            // 即乘客在车上的区间是 [trip[1], trip[2] - 1]
            int end = trip[2] - 1;

            // 进行区间操作
            diff[start] += num;
            if (end + 1 < diff.length) {
                diff[end + 1] -= num;
            }
        }

        int[] res = new int[diff.length];
        res[0] = diff[0];
        for (int i = 1; i < diff.length; i++) {
            res[i] = res[i - 1] + diff[i];
        }

        // 客车自始至终都不应该超载
        for (int i = 0; i < res.length; i++) {
            if (capacity < res[i]) {
                return false;
            }
        }

        return true;
    }
}
