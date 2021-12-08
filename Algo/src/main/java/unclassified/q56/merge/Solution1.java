package unclassified.q56.merge;

// https://leetcode-cn.com/problems/merge-intervals/

import java.util.ArrayList;
import java.util.Arrays;

public class Solution1 {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> {
            return a[0] - b[0];
        });
        ArrayList<int[]> res = new ArrayList<>();
        res.add(intervals[0]);

        for (int i = 1; i < intervals.length; i++) {
            int[] curr = intervals[i];
            // res 中最后一个元素的引用
            int[] last = res.get(res.size() - 1);

            if (curr[0] <= last[1]) {
                // 找到最大的 end
                last[1] = Math.max(last[1], curr[1]);
            } else {
                res.add(curr);
            }
        }

        int[][] ret = new int[res.size()][2];

        for (int i = 0; i < res.size(); i++) {
            ret[i][0] = res.get(i)[0];
            ret[i][1] = res.get(i)[1];
        }

        return ret;
    }
}
