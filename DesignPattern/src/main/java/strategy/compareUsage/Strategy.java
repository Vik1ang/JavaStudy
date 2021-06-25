package strategy.compareUsage;

import java.util.Arrays;
import java.util.Comparator;

public class Strategy {
    public static void main(String[] args) {
        Integer[] data = {9, 1, 2, 8, 4, 3};

        // 说明
        // 1. 实现了Comparator接口, 匿名类对象 new Comparator<Integer>(){..}
        // 2. 对象new Comparator<>就是实现了策略接口的对象
        // 3. public int compare(Integer o1, Integer o2){} 指定了具体的处理方式
        Comparator<Integer> comparator = new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                if (o1 > o2) {
                    return 1;
                } else {
                    return -1;
                }
            }
        };

        /**
         * public static <T> void sort(T[] a, Comparator<? super T> c) {
         *         if (c == null) {
         *             sort(a); // 默认方法
         *         } else {
         *             if (LegacyMergeSort.userRequested)
         *                 legacyMergeSort(a, c); // 使用策略对象c
         *             else
         *                 TimSort.sort(a, 0, a.length, c, null, 0, 0);
         *         }
         *     }
         */

        // method1
        Arrays.sort(data, comparator);
        System.out.println(Arrays.toString(data));


        // method2
        data = new Integer[]{19, 11, 12, 18, 14, 13};
        Arrays.sort(data, (o1,o2) -> {
            if (o1.compareTo(o2) > 0) {
                return 1;
            } else {
                return -1;
            }
        });

        System.out.println(Arrays.toString(data));

    }
}
