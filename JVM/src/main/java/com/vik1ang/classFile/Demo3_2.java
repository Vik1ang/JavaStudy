package com.vik1ang.classFile;

public class Demo3_2 {
    public static void main(String[] args) {
        int a = 10;
        int b = a++ + ++a + a--; // 10 + 12 + 12
        System.out.println(a);
        System.out.println(b);
    }
}
