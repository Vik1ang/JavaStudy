package sorting.quickSort;

public class QuickSortTwoWay {
    // 解决重复元素多的问题
    // 将 >key 和 <key的元素放在数组的两边, 更准确的说是: 左端放的<=key的元素, 右端放的>=key的元素
    // 然后设置两个指针(一个从L开始, 一个从R开始), 然后向中间靠拢, 分别找到第一个>=key(左边), <=key(右边)元素,就停止扫描, 然后交换位置
    // 终止条件是两个指针相碰
    // 为什么这样就可以解决重复元素多的问题呢? 因为两个指针的元素相等且都等于key的时候，还是要交换两个位置，这样就不会将重复的元素集中在同一侧
    public void quickSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        quickProcess(arr, 0, arr.length - 1);
    }

    private void quickProcess(int[] arr, int L, int R) {
        if (L >= R) {
            return;
        }
        swap(arr, L, L + (int) (Math.random() * (R - L + 1))); //随机选取一个pivot
        int p = partition(arr, L, R);
        quickProcess(arr, L, p - 1);
        quickProcess(arr, p + 1, R);
    }

    private int partition(int[] arr, int L, int R) {
        int key = arr[L];
        int less = L + 1, more = R;
        while (true) {
            while (less < R && arr[less] < key) less++;
            while (more > L && arr[more] > key) more--;
            if (less >= more)// not less > more
                break;
            swap(arr, less++, more--);
        }
        swap(arr, L, more); // finally let L to the middle
        return more;
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}
