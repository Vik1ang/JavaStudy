package sorting.heapSort;

import java.util.Comparator;
import java.util.PriorityQueue;

public class HeapSortPriorityQueue {
    public void heapSortAsc(int[] arr) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        for (int i : arr) {
            priorityQueue.add(i);
        }
        for (int i = 0; i < arr.length; i++) {
            arr[i] = priorityQueue.poll();
        }
    }

    public void heapSortDesc(int[] arr) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>((o1, o2) -> o2.compareTo(o1));
        for (int i : arr) {
            priorityQueue.add(i);
        }
        for (int i = 0; i < arr.length; i++) {
            arr[i] = priorityQueue.poll();
        }


    }
}
