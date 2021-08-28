package sorting.insertionSort;

public class InsertionSort {
    public void insertionSort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        // 0 ~ 0 有序
        // 0 ~ i 想有序
        for (int i = 1; i < arr.length; i++) { // 0 ~ i
            for (int j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
                swap(arr, j, j + 1);
            }
        }
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
