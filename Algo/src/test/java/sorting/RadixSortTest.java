package sorting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import sorting.radixSort.RadixSort;

import java.util.Arrays;
import java.util.Random;

public class RadixSortTest {

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

    @AfterEach
    public void printArray() {
        System.out.println("After: " + Arrays.toString(arr));
    }

    @Test
    public void testRadixSort() {
        new RadixSort().radixSort(arr);
    }
}
