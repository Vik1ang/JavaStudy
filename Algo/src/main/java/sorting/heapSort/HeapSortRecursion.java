package sorting.heapSort;

public class HeapSortRecursion {
    public void heapSort(int[] arr) {
        if (arr == null || arr.length <= 1) return;
        int size = arr.length - 1;
        for (int i = (size - 1) / 2; i >= 0; i--)
            shiftDown(arr, i, size + 1);// 注意这里是size+1,因为这个不是交换了最后一个，所以要考虑arr[size]，下面不要考虑arr[size]
        swap(arr, 0, size);//和最后一个数交换
        while (size > 0) {
            shiftDown(arr, 0, size);
            swap(arr, 0, --size);
        }
    }

    //递归的调整A[i]以下的堆
    private void shiftDown(int[] arr, int i, int size) { //从A[i] 开始往下调整
        int L = 2 * i + 1; //左孩子的下标
        int R = 2 * i + 2;//右孩子的下标
        int maxIdx = i;
        if (L < size && arr[L] > arr[maxIdx]) maxIdx = L;
        if (R < size && arr[R] > arr[maxIdx]) maxIdx = R;
        if (maxIdx != i) {
            swap(arr, i, maxIdx);  //把当前结点和它的最大(直接)子节点进行交换
            shiftDown(arr, maxIdx, size);  //继续调整它的孩子
        }
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
