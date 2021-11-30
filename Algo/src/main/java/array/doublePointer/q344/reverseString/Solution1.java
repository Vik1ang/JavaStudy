package array.doublePointer.q344.reverseString;

// https://leetcode-cn.com/problems/reverse-string/

public class Solution1 {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;

        while (left < right) {
            // 交换 arr[left] 和 arr[right]
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
}
