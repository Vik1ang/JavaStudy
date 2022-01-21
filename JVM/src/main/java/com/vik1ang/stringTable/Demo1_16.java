package com.vik1ang.stringTable;

import java.util.ArrayList;
import java.util.List;

public class Demo1_16 {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        int i = 0;
        try {
            for (int j = 0; j < 260000; j++) {
                list.add(String.valueOf(j).intern());
                i++;
            }
        } catch (Throwable e) {
            e.printStackTrace();
        }finally {
            System.out.println(i);
        }
    }
}
