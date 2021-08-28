package sorting;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import sorting.mergeSort.MergeSort;

import java.util.Arrays;
import java.util.Random;

public class MergeSortTest {
    private int[] arr;

    @BeforeEach
    public void initArray() {
        Random random = new Random();
        arr = new int[100];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = random.nextInt(1000);
        }
        System.out.println("Before: " + Arrays.toString(arr));
    }

    @Test
    public void testMergeSort1() {
        new MergeSort().mergerSort(arr);
        System.out.println("After: " + Arrays.toString(arr));
    }
}
