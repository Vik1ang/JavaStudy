package sorting.selectionSort;

public class SelectionSort {
    public void selectionSort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        // i ~ N - 1
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            // i ~ N - 1
            for (int j = i + 1; j < arr.length; j++) {
                minIndex = arr[j] < arr[minIndex] ? j : minIndex;
            }
            swap(arr, i, minIndex);
        }
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
