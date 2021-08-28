package sorting.bubbleSort;

public class BubbleSortCocktail {
    // 定向冒泡排序
    // 它的改进在于同时的冒泡两边，从低到高，然后从高到低
    // 相当于顺便把最小的数也冒泡到最前面这个方法比冒泡更加高效一点
    public void bubbleSort(int[] arr) {
        int L = 0,R = arr.length-1;
        while(L < R) {
            for(int i = L; i < R; i++) if(arr[i] > arr[i+1]) swap(arr,i,i+1);
            R--;
            for(int i = R; i > L; i--) if(arr[i] < arr[i-1]) swap(arr,i,i-1);
            L++;
        }
    }

    private void swap(int[] arr, int i, int j) {
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j];
        arr[i] = arr[i] ^ arr[j];
    }
}
