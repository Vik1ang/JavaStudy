package dp.q265.minCostII;

// https://leetcode-cn.com/problems/paint-house-ii/

public class Solution1 {
    public int minCostII(int[][] costs) {

        if (costs.length == 0) {
            return 0;
        }

        int n = costs.length;
        int k = costs[0].length;

        for (int i = n - 2; i >= 0 ; i--) {
            for (int j = 0; j < k; j++) {
                int min = Integer.MAX_VALUE;
                for (int l = 0; l < k; l++) {
                    if (l == j) {
                        continue;
                    }
                    min = Math.min(min, costs[i + 1][l]);
                }
                costs[i][j] += min;
            }
        }

        int res = Integer.MAX_VALUE;
        for (int i = 0; i < k; i++) {
            res = Math.min(res, costs[0][i]);
        }

        return res;
    }
}
