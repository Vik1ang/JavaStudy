# 排序算法总结

> 参考资料: 
> https://github.com/ZXZxin/ZXBlog/tree/master/Algorithm/DataStructure/Algorithm/Sort
> https://visualgo.net/en/sorting
> http://www.rmboot.com/ComparisonSort.html

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

## 2. 选择排序 Selection Sort

+ 在序列中找到最小(大)元素, 放到序列的起始位置作为**已排序序列**
+ 在从剩余未排序元素中继续寻找最小(大)元素, 放到**已排序序列的末尾**

```java

public class SelectionSort {
    public void selectionSort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        // i ~ N - 1
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i; // 最小值下标
            // i ~ N - 1
            for (int j = i + 1; j < arr.length; j++) { // 注意从i+1开始
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

```

## 3. 插入排序 Insertion Sort

### 3.1 普通插入排序

+ 从第一个元素开始, 该元素可以看作已经排好序
+ 取出下一元素, 从这个元素从后往前开始扫描, 如果该元素大于新元素, 将该元素移动到下一个位置
+ 重复上述步骤, 直到找到已排序的元素小于或者等于新元素的位置，将新元素插入到该位置后
+ **插入排序在工程上，当数组元素个数少的时候用的多，因为如果数组比较有序的话，会很快**

```java

public class InsertionSort {
    public void insertionSort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        // 0 ~ 0 有序
        // 0 ~ i 想有序
        for (int i = 1; i < arr.length; i++) { // 0 ~ i
            // 中间的元素往后面移动
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


```

### 3.2 二分插入排序

+ 前面已经排好序的序列中找当前要插入的元素的时候采用二分查找的方式去找那个插入的位置(大于key的那个位置)
+ 找到那个位置之后，再进行元素的移动，已及把那个元素插入到找到的那个位置

```java

public class InsertionSortBinary {
    public void insertionSort(int[] arr) {
        for(int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int L = 0, R = i-1;
            while(L <= R) {
                int mid = L + (R-L)/2;
                if(arr[mid] > key)R = mid - 1;
                else L = mid + 1;
            }
            //二分结束之后　L = 刚好大于key(不是等于)的那个位置

            for(int j = i-1; j >= L; j--)arr[j+1] = arr[j];
            arr[L] = key;
        }
    }
}


```


## 4. 快速排序 Quick Sort

### 4.1 简单快速排序

+ 在`[L,R]`之间, 选取`arr[L]`为划分点
+ 然后从`[L,R]`, 如果当前`arr[i] < key`, 就放到左边部分`swap(arr, i, ++pivot)`, 否则就不动
+ 最后将数组划分为 `arr[L..p-1] < arr[p]` , `arr[p+1..R] > arr[p]`, 并返回`p`

```java

public class QuickSortNormal {
    public void quickSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        quickProcess(arr, 0, arr.length - 1);
    }

    private void quickProcess(int[] arr, int L, int R) {
        if (L >= R) {
            return;
        }
        int p = partition(arr, L, R);
        quickProcess(arr, L, p - 1);
        quickProcess(arr, p + 1, R);
    }

    /*
     对 arr[L..R]部分进行partition操作
     返回p, 使得 arr[L..p-1] < arr[p], arr[p+1..R] > arr[p]
     */
    private int partition(int[] arr, int L, int R) {
        // 直接选取 arr[L]作为pivot(中心点)
        int key = arr[L];
        int pivot = L;
        for (int i = L + 1; i <= R; i++) {
            if (arr[i] < key) {
                swap(arr, i, ++pivot);
            }
        }
        swap(arr, pivot, L); // 将arr[L]放到pivot位置(中间) -> 完全了按照arr[L]划分数组的目的
        return pivot;
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

```

### 4.2 随机快排

解决划分数选取不好的问题

普通快速排序当选取划分的元素很小或者很大, 使得后面划分极度的不平衡的时候, 会将快速排序时间复杂度降到`O(N^2)`, 用随机快排随机选取一个元素作为`pivot`

