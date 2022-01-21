package com.vik1ang.stringTable;

public class Demo23 {
    public static void main(String[] args) {
        String x = "ab";
        String s = new String("a") + new String("b");
        String s2 = s.intern();
        System.out.println(s2 == x);
        System.out.println(s == x);
    }
}
