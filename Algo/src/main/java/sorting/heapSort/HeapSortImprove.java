package sorting.heapSort;

public class HeapSortImprove {
    // 下沉的操作(这里建堆的时候没有使用上浮，而是从第一个非叶子结点开始使用下沉的方式建堆)
    public void heapSort(int[] arr) {
        if (arr == null || arr.length <= 1) return;
        int size = arr.length - 1;
        for (int i = (size - 1) / 2; i >= 0; i--)
            shiftDown(arr, i, size+1);// 注意这里是size+1,因为这个不是交换了最后一个，所以要考虑arr[size]，下面不要考虑arr[size]
        swap(arr, 0, size);
        while (size > 0) {
            shiftDown(arr, 0, size);
            swap(arr, 0, --size);
        }
    }

    /**
     * 往下沉的函数,改变的数为index  目前的自己指定的堆的大小为heapSize
     */
    private void shiftDown(int[] arr, int i, int heapSize) {
        int L = 2 * i + 1;
        while (L < heapSize) {
            int maxIdx = L + 1 < heapSize && arr[L + 1] > arr[L] ? L + 1 : L;
            maxIdx = arr[i] > arr[maxIdx] ? i : maxIdx;
            if (maxIdx == i) break; //自己就是最大的， 不用忘下沉

            swap(arr, i, maxIdx);
            i = maxIdx;
            L = 2 * i + 1; //继续往下
        }
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}