```java

public class QuickSortRandom {
    public void quickSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        quickProcess(arr, 0, arr.length - 1);
    }

    public void quickProcess(int[] arr, int L, int R) {
        if (L >= R) return;
        swap(arr, L, L + (int) (Math.random() * (R - L + 1))); //随机选取一个pivot
        int p = partition(arr, L, R);
        quickProcess(arr, L, p - 1);
        quickProcess(arr, p + 1, R);
    }

    /*
     对 arr[L..R]部分进行partition操作
     返回p, 使得 arr[L..p-1] < arr[p], arr[p+1..R] > arr[p]
     */
    private int partition(int[] arr, int L, int R) {
        // 直接选取 arr[L]作为pivot(中心点)
        int key = arr[L];
        int pivot = L;
        for (int i = L + 1; i <= R; i++) {
            if (arr[i] < key) {
                swap(arr, i, ++pivot);
            }
        }
        swap(arr, pivot, L); // 将arr[L]放到pivot位置(中间) -> 完全了按照arr[L]划分数组的目的
        return pivot;
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

```

### 4.3 双路快速排序(解决重复元素多的问题)

当我们要排序的数组重复元素很多的情况下, 会使得划分极其的不均匀

换一个解决方式

+ 将`<key`和`>key`的元素放在数组的两边, 更准确的说是: 左端放的是`<=key`的元素, 右端放的是`>=key`的元素
+ 然后设置两个指针(一个从`L`开始, 一个从`R`开始), 然后向中间靠拢, 分别找到第一个`>=key`(左边), `<=key`(右边)的元素, 停止扫描, 然后交换位置, 终止条件是两个指针相碰
+ 两个指针的元素相等且都等于`key`的时候，还是要交换两个位置，这样就不会将重复的元素集中在同一侧

```java

public class QuickSortTwoWay {
    public void quickSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        quickProcess(arr, 0, arr.length - 1);
    }

    private void quickProcess(int[] arr, int L, int R) {
        if (L >= R) {
            return;
        }
        swap(arr, L, L + (int) (Math.random() * (R - L + 1))); //随机选取一个pivot
        int p = partition(arr, L, R);
        quickProcess(arr, L, p - 1);
        quickProcess(arr, p + 1, R);
    }

    private int partition(int[] arr, int L, int R) {
        int key = arr[L];
        int less = L + 1, more = R;
        while (true) {
            while (less < R && arr[less] < key) less++;
            while (more > L && arr[more] > key) more--;
            if (less >= more)// not less > more
                break;
            swap(arr, less++, more--);
        }
        swap(arr, L, more); // finally let L to the middle
        return more;
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}


```

### 4.4 三路快速排序

更好的解决重复元素多的问题

将一个数组按照某个数划分成三个部分

+ 先从序列中选取一个数作为基数(key)
+ 分区过程, 将`<key`放到左边, `>key`的放在右边, `=key`的放在中间
+ 再对左右区间重复第二步, 直到各区间只有一个数
+ 返回的`p`数组中`p[0]`代表的是等于区域的左边界, `p[1]`代表的是等于区域的右边界

