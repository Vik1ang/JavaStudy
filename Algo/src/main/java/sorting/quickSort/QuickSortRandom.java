package sorting.quickSort;

public class QuickSortRandom {
    public void quickSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        quickProcess(arr, 0, arr.length - 1);
    }

    public void quickProcess(int[] arr, int L, int R) {
        if (L >= R) return;
        swap(arr, L, L + (int) (Math.random() * (R - L + 1))); //随机选取一个pivot
        int p = partition(arr, L, R);
        quickProcess(arr, L, p - 1);
        quickProcess(arr, p + 1, R);
    }

    /*
     对 arr[L..R]部分进行partition操作
     返回p, 使得 arr[L..p-1] < arr[p], arr[p+1..R] > arr[p]
     */
    private int partition(int[] arr, int L, int R) {
        // 直接选取 arr[L]作为pivot(中心点)
        int key = arr[L];
        int pivot = L;
        for (int i = L + 1; i <= R; i++) {
            if (arr[i] < key) {
                swap(arr, i, ++pivot);
            }
        }
        swap(arr, pivot, L); // 将arr[L]放到pivot位置(中间) -> 完全了按照arr[L]划分数组的目的
        return pivot;
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
