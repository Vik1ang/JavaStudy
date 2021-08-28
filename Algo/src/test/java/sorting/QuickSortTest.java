package sorting;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import sorting.quickSort.QuickSortNormal;
import sorting.quickSort.QuickSortRandom;
import sorting.quickSort.QuickSortThreeWay;
import sorting.quickSort.QuickSortTwoWay;

import java.util.Arrays;
import java.util.Random;

public class QuickSortTest {

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
    public void testQuickSortNormal() {
        new QuickSortNormal().quickSort(arr);
        System.out.println("After: " + Arrays.toString(arr));
    }

    @Test
    public void testQuickSortRandom() {
        new QuickSortRandom().quickSort(arr);
        System.out.println("After: " + Arrays.toString(arr));
    }

    @Test
    public void testQuickSortTwoWay() {
        new QuickSortTwoWay().quickSort(arr);
        System.out.println("After: " + Arrays.toString(arr));
    }

    @Test
    public void testQuickSortThreeWay() {
        new QuickSortThreeWay().quickSort(arr);
        System.out.println("After: " + Arrays.toString(arr));
    }
}
