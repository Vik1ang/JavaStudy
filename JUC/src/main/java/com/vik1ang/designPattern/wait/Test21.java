package com.vik1ang.designPattern.wait;

import cn.hutool.core.thread.ThreadUtil;
import com.vik1ang.designPattern.GuardedObject;
import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "c.Test21")
public class Test21 {
    public static void main(String[] args) {
        GuardedObject guardedObject = new GuardedObject();
        new Thread(() -> {
            log.debug("begin");
            Object response = guardedObject.get(2000);
            log.debug("{}", response);
        }, "t1").start();

        new Thread(() -> {
            log.debug("begin");
            ThreadUtil.sleep(1000);
            guardedObject.complete(null);
        }, "t2").start();
    }
}