```java

public class QuickSortThreeWay {
    
    public void quickSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        quickProcess(arr, 0, arr.length - 1);
    }

    private void quickProcess(int[] arr, int L, int R) {
        if (L >= R)
            return;
        /**随机化的排序 期望为Ologn从前面的数中随机选出一个数和最后一个数交换 不至于极端的情况使得两边划分很不对称*/
        swap(arr, R, L + (int) (Math.random() * (R - L + 1))); //例子3~6 --> [0~1)*3 --> 0~2
        int[] p = partition4(arr, L, R); // 分别用partition、partition2、partition3测试都可以
        quickProcess(arr, L, p[0] - 1);
        quickProcess(arr, p[1] + 1, R);
    }

    /**
     * 划分函数,这里使用的是arr[R]来划分, 左边的都比arr[R]小，右边都比arr[R]大
     * 返回的数组是中间相等的两个下标
     */
    private int[] partition(int[] arr, int L, int R) {
        int cur = L, less = L - 1, more = R;
        int key = arr[R];
        while (cur < more) {
            if (arr[cur] < key)
                swap(arr, ++less, cur++);
            else if (arr[cur] > key)
                swap(arr, --more, cur);
            else
                cur++;
        }
        swap(arr, more, R);  //把最后那个数放到中间
        return new int[]{less + 1, more};  //当然如果没有相等的部分  那less+1 = more
    }

    /**
     * 上面的简写方式
     **/
    private int[] partition2(int[] arr, int L, int R) {
        int less = L - 1, more = R;  //把最后这个数当作标准 也可以使用第一个
        while (L < more) {
            if (arr[L] < arr[R])
                swap(arr, ++less, L++);
            else if (arr[L] > arr[R])
                swap(arr, --more, L);
            else
                L++;
        }
        swap(arr, more, R);  //把最后那个数放到中间
        return new int[]{less + 1, more};  //为什么不是 more-1,因为上面又交换了一个, 当然如果没有相等的部分  那less+1 = more
    }

    /**
     * 正方向：按照 arr[L]来划分
     **/
    private int[] partition3(int[] arr, int L, int R) {
        int key = arr[L], cur = L + 1;
        int less = L, more = R + 1; // more在外面(R+1)，等下循环cur < more
        while (cur < more) {
            if (arr[cur] < key)
                swap(arr, ++less, cur++);
            else if (arr[cur] > key)
                swap(arr, --more, cur);
            else cur++;
        }
        swap(arr, L, less);
        return new int[]{less, more - 1};
    }

    /**
     * 对比partition3的不同
     **/
    private int[] partition4(int[] arr, int L, int R) {
        int key = arr[L], cur = L + 1;
        int less = L, more = R; // more = R，等下循环cur <= more
        while (cur <= more) { // not cur < more
            if (arr[cur] < key)
                swap(arr, ++less, cur++);
            else if (arr[cur] > key)
                swap(arr, more--, cur); // 对比上面,不是--more,这些就是边界问题
            else cur++;
        }
        swap(arr, L, less);
        return new int[]{less, more}; //同样返回的也不同
    }


    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }


}

```


## 5. 归并排序 Merge Sort

### 5.1 普通归并排序

归并排序是分治法一个很好的应用, 先递归到最底层, 然后从下往上每次两个序列进行归并合起来, 是一个由下往上分开, 再由下往上合并的过程

每一次`merge`的过程:

+ 准备一个额外的数组`help`, 使其大小为两个已经排序序列之和, 该空间用来存放合并后的序列
+ 设定两个指针, 最初位置分别为两个已经排序序列的起始位置
+ 比较两个指针所指向的元素, 选择相对小的元素放入到合并空间, 并移动指针到下一个位置
+ 重复步骤3直到某一指针达到序尾
+ 将另一序列剩下的所有元素直接复制到合并序列尾

```java

public class MergeSort {
    public void mergerSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        mergeProcess(arr, 0, arr.length - 1);
    }

    private void mergeProcess(int[] arr, int L, int R) {
        if (L >= R) {
            return; // 递归条件判断
        }
        int mid = L + ((R - L) >> 1);
        mergeProcess(arr, L, mid); // T(n/2)
        mergeProcess(arr, mid + 1, R); // T(n/2)
        // 这是一个优化，因为arr[L,mid]和arr[mid+1,R]已经有序，所以如果满足这个条件，就不要排序，防止一开始数组有序
        if (arr[mid] > arr[mid + 1]) {
            merge(arr, L, mid, R);
        }
    }

    private void merge(int[] arr, int L, int mid, int R) {
        int[] help = new int[R + 1];
        int k = 0;
        int p1 = L, p2 = mid + 1;
        while (p1 <= mid && p2 <= R) {
            help[k++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]; // 左右边两边相等的话，就先拷贝左边的实现了稳定性
        }
        while (p1 <= mid) {
            help[k++] = arr[p1++]; // 左边剩余部分
        }
        while (p2 <= R) {
            help[k++] = arr[p2++]; // 右边剩余部分
        }
        for (int i = 0; i < k; i++) {
            arr[i + L] = help[i]; // 拷贝回原数组
        }
    }
}

```