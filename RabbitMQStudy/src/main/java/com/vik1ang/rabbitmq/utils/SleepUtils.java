package com.vik1ang.rabbitmq.utils;

import java.util.concurrent.TimeUnit;

public class SleepUtils {
    public static void sleep(int second) {
        try {
            Thread.sleep(1000L * second);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
