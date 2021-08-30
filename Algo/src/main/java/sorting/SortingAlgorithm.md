# 排序算法总结

> 参考资料: https://github.com/ZXZxin/ZXBlog/tree/master/Algorithm/DataStructure/Algorithm/Sort

|        排序方法         | 平均情况 | 最好情况 | 最坏情况 |  空间复杂度  | 稳定性 |
| :---------------------: | :------: | :------: | :------: | :----------: | :----: |
|  冒泡排序 Bubble Sort   |   O(n)   |   O(n)   |  O(n^2)  |     O(1)     |  稳定  |
| 选择排序 Selection Sort |  O(n^2)  |  O(n^2)  |  O(n^2)  |     O(1)     | 不稳定 |
| 插入排序 Insertion Sort |  O(n^2)  |   O(n)   |  O(n^2)  |     O(1)     |  稳定  |
|         堆排序          | O(nlogn) | O(nlogn) | O(nlogn) |     O(1)     | 不稳定 |
|        归并排序         | O(nlogn) | O(nlogn) | O(nlogn) |     O(n)     |  稳定  |
|        快速排序         | O(nlogn) | O(nlogn) |  O(n^2)  | O(logn)~O(n) | 不稳定 |

## 1. 冒泡排序 Bubble Sort

### 1.1 正常冒泡排序

+ 进行`n-1`次比较
+ 每次排序从`0~n-1-i`(`i`是次数), 检查这个序列中的数, 两两相邻的数, 使得大的数往后面走

```java

public class BubbleSort {
    
    public void bubbleSort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        for (int i = arr.length - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
            }
        }
    }

    private void swap(int[] arr, int i, int j) {
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j];
        arr[i] = arr[i] ^ arr[j];
    }
}

```

### 1.2 冒泡排序改进-鸡尾酒排序

定向冒泡排序

+ 同时冒泡两边, 从低到高, 然后从高到低
+ 相当于顺便把最小的数冒泡到最前面
+ 稍微高效**一点**

```java

public class BubbleSortCocktail {
    
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


```
