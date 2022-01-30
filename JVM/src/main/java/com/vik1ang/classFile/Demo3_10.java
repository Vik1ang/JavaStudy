package com.vik1ang.classFile;

import java.io.IOException;

public class Demo3_10 {
    public static void main(String[] args) throws IOException {
        test(new Cat());
        test(new Dog());
        System.in.read();
    }

    private static void test(Animal animal) {
        animal.eat();
        System.out.println(animal.toString());
    }
}
