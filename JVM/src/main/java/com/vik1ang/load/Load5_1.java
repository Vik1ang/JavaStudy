package com.vik1ang.load;

public class Load5_1 {
    public static void main(String[] args) throws ClassNotFoundException {
        Class<?> aClass = Class.forName("com.vik1ang.load.F");
        System.out.println(aClass.getClassLoader());
    }
}
