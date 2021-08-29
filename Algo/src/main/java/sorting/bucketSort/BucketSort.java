package sorting.bucketSort;

import java.util.Arrays;

public class BucketSort {
    public static final int bucketNum = 1000;

    public void bucketSort(int[] arr) {
        int[] count = new int[bucketNum]; // 计数数组，存放桶的边界信息
        int[] tmp = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            count[mapToBucket(arr[i])]++; // count[i]保存着i号桶中元素的个数
        }

        // 定位桶边界初始时，count[i]-1(下标从0开始)为i号桶最后一个元素的位置
        for (int i = 1; i < bucketNum; i++) {
            count[i] += count[i - 1];
        }

        // count[0]~count[9]
        for (int i = arr.length - 1; i >= 0; i--) {
            tmp[--count[mapToBucket(arr[i])]] = arr[i];
        }

        for (int i = 0; i < arr.length; i++) {
            arr[i] = tmp[i];
        }

        // 利用计数排序确定各个桶的边界（分桶）
        for (int i = 0; i < bucketNum; i++) {
            int L = count[i];     //count[i]为i号桶第一个元素的位置
            int R = (i == bucketNum - 1 ? arr.length - 1 : count[i + 1] - 1); //count[i+1]-1为i号桶最后一个元素的位置
            //for(int j = L; j <= R; j++)System.out.print( arr[j] + " "); System.out.println();  //print
            if (L < R)  //对每个桶里面进行排序
                Arrays.sort(arr, L, R + 1);//注意这里是R+1，系统库的sort的右边界是开区间
        }

    }

    //桶排序
    private int mapToBucket(int x) {   // 映射函数f(x)
        return x / bucketNum;
    }

}
