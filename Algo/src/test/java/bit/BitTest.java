package bit;

import org.junit.jupiter.api.Test;

public class BitTest {
    @Test
    public void printOddItemsNum1() {
        int[] arr = {2, 1, 3, 1, 3, 1, 3, 2, 1};
        int eor = 0;
        for (int cur : arr) {
            eor ^= cur;
        }
        System.out.println(eor);
    }

    @Test
    public void printOddItemsNum2() {
        int[] arr = {2, 1, 3, 1, 3, 1, 3, 2, 1, 5};
        int eor = 0;
        for (int cur : arr) {
            eor ^= cur;
        }
        // eor = a ^ b
        // eor != 0
        // eor 必然有一个位置上是1
        int rightOne = eor & (~eor + 1); // 选择出最右边的1
        int onlyOne = 0; // eor'
        for (int cur : arr) {
            if ((cur & rightOne) == 0) {
                onlyOne ^= cur;
            }
        }
        // onlyOne = a || b
        // eor ^ onlyOne = 另一个数
        System.out.println(onlyOne + " " + (eor ^ onlyOne));
    }
}
