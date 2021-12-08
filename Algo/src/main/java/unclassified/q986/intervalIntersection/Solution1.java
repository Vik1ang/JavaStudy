package unclassified.q986.intervalIntersection;

// https://leetcode-cn.com/problems/interval-list-intersections/

import java.util.ArrayList;

public class Solution1 {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
        int i = 0, j = 0;

        ArrayList<int[]> arrayList = new ArrayList<>();

        while (i < firstList.length && j < secondList.length) {
            int a1 = firstList[i][0];
            int a2 = firstList[i][1];
            int b1 = secondList[j][0];
            int b2 = secondList[j][1];

            // 两个区间存在交集
            if (b2 >= a1 && a2 >= b1) {
                // 计算出交集，加入 res
                arrayList.add(new int[]{Math.max(a1, b1), Math.min(a2, b2)});
            }
            // 指针前进
            if (b2 < a2) {
                j += 1;
            } else {
                i += 1;
            }
        }

        int[][] res = new int[arrayList.size()][2];

        for (int k = 0; k < arrayList.size(); k++) {
            res[k][0] = arrayList.get(k)[0];
            res[k][1] = arrayList.get(k)[1];
        }

        return res;
    }
}
