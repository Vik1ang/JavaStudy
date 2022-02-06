package com.vik1ang.synchronizedStudy;

import cn.hutool.core.thread.ThreadUtil;
import lombok.extern.slf4j.Slf4j;

import java.util.concurrent.TimeUnit;

@Slf4j()
public class Test8Locks {
    public static void main(String[] args) {
        Number number = new Number();
        new Thread(() -> {
            log.debug("begin");
            number.a();
        }, "t1").start();
        new Thread(() -> {
            log.debug("begin");
            number.b();
        }, "t2").start();
        new Thread(() -> {
            log.debug("begin");
            number.c();
        }, "t3").start();
    }
}

@Slf4j(topic = "c.Number")
class Number {
    public synchronized void a() {
        ThreadUtil.sleep(1000);
        log.debug("a");
    }

    public synchronized void b() {
        log.debug("b");
    }

    public void c() {
        log.debug("c");
    }
}
