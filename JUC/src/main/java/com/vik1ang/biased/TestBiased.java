package com.vik1ang.biased;

import lombok.extern.slf4j.Slf4j;
import org.openjdk.jol.info.ClassLayout;

@Slf4j(topic = "c.TestBiased")
public class TestBiased {
    public static void main(String[] args) throws InterruptedException {
        Dog dog = new Dog();

        new Thread(() -> {
            log.debug(ClassLayout.parseInstance(dog).toPrintable());

            synchronized (dog) {
                log.debug(ClassLayout.parseInstance(dog).toPrintable());
            }
            log.debug(ClassLayout.parseInstance(dog).toPrintable());

            synchronized (TestBiased.class) {
                TestBiased.class.notify();
            }
        }, "t1").start();

        new Thread(() -> {

            synchronized (TestBiased.class) {
                try {
                    TestBiased.class.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            log.debug(ClassLayout.parseInstance(dog).toPrintable());

            synchronized (dog) {
                log.debug(ClassLayout.parseInstance(dog).toPrintable());
            }
            log.debug(ClassLayout.parseInstance(dog).toPrintable());
        }, "t2").start();

    }
}


class Dog {

}