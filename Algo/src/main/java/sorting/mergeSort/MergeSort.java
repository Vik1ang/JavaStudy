package sorting.mergeSort;

public class MergeSort {
    public void mergerSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        mergeProcess(arr, 0, arr.length - 1);
    }

    private void mergeProcess(int[] arr, int L, int R) {
        if (L >= R) {
            return; // 递归条件判断
        }
        int mid = L + ((R - L) >> 1);
        mergeProcess(arr, L, mid); // T(n/2)
        mergeProcess(arr, mid + 1, R); // T(n/2)
        // 这是一个优化，因为arr[L,mid]和arr[mid+1,R]已经有序，所以如果满足这个条件，就不要排序，防止一开始数组有序
        if (arr[mid] > arr[mid + 1]) {
            merge(arr, L, mid, R);
        }
    }

    private void merge(int[] arr, int L, int mid, int R) {
        int[] help = new int[R + 1];
        int k = 0;
        int p1 = L, p2 = mid + 1;
        while (p1 <= mid && p2 <= R) {
            help[k++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]; // 左右边两边相等的话，就先拷贝左边的实现了稳定性
        }
        while (p1 <= mid) {
            help[k++] = arr[p1++]; // 左边剩余部分
        }
        while (p2 <= R) {
            help[k++] = arr[p2++]; // 右边剩余部分
        }
        for (int i = 0; i < k; i++) {
            arr[i + L] = help[i]; // 拷贝回原数组
        }
    }
}
