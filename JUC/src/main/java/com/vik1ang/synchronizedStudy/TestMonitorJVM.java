package com.vik1ang.synchronizedStudy;

public class TestMonitorJVM {
    static final Object lock = new Object();
    static int counter = 0;

    public static void main(String[] args) {
        synchronized (lock) {
            counter++;
        }
    }
}
