package search;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


public class BinarySearchTest {

    @Test
    public void testBinarySearchCloseInterval() {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(new BinarySearch().binarySearchCloseInterval(arr, 2));
    }

    @Test
    public void testBinarySearchOpenInterval() {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(new BinarySearch().binarySearchOpenInterval(arr, 2));
    }

    @Test
    public void testBinarySearchGetFirstEqual() {
        int[] arr = {1, 3, 4, 6, 6, 6, 6, 6, 6, 6, 6, 8, 9};
        System.out.println(new BinarySearch().binarySearchGetFirstEqual(arr, 6));
    }

    @Test
    public void testBinarySearchGetFirstGreaterEqual() {
        int[] arr = {1, 3, 4, 6, 6, 6, 6, 6, 6, 6, 6, 8, 9};
        System.out.println(new BinarySearch().binarySearchGetFirstGreaterEqual(arr, 8));
    }

    @Test
    public void testBinarySearchGetFirstGreater() {
        int[] arr = {1, 3, 4, 6, 6, 6, 6, 6, 6, 8, 9};
        System.out.println(new BinarySearch().binarySearchGetFirstGreater(arr, 6));
    }

    @Test
    public void testBinarySearchGetLastEqual() {
        int[] arr = {1, 3, 4, 6, 6, 6, 6, 6, 6, 8, 9};
        System.out.println(new BinarySearch().binarySearchGetLastEqual(arr, 6));
    }

    @Test
    public void testBinarySearchGetLastLessEqual() {
        int[] arr = {1, 3, 4, 6, 6, 6, 6, 6, 6, 8, 9};
        System.out.println(new BinarySearch().binarySearchGetLastLessEqual(arr, 7));
    }

    @Test
    public void testBinarySearchGetLastLess() {
        int[] arr = {1, 3, 4, 6, 6, 6, 6, 6, 6, 8, 9};
        System.out.println(new BinarySearch().binarySearchGetLastLess(arr, 6));
    }

}
