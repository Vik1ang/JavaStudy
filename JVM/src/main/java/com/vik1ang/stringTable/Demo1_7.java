package com.vik1ang.stringTable;

public class Demo1_7 {
    public static void main(String[] args) {
        int i = 0;
        try {
            for (int j = 0; j < 20000; j++) {
                String.valueOf(j).intern();
                i++;
            }
            
        } catch (Throwable e) {
            e.printStackTrace();
        }finally {
            System.out.println(i);
        }
    }
}
